import { useEffect, useState } from "react";
import { GALLERY_IMAGES } from "@/lib/shop-images";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ShopGalleryProps = {
  className?: string;
  compact?: boolean;
  autoPlayMs?: number;
};

export function ShopGallery({ className, compact = false }: Omit<ShopGalleryProps, 'autoPlayMs'>) {
  const { lang } = useI18n();
  const [active, setActive] = useState(0);

  const current = GALLERY_IMAGES[active];

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/5 shadow-elevated",
          compact ? "aspect-[4/3]" : "aspect-[16/10] lg:aspect-[4/3]",
        )}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="h-full w-full object-cover"
          loading="eager"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
          <p className="text-sm font-semibold text-white/95 sm:text-base">
            {lang === "ta" ? current.caption.ta : current.caption.en}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex gap-2">
          {GALLERY_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-500",
                active === i ? "w-8 bg-secondary" : "w-2.5 bg-primary-foreground/25 hover:bg-primary-foreground/40",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type ShopGalleryLegacyProps = {
  className?: string;
  compact?: boolean;
  autoPlayMs?: number;
};

export function ShopGalleryLegacy({ className, compact = false, autoPlayMs = 4500 }: ShopGalleryLegacyProps) {
  const { lang } = useI18n();
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % GALLERY_IMAGES.length);
        setIsTransitioning(false);
      }, 500);
    }, autoPlayMs);
    return () => clearInterval(timer);
  }, [autoPlayMs]);

  const current = GALLERY_IMAGES[active];

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/5 shadow-elevated",
          compact ? "aspect-[4/3]" : "aspect-[16/10] lg:aspect-[4/3]",
        )}
      >
        {GALLERY_IMAGES.map((img, i) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            aria-hidden={i !== active}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-in-out",
              i === active
                ? cn("opacity-100 scale-100", isTransitioning && "scale-[1.03]")
                : "opacity-0 scale-[1.06]",
            )}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
          <p
            className={cn(
              "text-sm font-semibold text-white/95 transition-all duration-700 sm:text-base",
              isTransitioning ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100",
            )}
          >
            {lang === "ta" ? current.caption.ta : current.caption.en}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-primary-foreground/15">
          <div
            key={active}
            className="h-full origin-left rounded-full bg-secondary animate-[gallery-progress_var(--gallery-duration)_linear_forwards]"
            style={{ "--gallery-duration": `${autoPlayMs}ms` } as React.CSSProperties}
          />
        </div>
        <div className="flex gap-2">
          {GALLERY_IMAGES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-500",
                active === i ? "w-8 bg-secondary" : "w-2.5 bg-primary-foreground/25 hover:bg-primary-foreground/40",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ShopGalleryMarquee() {
  const { lang } = useI18n();
  const items = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section className="overflow-hidden border-y border-border/60 bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-secondary">
          {lang === "ta" ? "எங்கள் கடை" : "Our Store"}
        </p>
        <h2 className="mt-2 text-center text-2xl font-black tracking-tight sm:text-3xl text-gradient">
          {lang === "ta" ? "உண்மையான தயாரிப்புகள், நேரடியாக கடையில்" : "Real products, right in our store"}
        </h2>
      </div>

      <div className="relative mt-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-muted/30 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-muted/30 to-transparent sm:w-24" />
        <div className="flex w-max animate-marquee-ltr gap-5 px-4">
          {items.map((img, i) => (
            <figure
              key={`${img.alt}-${i}`}
              className="w-64 shrink-0 overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-soft sm:w-72"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <figcaption className="px-4 py-3 text-xs font-semibold text-muted-foreground">
                {lang === "ta" ? img.caption.ta : img.caption.en}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
