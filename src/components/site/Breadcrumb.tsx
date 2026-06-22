import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

type Crumb = { label: string; to?: string };

export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 pb-0 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-1 text-xs font-medium text-slate-500/90 dark:text-slate-400/90">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Home className="h-3 w-3" />
            Home
          </Link>
        </li>
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3 text-slate-400/60 dark:text-slate-600/60" />
            {c.to ? (
              <Link to={c.to as any} className="hover:text-slate-900 dark:hover:text-white transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-slate-850 dark:text-slate-200 font-semibold">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
