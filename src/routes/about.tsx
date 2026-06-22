import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, ShieldCheck, Heart, Sparkles, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BUSINESS } from "@/lib/business";
import { PRODUCT_SHOWCASE } from "@/lib/shop-images";
import ownerImg from "@/assets/owner.png";
import { StreetViewMap } from "@/components/site/StreetViewMap";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About R. C. Ramalingam — SRS Computer & Service, Perambalur" },
      {
        name: "description",
        content:
          "Founded in 2009 by R. C. Ramalingam, SRS Computer & Service has served Perambalur for 15+ years with honest pricing and trusted IT solutions.",
      },
      { property: "og:title", content: "About — SRS Computer & Service" },
      { property: "og:description", content: "15+ years of trust in Perambalur. Meet R. C. Ramalingam." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, en: "Honest Pricing", ta: "நேர்மையான விலை" },
  { icon: Wrench, en: "Skilled Service", ta: "திறமையான சேவை" },
  { icon: Heart, en: "Local First", ta: "உள்ளூர் முதல்" },
  { icon: Sparkles, en: "Genuine Products", ta: "அசல் தயாரிப்புகள்" },
];

function AboutPage() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="relative isolate overflow-hidden gradient-hero text-slate-800 dark:text-slate-200">
        <Breadcrumb crumbs={[{ label: t("nav.about") }]} />
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#613ed3] dark:text-indigo-400 font-mono">{t("nav.about")}</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-white font-display">{t("section.about")}</h1>
          <p className="mt-5 max-w-3xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t("section.aboutBody")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-[0.75fr_1.4fr] items-start">

          {/* Founder Photo — large & aesthetic */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Decorative glow ring */}
            <div className="relative w-full max-w-[340px] lg:max-w-[340px] mx-auto lg:mx-0">
              {/* Gradient accent behind card */}
              <div
                className="absolute -inset-3 rounded-[2.5rem] opacity-60 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary)/0.55) 0%, hsl(var(--secondary)/0.45) 100%)",
                }}
              />
              {/* Photo card */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-2xl border border-white/10 group">
                <img
                  src={ownerImg}
                  alt={BUSINESS.owner}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Deep gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                {/* Name block */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-3xl font-black tracking-tight text-white drop-shadow-lg">
                    {BUSINESS.owner}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/70 tracking-wide uppercase">
                    Founder · Est. {BUSINESS.established}
                  </p>
                </div>
                {/* Floating "Est. 2009" badge */}
                <div
                  className="absolute top-5 right-5 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md"
                  style={{ background: "hsl(var(--primary)/0.75)" }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Est. {BUSINESS.established}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl text-gradient">
              {lang === "ta" ? "எங்கள் கதை" : "Our story"}
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {lang === "ta"
                  ? "2009-ல் சிறிய கடையாகத் தொடங்கி, SRS Computer & Service இன்று பெரம்பலூரின் மிக நம்பகமான தொழில்நுட்ப கடைகளில் ஒன்றாக மாறியுள்ளது. கணினிகள், லேப்டாப்புகள், பிரிண்டர்கள், சிசிடிவி உட்பட பல தயாரிப்புகளுக்கு பள்ளிகள், அலுவலகங்கள், கடைகள் மற்றும் வீடுகள் எங்களை நம்பி வருகின்றன."
                  : "Starting as a small shop in 2009, SRS Computer & Service has grown into one of Perambalur's most trusted technology stores. Schools, offices, shops and homes rely on us for computers, laptops, printers, CCTV and everything in between."}
              </p>
              <p>
                {lang === "ta"
                  ? "எங்கள் வெற்றியின் ரகசியம் — நேர்மையான விலை, தரமான தயாரிப்புகள், விரைவான சேவை மற்றும் வாடிக்கையாளரை குடும்பமாகப் பார்க்கும் பழக்கம்."
                  : "Our secret is simple — honest pricing, quality products, fast service, and treating every customer like family."}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {VALUES.map((v, i) => (
                <div key={i} className="group rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-5 glass-card glow-hover">
                  <v.icon className="h-6 w-6 text-primary dark:text-[#cbf220] transition-transform duration-300 group-hover:scale-110" />
                  <p className="mt-3 text-sm font-bold text-slate-800 dark:text-slate-200">{lang === "ta" ? v.ta : v.en}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl p-6 sm:grid-cols-4 glass-card border border-gray-200/40 dark:border-white/5 shadow-soft">
              {[
                { v: "15+", k: "stats.years", Icon: Award },
                { v: "5000+", k: "stats.customers", Icon: Users },
                { v: "100+", k: "stats.products", Icon: ShieldCheck },
                { v: "20+", k: "stats.brands", Icon: Sparkles },
              ].map((s) => (
                <div key={s.k}>
                  <s.Icon className="mb-2 h-5 w-5 text-[#613ed3] dark:text-[#cbf220]" />
                  <p className="text-2xl font-black text-slate-800 dark:text-slate-200 tracking-tight">{s.v}</p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{t(s.k)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — Trust Badges */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-[#613ed3] dark:text-indigo-400 font-mono mb-6">Why SRS?</p>
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              color: "text-emerald-500 bg-emerald-500/10",
              title: lang === "ta" ? "அசல் தயாரிப்புகள் மட்டுமே" : "Genuine Products Only",
              desc: lang === "ta"
                ? "நேரடி விற்பனையாளர்களிடமிருந்து வாங்கப்பட்ட அசல் தயாரிப்புகள் மட்டுமே விற்கிறோம்."
                : "We sell only brand-authorized products — never grey market or counterfeit.",
            },
            {
              icon: Award,
              color: "text-primary bg-primary/10",
              title: lang === "ta" ? "15 ஆண்டு அனுபவம்" : "15-Year Track Record",
              desc: lang === "ta"
                ? "2009 முதல் பெரம்பலூர் மக்களுக்கு நம்பகமான சேவை வழங்கி வருகிறோம்."
                : "Serving Perambalur since 2009 — a name thousands of families trust.",
            },
            {
              icon: Sparkles,
              color: "text-amber-500 bg-amber-500/10",
              title: lang === "ta" ? "இடத்திற்கே வந்து சேவை" : "On-Site Service Available",
              desc: lang === "ta"
                ? "வீடு, கடை மற்றும் அலுவலகத்திற்கு வந்து பழுதுபார்ப்பு மற்றும் நிறுவல் செய்கிறோம்."
                : "We come to your home, shop, or office — repairs & installations at your doorstep.",
            },
          ].map((badge, i) => (
            <div key={i} className="flex gap-4 rounded-2xl glass-card p-6 shadow-soft glow-hover border border-gray-200/50 dark:border-white/10">
              <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${badge.color}`}>
                <badge.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-bold text-slate-800 dark:text-slate-100">{badge.title}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#efe7e3]/30 dark:bg-[#0b0c16]/30 py-10 sm:py-16 border-t border-gray-200/50 dark:border-white/5 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#613ed3] dark:text-indigo-400 font-mono">{t("nav.products")}</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl text-slate-900 dark:text-white font-display">
            {lang === "ta" ? "கடையில் கிடைக்கும் தயாரிப்புகள்" : "Products available in our store"}
          </h2>
          <p className="mt-3 max-w-2xl text-slate-500 dark:text-slate-400 font-medium">
            {lang === "ta"
              ? "எங்கள் கடையில் உள்ள உண்மையான தயாரிப்பு புகைப்படங்கள் — பெயருக்கு ஏற்ப வகைப்படுத்தப்பட்டுள்ளன."
              : "Product images matched to each item we sell — laptops, CCTV, printers, and more."}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRODUCT_SHOWCASE.map((p) => (
              <article
                key={p.key}
                className="group overflow-hidden rounded-[1.5rem] glass-card glow-hover border border-gray-200/50 dark:border-white/10 transition duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-3 border-b border-gray-200/50 dark:border-white/10">
                  <img
                    src={p.image}
                    alt={p.en}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 py-3 bg-white/60 dark:bg-slate-950/60">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">{lang === "ta" ? p.ta : p.en}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
