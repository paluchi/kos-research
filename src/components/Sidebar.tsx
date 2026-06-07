import { NavLink } from "react-router-dom";
import {
  Rocket,
  TrendingUp,
  Swords,
  Users,
  ShieldAlert,
  Target,
  BarChart3,
} from "lucide-react";

const sections = [
  {
    label: "Product",
    items: [
      { to: "/pitch", label: "Pitch", icon: Rocket },
      { to: "/positioning", label: "Positioning", icon: Target },
    ],
  },
  {
    label: "Research",
    items: [
      { to: "/market", label: "Market", icon: TrendingUp },
      { to: "/competitors", label: "Competitors", icon: Swords },
      { to: "/insights", label: "Insights", icon: BarChart3 },
      { to: "/personas", label: "Personas", icon: Users },
      { to: "/objections", label: "Objections", icon: ShieldAlert },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className="w-56 shrink-0 border-r border-border bg-surface flex flex-col h-screen">
      <div className="px-5 py-6">
        <span className="text-lg font-semibold tracking-tight text-text">
          KOS Research
        </span>
      </div>

      <nav className="flex-1 px-3 space-y-5 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="px-2 mb-1.5 text-[11px] font-medium uppercase tracking-wider text-text-muted">
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-accent-muted text-accent-hover font-medium"
                          : "text-text-muted hover:text-text hover:bg-surface-hover"
                      }`
                    }
                  >
                    <item.icon size={16} />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-border">
        <p className="text-[11px] text-text-muted">v0.1 — June 2026</p>
      </div>
    </aside>
  );
}
