import { useState, useMemo, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { competitors } from "../../data/competitors";
import {
  loadValidations, saveValidations, setFieldStatus, getFieldStatus,
  getCompNotes, setCompNotes,
  extractFields, computeValidationStats, exportValidations,
  type ValidationStore, type FieldValidation,
} from "./validationStore";
import { FieldRow } from "./FieldRow";

type Filter = "all" | "pending" | "verified" | "flagged";

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function ValidationPage() {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const [store, setStore] = useState<ValidationStore>(loadValidations);
  const [filter, setFilter] = useState<Filter>("all");
  const [verifyAllMode, setVerifyAllMode] = useState(false);

  const sorted = useMemo(() => [...competitors].sort((a, b) => a.name.localeCompare(b.name)), []);

  const currentIdx = useMemo(() => {
    if (!slug) return 0;
    const idx = sorted.findIndex(c => slugify(c.name) === slug);
    return idx >= 0 ? idx : 0;
  }, [slug, sorted]);

  const setCurrentIdx = useCallback((idxOrFn: number | ((prev: number) => number)) => {
    const idx = typeof idxOrFn === "function" ? idxOrFn(currentIdx) : idxOrFn;
    navigate(`/validate/${slugify(sorted[idx].name)}`, { replace: true });
  }, [currentIdx, sorted, navigate]);

  // Redirect to first competitor if no slug
  useEffect(() => {
    if (!slug && sorted.length > 0) {
      navigate(`/validate/${slugify(sorted[0].name)}`, { replace: true });
    }
  }, [slug, sorted, navigate]);

  const comp = sorted[currentIdx];
  const fields = useMemo(() => extractFields(comp), [comp]);
  const stats = useMemo(() => computeValidationStats(store, sorted), [store, sorted]);
  const compStats = stats.perCompetitor.find(s => s.name === comp.name)!;

  const filteredFields = useMemo(() => {
    if (filter === "all") return fields;
    return fields.filter(f => getFieldStatus(store, comp.name, f.key).status === filter);
  }, [fields, filter, store, comp.name]);

  const grouped = useMemo(() => {
    const groups: Record<string, typeof filteredFields> = {};
    for (const f of filteredFields) {
      (groups[f.group] ??= []).push(f);
    }
    return Object.entries(groups);
  }, [filteredFields]);

  const persist = useCallback((next: ValidationStore) => {
    setStore(next);
    saveValidations(next);
  }, []);

  const handleFieldChange = useCallback((fieldKey: string, val: FieldValidation) => {
    persist(setFieldStatus(store, comp.name, fieldKey, val));
  }, [store, comp.name, persist]);

  const handleVerifyAll = () => {
    let next = { ...store };
    for (const f of fields) {
      const current = getFieldStatus(next, comp.name, f.key);
      if (current.status === "pending") {
        next = setFieldStatus(next, comp.name, f.key, { status: "verified" });
      }
    }
    persist(next);
    setVerifyAllMode(false);
  };

  const handleNext = () => setCurrentIdx(i => Math.min(i + 1, sorted.length - 1));
  const handlePrev = () => setCurrentIdx(i => Math.max(i - 1, 0));

  const pct = stats.totalFields > 0 ? Math.round(((stats.verified + stats.flagged) / stats.totalFields) * 100) : 0;
  const compPct = compStats.total > 0 ? Math.round(((compStats.verified + compStats.flagged) / compStats.total) * 100) : 0;

  return (
    <>
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-text mb-2">Data Validation</h1>
        <p className="text-text-muted text-sm">
          Review each competitor's data field by field. Verify correct data, flag errors with corrections. Progress saves to localStorage.
        </p>
      </header>

      {/* Global progress */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <StatBox label="Total Fields" value={String(stats.totalFields)} />
        <StatBox label="Verified" value={String(stats.verified)} color="text-green-600" />
        <StatBox label="Flagged" value={String(stats.flagged)} color="text-red-600" />
        <StatBox label="Progress" value={`${pct}%`} />
      </div>

      {/* Global progress bar */}
      <div className="h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div className="h-full flex">
          <div className="bg-green-500 transition-all" style={{ width: `${(stats.verified / stats.totalFields) * 100}%` }} />
          <div className="bg-red-400 transition-all" style={{ width: `${(stats.flagged / stats.totalFields) * 100}%` }} />
        </div>
      </div>

      {/* Competitor navigator */}
      <div className="flex items-center gap-3 mb-4 border border-border rounded-lg p-3 bg-surface">
        <button onClick={handlePrev} disabled={currentIdx === 0} className="px-3 py-1.5 rounded bg-surface-hover text-text text-sm disabled:opacity-30">
          Prev
        </button>

        <select
          className="flex-1 px-3 py-1.5 border border-border rounded text-sm bg-white text-text"
          value={currentIdx}
          onChange={e => setCurrentIdx(Number(e.target.value))}
        >
          {sorted.map((c, i) => {
            const cs = stats.perCompetitor.find(s => s.name === c.name)!;
            const done = cs.verified + cs.flagged;
            const icon = done === cs.total ? " \u2705" : cs.flagged > 0 ? " \u26A0\uFE0F" : "";
            return (
              <option key={c.name} value={i}>
                {c.name} ({done}/{cs.total}){icon}
              </option>
            );
          })}
        </select>

        <button onClick={handleNext} disabled={currentIdx === sorted.length - 1} className="px-3 py-1.5 rounded bg-surface-hover text-text text-sm disabled:opacity-30">
          Next
        </button>

        <button onClick={() => exportValidations(store)} className="px-3 py-1.5 rounded bg-accent text-white text-sm hover:bg-accent-hover">
          Export JSON
        </button>
      </div>

      {/* Current competitor header */}
      <div className="border border-border rounded-lg p-4 mb-4 bg-surface">
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-text">{comp.name}</h2>
              <a href={comp.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:text-accent-hover underline">
                {comp.url.replace(/^https?:\/\/(www\.)?/, "")}
              </a>
            </div>
            <p className="text-xs text-text-muted">{comp.category} · T{comp.threat} · {comp.status}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-text-muted">
              {compStats.verified} verified · {compStats.flagged} flagged · {compStats.pending} pending
            </span>
            <span className="text-sm font-bold text-accent">{compPct}%</span>
          </div>
        </div>

        {/* Competitor progress bar */}
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full flex">
            <div className="bg-green-500 transition-all" style={{ width: `${(compStats.verified / compStats.total) * 100}%` }} />
            <div className="bg-red-400 transition-all" style={{ width: `${(compStats.flagged / compStats.total) * 100}%` }} />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex gap-1 text-[10px]">
            {(["all", "pending", "verified", "flagged"] as Filter[]).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2 py-1 rounded font-medium ${filter === f ? "bg-accent text-white" : "bg-surface-hover text-text-muted hover:text-text"}`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex-1" />

          {verifyAllMode ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-text-muted">Verify all pending fields?</span>
              <button onClick={handleVerifyAll} className="px-2 py-1 rounded bg-green-600 text-white text-[10px] font-medium">
                Confirm
              </button>
              <button onClick={() => setVerifyAllMode(false)} className="px-2 py-1 rounded bg-gray-100 text-gray-600 text-[10px]">
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setVerifyAllMode(true)}
              className="px-2 py-1 rounded bg-green-100 text-green-700 text-[10px] font-medium hover:bg-green-200"
            >
              Verify All Pending
            </button>
          )}
        </div>
      </div>

      {/* Side notes */}
      <div className="border border-border rounded-lg p-3 mb-4 bg-surface">
        <label className="text-xs font-semibold text-text-muted uppercase tracking-wider">Side Notes</label>
        <textarea
          className="w-full mt-1.5 px-3 py-2 border border-border rounded text-xs bg-white text-text resize-y min-h-[60px]"
          placeholder="Add any notes about this competitor (context, things to research, observations...)"
          value={getCompNotes(store, comp.name)}
          onChange={e => persist(setCompNotes(store, comp.name, e.target.value))}
          rows={3}
        />
      </div>

      {/* Fields grouped */}
      <div className="space-y-4 mb-10">
        {grouped.map(([group, groupFields]) => (
          <div key={group}>
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1.5 px-1">{group}</h3>
            <div className="space-y-1">
              {groupFields.map(f => (
                <FieldRow
                  key={f.key}
                  field={f}
                  validation={getFieldStatus(store, comp.name, f.key)}
                  onChange={val => handleFieldChange(f.key, val)}
                />
              ))}
            </div>
          </div>
        ))}
        {filteredFields.length === 0 && (
          <p className="text-center text-text-muted text-sm py-8">No {filter} fields for this competitor.</p>
        )}
      </div>
    </>
  );
}

function StatBox({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="border border-border rounded-lg p-3 bg-surface">
      <div className="text-[10px] text-text-muted mb-0.5">{label}</div>
      <div className={`text-lg font-bold ${color || "text-text"}`}>{value}</div>
    </div>
  );
}
