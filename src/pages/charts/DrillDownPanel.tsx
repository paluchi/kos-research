import type { Competitor } from "../../data/competitors";
import { getFundingM } from "../../data/insightData";

interface Props {
  label: string;
  items: Competitor[];
  onClose: () => void;
  onSelect: (c: Competitor) => void;
}

export function DrillDownPanel({ label, items, onClose, onSelect }: Props) {
  if (items.length === 0) return null;
  return (
    <div className="mt-3 border border-accent/30 rounded-lg bg-accent/5 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-accent/10 border-b border-accent/20">
        <span className="text-xs font-semibold text-accent">{label} — {items.length} companies</span>
        <button onClick={onClose} className="text-text-muted hover:text-text text-sm leading-none">&times;</button>
      </div>
      <div className="max-h-64 overflow-y-auto">
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-white/90 backdrop-blur">
            <tr className="border-b border-border text-left text-text-muted">
              <th className="px-3 py-1.5 font-medium">Company</th>
              <th className="px-3 py-1.5 font-medium">Category</th>
              <th className="px-3 py-1.5 font-medium">Threat</th>
              <th className="px-3 py-1.5 font-medium">Dims</th>
              <th className="px-3 py-1.5 font-medium">Funding</th>
              <th className="px-3 py-1.5 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {items
              .sort((a, b) => a.threat - b.threat || getFundingM(b) - getFundingM(a))
              .map((c) => (
                <tr
                  key={c.name}
                  onClick={() => onSelect(c)}
                  className="border-b border-border/50 hover:bg-accent/5 cursor-pointer transition-colors"
                >
                  <td className="px-3 py-1.5 font-medium text-text">{c.name}</td>
                  <td className="px-3 py-1.5 text-text-muted">{c.category}</td>
                  <td className="px-3 py-1.5">
                    <span className={`font-bold ${c.threat <= 2 ? "text-red-500" : c.threat === 3 ? "text-amber-500" : "text-green-500"}`}>
                      T{c.threat}
                    </span>
                  </td>
                  <td className="px-3 py-1.5 text-text-muted">{c.dimensions.length}</td>
                  <td className="px-3 py-1.5 text-text-muted">
                    {c.funding.isPublic ? "Public" : c.funding.isBootstrapped ? "Bootstrapped" : c.funding.totalRaisedM != null ? (c.funding.totalRaisedM >= 1000 ? `$${(c.funding.totalRaisedM / 1000).toFixed(1)}B` : `$${Math.round(c.funding.totalRaisedM)}M`) : "N/A"}
                  </td>
                  <td className="px-3 py-1.5">
                    <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                      c.status === "active" ? "bg-green-100 text-green-700" :
                      c.status === "dead" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
