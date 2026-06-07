export function ChartSection({
  title,
  measures,
  howToRead,
  insight,
  children,
}: {
  title: string;
  measures: string;
  howToRead: string;
  insight: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-bold text-text mb-1">{title}</h3>
      <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
        <div className="rounded-lg border border-border p-3">
          <span className="font-semibold text-accent">What it measures</span>
          <p className="text-text-muted mt-1">{measures}</p>
        </div>
        <div className="rounded-lg border border-border p-3">
          <span className="font-semibold text-accent">How to read it</span>
          <p className="text-text-muted mt-1">{howToRead}</p>
        </div>
        <div className="rounded-lg border border-border p-3">
          <span className="font-semibold text-accent">Key insight</span>
          <p className="text-text-muted mt-1">{insight}</p>
        </div>
      </div>
      <div className="rounded-xl border border-border bg-white p-4">{children}</div>
    </div>
  );
}
