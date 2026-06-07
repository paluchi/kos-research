export interface ProviderCell {
  text: string;
  sources?: { label: string; url: string }[];
}

export interface PlatformComparison {
  dimension: string;
  openai: ProviderCell;
  anthropic: ProviderCell;
  google: ProviderCell;
  kos: string;
  threat: "low" | "medium" | "high";
}

export const painPoints = [
  {
    pain: "Data insights bottlenecked by engineering",
    today: "Business users wait for engineers to pull data — ad-hoc tickets, sprint planning, weeks per report",
    kos: "Anyone queries data in natural language and gets answers in seconds, bypassing the entire SDLC",
  },
  {
    pain: "Knowledge is decentralized",
    today: "Tribal knowledge in people's heads, no shared context across teams",
    kos: "Centralized knowledge base shared across your entire organization",
  },
  {
    pain: "Complex databases, no clear topology",
    today: "Engineers introduce errors, don't understand connections between systems",
    kos: "Schema explorer + AI that learns and documents relationships automatically",
  },
  {
    pain: "Reports and dashboards built manually",
    today: "PowerPoint + Excel copy-paste, repeated every week",
    kos: "Auto-generated visualizations, presentations, and dashboards from live data",
  },
  {
    pain: "No centralized AI with access control",
    today: "Individual ChatGPT/Copilot usage — no governance, no shared context",
    kos: "One governed platform with enterprise-grade access control for the whole team",
  },
  {
    pain: "BI tools go underused (15-25% adoption)",
    today: "PowerBI/Tableau too complex — most users fall back to Excel or asking engineers",
    kos: "Chat interface = zero learning curve, anyone can use it from day one",
  },
  {
    pain: "Too many roles needed to stay competitive",
    today: "Data engineers, analysts, BI developers, DevOps — expensive, hard to hire, many fields to cover",
    kos: "A small team covers analytics, reporting, automation, and knowledge management in one platform",
  },
  {
    pain: "Bigger teams create more complexity, not less",
    today: "More people = more handoffs, more decentralization, more friction points, slower decisions",
    kos: "KOS doesn't replace teammates — it empowers each one to be faster, more contextualized, and more autonomous",
  },
];

export const painColumns = [
  { key: "pain" as const, label: "Pain point" },
  { key: "today" as const, label: "Current state" },
  { key: "kos" as const, label: "KOS solution" },
];

