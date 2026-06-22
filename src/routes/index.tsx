import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, ShieldCheck, Sparkles, Star, Award, Users, Boxes, BadgeCheck, ShoppingCart, Monitor, Camera, Network, Headphones, RefreshCw, Wrench } from "lucide-react";
import * as Icons from "lucide-react";
import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-shop.jpg";
import techHeroBg from "@/assets/tech-hero-bg.png";
import ownerImg from "@/assets/owner.png";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { ShopGallery, ShopGalleryMarquee } from "@/components/site/ShopGallery";
import { PremiumShowroomShowcase } from "@/components/site/PremiumShowroomShowcase";
import { useI18n } from "@/lib/i18n";
import { BUSINESS, SERVICES, TESTIMONIALS, telLink, whatsappLink } from "@/lib/business";
import { PRODUCT_CATEGORIES } from "@/lib/product-catalog";
import { getCategoryImage } from "@/lib/product-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SRS Computer & Service — Perambalur's Trusted Computer Shop Since 2009" },
      {
        name: "description",
        content:
          "Buy laptops, desktops, printers, CCTV cameras & accessories in Perambalur. Expert repair, networking & AMC services. WhatsApp or call us today.",
      },
      { property: "og:title", content: "SRS Computer & Service — Perambalur" },
      {
        property: "og:description",
        content: "Laptops, desktops, printers, CCTV, networking & repairs in Perambalur since 2009.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const Comp = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Comp) return null;
  return <Comp className={className} />;
}

const categoryColors: Record<string, { gradient: string; text: string; bg: string }> = {
  "laptops": { gradient: "from-blue-600 to-cyan-500", text: "text-blue-500", bg: "hover:border-blue-500/40 hover:shadow-blue-500/10 hover:bg-blue-500/[0.02]" },
  "desktops": { gradient: "from-indigo-600 to-violet-500", text: "text-indigo-500", bg: "hover:border-indigo-500/40 hover:shadow-indigo-500/10 hover:bg-indigo-500/[0.02]" },
  "monitors": { gradient: "from-violet-600 to-fuchsia-500", text: "text-violet-500", bg: "hover:border-violet-500/40 hover:shadow-violet-500/10 hover:bg-violet-500/[0.02]" },
  "printers": { gradient: "from-amber-600 to-orange-500", text: "text-amber-500", bg: "hover:border-amber-500/40 hover:shadow-amber-500/10 hover:bg-amber-500/[0.02]" },
  "printer-inks-toners": { gradient: "from-orange-600 to-red-500", text: "text-orange-500", bg: "hover:border-orange-500/40 hover:shadow-orange-500/10 hover:bg-orange-500/[0.02]" },
  "cctv-cameras": { gradient: "from-emerald-600 to-teal-500", text: "text-emerald-500", bg: "hover:border-emerald-500/40 hover:shadow-emerald-500/10 hover:bg-emerald-500/[0.02]" },
  "dvr-nvr": { gradient: "from-teal-600 to-cyan-500", text: "text-teal-500", bg: "hover:border-teal-500/40 hover:shadow-teal-500/10 hover:bg-teal-500/[0.02]" },
  "networking": { gradient: "from-sky-600 to-blue-500", text: "text-sky-500", bg: "hover:border-sky-500/40 hover:shadow-sky-500/10 hover:bg-sky-500/[0.02]" },
  "ram": { gradient: "from-rose-600 to-pink-500", text: "text-rose-500", bg: "hover:border-rose-500/40 hover:shadow-rose-500/10 hover:bg-rose-500/[0.02]" },
  "ssd-hdd": { gradient: "from-pink-600 to-rose-500", text: "text-pink-500", bg: "hover:border-pink-500/40 hover:shadow-pink-500/10 hover:bg-pink-500/[0.02]" },
  "processors": { gradient: "from-cyan-600 to-blue-500", text: "text-cyan-500", bg: "hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:bg-cyan-500/[0.02]" },
  "motherboards": { gradient: "from-fuchsia-600 to-purple-500", text: "text-fuchsia-500", bg: "hover:border-fuchsia-500/40 hover:shadow-fuchsia-500/10 hover:bg-fuchsia-500/[0.02]" },
  "graphics-cards": { gradient: "from-purple-600 to-indigo-500", text: "text-purple-500", bg: "hover:border-purple-500/40 hover:shadow-purple-500/10 hover:bg-purple-500/[0.02]" },
  "cabinets": { gradient: "from-slate-600 to-zinc-500", text: "text-slate-500", bg: "hover:border-slate-500/40 hover:shadow-slate-500/10 hover:bg-slate-500/[0.02]" },
  "smps": { gradient: "from-yellow-600 to-amber-500", text: "text-yellow-500", bg: "hover:border-yellow-500/40 hover:shadow-yellow-500/10 hover:bg-yellow-500/[0.02]" },
  "ups": { gradient: "from-lime-600 to-green-500", text: "text-lime-500", bg: "hover:border-lime-500/40 hover:shadow-lime-500/10 hover:bg-lime-500/[0.02]" },
  "keyboard-mouse": { gradient: "from-teal-600 to-emerald-500", text: "text-teal-500", bg: "hover:border-teal-500/40 hover:shadow-teal-500/10 hover:bg-teal-500/[0.02]" },
  "adapters": { gradient: "from-blue-600 to-slate-500", text: "text-blue-500", bg: "hover:border-blue-500/40 hover:shadow-blue-500/10 hover:bg-blue-500/[0.02]" },
  "speakers": { gradient: "from-red-600 to-orange-500", text: "text-red-500", bg: "hover:border-red-500/40 hover:shadow-red-500/10 hover:bg-red-500/[0.02]" },
  "cables-connectors": { gradient: "from-emerald-600 to-green-500", text: "text-emerald-500", bg: "hover:border-emerald-500/40 hover:shadow-emerald-500/10 hover:bg-emerald-500/[0.02]" },
  "memory-cards": { gradient: "from-sky-600 to-indigo-500", text: "text-sky-500", bg: "hover:border-sky-500/40 hover:shadow-sky-500/10 hover:bg-sky-500/[0.02]" }
};

