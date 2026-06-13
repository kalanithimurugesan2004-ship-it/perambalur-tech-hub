import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/services", key: "nav.services" },
  { to: "/products", key: "nav.products" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-soft">
            <Cpu className="h-5 w-5" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-base font-extrabold tracking-tight text-foreground">SRS Computer</span>
            <span className="truncate text-[11px] font-semibold uppercase tracking-wider text-secondary">& Service</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-primary-soft text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle className="hidden sm:inline-flex" />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            <LanguageToggle className="self-start sm:hidden" />
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
                    active ? "bg-primary-soft text-primary" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {t(item.key)}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
