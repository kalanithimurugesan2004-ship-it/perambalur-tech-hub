import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Cpu } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { BUSINESS, telLink } from "@/lib/business";

export function Footer() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-secondary-foreground">
              <Cpu className="h-5 w-5" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-extrabold">SRS Computer</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary">& Service</span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">{t("footer.tagline")}</p>
          <p className="mt-4 text-xs text-primary-foreground/60">Est. {BUSINESS.established}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">{t("nav.services")}</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/services" className="hover:text-secondary">{t("nav.services")}</Link></li>
            <li><Link to="/products" className="hover:text-secondary">{t("nav.products")}</Link></li>
            <li><Link to="/about" className="hover:text-secondary">{t("nav.about")}</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">{t("contact.address")}</h4>
          <address className="mt-4 not-italic text-sm leading-relaxed text-primary-foreground/80">
            <MapPin className="mr-2 inline h-4 w-4 text-secondary" />
            {lang === "ta" ? BUSINESS.address.ta : BUSINESS.address.en}
          </address>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-secondary" />
            <span className="text-primary-foreground/80">{t("contact.hoursValue")}</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-secondary">{t("contact.phone")}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {BUSINESS.phones.map((p) => (
              <li key={p}>
                <a href={telLink(p)} className="inline-flex items-center gap-2 hover:text-secondary">
                  <Phone className="h-4 w-4 text-secondary" />
                  +91 {p}
                </a>
              </li>
            ))}
          </ul>
          <h4 className="mt-6 text-sm font-bold uppercase tracking-wider text-secondary">{t("contact.email")}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {BUSINESS.emails.map((e) => (
              <li key={e}>
                <a href={`mailto:${e}`} className="inline-flex items-center gap-2 break-all hover:text-secondary">
                  <Mail className="h-4 w-4 shrink-0 text-secondary" />
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/65 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} SRS Computer & Service. {t("footer.rights")}</p>
          <p>Perambalur, Tamil Nadu · India</p>
        </div>
      </div>
    </footer>
  );
}