export const platformComparison: PlatformComparison[] = [
  {
    dimension: "Database connections",
    openai: { text: "Zero native DB connectors. Every connection requires deploying an MCP server (you host it). MCPKit is a scaffold, not a product — needs Python dev, OIDC auth provider, and infrastructure. No table/row/column-level access control — entirely your responsibility. Secure MCP Tunnels solve firewalls (outbound-only HTTPS) but still need setup. Setup time: 3-6 weeks for mid-market (including security review).", sources: [
      { label: "MCPKit", url: "https://openai.com/solutions/blueprints/mcpkit/" },
      { label: "Secure Tunnels", url: "https://developers.openai.com/api/docs/guides/secure-mcp-tunnels" },
      { label: "Apps", url: "https://help.openai.com/en/articles/11487775-connectors-in-chatgpt" },
    ]},
    anthropic: { text: "Official MCP servers only for PostgreSQL and SQLite. MySQL/MongoDB via community (less mature). CData Connect AI adds 250+ sources but costs $250-500/mo per connection. No built-in data access control — relies on DB-level permissions. VPN works only via Claude Desktop (inherits machine network). No remote MCP for Enterprise web. Setup time: hours for Claude Desktop, days for org-wide via CData.", sources: [
      { label: "Connectors", url: "https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities" },
      { label: "MCP Servers", url: "https://modelcontextprotocol.io/specification/2025-03-26" },
    ]},
    google: { text: "MCP Toolbox: 35+ actual databases (PostgreSQL, MySQL, MongoDB, Oracle, Snowflake, Redis, Elasticsearch, Neo4j, ClickHouse, etc.) but you deploy the server yourself (recommended: Cloud Run). BigQuery federated queries only support 4 Google-managed sources (Cloud SQL, AlloyDB, Spanner, SAP). Data Canvas is BigQuery-native only. IAM + BigQuery row/column-level security works for query results, but schema introspection enforcement is undocumented. Setup time: 1 day (MCP Toolbox) to weeks (full BigQuery path).", sources: [
      { label: "Toolbox integrations", url: "https://mcp-toolbox.dev/integrations/" },
      { label: "Federated queries", url: "https://docs.google.com/bigquery/docs/federated-queries-intro" },
      { label: "Data Canvas", url: "https://docs.google.com/bigquery/docs/data-canvas" },
    ]},
    kos: "Built-in optimized drivers for 14+ databases — no middleware, no MCP server to deploy. Plug and play: enter host, port, credentials, connect. VPN tunneling and SSH built-in. Per-connector visibility controls (tenant/scope/user). Schema extraction and topology discovery automatic. Setup time: minutes per connector.",
    threat: "high",
  },
  {
    dimension: "Access control & multi-tenancy",
    openai: { text: "RBAC with 6 predefined roles (Owner, Admin, Member, etc.) but no custom roles — cannot scope permissions per connector or data source. Workspaces are single-org: one workspace = one billing entity. No multi-tenancy — you'd need separate workspaces per org with no cross-org management. Admin console supports SSO (SAML/OIDC), SCIM provisioning, and domain verification. Audit logs via Compliance API (90-day retention). No row/column-level data access control on connected sources.", sources: [
      { label: "RBAC", url: "https://help.openai.com/en/articles/11750701-rbac" },
      { label: "Admin controls", url: "https://help.openai.com/en/articles/10287717-admin-controls-overview" },
      { label: "Compliance API", url: "https://platform.openai.com/docs/api-reference/audit-logs" },
    ]},
    anthropic: { text: "RBAC still in beta — only covers workspace-level roles (Admin, Developer, User). Does NOT extend to MCP servers, connectors, or third-party integrations. No fine-grained resource-level permissions. No multi-tenancy — single org per workspace. SSO via SAML (Enterprise only). No shared team memory or cross-user knowledge. Audit logs exist but limited scope. No mechanism to control what data a connector exposes per user.", sources: [
      { label: "Enterprise", url: "https://www.anthropic.com/news/claude-code-on-team-and-enterprise" },
      { label: "SSO", url: "https://support.claude.com/en/articles/11184498-single-sign-on-sso-for-claude" },
    ]},
    google: { text: "Full IAM with Agent Identity (SPIFFE-based IDs for agents). Agent Gateway enforces policies at runtime. Cloud IAM integrates with BigQuery column/row-level security, VPC Service Controls, and Data Loss Prevention API. Multi-project organization hierarchy acts as pseudo-multi-tenancy. Most mature access control — but deeply coupled to Google Cloud. Requires GCP expertise to configure. Agent-to-agent authorization via A2A protocol with OAuth2.", sources: [
      { label: "Agent Gateway", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/gateways/agent-gateway-overview" },
      { label: "Agent Identity", url: "https://cloud.google.com/gemini-enterprise-agent-platform/govern/identity/agent-identity" },
      { label: "A2A protocol", url: "https://developers.google.com/a2a" },
    ]},
    kos: "Multi-tenant RBAC: tenant → scope → user hierarchy. Visibility controls per resource (connector, chat, vault, knowledge). Roles: superuser, editor, reader — scoped per tenant/scope. No GCP dependency. Purpose-built for multi-org scenarios where a single platform serves multiple organizations with isolated data.",
    threat: "medium",
  },
  {
    dimension: "Shared knowledge",
    openai: { text: "Per-user Memory (auto-captures preferences, persists across chats). Projects allow shared files and custom instructions within a project context. Company Knowledge (Enterprise tier): admins upload documents accessible org-wide. No shared AI memory across users — each user's memory is private. Custom GPTs can embed knowledge but are static (no learning). No semantic layer or business logic repository.", sources: [
      { label: "Company Knowledge", url: "https://help.openai.com/en/articles/12628342-company-knowledge-in-chatgpt-business-enterprise-and-edu" },
      { label: "Memory", url: "https://help.openai.com/en/articles/8590148-memory-in-chatgpt" },
      { label: "Projects", url: "https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt" },
    ]},
    anthropic: { text: "Per-user memory only — auto-captures facts from conversations, no cross-user sharing. No team knowledge base or shared memory. Dreaming feature (research preview) allows Claude to reflect on past conversations but is personal-only. Projects allow shared files/instructions but these are static uploads, not a living knowledge base. No mechanism for AI to learn and share business logic across team members.", sources: [
      { label: "Memory", url: "https://support.claude.com/en/articles/11291800-how-does-memory-work" },
      { label: "Dreaming", url: "https://www.anthropic.com/research/claude-dreams" },
      { label: "Projects", url: "https://support.claude.com/en/articles/9882935-how-do-projects-work" },
    ]},
    google: { text: "Looker semantic layer defines metrics, dimensions, and business logic in LookML — shared across all users querying through Looker. Gemini in Looker can answer questions grounded in this semantic model. Agentspace indexes enterprise data (Drive, Confluence, Jira, SharePoint) and grounds responses. BigQuery Data Canvas maintains context across analysis sessions. Most mature for structured knowledge — but requires Looker/BigQuery setup and LookML expertise.", sources: [
      { label: "Gemini in Looker", url: "https://docs.cloud.google.com/looker/docs/gemini-overview-looker" },
      { label: "Agentspace", url: "https://cloud.google.com/products/agentspace" },
      { label: "LookML", url: "https://docs.cloud.google.com/looker/docs/what-is-lookml" },
    ]},
    kos: "Centralized knowledge store shared across all users. AI learns business logic, edge cases, naming conventions, and domain context over time. Knowledge entries are versioned, scoped (tenant/scope/user visibility), and available from day one. No LookML or semantic layer setup — knowledge is captured naturally through conversations and manual entries.",
    threat: "medium",
  },
  {
    dimension: "Visualization & reporting",
    openai: { text: "Code Interpreter generates charts (matplotlib, seaborn) per-conversation — not persistent. Canvas allows editing generated content but no dashboard framework. No persistent dashboards, no multi-tab views, no slide deck generation. GPT-4o can analyze uploaded images/charts but cannot create interactive web visualizations. No HTML/JS output sandbox. Export limited to conversation downloads.", sources: [
      { label: "Code Interpreter", url: "https://help.openai.com/en/articles/8437071-code-interpreter-and-advanced-data-analysis" },
      { label: "Canvas", url: "https://help.openai.com/en/articles/9930697-using-canvas-in-chatgpt" },
    ]},
    anthropic: { text: "Artifacts generate interactive charts (Chart.js, D3, Plotly, Recharts) and full HTML/CSS/JS applications in a sandboxed preview. Live Artifacts allow persistent, shareable interactive dashboards. Can generate .pptx slide decks via code. React component rendering supported. Most flexible for custom visualizations — but each artifact is standalone, no multi-tab dashboard framework. No native BI-style persistent dashboard builder.", sources: [
      { label: "Artifacts", url: "https://support.claude.com/en/articles/9487310-what-are-artifacts" },
      { label: "Live Artifacts", url: "https://www.eigent.ai/blog/claude-live-artifacts-guide" },
    ]},
    google: { text: "Looker provides full enterprise BI dashboards with drill-downs, filters, scheduling, and embedding. Gemini assistant in Looker enables NL-to-viz. BigQuery Data Canvas combines NL queries with inline charts. Export to Google Slides, Sheets. Looker Studio for self-service dashboards. Most mature BI visualization — but requires Looker license ($50k+/yr) and BigQuery setup. Data Canvas limited to BigQuery sources.", sources: [
      { label: "Data Canvas", url: "https://docs.cloud.google.com/bigquery/docs/data-canvas" },
      { label: "Looker dashboards", url: "https://docs.cloud.google.com/looker/docs/building-dashboards" },
      { label: "Looker Studio", url: "https://cloud.google.com/looker-studio" },
    ]},
    kos: "Any visualization via HTML generation — no library restrictions. Persistent multi-tab dashboards with organized layouts. Slide decks, pages, forms. Export to PDF, Excel, PPTX. Interactive charts, tables, maps, and custom visual components. Zero licensing cost for BI capabilities.",
    threat: "high",
  },
  {
    dimension: "Automation",
    openai: { text: "Scheduled Tasks: max 10 active per user, daily/weekly/monthly triggers. Tasks run autonomously and deliver results to chat. No complex workflows, no conditional logic, no chaining. API available for programmatic access but requires custom development. Actions (formerly Plugins) allow calling external APIs but are per-GPT, not schedulable. No cron-style expressions, no webhook triggers, no usage analytics.", sources: [
      { label: "Tasks", url: "https://help.openai.com/en/articles/10291617-scheduled-tasks-in-chatgpt" },
      { label: "Actions", url: "https://platform.openai.com/docs/actions" },
    ]},
    anthropic: { text: "Routines: schedule Claude to run tasks at set times. Max 25 runs/day on Enterprise (5 on Pro). Triggers: schedule, API call, or GitHub event. Can chain tool use within a routine but no visual workflow builder. Claude Code supports background agents for long-running tasks. Limited run counts constrain heavy automation. No built-in webhook/cron system — relies on external triggers for complex orchestration.", sources: [
      { label: "Routines", url: "https://support.claude.com/en/articles/11694652-how-do-routines-work" },
      { label: "Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code/overview" },
    ]},
    google: { text: "BigQuery scheduled queries (SQL-based, cron syntax). Vertex AI Pipelines for ML workflows. Cloud Workflows for multi-step orchestration. Agent-to-agent delegation via A2A protocol. Cloud Scheduler + Cloud Functions for arbitrary automation. Most powerful automation stack — but requires GCP infrastructure expertise. No simple 'schedule this chat task' UX. Pricing tied to compute usage.", sources: [
      { label: "Scheduled queries", url: "https://docs.cloud.google.com/bigquery/docs/scheduling-queries" },
      { label: "Cloud Workflows", url: "https://cloud.google.com/workflows/docs/overview" },
      { label: "A2A", url: "https://developers.google.com/a2a" },
    ]},
    kos: "Unlimited scheduled scripts, published APIs, cron jobs. Usage analytics built-in. Simple UX: write a script, set a schedule, done. No infrastructure to manage, no run count limits. API publishing lets external systems trigger KOS workflows.",
    threat: "medium",
  },
  {
    dimension: "Data residency",
    openai: { text: "Data residency in EU, UK, US, Canada, Japan, Singapore, India, Australia, UAE — broadest coverage. SOC 2 Type II, GDPR compliant. HIPAA BAA available (Enterprise). No FedRAMP yet. Data encrypted at rest (AES-256) and in transit (TLS 1.2+). Zero data retention on API by default. Enterprise: no training on customer data. On-premise deployment not available.", sources: [
      { label: "Residency", url: "https://openai.com/index/expanding-data-residency-access-to-business-customers-worldwide/" },
      { label: "Security", url: "https://openai.com/enterprise-privacy/" },
    ]},
    anthropic: { text: "No EU hosting on standard Claude tiers — data processed in US. EU access requires routing through AWS Bedrock (EU regions) or GCP Vertex AI (EU regions) as workaround, adding cost and complexity. SOC 2 Type II, HIPAA BAA available. GDPR compliance claimed but no EU data center. FedRAMP authorization in progress. No on-premise option. This is a significant gap for EU-regulated enterprises.", sources: [
      { label: "EU issue", url: "https://github.com/anthropics/claude-code/issues/40526" },
      { label: "Security", url: "https://www.anthropic.com/security" },
      { label: "Trust Center", url: "https://trust.anthropic.com/" },
    ]},
    google: { text: "EU multi-region supported with guaranteed data boundaries. Zero data egress GA since 2025. CMEK (Customer-Managed Encryption Keys) for full key control. FedRAMP High, SOC 1/2/3, ISO 27001/27017/27018, HIPAA, PCI-DSS, C5 (Germany). VPC Service Controls prevent data exfiltration. Sovereign cloud options (T-Systems, S3NS). Most comprehensive compliance — but only within GCP.", sources: [
      { label: "Residency", url: "https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/data-residency" },
      { label: "Compliance", url: "https://cloud.google.com/security/compliance" },
      { label: "Sovereign", url: "https://cloud.google.com/sovereign-cloud" },
    ]},
    kos: "Currently GCP-hosted. Can deploy to any region via Cloud Run. EU hosting available. Data never leaves customer-designated region. Encryption at rest and in transit. No training on customer data. Cloud-agnostic deployment means residency follows customer requirements, not vendor infrastructure.",
    threat: "high",
  },
  {
    dimension: "Ecosystem lock-in",
    openai: { text: "MCP support added (client-side). Connectors for Google Drive, Microsoft, Slack, Salesforce, etc. API is proprietary but well-documented. Models available on Azure OpenAI Service. No cloud infrastructure dependency — ChatGPT is SaaS-only. Fine-tuned models locked to OpenAI platform. Relatively open for data in/out but model portability limited.", sources: [
      { label: "MCP support", url: "https://developers.openai.com/api/docs/guides/tools-connectors-mcp" },
      { label: "Connectors", url: "https://help.openai.com/en/articles/11487775-connectors-in-chatgpt" },
    ]},
    anthropic: { text: "Created MCP — the most open approach. Claude available on AWS Bedrock and GCP Vertex AI (multi-cloud). API is proprietary but simple. No infrastructure dependency. Open-source contributions (MCP spec, Claude Code). Most portable of the three — but switching away from Claude means losing MCP server ecosystem compatibility unless target supports MCP.", sources: [
      { label: "MCP", url: "https://www.anthropic.com/news/model-context-protocol" },
      { label: "Bedrock", url: "https://aws.amazon.com/bedrock/claude/" },
    ]},
    google: { text: "Open at edges: MCP Toolbox (open-source, 40+ DBs), A2A protocol (open spec), ADK (open-source agent framework). But governance, identity, and orchestration layers are proprietary Google Cloud. Deepest integrations favor Google stack (BigQuery, Looker, Workspace, GCS). Migrating away from Vertex AI + Agent Engine requires rebuilding governance. Data portability good (BigQuery export), but workflow portability poor.", sources: [
      { label: "MCP Toolbox", url: "https://github.com/googleapis/genai-toolbox" },
      { label: "ADK", url: "https://google.github.io/adk-docs/" },
      { label: "A2A", url: "https://developers.google.com/a2a" },
    ]},
    kos: "Fully cloud-agnostic and model-agnostic. Swap LLMs (Gemini, OpenAI, local models) without changing anything else. Deploy on any cloud. No vendor lock-in by design — KOS is the orchestration layer, not tied to any provider's ecosystem.",
    threat: "low",
  },
  {
    dimension: "Target user",
    openai: { text: "Broad horizontal play: knowledge workers, marketers, support teams, developers. Enterprise tier targets large organizations. Not purpose-built for data analytics — analytics is one of many use cases. No semantic layer, no BI framework, no data team tooling. Strength: ubiquity (300M+ users) and brand recognition. Weakness: mile wide, inch deep for any specific vertical.", sources: [
      { label: "Enterprise", url: "https://openai.com/enterprise-privacy/" },
      { label: "ChatGPT for teams", url: "https://openai.com/chatgpt/team/" },
    ]},
    anthropic: { text: "Developers and technical knowledge workers. Claude Code targets engineering teams. Enterprise tier for regulated industries. Strong at code generation, reasoning, and document analysis. Not purpose-built for data analytics — no native DB connectors, no BI features, no dashboard framework. Strength: best reasoning model. Weakness: smallest enterprise feature set of the three.", sources: [
      { label: "Enterprise", url: "https://www.anthropic.com/product/enterprise" },
      { label: "Claude Code", url: "https://docs.anthropic.com/en/docs/claude-code/overview" },
    ]},
    google: { text: "Data teams already on BigQuery/Looker. Enterprise orgs in Google Cloud ecosystem. Gemini in Workspace targets all Google Workspace users (3B+). Agentspace for enterprise search. Most analytics-capable of the three — but locked to Google stack. Strength: deepest BI integration (Looker). Weakness: requires GCP commitment, Looker pricing ($50k+/yr) excludes SMB.", sources: [
      { label: "Agentspace", url: "https://cloud.google.com/products/agentspace" },
      { label: "Workspace AI", url: "https://workspace.google.com/solutions/ai/" },
    ]},
    kos: "Anyone in the organization who needs data insights — from analysts to executives. Purpose-built for data intelligence. No technical expertise required. Serves the gap between 'too simple' (ChatGPT) and 'too complex' (Looker/BigQuery). Target: operations-heavy mid-market companies with SQL databases and engineering bottlenecks.",
    threat: "medium",
  },
  {
    dimension: "Ramp-up time, complexity & cost",
    openai: { text: "~$60/user/month, 150-seat minimum ($108K+/year floor). Basic rollout: 1-4 weeks (SSO, provisioning). File uploads work day one, but live database connections require custom MCP servers ($10K-$50K per connector + $500-$25K/month hosting). No native DB connectors — every data connection is custom engineering. Hidden costs: Codex overages, API usage, implementation partners ($10K-$50K). Learning curve: low for end users (familiar chat UI), moderate for admins.", sources: [
      { label: "Enterprise pricing", url: "https://openai.com/business/chatgpt-pricing/" },
      { label: "Admin controls", url: "https://help.openai.com/en/articles/10287717-admin-controls-overview" },
    ]},
    anthropic: { text: "$20/user/month seat fee — but misleading. All usage billed separately at token rates on top. Real cost: $60-$250+/user/month depending on intensity. 418+ verified connectors reduce setup friction. Deployment: 1-3 weeks. Anthropic removed bundled tokens from enterprise deals (April 2026), making cost forecasting harder. No included usage — every prompt costs extra. Hidden costs: token consumption can 5-12x the seat price, MCP server hosting for custom connectors.", sources: [
      { label: "Pricing", url: "https://claude.com/pricing" },
      { label: "Token unbundling", url: "https://www.theregister.com/2026/04/16/anthropic_ejects_bundled_tokens_enterprise/" },
    ]},
    google: { text: "Most expensive and complex. Full stack: Workspace ($30-60/user/month) + Looker (starts $60K/year, avg deal $150K/year) + BigQuery ($50K-$200K/year compute) + Vertex AI (token-based). Total: $250K-$800K+/year. Deployment: 3-6 months (Looker alone is 3-6 months for LookML). Requires 3-5+ FTEs (data engineers, LookML developers, cloud architects). LookML is a proprietary modeling language taking weeks to learn. Organizations spend 40-60% of Looker investment on LookML development.", sources: [
      { label: "Looker pricing", url: "https://mammoth.io/blog/looker-pricing/" },
      { label: "BigQuery pricing", url: "https://cloud.google.com/bigquery/pricing" },
      { label: "Vertex AI pricing", url: "https://cloud.google.com/products/gemini-enterprise-agent-platform/pricing" },
    ]},
    kos: "Subscription-based with shared quota. No per-token surprises — predictable monthly cost. Setup: minutes per connector, not weeks. No MCP servers to deploy, no LookML to learn, no infrastructure to manage. Zero engineers required for setup. First insight within minutes of connecting a data source. Total cost of ownership: fraction of any competitor.",
    threat: "low",
  },
  {
    dimension: "Management centralization",
    openai: { text: "4-7 admin surfaces: ChatGPT Admin Console, Global Admin Console, API Platform, API Admin Portal, identity provider (Okta/Entra), optionally Azure OpenAI Portal + Microsoft Purview. Two architecturally distinct SSO systems (ChatGPT workspace-based vs API Platform domain-based). Two separate billing systems (per-seat vs per-token). For data analytics: need ChatGPT + third-party DB tool + external automation platform — 3-5 products to stitch together. No native DB-to-report pipeline.", sources: [
      { label: "Global Admin", url: "https://help.openai.com/en/articles/12289294-global-admin-console" },
      { label: "SSO config", url: "https://help.openai.com/en/articles/9534785-configuring-sso" },
    ]},
    anthropic: { text: "4-7 admin surfaces/APIs: Claude.ai Admin, Anthropic Console, Admin API, Compliance API, Analytics API, Managed Agents Dashboard, MCP server management. Two separate identity domains (claude.ai vs Console). MCP connectors are federated by design — connector reliability depends on third-party hosts. For data analytics: Claude + MCP server hosting + possibly a dedicated BI tool — 2-3 products. Better than OpenAI but still fragmented.", sources: [
      { label: "Admin API", url: "https://platform.claude.com/docs/en/manage-claude/admin-api" },
      { label: "Compliance API", url: "https://support.claude.com/en/articles/13694757-get-started-with-the-claude-enterprise-analytics-api" },
    ]},
    google: { text: "Most fragmented: 6-10 admin surfaces. Cloud Console, Agent Platform, BigQuery Console, Looker Console, Looker Studio (separate product!), Workspace Admin, IAM, Cloud Billing, Cloud Run, Secret Manager. For data analytics: BigQuery + Looker + Vertex AI + Cloud Console — 4-6 products stitched together. Looker and Looker Studio are two separate BI products with different capabilities and different pricing. Single GCP bill but 15+ separately metered services. Cost predictability worst of the three.", sources: [
      { label: "Agent Platform", url: "https://cloud.google.com/products/gemini-enterprise-agent-platform" },
      { label: "Cost attribution", url: "https://www.finout.io/blog/vertex-ai-cost-allocation" },
    ]},
    kos: "One platform. One admin panel. One bill. Connect databases, query, visualize, present, automate, manage users and access — all in the same interface. No external dependencies, no third-party connectors to manage, no infrastructure to maintain. Admin controls, usage analytics, and billing in a single dashboard.",
    threat: "low",
  },
];
