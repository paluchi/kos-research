import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ title, children, className = "", onClick }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface p-5 ${className}`}
      onClick={onClick}
    >
      {title && (
        <h3 className="text-sm font-semibold text-text mb-3">{title}</h3>
      )}
      <div className="text-sm text-text-muted leading-relaxed">{children}</div>
    </div>
  );
}
