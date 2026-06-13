import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, ShieldCheck, Sparkles, Star, Award, Users, Boxes, BadgeCheck } from "lucide-react";
import * as Icons from "lucide-react";
import heroImg from "@/assets/hero-shop.jpg";
import ownerImg from "@/assets/owner.png";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { useI18n } from "@/lib/i18n";
import { BUSINESS, SERVICES, CATEGORIES, TESTIMONIALS, telLink, whatsappLink } from "@/lib/business";

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

function HomePage() {
  const { t, lang } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt=""
            width={1600}
            height={1024}
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 gradient-hero opacity-95" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-fade-up text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                {t("hero.eyebrow")}
              </span>
              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {t("hero.headline")}
              </h1>
              <p className="mt-5 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
                {t("hero.subheadline")}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-glow transition hover:scale-[1.02]"
                >
                  {t("cta.whatsapp")}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={telLink(BUSINESS.phones[0])}
                  className="inline-flex items-center gap-2 rounded-full gradient-cta px-5 py-3 text-sm font-bold text-secondary-foreground shadow-elevated transition hover:scale-[1.02]"
                >
                  <Phone className="h-4 w-4" />
                  {t("cta.call")}
                </a>
                <a
                  href={BUSINESS.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-bold text-primary-foreground backdrop-blur transition hover:bg-primary-foreground/15"
                >
                  <MapPin className="h-4 w-4" />
                  {t("cta.visit")}
                </a>
              </div>

              <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
                {[
                  { v: "15+", k: "stats.years", Icon: Award },
                  { v: "5000+", k: "stats.customers", Icon: Users },
                  { v: "100+", k: "stats.products", Icon: Boxes },
                  { v: "20+", k: "stats.brands", Icon: BadgeCheck },
                ].map((s) => (
                  <div key={s.k}>
                    <s.Icon className="mb-2 h-5 w-5 text-secondary" />
                    <dt className="text-2xl font-black tracking-tight">{s.v}</dt>
                    <dd className="text-xs font-medium text-primary-foreground/70">{t(s.k)}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative hidden lg:block">
              <div className="animate-float-soft relative overflow-hidden rounded-3xl border border-primary-foreground/20 shadow-elevated">
                <img src={heroImg} alt="SRS Computer & Service shop interior" width={1600} height={1024} className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 max-w-[260px] rounded-2xl bg-card p-4 shadow-elevated">
                <div className="flex items-center gap-2 text-secondary">
                  {[0,1,2,3,4].map((i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-2 text-sm font-semibold text-card-foreground">"Honest pricing. Quick service."</p>
                <p className="mt-1 text-xs text-muted-foreground">— Verified customer, Perambalur</p>
              </div>
              <div className="absolute -right-6 top-8 rounded-2xl bg-card p-4 shadow-elevated">
                <ShieldCheck className="h-6 w-6 text-accent" />
                <p className="mt-1 text-sm font-bold text-card-foreground">Genuine Products</p>
                <p className="text-xs text-muted-foreground">Brand warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND LOGOS MARQUEE */}
      <BrandMarquee />

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("nav.services")}</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl text-gradient">{t("section.services")}</h2>
            <p className="mt-3 text-muted-foreground">{t("section.servicesSub")}</p>
          </div>
          <Link to="/services" className="hidden shrink-0 items-center gap-1 text-sm font-bold text-primary hover:underline sm:inline-flex">
            {t("cta.viewAll")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.slice(0, 8).map((s) => (
            <div key={s.key} className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 glass-card glow-hover">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-base font-bold">{lang === "ta" ? s.ta : s.en}</h3>
              <span className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-secondary/10 transition group-hover:scale-150" />
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("nav.products")}</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl text-gradient">{t("section.products")}</h2>
              <p className="mt-3 text-muted-foreground">{t("section.productsSub")}</p>
            </div>
            <Link to="/products" className="hidden shrink-0 items-center gap-1 text-sm font-bold text-primary hover:underline sm:inline-flex">
              {t("cta.viewAll")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.slice(0, 6).map((c) => (
              <Link
                key={c.key}
                to="/products"
                hash={c.key}
                className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm p-6 glass-card glow-hover"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-hero text-primary-foreground shadow-soft">
                    <Icon name={c.icon} className="h-7 w-7" />
                  </span>
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
                    {t("badge.inStock")}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{lang === "ta" ? c.ta : c.en}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.products.length}+ items</p>
                <p className="mt-3 line-clamp-2 text-xs text-muted-foreground/80">
                  {c.products.slice(0, 4).join(" · ")}
                </p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT OWNER */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-card border border-border/80 shadow-elevated relative group">
              <img
                src={ownerImg}
                alt="R. C. Ramalingam"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-accent/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground mb-2 shadow-soft">
                  <Sparkles className="h-3 w-3" /> {t("hero.eyebrow")}
                </span>
                <p className="text-2xl font-black tracking-tight text-white">{BUSINESS.owner}</p>
                <p className="text-sm font-medium text-white/85">Founder · SRS Computer & Service</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-card p-5 border border-border shadow-elevated sm:block transition-transform hover:scale-105 duration-300">
              <p className="text-3xl font-black text-primary">15+</p>
              <p className="text-xs font-medium text-muted-foreground">{t("stats.years")}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("nav.about")}</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl text-gradient">{t("section.about")}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{t("section.aboutBody")}</p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
            >
              {t("nav.about")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("section.testimonials")}</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{t("section.testimonials")}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((tm, i) => (
              <figure key={i} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur">
                <div className="flex items-center gap-1 text-secondary">
                  {[0,1,2,3,4].map((j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-primary-foreground/90">
                  "{lang === "ta" ? tm.quote.ta : tm.quote.en}"
                </blockquote>
                <figcaption className="mt-5 border-t border-primary-foreground/15 pt-4">
                  <p className="text-sm font-bold">{tm.name}</p>
                  <p className="text-xs text-primary-foreground/65">{lang === "ta" ? tm.role.ta : tm.role.en}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-cta px-8 py-14 text-secondary-foreground shadow-elevated sm:px-14">
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                {lang === "ta" ? "உங்களுக்கு உதவ தயாராக இருக்கிறோம்." : "We're here to help you."}
              </h3>
              <p className="mt-3 text-secondary-foreground/90">
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
                className="inline-flex items-center gap-2 rounded-full bg-secondary-foreground px-5 py-3 text-sm font-bold text-secondary transition hover:scale-[1.02]"
              >
                {t("cta.whatsapp")}
              </a>
              <a
                href={telLink(BUSINESS.phones[0])}
                className="inline-flex items-center gap-2 rounded-full border-2 border-secondary-foreground/40 px-5 py-3 text-sm font-bold text-secondary-foreground transition hover:bg-secondary-foreground/10"
              >
                <Phone className="h-4 w-4" /> {t("cta.call")}
              </a>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        </div>
      </section>
    </>
  );
}
