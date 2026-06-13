import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BUSINESS, SERVICES, telLink, whatsappLink } from "@/lib/business";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SRS Computer & Service, Perambalur" },
      {
        name: "description",
        content:
          "Laptop & computer repair, printer service, CCTV installation, networking, data recovery, RAM/SSD upgrades and AMC in Perambalur.",
      },
      { property: "og:title", content: "Our Services — SRS Computer & Service" },
      { property: "og:description", content: "Repairs, installations, AMC and IT support across Perambalur." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const Comp = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Comp) return null;
  return <Comp className={className} />;
}

function ServicesPage() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="relative isolate overflow-hidden gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("nav.services")}</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">{t("section.services")}</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">{t("section.servicesSub")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.key} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elevated">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{lang === "ta" ? s.ta : s.en}</h3>
              <a
                href={whatsappLink(`Hello SRS, I need: ${s.en}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline"
              >
                {t("cta.enquire")} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-muted/40 p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-black sm:text-3xl">
            {lang === "ta" ? "உங்கள் சிக்கலை விளக்குங்கள் — நாங்கள் தீர்க்கிறோம்." : "Tell us the problem — we'll fix it."}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            {lang === "ta"
              ? "தொலைபேசி அல்லது வாட்ஸ்அப் வழியாக தொடர்பு கொள்ளுங்கள். இடத்திற்கே வந்து சேவையும் கிடைக்கும்."
              : "Call or WhatsApp us. On-site service available across Perambalur and nearby villages."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-soft hover:scale-[1.02]">
              {t("cta.whatsapp")}
            </a>
            <a href={telLink(BUSINESS.phones[0])} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90">
              <Phone className="h-4 w-4" /> {t("cta.call")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
