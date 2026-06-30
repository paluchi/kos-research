import { useState } from "react";
import type { FieldDef, FieldStatus, FieldValidation } from "./validationStore";

interface Props {
  field: FieldDef;
  validation: FieldValidation;
  onChange: (val: FieldValidation) => void;
}

const STATUS_STYLES: Record<FieldStatus, string> = {
  pending: "border-border",
  verified: "border-green-300 bg-green-50/50",
  flagged: "border-red-300 bg-red-50/50",
};

export function FieldRow({ field, validation, onChange }: Props) {
  const [editing, setEditing] = useState(false);
  const [correction, setCorrection] = useState(validation.correction ?? "");

  const handleVerify = () => onChange({ status: "verified", correction: undefined });

  const handleFlag = () => {
    setEditing(true);
  };

  const handleSaveCorrection = () => {
    onChange({ status: "flagged", correction: correction || undefined });
    setEditing(false);
  };

  const handleReset = () => {
    onChange({ status: "pending", correction: undefined });
    setCorrection("");
    setEditing(false);
  };

  return (
    <div className={`flex items-start gap-3 px-3 py-2 border rounded-lg text-xs ${STATUS_STYLES[validation.status]}`}>
      {/* Label */}
      <div className="w-36 shrink-0">
        <span className="font-medium text-text">{field.label}</span>
      </div>

      {/* Value */}
      <div className="flex-1 min-w-0">
        <p className="text-text-muted break-words whitespace-pre-wrap">{field.value}</p>
        {validation.status === "flagged" && validation.correction && !editing && (
          <p className="mt-1 text-red-600 font-medium">Correction: {validation.correction}</p>
        )}
        {editing && (
          <div className="mt-1.5 flex gap-1.5">
            <input
              className="flex-1 px-2 py-1 border border-red-300 rounded text-xs bg-white text-text"
              placeholder="What's the correct value?"
              value={correction}
              onChange={e => setCorrection(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSaveCorrection()}
              autoFocus
            />
            <button onClick={handleSaveCorrection} className="px-2 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 text-[10px] font-medium">
              Save
            </button>
            <button onClick={() => setEditing(false)} className="px-2 py-1 text-text-muted hover:text-text text-[10px]">
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-1 shrink-0">
        {validation.status === "pending" ? (
          <>
            <button onClick={handleVerify} className="px-2 py-1 rounded bg-green-100 text-green-700 hover:bg-green-200 text-[10px] font-medium" title="Mark as correct">
              OK
            </button>
            <button onClick={handleFlag} className="px-2 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200 text-[10px] font-medium" title="Flag as wrong">
              Flag
            </button>
          </>
        ) : (
          <button onClick={handleReset} className="px-2 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 text-[10px] font-medium" title="Reset">
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
