import { useState, useEffect } from "react";
import { Phone, ChevronUp, Clock, MapPin, MessageCircle, Facebook, Instagram } from "lucide-react";
import { BUSINESS, telLink, whatsappLink } from "@/lib/business";

/* ─── Announcement Bar ─────────────────────────────────────── */
export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="relative z-50 bg-[#050b1a] text-slate-300 text-xs border-b border-white/5 shadow-lg select-none"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
        {/* Left: hours + location */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-amber-400" />
            Mon–Sat · 9 AM – 7 PM
          </span>
          <span className="hidden md:flex items-center gap-1.5 border-l border-white/10 pl-4">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            Venkatesapuram, Perambalur
          </span>
        </div>

        {/* Center: promo pill */}
        <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-3 py-0.5 text-xs text-cyan-300 font-medium">
          <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Free consultation — call or WhatsApp us today
        </div>

        {/* Right: quick call + socials + dismiss */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={telLink(BUSINESS.phones[0])}
              className="inline-flex items-center gap-1.5 text-slate-300 font-bold hover:text-cyan-400 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400 animate-bounce" />
              +91 {BUSINESS.phones[0]}
            </a>
            
            {/* Social Icons matching the second image */}
            <div className="hidden sm:flex items-center gap-2 border-l border-white/10 pl-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:border-cyan-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-3 w-3" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:border-cyan-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-3 w-3" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-slate-400 hover:border-cyan-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-3 w-3" />
              </a>
            </div>
          </div>
          
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Dismiss"
            className="text-slate-500 hover:text-slate-300 transition-colors text-sm leading-none"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Scroll-to-Top Button ─────────────────────────────────── */
export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 left-4 z-50 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/90 text-foreground shadow-elevated backdrop-blur-sm transition hover:bg-primary hover:text-primary-foreground hover:scale-110 sm:bottom-6 sm:left-6"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}

/* ─── Mobile Sticky Bottom Action Bar ─────────────────────────── */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84a11.77 11.77 0 0 0 1.6 5.94L0 24l6.36-1.66a11.83 11.83 0 0 0 5.68 1.45h.01c6.54 0 11.84-5.3 11.84-11.84a11.77 11.77 0 0 0-3.47-8.47Zm-8.48 18.2h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.78.99 1-3.68-.23-.38a9.82 9.82 0 0 1-1.5-5.19c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.89 6.97c0 5.44-4.42 9.85-9.86 9.85Zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.91-2.19-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.84 1.21 3.04c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.49 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden border-t border-border bg-background/95 backdrop-blur-md shadow-elevated">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-bold text-white"
      >
        <WhatsAppIcon className="h-5 w-5" />
        WhatsApp
      </a>
      <div className="w-px bg-white/20" />
      <a
        href={telLink(BUSINESS.phones[0])}
        className="flex flex-1 items-center justify-center gap-2 bg-primary py-3.5 text-sm font-bold text-primary-foreground"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
    </div>
  );
}
