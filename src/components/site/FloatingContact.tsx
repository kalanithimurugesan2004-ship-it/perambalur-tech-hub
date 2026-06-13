import { Phone } from "lucide-react";
import { BUSINESS, telLink, whatsappLink } from "@/lib/business";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84a11.77 11.77 0 0 0 1.6 5.94L0 24l6.36-1.66a11.83 11.83 0 0 0 5.68 1.45h.01c6.54 0 11.84-5.3 11.84-11.84a11.77 11.77 0 0 0-3.47-8.47Zm-8.48 18.2h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.78.99 1-3.68-.23-.38a9.82 9.82 0 0 1-1.5-5.19c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.89 6.97c0 5.44-4.42 9.85-9.86 9.85Zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.74-1.65-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.91-2.19-.24-.58-.49-.5-.66-.51l-.56-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.84 1.21 3.04c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.49 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-elevated transition hover:scale-105 animate-pulse-ring"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-semibold text-background opacity-0 transition group-hover:opacity-100 sm:block">
          WhatsApp Enquiry
        </span>
      </a>
      <a
        href={telLink(BUSINESS.phones[0])}
        aria-label="Call now"
        className="group relative grid h-14 w-14 place-items-center rounded-full gradient-cta text-secondary-foreground shadow-elevated transition hover:scale-105"
      >
        <Phone className="h-6 w-6" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-semibold text-background opacity-0 transition group-hover:opacity-100 sm:block">
          Call Now
        </span>
      </a>
    </div>
  );
}
