import { useCallback, useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GALLERY_IMAGES } from "@/lib/shop-images";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ShopGalleryProps = {
  className?: string;
  compact?: boolean;
  autoPlayMs?: number;
};

export function ShopGallery({ className, compact = false, autoPlayMs = 4000 }: ShopGalleryProps) {
  const { lang } = useI18n();
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setActive(carouselApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, autoPlayMs);
    return () => clearInterval(timer);
  }, [api, autoPlayMs]);

  return (
    <div className={cn("relative", className)}>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {GALLERY_IMAGES.map((img, i) => (
            <CarouselItem key={i}>
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-primary-foreground/20 shadow-elevated",
                  compact ? "aspect-[4/3]" : "aspect-[16/10] lg:aspect-[4/3]",
                )}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 py-3 sm:px-5 sm:py-4">
                  <p className="text-sm font-bold text-white sm:text-base">
                    {lang === "ta" ? img.caption.ta : img.caption.en}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 border-primary-foreground/20 bg-card/90 text-foreground shadow-soft hover:bg-card" />
        <CarouselNext className="right-3 border-primary-foreground/20 bg-card/90 text-foreground shadow-soft hover:bg-card" />
      </Carousel>

      <div className="mt-3 flex justify-center gap-1.5">
        {GALLERY_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              active === i ? "w-6 bg-secondary" : "w-2 bg-muted-foreground/35 hover:bg-muted-foreground/55",
            )}
          />
        ))}
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
              className="w-64 shrink-0 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-soft sm:w-72"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <figcaption className="px-3 py-2.5 text-xs font-semibold text-muted-foreground">
                {lang === "ta" ? img.caption.ta : img.caption.en}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
