import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { DataTable } from "../components/DataTable";
import {
  buyers, users, triggers, salesCycle, salesCycleColumns,
  objections, adoptionStrategy, adoptionColumns,
} from "./gtmData";

export function GtmPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text mb-3">Go-to-Market</h1>
        <p className="text-text-muted">
          Personas, sales cycle, objection playbook, and adoption strategy.
        </p>
      </header>

      <Section title="Buyers" subtitle="Who signs the check">
        <div className="space-y-3">
          {buyers.map((b) => (
            <Card key={b.role}>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-text font-semibold">{b.role}</span>
                <Badge label={b.context} />
              </div>
              <p className="text-xs mb-2">{b.desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-2">
                <div>
                  <span className="text-text font-medium block mb-1">Pain points</span>
                  <p>{b.painPoints}</p>
                </div>
                <div>
                  <span className="text-accent-hover font-medium block mb-1">KOS hook</span>
                  <p>{b.kosHook}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Users" subtitle="Who uses it daily">
        {users.map((u) => (
          <Card key={u.role}>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-text font-semibold">{u.role}</span>
              <Badge label={u.pct} variant="accent" />
              <Badge label={u.level} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mt-2">
              <div>
                <span className="text-text font-medium block mb-1">Current tools</span>
                {u.tools}
              </div>
              <div>
                <span className="text-text font-medium block mb-1">Needs</span>
                {u.needs}
              </div>
              <div>
                <span className="text-accent-hover font-medium block mb-1">KOS value</span>
                {u.kosValue}
              </div>
            </div>
          </Card>
        ))}
      </Section>

      <Section title="Purchase triggers" subtitle="What makes them start looking">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {triggers.map((t) => (
            <Card key={t.trigger}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-text font-semibold text-sm">{t.trigger}</span>
                <Badge label={t.frequency} variant={
                  t.frequency.includes("Very") ? "danger" : t.frequency.includes("Growing") ? "warning" : "default"
                } />
              </div>
              <p className="text-xs">{t.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Sales cycle" subtitle="Mid-market Spain — 3-6 months typical">
        <DataTable columns={salesCycleColumns} rows={salesCycle} />
      </Section>

      <Section title="Objection playbook" subtitle="What they say, what they mean, how to respond">
        <div className="space-y-3">
          {objections.map((o) => (
            <Card key={o.objection}>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-text font-semibold text-sm">
                  &ldquo;{o.objection}&rdquo;
                </span>
                <Badge label={o.frequency} variant={o.variant} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-text font-medium block mb-1.5">Reality</span>
                  <p>{o.reality}</p>
                </div>
                <div>
                  <span className="text-accent-hover font-medium block mb-1.5">Counter</span>
                  <p>{o.counter}</p>
                </div>
                <div>
                  <span className="text-text font-medium block mb-1.5">Proof point</span>
                  <p>{o.proof}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Adoption strategy" subtitle="Land and expand — 30 days to prove value">
        <DataTable columns={adoptionColumns} rows={adoptionStrategy} />
        <Card className="mt-3">
          <p className="text-text font-medium mb-2">Key insight</p>
          <p className="text-xs">
            The biggest failure mode for BI tools is that they are bought for business users
            but built for data analysts. If business analysts and operations managers can{"'"}t
            self-serve, the tool becomes &ldquo;the data team{"'"}s tool&rdquo; and usage collapses
            to 10-15% of licenses purchased. KOS solves this because chat has zero learning curve —
            the 75% of BI users who never touch Tableau or PowerBI can use KOS from day one.
          </p>
        </Card>
      </Section>
    </>
  );
}