function HomePage() {
  const { t, lang } = useI18n();
  const [showAllCategories, setShowAllCategories] = useState(false);



  useEffect(() => {
    // Scroll to the top on load/refresh to ensure it starts at the beginning
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="home" className="relative isolate overflow-hidden lg:h-[calc(100vh-7.25rem)] lg:min-h-[580px] lg:flex py-10 lg:py-0">
        <div className="absolute inset-0 -z-10">
          <img
            src={techHeroBg}
            alt=""
            width={1600}
            height={1024}
            className="hero-3d-bg h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 gradient-hero opacity-95" />
        </div>

        <div className="mx-auto max-w-7xl px-4 w-full sm:px-6 lg:px-8 py-4 lg:py-6 h-full flex flex-col justify-between gap-4 lg:gap-6">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] w-full">
            
            {/* LEFT SIDE (55%) */}
            <div className="animate-fade-up text-slate-800 dark:text-slate-200 lg:pr-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#613ed3]/10 bg-indigo-50/50 px-4 py-1.5 text-xs font-bold text-[#613ed3] dark:text-indigo-400 dark:bg-indigo-950/40 dark:border-indigo-500/20 backdrop-blur shadow-soft">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                Trusted since 2009 • Perambalur
              </span>
              
              {lang === "ta" ? (
                <h1 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-display text-slate-900 dark:text-white">
                  பெரம்பலூரின் நம்பகமான <br />
                  கணினி விற்பனை மற்றும் <br />
                  <span className="text-gradient-purple font-black">
                    சேவை மையம்
                  </span>
                </h1>
              ) : (
                <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3rem] xl:text-[3.5rem] font-display text-slate-900 dark:text-white">
                  Perambalur's Trusted <br />
                  Computer Sales & <br />
                  <span className="text-gradient-purple font-black">
                    Service Center
                  </span>
                </h1>
              )}

              <p className="mt-4 max-w-xl text-sm text-slate-500 dark:text-slate-400 sm:text-base leading-relaxed font-medium">
                {lang === "ta" 
                  ? "கணினிகள், லேப்டாப்புகள், பிரிண்டர்கள், சிசிடிவி கேமராக்கள், நெட்வொர்க்கிங், பாகங்கள், புதுப்பிக்கப்பட்ட அமைப்புகள் மற்றும் தொழில்முறை பழுதுபார்ப்பு சேவைகளுக்கான உங்களின் ஒரே தீர்வு."
                  : "Your one-stop solution for computers, laptops, printers, CCTV cameras, networking, accessories, refurbished systems & professional repair services."}
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba56] px-6 py-3.5 text-xs sm:text-sm font-black text-white shadow-[0_0_20px_-3px_rgba(37,211,102,0.5)] transition duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current mr-0.5" fill="currentColor">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84a11.77 11.77 0 0 0 1.6 5.94L0 24l6.36-1.66a11.83 11.83 0 0 0 5.68 1.45h.01c6.54 0 11.84-5.3 11.84-11.84a11.77 11.77 0 0 0-3.47-8.47Zm-8.48 18.2h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.78.99 1-3.68-.23-.38a9.82 9.82 0 0 1-1.5-5.19c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.89 6.97c0 5.44-4.42 9.85-9.86 9.85Zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.91-2.19-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.84 1.21 3.04c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.49 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
                  </svg>
                  {t("cta.whatsapp")}
                </a>
                <a
                  href={telLink(BUSINESS.phones[0])}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#cbf220] hover:bg-lime-400 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[#171e00] shadow-[0_4px_14px_rgba(203,242,32,0.3)] transition duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <Phone className="h-4 w-4" />
                  {t("cta.call")}
                </a>
                <a
                  href={BUSINESS.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md hover:bg-white/60 dark:hover:bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-black text-slate-800 dark:text-white transition duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <MapPin className="h-4 w-4 text-[#613ed3] dark:text-cyan-400" />
                  {t("cta.visit")}
                </a>
              </div>

              {/* Glass Stats Row */}
              <div className="mt-10 p-4 sm:p-5 rounded-3xl border border-gray-200/50 dark:border-white/5 bg-white/45 dark:bg-slate-950/40 backdrop-blur-md grid grid-cols-2 lg:grid-cols-4 gap-6 shadow-2xl">
                {[
                  { v: "15+", label: lang === "ta" ? "சேவை ஆண்டுகள்" : "Years of Service", icon: <Award className="h-5.5 w-5.5 text-emerald-500" /> },
                  { v: "5000+", label: lang === "ta" ? "மகிழ்ச்சியான வாடிக்கையாளர்கள்" : "Happy Customers", icon: <Users className="h-5.5 w-5.5 text-indigo-500" /> },
                  { v: "100+", label: lang === "ta" ? "தயாரிப்பு வகைகள்" : "Product Range", icon: <ShoppingCart className="h-5.5 w-5.5 text-amber-500" /> },
                  { v: "20+", label: lang === "ta" ? "நம்பகமான பிராண்டுகள்" : "Trusted Brands", icon: <ShieldCheck className="h-5.5 w-5.5 text-purple-500" /> },
                ].map((s, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 px-2">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gray-200 dark:border-white/10 bg-slate-100/50 dark:bg-white/5 shadow-soft">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-none tracking-tight">{s.v}</p>
                      <p className="text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 mt-1 leading-none">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE (45%) */}
            <div className="relative w-full overflow-visible">
              <PremiumShowroomShowcase />
            </div>

          </div>

          {/* Feature Services Bar Capsule */}
          <div className="w-full mt-10 p-8 md:p-10 rounded-[32px] border border-white/5 bg-[#1f1b2c] text-white shadow-2xl grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
            {[
              { title: lang === "ta" ? "விற்பனை & சேவை" : "Sales & Service", desc: lang === "ta" ? "அனைத்து முன்னணி பிராண்டுகளும்" : "All leading brands", icon: <Monitor className="h-5 w-5 text-cyan-400" /> },
              { title: lang === "ta" ? "சிசிடிவி நிறுவல்" : "CCTV Installation", desc: lang === "ta" ? "எச்டி & ஐபி கேமராக்கள்" : "HD & IP Cameras", icon: <Camera className="h-5 w-5 text-purple-400" /> },
              { title: lang === "ta" ? "நெட்வொர்க்கிங் தீர்வுகள்" : "Networking Solutions", desc: lang === "ta" ? "வைஃபை, லேன், ரவுட்டர்கள்" : "WiFi, LAN, Routers", icon: <Network className="h-5 w-5 text-blue-400" /> },
              { title: lang === "ta" ? "துணைப் பொருட்கள்" : "Accessories", desc: lang === "ta" ? "அசல் & தரம்" : "Genuine & Quality", icon: <Headphones className="h-5 w-5 text-emerald-400" /> },
              { title: lang === "ta" ? "புதுப்பிக்கப்பட்ட அமைப்புகள்" : "Refurbished Systems", desc: lang === "ta" ? "சிறந்த செயல்திறன்" : "Best Performance", icon: <RefreshCw className="h-5 w-5 text-amber-400 animate-spin-slow" /> },
              { title: lang === "ta" ? "இடத்திற்கே வந்து சேவை" : "On-site Support", desc: lang === "ta" ? "விரைவான & நம்பகமான" : "Quick & Reliable", icon: <Wrench className="h-5 w-5 text-rose-400" /> }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 px-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/10 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-black text-white leading-none">{item.title}</p>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 mt-1 leading-none">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BRAND LOGOS MARQUEE */}
      <BrandMarquee />

      {/* STORE GALLERY */}
      <ShopGalleryMarquee />

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 border-b border-gray-200/50 dark:border-white/5 pb-8 mb-10">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase block mb-2 text-[#613ed3] dark:text-indigo-400">
              {t("nav.services")}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
              {t("section.services")}
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t("section.servicesSub")}</p>
          </div>
          <Link to="/services" className="hidden shrink-0 items-center gap-1 text-sm font-bold text-[#613ed3] dark:text-indigo-400 hover:underline sm:inline-flex">
            {t("cta.viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 8).map((s) => (
            <div key={s.key} className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 glass-card glow-hover">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">{lang === "ta" ? s.ta : s.en}</h3>
              <span className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#613ed3]/5 transition group-hover:scale-150" />
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section id="products" className="bg-[#fcf9f8] dark:bg-[#0b0c16] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end border-b border-gray-200/50 dark:border-white/5 pb-8 mb-10">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase block mb-2 text-[#613ed3] dark:text-indigo-400">
                {t("nav.products")}
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
                {t("section.products")}
              </h2>
              <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{t("section.productsSub")}</p>
            </div>
            <Link to="/products" className="hidden shrink-0 items-center gap-1 text-sm font-bold text-[#613ed3] dark:text-indigo-400 hover:underline sm:inline-flex">
              {t("cta.viewAll")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {(showAllCategories ? PRODUCT_CATEGORIES : PRODUCT_CATEGORIES.slice(0, 6)).map((c) => (
              <Link
                key={c.key}
                to="/products"
                hash={c.key}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${categoryColors[c.key]?.bg || "hover:border-primary/40 hover:shadow-primary/10"}`}
              >
                <div className="flex items-start justify-between">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${categoryColors[c.key]?.gradient || "gradient-hero"} text-white shadow-soft transition-transform group-hover:scale-105 duration-300`}>
                    <Icon name={c.icon} className="h-7 w-7" />
                  </span>
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                    {t("badge.inStock")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="inline-flex items-center gap-2.5 rounded-full bg-primary hover:bg-primary/95 px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:scale-[1.02] shadow-elevated cursor-pointer"
            >
              {showAllCategories
                ? (lang === "ta" ? "குறைவான வகைகளைக் காட்டு" : "Show Less Categories")
                : (lang === "ta" ? `அனைத்து ${PRODUCT_CATEGORIES.length} வகைகளையும் காட்டு` : `Show All ${PRODUCT_CATEGORIES.length} Categories`)}
              <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${showAllCategories ? "rotate-90" : ""}`} />
            </button>
          </div>
        </div>
      </section>



      {/* ABOUT OWNER */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative mx-auto max-w-xs sm:max-w-sm lg:mx-0">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-white dark:bg-[#081127] border border-gray-200/50 dark:border-white/10 shadow-elevated relative group">
              <img
                src={ownerImg}
                alt="R. C. Ramalingam"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-[#cbf220] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#171e00] mb-2 shadow-soft">
                  <Sparkles className="h-3 w-3" /> {t("hero.eyebrow")}
                </span>
                <p className="text-2xl font-black tracking-tight text-white">{BUSINESS.owner}</p>
                <p className="text-sm font-medium text-white/85">Founder · SRS Computer & Service</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white dark:bg-[#081127] p-5 border border-gray-200/50 dark:border-white/10 shadow-elevated sm:block transition-transform hover:scale-105 duration-300">
              <p className="text-3xl font-black text-[#613ed3] dark:text-indigo-400">15+</p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{t("stats.years")}</p>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase block mb-2 text-[#613ed3] dark:text-indigo-400">
              {t("nav.about")}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900 dark:text-white">
              {t("section.about")}
            </h2>
            <p className="mt-5 text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{t("section.aboutBody")}</p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#613ed3] hover:bg-[#4f46e5] px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02] shadow-md"
            >
              {t("nav.about")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#1f1b2c] py-16 text-white border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase block mb-2 text-[#cbf220]">
              {t("section.testimonials")}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
              {lang === "ta" ? "வாடிக்கையாளர் கருத்துக்கள்" : "What Our Clients Say"}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((tm, i) => {
              const avatarColors = [
                "bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-amber-500"
              ];
              const initial = tm.name.charAt(0).toUpperCase();
              return (
                <figure key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
                  {/* Decorative quote watermark */}
                  <span className="pointer-events-none absolute -top-2 -left-1 select-none text-[8rem] font-black leading-none text-white/5">
                    ❝
                  </span>
                  <div className="relative">
                    <div className="flex items-center gap-1 text-[#cbf220]">
                      {[0,1,2,3,4].map((j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                    </div>
                    <blockquote className="mt-4 text-sm leading-relaxed text-slate-300">
                      "{lang === "ta" ? tm.quote.ta : tm.quote.en}"
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                      {/* Avatar initial circle */}
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-black text-white ${avatarColors[i % avatarColors.length]}`}>
                        {initial}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{tm.name}</p>
                        <p className="text-xs text-slate-400">{lang === "ta" ? tm.role.ta : tm.role.en}</p>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#613ed3] to-[#4f46e5] px-8 py-14 text-white shadow-elevated sm:px-14">
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                {lang === "ta" ? "உங்களுக்கு உதவ தயாராக இருக்கிறோம்." : "We're here to help you."}
              </h3>
              <p className="mt-3 text-indigo-100">
                {lang === "ta"
                  ? "WhatsApp அல்லது அழைப்பு மூலம் இலவசமாக கேளுங்கள் — ஆலோசனை இலவசம்."
                  : "Reach out via WhatsApp or call for a free consultation — no obligation."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#613ed3] shadow-md transition hover:scale-[1.02] hover:bg-slate-50 cursor-pointer"
              >
                {t("cta.whatsapp")}
              </a>
              <a
                href={telLink(BUSINESS.phones[0])}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10 cursor-pointer animate-float-soft"
              >
                <Phone className="h-4 w-4" /> {t("cta.call")}
              </a>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-[#cbf220]/20 blur-3xl" />
        </div>
      </section>
    </>
  );
}
