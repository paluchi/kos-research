import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { DataTable } from "../components/DataTable";
import {
  marketSegments, marketColumns,
  tamSamSom,
  adoptionStats, adoptionColumns,
  dataTeamCosts, dataTeamColumns,
  drivers, aiDisruption,
  buyerSegments, buyerColumns,
  spainInsights, euRegulations,
} from "./marketData";

export function MarketPage() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-text mb-3">Market Research</h1>
        <p className="text-text-muted">
          Market sizing, growth drivers, adoption gaps, AI disruption, geographic
          focus, and TAM/SAM/SOM analysis.
        </p>
      </header>

      <Section title="Market sizing" subtitle="AI-specific segments grow at 3-4x the overall BI market">
        <DataTable columns={marketColumns} rows={marketSegments} />
      </Section>

      <Section title="TAM / SAM / SOM">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {tamSamSom.map((t) => (
            <Card key={t.label}>
              <div className="flex items-center gap-2 mb-2">
                <span className="relative group">
                  <Badge label={t.label} variant={t.label === "TAM" ? "default" : t.label === "SAM" ? "warning" : "success"} />
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-1.5 text-[11px] text-white bg-text rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {t.label === "TAM" && "Total Addressable Market — the full revenue opportunity if 100% market share"}
                    {t.label === "SAM" && "Serviceable Addressable Market — the segment you can realistically reach"}
                    {t.label === "SOM" && "Serviceable Obtainable Market — what you can capture in the near term"}
                  </span>
                </span>
                <span className="text-text font-semibold text-lg">{t.value}</span>
              </div>
              <p className="text-xs font-medium text-text mb-1">{t.title}</p>
              <p className="text-xs">{t.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="The adoption gap" subtitle="78% of enterprises have BI — but 75% of employees never touch it">
        <DataTable columns={adoptionColumns} rows={adoptionStats} />
        <Card className="mt-3">
          <p className="text-text font-medium">
            This is the core opportunity: BI tools exist everywhere, but most employees
            can{"'"}t use them. The 71-75% of licensed users who never touch their BI tools
            represent a massive underserved market — and KOS{"'"}s natural language interface
            directly attacks this gap.
          </p>
        </Card>
      </Section>

      <Section title="Cost of the status quo" subtitle="What companies pay to NOT have KOS">
        <DataTable columns={dataTeamColumns} rows={dataTeamCosts} />
        <Card className="mt-3">
          <p>
            A minimal data team (1 engineer + 2 analysts + 1 BI developer) costs{" "}
            <span className="text-text font-medium">$450-600K/year in the US</span> or{" "}
            <span className="text-text font-medium">EUR 200-350K/year in Spain/EU</span>.
            And 30-70% of their time goes to ad-hoc requests that KOS can handle in seconds.
            The ROI case writes itself.
          </p>
        </Card>
      </Section>

      <Section title="Market segments by buyer type">
        <DataTable columns={buyerColumns} rows={buyerSegments} />
      </Section>

      <Section title="Growth drivers">
        <Card>
          <ul className="space-y-2">
            {drivers.map((d, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5">-</span>
                {d}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="AI disruption in BI" subtitle="Every vendor is adding AI — but none are AI-native">
        <div className="space-y-3">
          {aiDisruption.map((item) => (
            <Card key={item.insight}>
              <div className="flex items-start gap-2 mb-1">
                <p className="text-text font-medium text-sm">{item.insight}</p>
                <Badge label={item.source} variant="default" />
              </div>
              <p className="text-xs">{item.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Why now?">
        <Card>
          <p>
            The rise of capable AI models (2023-2026) enabled a new class of
            products that can communicate with external systems — not just
            generate text but actually <span className="text-text font-medium">execute queries</span>,{" "}
            <span className="text-text font-medium">browse schemas</span>, and{" "}
            <span className="text-text font-medium">orchestrate multi-step workflows</span>{" "}
            across databases and APIs. This was not possible 3 years ago.
          </p>
          <p className="mt-3">
            Simultaneously, Gartner predicts a{" "}
            <span className="text-text font-medium">$58B market shakeup</span> as AI agents
            challenge mainstream productivity tools by 2027. Forrester warns that 3 out of 4
            firms building agentic architectures on their own will fail — creating demand for
            purpose-built platforms that handle the orchestration layer.
          </p>
          <p className="mt-3 text-accent-hover font-medium">
            The technology matured at the exact moment enterprises are looking to
            democratize data access. KOS is positioned to capture this window.
          </p>
        </Card>
      </Section>

      <Section title="Geographic focus: Spain" subtitle="Entry market with EUR 4.7B in digitalization funds">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {spainInsights.map((item) => (
            <Card key={item.title} title={item.title}>
              {item.desc}
            </Card>
          ))}
        </div>
      </Section>

      <Section title="EU regulatory landscape" subtitle="Regulations that create demand for governed AI platforms">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {euRegulations.map((item) => (
            <Card key={item.name} title={item.name}>
              {item.desc}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
