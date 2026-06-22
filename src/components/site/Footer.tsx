import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BUSINESS, telLink, whatsappLink } from "@/lib/business";
import logoImg from "@/assets/logo-cropped.png";

export function Footer() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/5 bg-[#1f1b2c] text-white">

      {/* ── Top Contact Strip ── */}
      <div className="border-b border-white/10 bg-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-[#cbf220] shrink-0" />
            <span className="text-sm font-semibold text-slate-300">
              {BUSINESS.phones.map((p, i) => (
                <span key={p}>
                  {i > 0 && <span className="mx-2 text-white/20">|</span>}
                  <a href={telLink(p)} className="hover:text-[#cbf220] transition-colors">
                    +91 {p}
                  </a>
                </span>
              ))}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-[#22c35e] hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a
              href={telLink(BUSINESS.phones[0])}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Grid ── */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center">
            <img
              src={`${logoImg}?v=3`}
              alt="SRS Technology Solutions"
              className="h-10 w-auto object-contain bg-white rounded-xl px-2.5 py-1.5 border border-white/10"
            />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">{t("footer.tagline")}</p>
          <p className="mt-4 text-xs text-slate-400">Est. {BUSINESS.established}</p>
          {/* Social / quick contact icons */}
          <div className="mt-5 flex gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-slate-400 transition hover:border-[#25D366] hover:text-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={telLink(BUSINESS.phones[0])}
              aria-label="Phone"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-slate-400 transition hover:border-[#cbf220] hover:text-[#cbf220]"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${BUSINESS.emails[0]}`}
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-slate-400 transition hover:border-[#cbf220] hover:text-[#cbf220]"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#cbf220]">{t("nav.services")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li><Link to="/services" className="hover:text-[#cbf220] transition-colors">{t("nav.services")}</Link></li>
            <li><Link to="/products" className="hover:text-[#cbf220] transition-colors">{t("nav.products")}</Link></li>
            <li><Link to="/about" className="hover:text-[#cbf220] transition-colors">{t("nav.about")}</Link></li>
            <li><Link to="/contact" className="hover:text-[#cbf220] transition-colors">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#cbf220]">{t("contact.address")}</h4>
          <address className="mt-4 not-italic text-sm leading-relaxed text-slate-300">
            <MapPin className="mr-2 inline h-4 w-4 text-[#cbf220]" />
            {lang === "ta" ? BUSINESS.address.ta : BUSINESS.address.en}
          </address>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-[#cbf220]" />
            <span className="text-slate-300">{t("contact.hoursValue")}</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#cbf220]">{t("contact.phone")}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {BUSINESS.phones.map((p) => (
              <li key={p}>
                <a href={telLink(p)} className="inline-flex items-center gap-2 hover:text-[#cbf220] transition-colors">
                  <Phone className="h-4 w-4 text-[#cbf220]" />
                  +91 {p}
                </a>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-[#cbf220]">{t("contact.email")}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {BUSINESS.emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="inline-flex items-center gap-2 break-all hover:text-[#cbf220] transition-colors">
                  <Mail className="h-4 w-4 shrink-0 text-[#cbf220]" />
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} SRS Computer & Service. {t("footer.rights")}</p>
          <p>Perambalur, Tamil Nadu · India</p>
        </div>
      </div>
    </footer>
  );
}
