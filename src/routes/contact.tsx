import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BUSINESS, telLink, whatsappLink } from "@/lib/business";
import { Breadcrumb } from "@/components/site/Breadcrumb";

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
      <section className="relative isolate overflow-hidden gradient-hero text-slate-800 dark:text-slate-200">
        <Breadcrumb crumbs={[{ label: t("nav.contact") }]} />
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#613ed3] dark:text-indigo-400 font-mono">{t("nav.contact")}</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-white font-display">{t("section.contact")}</h1>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <div className="bg-[#1f1b2c] border-y border-white/5">
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
                <p className="text-sm text-slate-350">Message us on WhatsApp — we reply within minutes</p>
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

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <Card icon={<MapPin className="h-5 w-5" />} title={t("contact.address")}>
              <p className="leading-relaxed text-sm">{lang === "ta" ? BUSINESS.address.ta : BUSINESS.address.en}</p>
              <a
                href={BUSINESS.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#613ed3] dark:text-indigo-400 hover:underline"
              >
                {t("contact.directions")} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Card>

            <Card icon={<Phone className="h-5 w-5" />} title={t("contact.phone")}>
              <ul className="space-y-1.5 mb-3">
                {BUSINESS.phones.map((p) => (
                  <li key={p}>
                    <a href={telLink(p)} className="text-sm font-semibold text-slate-700 dark:text-slate-350 hover:text-[#613ed3] dark:hover:text-[#cbf220] transition-colors">
                      +91 {p}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-soft transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                {t("cta.whatsapp")}
              </a>
            </Card>

            <Card icon={<Mail className="h-5 w-5" />} title={t("contact.email")}>
              <ul className="space-y-1.5">
                {BUSINESS.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`} className="break-all text-sm font-semibold text-slate-700 dark:text-slate-350 hover:text-[#613ed3] dark:hover:text-[#cbf220] transition-colors">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            <Card icon={<Clock className="h-5 w-5" />} title={t("contact.hours")}>
              <p className="text-sm text-slate-650 dark:text-slate-300">{t("contact.hoursValue")}</p>
            </Card>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200/50 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 shadow-soft">
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
    <div className="rounded-2xl glass-card p-6 shadow-soft glow-hover border border-gray-200/50 dark:border-white/10">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#613ed3]/10 text-[#613ed3] dark:bg-[#cbf220]/10 dark:text-[#cbf220]">{icon}</span>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-650 dark:text-slate-300 font-mono">{title}</h3>
      </div>
      <div className="mt-4 text-slate-500 dark:text-slate-400 leading-relaxed">{children}</div>
    </div>
  );
}
