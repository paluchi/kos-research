import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-text mb-1">{title}</h2>
      {subtitle && (
        <p className="text-sm text-text-muted mb-4">{subtitle}</p>
      )}
      <div className="space-y-4">{children}</div>
    </section>
  );
}
