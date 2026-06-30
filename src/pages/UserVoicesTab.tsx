import type { Competitor, VoiceSentiment, VoiceSource } from "../data/competitors";

const sentimentColor: Record<VoiceSentiment, string> = {
  positive: "text-green-400 bg-green-400/10 border-green-400/30",
  negative: "text-red-400 bg-red-400/10 border-red-400/30",
  mixed: "text-amber-400 bg-amber-400/10 border-amber-400/30",
};

const sentimentIcon: Record<VoiceSentiment, string> = {
  positive: "+",
  negative: "-",
  mixed: "~",
};

const sourceIcon: Record<VoiceSource, string> = {
  G2: "G2",
  Reddit: "r/",
  "Twitter/X": "X",
  LinkedIn: "in",
  Gartner: "G",
  TrustRadius: "TR",
  ProductHunt: "PH",
  HackerNews: "HN",
  Capterra: "Ca",
  Trustpilot: "TP",
  PeerSpot: "PS",
  Other: "?",
};

interface Props {
  c: Competitor;
}

export function UserVoicesTab({ c }: Props) {
  const voices = c.userVoices;

  if (!voices?.length) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-text-muted">
        <p className="text-sm">No user voices collected yet.</p>
        <p className="text-xs mt-1">Add reviews, quotes, and sentiment from G2, Reddit, LinkedIn, etc.</p>
      </div>
    );
  }

  const positive = voices.filter((v) => v.sentiment === "positive").length;
  const negative = voices.filter((v) => v.sentiment === "negative").length;
  const mixed = voices.filter((v) => v.sentiment === "mixed").length;

  return (
    <div className="space-y-4">
      {/* Summary bar */}
      <div className="flex items-center gap-4 text-xs">
        <span className="text-text-muted">{voices.length} voice{voices.length !== 1 ? "s" : ""}</span>
        {positive > 0 && <span className="text-green-400">+{positive} positive</span>}
        {negative > 0 && <span className="text-red-400">-{negative} negative</span>}
        {mixed > 0 && <span className="text-amber-400">~{mixed} mixed</span>}
      </div>

      {/* Voice cards */}
      <div className="space-y-3">
        {voices.map((v, i) => (
          <div key={i} className="border border-border rounded-lg p-3 space-y-2">
            {/* Header row */}
            <div className="flex items-center gap-2 text-xs">
              <span className={`inline-flex items-center justify-center w-6 h-5 rounded text-[10px] font-bold border ${sentimentColor[v.sentiment]}`}>
                {sentimentIcon[v.sentiment]}
              </span>
              <span className="px-1.5 py-0.5 rounded bg-surface-alt text-text-muted font-mono text-[10px]">
                {sourceIcon[v.source]}
              </span>
              <span className="text-text-muted">{v.source}</span>
              {v.date && <span className="text-text-muted ml-auto">{v.date}</span>}
            </div>

            {/* Quote */}
            <p className="text-sm text-text leading-relaxed italic">"{v.quote}"</p>

            {/* Context + link */}
            <div className="flex items-center justify-between text-[11px]">
              {v.context && <span className="text-text-muted">-- {v.context}</span>}
              {v.url && (
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover underline underline-offset-2 ml-auto"
                >
                  Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
