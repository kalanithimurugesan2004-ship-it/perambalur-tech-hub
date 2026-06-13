import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CATEGORIES, whatsappLink } from "@/lib/business";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Laptops, Printers, CCTV, Components | SRS Perambalur" },
      {
        name: "description",
        content:
          "Browse laptops (Acer, Dell), printers (Epson, Canon), CCTV (CP Plus, Dahua), monitors, RAM, SSD, networking & accessories in Perambalur.",
      },
      { property: "og:title", content: "Products — SRS Computer & Service" },
      { property: "og:description", content: "Full product range available in Perambalur. WhatsApp to enquire." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const Comp = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Comp) return null;
  return <Comp className={className} />;
}

function ProductsPage() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="relative isolate overflow-hidden gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("nav.products")}</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">{t("section.products")}</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">{t("section.productsSub")}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <a
                key={c.key}
                href={`#${c.key}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur transition hover:bg-primary-foreground/20"
              >
                <Icon name={c.icon} className="h-3.5 w-3.5 text-secondary" />
                {lang === "ta" ? c.ta : c.en}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {CATEGORIES.map((c) => (
            <section key={c.key} id={c.key} className="scroll-mt-24">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-hero text-primary-foreground shadow-soft">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <div className="min-w-0">
                  <h2 className="truncate text-2xl font-black tracking-tight sm:text-3xl">
                    {lang === "ta" ? c.ta : c.en}
                  </h2>
                  <p className="text-sm text-muted-foreground">{c.products.length} {lang === "ta" ? "தயாரிப்புகள்" : "items"}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {c.products.map((p) => {
                  const isRefurb = /refurb/i.test(p);
                  return (
                    <article
                      key={p}
                      className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-elevated"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm font-bold leading-snug">{p}</h3>
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                            isRefurb
                              ? "bg-secondary/15 text-secondary"
                              : "bg-accent/15 text-accent"
                          }`}
                        >
                          {isRefurb ? t("badge.refurb") : t("badge.inStock")}
                        </span>
                      </div>
                      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                        {lang === "ta" ? "கடையில் கிடைக்கும்" : "Available in store"}
                      </p>
                      <a
                        href={whatsappLink(`Hello SRS, I'd like to enquire about: ${p}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-bold text-accent-foreground shadow-soft transition hover:scale-[1.02]"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        {t("cta.enquire")}
                      </a>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
