/**
 * KOS Vision Dimensions:
 * 1. LLM Chat       — LLM-powered conversational interface
 * 2. SQL             — Connects to SQL databases
 * 3. NoSQL           — Connects to NoSQL databases
 * 4. Files/Docs      — Connects to Drive, docs, Excel, raw files
 * 5. Knowledge       — Organization knowledge graph / shared context
 * 6. Dashboards      — Generates analytics dashboards & visualizations
 * 7. Presentations   — Generates slide decks / multi-tab reports
 * 8. API Export      — Programmatic export / script publishing / API access
 * 9. RBAC            — Enterprise multi-tenant role-based access control
 * 10. Web-based      — Centralized web application
 * 11. Easy Setup     — Quick ramp-up, low config
 * 12. Affordable     — Mid-market pricing, not $100K+/yr
 * 13. Self-serve     — Non-technical users can operate it
 *
 * Threat tiers (1 = most similar to KOS):
 * T1: 10+ dimensions — Direct competitor
 * T2: 6-9 dimensions — High overlap, watch closely
 * T3: 3-5 dimensions — Partial overlap, different angle
 * T4: 1-2 dimensions — Tangential / different market
 * T5: 0 dimensions   — Not relevant / dead
 */
export interface FundingRound {
  date: string;
  round: string;
  amount: string;
  lead?: string;
  investors?: string[];
  valuation?: string;
}

export interface ClientsByVertical {
  vertical: string;
  clients: string[];
}

export interface TimelineEntry {
  year: number;
  value?: string;
  milestone?: string;
}

export interface DeepResearch {
  fundingRounds?: FundingRound[];
  keyInvestors?: string[];
  markets?: {
    geos?: string[];
    verticals?: string[];
    target?: string;
    notes?: string;
    clients?: string[];
  };
  clientTimeline?: TimelineEntry[];
  clientsByVertical?: ClientsByVertical[];
  revenueTimeline?: TimelineEntry[];
  employeeTimeline?: TimelineEntry[];
  milestones?: { date: string; event: string }[];
  deepSources?: { label: string; url: string }[];
}

export type BusinessModel = "SaaS" | "Open Core" | "Enterprise SaaS" | "Platform" | "Freemium";
export type GTM = "Product-led" | "Sales-led" | "Hybrid" | "Community-led";

/* ── Structured field types ─────────────────────── */

export interface FundingInfo {
  totalRaisedM: number | null;
  isPublic: boolean;
  isBootstrapped?: boolean;
  parentCompany?: string;
  notes?: string;
}

export interface ValuationInfo {
  amountM: number | null;
  type: "acquisition" | "last-round" | "public-mktcap" | "undisclosed";
  notes?: string;
}

export interface RevenueInfo {
  annualM: number | null;
  isEstimated: boolean;
  arrM?: number | null;
  notes?: string;
}

export interface TeamInfo {
  headcount: number | null;
  isApproximate: boolean;
  parentHeadcount?: number;
  notes?: string;
}

export interface LinkedInInfo {
  followers: number | null;
  isParentPage: boolean;
}

export interface CustomersInfo {
  notable: string[];
  totalCount?: number | null;
  countLabel?: string;
  notes?: string;
}

export interface PricingPlan {
  name: string;
  pricePerUserMo?: number;
  priceFlatMo?: number;
  notes?: string;
}

export interface PricingInfo {
  plans: PricingPlan[];
  hasFreeTier: boolean;
  hasEnterpriseTier: boolean;
  startingPricePerUserMo?: number;
  notes?: string;
}

export interface TrafficInfo {
  monthlyVisits: number | null;
  marketSharePct?: number;
  growthMoM?: number;
  organicPct?: number;
  source?: string;
  notes?: string;
}

export interface TargetUser {
  role: string;
  technical?: "very high" | "high" | "medium-high" | "medium" | "low-medium" | "low" | "none";
  description: string;
  techLevel?: string;
}

export interface CompetitivePosition {
  usersPerOrg?: string;
  targetUsers?: TargetUser[];
  excludes?: string[];
  redOcean?: string[];
  blueOceanKos?: string[];
  blueOceanThem?: string[];
  userVoices?: { persona: string; quote: string }[];
  kosAdvantages?: string[];
  theirAdvantages?: string[];
}

export type VoiceSource = "G2" | "Reddit" | "Twitter/X" | "LinkedIn" | "Gartner" | "TrustRadius" | "ProductHunt" | "HackerNews" | "Capterra" | "Trustpilot" | "PeerSpot" | "Other";
export type VoiceSentiment = "positive" | "negative" | "mixed";

export interface UserVoice {
  source: VoiceSource;
  sentiment: VoiceSentiment;
  quote: string;
  context?: string;
  date?: string;
  url?: string;
  persona?: string;
}

export interface Competitor {
  name: string;
  url: string;
  category: string;
  tier: string;
  status: "active" | "dead" | "acquired" | "maintenance";
  threat: 1 | 2 | 3 | 4 | 5;
  dimensions: string[];
  funding: FundingInfo;
  valuation: ValuationInfo;
  revenue: RevenueInfo;
  team: TeamInfo;
  linkedin: LinkedInInfo;
  customers: CustomersInfo;
  product: string;
  pricing: PricingInfo;
  traffic: TrafficInfo;
  weaknesses: string[];
  sources: { label: string; url: string }[];
  positioning?: CompetitivePosition;
  userVoices?: UserVoice[];
  deep?: DeepResearch;
  founded?: number;
  hq?: string;
  businessModel?: BusinessModel;
  gtm?: GTM;
}

import { traditionalBI, enterprisePlatforms } from "./competitors_enterprise";
import { cloudNativeBI, modernAnalytics, embeddedAnalytics } from "./competitors_modern";
import { aiStartups } from "./competitors_ai";
import { textToSQL } from "./competitors_textsql";
import { openSourceBI, dataGovernance, adjacentTools } from "./competitors_infra";
import { graveyard } from "./competitors_graveyard";
import { workflowAutomation, aiAgentBuilders } from "./competitors_automation";
import { attachDeepResearch } from "./deep_merge";
import { enrichment } from "./competitor_enrichment";

const raw: Competitor[] = [
  ...traditionalBI,
  ...enterprisePlatforms,
  ...cloudNativeBI,
  ...modernAnalytics,
  ...embeddedAnalytics,
  ...aiStartups,
  ...textToSQL,
  ...openSourceBI,
  ...dataGovernance,
  ...adjacentTools,
  ...graveyard,
  ...workflowAutomation,
  ...aiAgentBuilders,
];

function attachEnrichment(comps: Competitor[]): Competitor[] {
  return comps.map((c) => {
    const e = enrichment[c.name];
    return e ? { ...c, ...e } : c;
  });
}

export const competitors: Competitor[] = attachEnrichment(attachDeepResearch(raw));

export const categories = [
  "Traditional BI",
  "Enterprise Data Platform",
  "Cloud-Native BI",
  "Modern Analytics",
  "Embedded Analytics",
  "AI Analytics Startup",
  "Text-to-SQL / Open Source",
  "Open-Source BI",
  "Data Governance",
  "Adjacent / Workflow",
  "Workflow Automation (iPaaS)",
  "AI Agent / Flow Builder",
  "Dead / Acquired",
];
