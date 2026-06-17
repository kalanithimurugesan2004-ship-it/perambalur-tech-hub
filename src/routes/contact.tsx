import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BUSINESS, telLink, whatsappLink } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SRS Computer & Service — Perambalur" },
      {
        name: "description",
        content:
          "Visit SRS Computer & Service at Venkatesapuram, Perambalur. Call 6380876818 or 7305670008, or WhatsApp us anytime.",
      },
      { property: "og:title", content: "Contact — SRS Computer & Service" },
      { property: "og:description", content: "Address, phone, email and map. Reach us on WhatsApp anytime." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="relative isolate overflow-hidden gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("nav.contact")}</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">{t("section.contact")}</h1>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <div className="bg-[#075E54]">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
                <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[#25D366]">
                  <MessageCircle className="h-5 w-5 text-white" />
                </span>
              </div>
              <div>
                <p className="font-bold text-white">Fastest way to reach us</p>
                <p className="text-sm text-white/75">Message us on WhatsApp — we reply within minutes</p>
              </div>
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#22c35e] hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-5">
            <Card icon={<MapPin className="h-5 w-5" />} title={t("contact.address")}>
              <p className="leading-relaxed">{lang === "ta" ? BUSINESS.address.ta : BUSINESS.address.en}</p>
              <a
                href={BUSINESS.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
              >
                {t("contact.directions")} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Card>

            <Card icon={<Phone className="h-5 w-5" />} title={t("contact.phone")}>
              <ul className="space-y-1.5">
                {BUSINESS.phones.map((p) => (
                  <li key={p}>
                    <a href={telLink(p)} className="text-sm font-semibold text-foreground hover:text-primary">
                      +91 {p}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground hover:scale-[1.02]"
              >
                {t("cta.whatsapp")}
              </a>
            </Card>

            <Card icon={<Mail className="h-5 w-5" />} title={t("contact.email")}>
              <ul className="space-y-1.5">
                {BUSINESS.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="break-all text-sm font-semibold text-foreground hover:text-primary">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            <Card icon={<Clock className="h-5 w-5" />} title={t("contact.hours")}>
              <p className="text-sm">{t("contact.hoursValue")}</p>
            </Card>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <iframe
              src={BUSINESS.mapEmbed}
              title="SRS Computer & Service map"
              className="h-[420px] w-full lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">{icon}</span>
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{title}</h3>
      </div>
      <div className="mt-4 text-card-foreground">{children}</div>
    </div>
  );
}
