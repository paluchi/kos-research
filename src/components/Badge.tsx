interface BadgeProps {
  label: string;
  variant?: "default" | "accent" | "success" | "warning" | "danger";
}

const variants: Record<string, string> = {
  default: "bg-surface-hover text-text-muted border-border",
  accent: "bg-indigo-50 text-indigo-700 border-indigo-200",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  danger: "bg-red-50 text-red-700 border-red-200",
};

export function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full border ${variants[variant]}`}
    >
      {label}
    </span>
  );
}
