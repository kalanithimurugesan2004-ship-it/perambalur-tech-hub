import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

type Crumb = { label: string; to?: string };

export function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-4 pb-0 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-1 text-xs font-medium text-primary-foreground/60">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-primary-foreground/90 transition-colors">
            <Home className="h-3 w-3" />
            Home
          </Link>
        </li>
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3 text-primary-foreground/30" />
            {c.to ? (
              <Link to={c.to as any} className="hover:text-primary-foreground/90 transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-primary-foreground/90 font-semibold">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
