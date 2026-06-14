import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, ShieldCheck, Heart, Sparkles, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BUSINESS } from "@/lib/business";
import { PRODUCT_SHOWCASE } from "@/lib/shop-images";
import ownerImg from "@/assets/owner.png";

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
      <section className="relative isolate overflow-hidden gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("nav.about")}</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">{t("section.about")}</h1>
          <p className="mt-5 max-w-3xl text-primary-foreground/85 leading-relaxed">{t("section.aboutBody")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.4fr]">
          <div className="mx-auto w-full max-w-[240px] sm:max-w-[280px] lg:mx-0">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-card border border-border/80 shadow-elevated relative group">
            <img
              src={ownerImg}
              alt={BUSINESS.owner}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 text-white">
              <p className="text-2xl font-black tracking-tight text-white">{BUSINESS.owner}</p>
              <p className="text-sm font-medium text-white/80">Founder · Est. {BUSINESS.established}</p>
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
                <div key={i} className="group rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-5 glass-card glow-hover">
                  <v.icon className="h-6 w-6 text-secondary transition-transform duration-300 group-hover:scale-110" />
                  <p className="mt-3 text-sm font-bold">{lang === "ta" ? v.ta : v.en}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 rounded-3xl bg-muted/40 p-6 sm:grid-cols-4">
              {[
                { v: "15+", k: "stats.years", Icon: Award },
                { v: "5000+", k: "stats.customers", Icon: Users },
                { v: "100+", k: "stats.products", Icon: ShieldCheck },
                { v: "20+", k: "stats.brands", Icon: Sparkles },
              ].map((s) => (
                <div key={s.k}>
                  <s.Icon className="mb-2 h-5 w-5 text-primary" />
                  <p className="text-2xl font-black tracking-tight">{s.v}</p>
                  <p className="text-xs font-medium text-muted-foreground">{t(s.k)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("nav.products")}</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl text-gradient">
            {lang === "ta" ? "கடையில் கிடைக்கும் தயாரிப்புகள்" : "Products available in our store"}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {lang === "ta"
              ? "எங்கள் கடையில் உள்ள உண்மையான தயாரிப்பு புகைப்படங்கள் — பெயருக்கு ஏற்ப வகைப்படுத்தப்பட்டுள்ளன."
              : "Product images matched to each item we sell — laptops, CCTV, printers, and more."}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRODUCT_SHOWCASE.map((p) => (
              <article
                key={p.key}
                className="group overflow-hidden rounded-[1.5rem] border border-border/80 bg-card shadow-soft transition hover:-translate-y-0.5 hover:shadow-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.en}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 py-3">
                  <h3 className="text-sm font-bold">{lang === "ta" ? p.ta : p.en}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
