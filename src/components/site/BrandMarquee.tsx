import { useI18n } from "@/lib/i18n";
import logoImg from "@/assets/logo-cropped.png";

interface Brand {
  name: string;
  logo: React.ReactNode;
}

export function BrandMarquee() {
  const { lang } = useI18n();

  const brands: Brand[] = [
    {
      name: "Intel",
      logo: (
        <svg className="h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.3 2.5a2.7 2.7 0 012.7 2.7v13.6a2.7 2.7 0 01-2.7 2.7H2.7A2.7 2.7 0 010 18.8V5.2a2.7 2.7 0 012.7-2.7h18.6zM7.5 7H6v10h1.5V7zm5.5 0h-3v10h1.5v-3.5h1.5V7zm-1.5 5v-3.5H13V12h-1.5zm6.5-5H15v10h4V7zm-2.5 8.5V8.5h1V15.5h-1z" />
        </svg>
      )
    },
    {
      name: "Dell",
      logo: (
        <svg className="h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-13h3.5c1.93 0 3.5 1.57 3.5 3.5S14.43 14 12.5 14H9V7zm3.5 5.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5H10.5v3h1.5z" />
        </svg>
      )
    },
    {
      name: "HP",
      logo: (
        <svg className="h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-3H8v3H6V8h2v3h3V8h2v8zm5-4c0 2.21-1.79 4-4 4h-1V8h1c2.21 0 4 1.79 4 4zm-2 0c0-1.1-.9-2-2-2h-1v4h1c1.1 0 2-.9 2-2z" />
        </svg>
      )
    },
    {
      name: "Lenovo",
      logo: (
        <span className="text-sm font-black tracking-tighter uppercase bg-foreground text-background px-2 py-0.5 rounded">
          Lenovo
        </span>
      )
    },
    {
      name: "Samsung",
      logo: (
        <span className="text-sm font-extrabold tracking-widest uppercase font-mono italic">
          SAMSUNG
        </span>
      )
    },
    {
      name: "Sony",
      logo: (
        <span className="text-sm font-serif font-black tracking-widest uppercase italic">
          SONY
        </span>
      )
    },
    {
      name: "Asus",
      logo: (
        <span className="text-sm font-extrabold tracking-widest uppercase text-primary font-sans">
          ASUS
        </span>
      )
    },
    {
      name: "Acer",
      logo: (
        <span className="text-sm font-bold tracking-tight lowercase text-accent font-sans">
          acer
        </span>
      )
    },
    {
      name: "Canon",
      logo: (
        <span className="text-sm font-extrabold tracking-wider uppercase text-destructive font-serif">
          Canon
        </span>
      )
    },
    {
      name: "Epson",
      logo: (
        <span className="text-sm font-black tracking-widest uppercase text-primary">
          EPSON
        </span>
      )
    },
    {
      name: "Toshiba",
      logo: (
        <span className="text-sm font-black tracking-wide uppercase font-sans">
          TOSHIBA
        </span>
      )
    }
  ];

  // Duplicate the brand list to create a seamless infinite loop scrolling effect
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <div className="w-full border-y border-border bg-muted/30 py-6 overflow-hidden relative select-none">
      {/* Subtle overlay gradient to blend edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Repeating Label */}
      <div className="max-w-7xl mx-auto px-4 mb-3 flex flex-col items-center justify-center gap-2 text-center text-xs font-semibold tracking-wider text-muted-foreground uppercase sm:flex-row sm:gap-4">
        <span>{lang === "ta" ? "அங்கீகரிக்கப்பட்ட பிராண்டுகள் & சேவைகள்" : "Authorized Brands & Services"}</span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          {lang === "ta" ? "அசல் பாகங்கள்" : "Genuine Parts"}
        </span>
      </div>

      <div className="flex w-max items-center gap-10 animate-marquee-ltr hover:[animation-play-state:paused]">
        {marqueeItems.map((brand, idx) => (
          <div
            key={`${brand.name}-${idx}`}
            className="flex items-center gap-3.5 rounded-2xl bg-card border border-border px-6 py-3 shadow-soft transition hover:border-primary/40 hover:shadow-elevated group"
          >
            {/* Display SRS Logo Badge next to brands to repeatedly show the company logo running across */}
            {idx % 4 === 0 && (
              <span className="flex items-center border-r border-border pr-3">
                <div className="rounded-xl bg-slate-950 p-1.5 flex items-center h-8 shadow-sm">
                  <img src={`${logoImg}?v=3`} alt="SRS" className="h-5 w-auto object-contain" />
                </div>
              </span>
            )}
            <div className="text-muted-foreground transition-colors group-hover:text-foreground flex items-center">
              {brand.logo}
            </div>
            <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
