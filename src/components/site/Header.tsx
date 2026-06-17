import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import logoImg from "@/assets/logo-cropped.png";
import { BUSINESS, telLink } from "@/lib/business";

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
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("home");
      return;
    }

    const sectionIds = ["home", "services", "products", "about"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.25, 0.5, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const sectionByRoute: Record<string, string> = {
    "/": "home",
    "/services": "services",
    "/products": "products",
    "/about": "about",
    "/contact": "contact",
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center">
          <div className="rounded-full bg-slate-950 px-4 py-2 flex items-center h-12 shadow-sm border border-white/5 hover:bg-slate-900 transition duration-200">
            <img
              src={`${logoImg}?v=3`}
              alt="SRS Technology Solutions"
              className="h-8 w-auto object-contain"
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/" && activeSection === "home"
                : pathname === item.to || (pathname === "/" && sectionByRoute[item.to] === activeSection);
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
          {/* Call Now CTA */}
          <a
            href={telLink(BUSINESS.phones[0])}
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm transition hover:bg-primary/90 hover:scale-[1.03]"
            aria-label="Call Now"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Now
          </a>
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
            {/* Mobile Call CTA */}
            <a
              href={telLink(BUSINESS.phones[0])}
              className="mt-1 inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-3 text-sm font-bold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call Now — +91 {BUSINESS.phones[0]}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
