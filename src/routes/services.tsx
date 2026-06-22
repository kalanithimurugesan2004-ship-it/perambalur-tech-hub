import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowRight, Phone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BUSINESS, SERVICES, telLink, whatsappLink } from "@/lib/business";
import { Breadcrumb } from "@/components/site/Breadcrumb";

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

const SERVICE_DESCS: Record<string, { en: string; ta: string }> = {
  "computer-sales":   { en: "New desktops, laptops & branded systems at honest prices.", ta: "நேர்மையான விலையில் புதிய கணினிகள்." },
  "laptop-sales":     { en: "Wide range of Acer, Dell, HP & more — all budgets.", ta: "அனைத்து பட்ஜெட்டிலும் லேப்டாப்கள்." },
  "desktop-assembly": { en: "Custom-built PCs tailored to your work & gaming needs.", ta: "உங்கள் தேவைக்கு ஏற்ப கட்டமைக்கப்பட்ட கணினிகள்." },
  "printer-service":  { en: "Inkjet, laser & multifunction printers — sales & AMC.", ta: "பிரிண்டர் விற்பனை மற்றும் சேவை." },
  "laptop-repair":    { en: "Screen, keyboard, motherboard & battery replacements.", ta: "திரை, கீபோர்டு மற்றும் பேட்டரி மாற்றம்." },
  "computer-repair":  { en: "Virus removal, OS reinstallation & hardware fixes.", ta: "வைரஸ் அகற்றல் மற்றும் வன்பொருள் சரிசெய்தல்." },
  "motherboard":      { en: "IC-level board repairs with warranty on work done.", ta: "வாரண்டியுடன் மதர்போர்டு பழுதுபார்ப்பு." },
  "upgrades":         { en: "Boost speed with RAM upgrades and SSD replacements.", ta: "RAM மற்றும் SSD மேம்பாடு." },
  "cctv":             { en: "CP Plus & Dahua cameras — home, shop & office setups.", ta: "வீடு, கடை, அலுவலகத்திற்கு CCTV நிறுவல்." },
  "networking":       { en: "WiFi routers, LAN cabling & network troubleshooting.", ta: "WiFi மற்றும் LAN நெட்வொர்க் தீர்வுகள்." },
  "data-recovery":    { en: "Recover lost files from hard drives, SSDs & USBs.", ta: "இழந்த தரவை மீட்டெடுக்கவும்." },
  "amc":              { en: "Scheduled maintenance contracts for offices & schools.", ta: "ஆண்டு பராமரிப்பு ஒப்பந்தம்." },
  "refurb":           { en: "Quality-checked refurbished laptops & desktops with warranty.", ta: "வாரண்டியுடன் புதுப்பிக்கப்பட்ட அமைப்புகள்." },
  "onsite":           { en: "We come to your location — homes, offices & schools.", ta: "உங்கள் இடத்திற்கே வந்து சேவை." },
};

function ServicesPage() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="relative isolate overflow-hidden gradient-hero text-slate-800 dark:text-slate-200">
        <Breadcrumb crumbs={[{ label: t("nav.services") }]} />
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#613ed3] dark:text-indigo-400 font-mono">{t("nav.services")}</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900 dark:text-white font-display">{t("section.services")}</h1>
          <p className="mt-4 max-w-2xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{t("section.servicesSub")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const desc = SERVICE_DESCS[s.key];
            return (
              <div key={s.key} className="group relative overflow-hidden rounded-2xl glass-card glow-hover p-6 border border-gray-200/50 dark:border-white/10 transition duration-300">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#613ed3]/10 text-[#613ed3] dark:bg-[#cbf220]/10 dark:text-[#cbf220] transition group-hover:bg-[#613ed3] group-hover:text-white dark:group-hover:bg-[#cbf220] dark:group-hover:text-slate-950">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-800 dark:text-slate-100">{lang === "ta" ? s.ta : s.en}</h3>
                {desc && (
                  <p className="mt-1.5 text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
                    {lang === "ta" ? desc.ta : desc.en}
                  </p>
                )}
                <a
                  href={whatsappLink(`Hello SRS, I need: ${s.en}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#613ed3] dark:text-[#cbf220] hover:underline"
                >
                  {t("cta.enquire")} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>


        <div className="mt-14 rounded-3xl border border-white/5 bg-[#1f1b2c] p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute -inset-10 opacity-30 blur-3xl bg-gradient-to-r from-[#613ed3]/50 to-[#cbf220]/30 -z-10 pointer-events-none" />
          <h3 className="text-2xl font-extrabold sm:text-3xl font-display">
            {lang === "ta" ? "உங்கள் சிக்கலை விளக்குங்கள் — நாங்கள் தீர்க்கிறோம்." : "Tell us the problem — we'll fix it."}
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-slate-350 text-sm leading-relaxed">
            {lang === "ta"
              ? "தொலைபேசி அல்லது வாட்ஸ்அப் வழியாக தொடர்பு கொள்ளுங்கள். இடத்திற்கே வந்து சேவையும் கிடைக்கும்."
              : "Call or WhatsApp us. On-site service available across Perambalur and nearby villages."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#22c35e] px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:scale-[1.02]">
              {t("cta.whatsapp")}
            </a>
            <a href={telLink(BUSINESS.phones[0])} className="inline-flex items-center gap-2 rounded-full bg-[#613ed3] hover:bg-[#5232c0] px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:scale-[1.02]">
              <Phone className="h-4 w-4" /> {t("cta.call")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
