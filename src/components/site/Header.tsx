import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Globe, Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";
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
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const getLabel = (key: string) => {
    if (key === "nav.about") {
      return lang === "en" ? "About Us" : "எங்களைப் பற்றி";
    }
    return t(key);
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        scrolled 
          ? "bg-[#fcf9f8]/90 border-gray-200/50 shadow-md backdrop-blur-xl py-3 dark:bg-[#0b0c16]/90 dark:border-white/5" 
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between gap-4">
          
          {/* Left: Logo */}
          <Link to="/" className="flex shrink-0 items-center">
            <div className="rounded-2xl bg-white px-4 py-2 flex items-center h-12 shadow-soft border border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300">
              <img
                src={`${logoImg}?v=3`}
                alt="SRS Technology Solutions"
                className="h-8 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Center: Main Navigation */}
          <nav className="hidden items-center gap-1.5 md:flex rounded-full bg-slate-900/5 dark:bg-white/5 p-1 border border-slate-900/5 dark:border-white/5 backdrop-blur-md">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/" && activeSection === "home"
                  : pathname === item.to || (pathname === "/" && sectionByRoute[item.to] === activeSection);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`rounded-full px-4.5 py-1.5 text-xs lg:text-sm transition-all duration-300 ${
                    active
                      ? "bg-[#613ed3] text-white font-bold shadow-[0_4px_12px_rgba(97,62,211,0.25)]"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/5 font-semibold"
                  }`}
                >
                  {getLabel(item.key)}
                </Link>
              );
            })}
          </nav>

          {/* Right side: Switch Language + Call CTA */}
          <div className="flex items-center gap-2.5">
            {/* Language + Search Switcher Capsule */}
            <div className="inline-flex items-center rounded-full bg-slate-900/5 dark:bg-slate-900/60 border border-slate-900/5 dark:border-white/5 p-1 text-slate-600 dark:text-slate-300">
              <button
                onClick={() => {
                  const searchInput = document.querySelector('input[type="search"]');
                  if (searchInput) {
                    searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
                    (searchInput as HTMLInputElement).focus();
                  }
                }}
                className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-900/5 dark:hover:bg-white/5 transition-all cursor-pointer"
                aria-label="Search Products"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
              <div className="h-4.5 w-px bg-slate-900/10 dark:bg-white/10 mx-1" />
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold transition-all cursor-pointer select-none ${
                  lang === "en" ? "bg-white text-[#613ed3] shadow-sm dark:bg-white/10 dark:text-cyan-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ta")}
                className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold transition-all cursor-pointer select-none ${
                  lang === "ta" ? "bg-white text-[#613ed3] shadow-sm dark:bg-white/10 dark:text-cyan-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-200"
                }`}
              >
                தமிழ்
              </button>
            </div>

            {/* Call Now button */}
            <a
              href={telLink(BUSINESS.phones[0])}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#cbf220] hover:bg-lime-400 px-5 py-2.5 text-xs lg:text-sm font-extrabold text-[#171e00] shadow-[0_4px_14px_rgba(203,242,32,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              aria-label="Call Now"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Now
            </a>

            {/* Mobile Hamburger menu */}
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-gray-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 transition hover:bg-slate-200 dark:hover:bg-white/10 md:hidden cursor-pointer"
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 dark:border-white/5 bg-[#fcf9f8]/95 dark:bg-slate-950/95 backdrop-blur-xl md:hidden animate-fade-up">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    active 
                      ? "bg-[#613ed3] text-white font-bold border border-indigo-500/30" 
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-900/5 dark:hover:bg-white/5"
                  }`}
                >
                  {getLabel(item.key)}
                </Link>
              );
            })}
            
            {/* Mobile Call CTA */}
            <a
              href={telLink(BUSINESS.phones[0])}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#cbf220] hover:bg-lime-400 py-3 text-sm font-bold text-[#171e00] shadow-[0_4px_12px_rgba(203,242,32,0.25)] active:scale-95 transition"
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
