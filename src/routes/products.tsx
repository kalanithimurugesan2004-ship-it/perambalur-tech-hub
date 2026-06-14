import { createFileRoute, useRouterState } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { ArrowLeft, CheckCircle2, MessageCircle, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/business";
import { getCategoryImage } from "@/lib/product-images";
import { PRODUCT_CATEGORIES, PRODUCTS, type Product } from "@/lib/product-catalog";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Laptops, Printers, CCTV, Components | SRS Perambalur" },
      {
        name: "description",
        content:
          "Browse laptops, desktops, printers, CCTV, networking, RAM, SSD, motherboards and accessories. Use the category browser to search and enquire on WhatsApp.",
      },
      { property: "og:title", content: "Products — SRS Computer & Service" },
      { property: "og:description", content: "Full product range available in Perambalur. WhatsApp to enquire." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const Comp = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Comp) return null;
  return <Comp className={className} />;
}

function ProductsPage() {
  const { t, lang } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  const categoriesByKey = useMemo(
    () => Object.fromEntries(PRODUCT_CATEGORIES.map((category) => [category.key, category])),
    [],
  );

  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!hash) return;
    const key = hash.startsWith("#") ? hash.slice(1) : hash;
    if (key && categoriesByKey[key]) {
      setSelectedCategory(key);
      setSearchTerm("");
      setSelectedBrands([]);
      // Scroll to products section smoothly
      setTimeout(() => {
        const productsSection = document.querySelector('[id="category-results"]') || document.querySelector("main");
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, [hash, categoriesByKey]);

  const activeCategory = selectedCategory ? categoriesByKey[selectedCategory] : null;
  const categoryProducts = selectedCategory
    ? PRODUCTS.filter((product) => product.category === selectedCategory)
    : [];

  const brands = useMemo(() => {
    return Array.from(new Set(categoryProducts.map((product) => product.brand))).sort();
  }, [categoryProducts]);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    return categoryProducts.filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesSearch =
        !query ||
        [product.name, product.brand, product.availability, ...product.specifications]
          .join(" ")
          .toLowerCase()
          .includes(query);
      return matchesBrand && matchesSearch;
    });
  }, [categoryProducts, searchTerm, selectedBrands]);

  function toggleBrand(brand: string) {
    setSelectedBrands((current) =>
      current.includes(brand) ? current.filter((item) => item !== brand) : [...current, brand],
    );
  }

  function selectCategory(key: string) {
    setSelectedCategory(key);
    setSearchTerm("");
    setSelectedBrands([]);
  }

  return (
    <>
      <section className="relative isolate overflow-hidden gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("nav.products")}</p>
          <h1 className="mt-2 max-w-3xl text-2xl font-black tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">{t("section.products")}</h1>
          <p className="mt-4 max-w-2xl text-sm text-primary-foreground/80 sm:text-base">{t("section.productsSub")}</p>

          <div className="mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRODUCT_CATEGORIES.map((category) => {
              const productCount = PRODUCTS.filter((product) => product.category === category.key).length;
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => selectCategory(category.key)}
                  className="group flex flex-col rounded-[1.5rem] border border-border bg-card p-4 sm:p-5 text-left transition hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-primary-foreground/10 text-primary-foreground shadow-soft transition group-hover:bg-primary-foreground/20">
                    <Icon name={category.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="mt-3 sm:mt-4 flex-1">
                    <h2 className="text-base sm:text-lg font-black tracking-tight line-clamp-2">{category.name}</h2>
                    <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">{category.description}</p>
                  </div>
                  <span className="mt-3 sm:mt-4 inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] text-secondary">
                    {productCount} {lang === "ta" ? "தயாரிப்புகள்" : "items"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="category-results">
        {activeCategory ? (
          <div className="space-y-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                >
                  <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  {lang === "ta" ? "திரும்பவும்" : "Back"}
                </button>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="inline-flex h-10 sm:h-14 w-10 sm:w-14 items-center justify-center rounded-2xl bg-primary-foreground/10 text-primary-foreground shadow-soft flex-shrink-0">
                    <Icon name={activeCategory.icon} className="h-5 w-5 sm:h-7 sm:w-7" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-3xl font-black tracking-tight line-clamp-2">{activeCategory.name}</h2>
                    <p className="mt-0.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">{activeCategory.description}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl sm:rounded-3xl border border-border bg-card p-3 sm:p-6 shadow-sm flex-shrink-0">
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.18em] text-muted-foreground">
                  {filteredProducts.length} {lang === "ta" ? "பொருள்" : "products"}
                </p>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{lang === "ta" ? "தேடுக" : "Search"}</p>
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_280px] lg:grid-cols-[1fr_260px] sm:grid-cols-[1fr_220px]">
              <div className="space-y-6">
                <div className="rounded-[1.5rem] border border-border bg-card p-4 sm:p-5 shadow-sm">
                  <label className="relative block">
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      type="search"
                      placeholder={lang === "ta" ? "பொருள் தேட..." : "Search products..."}
                      className="w-full rounded-2xl border border-border bg-background px-11 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                    />
                  </label>
                </div>

                <div className="grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => toggleBrand(brand)}
                      className={`rounded-full border px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition truncate ${
                        selectedBrands.includes(brand)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-foreground hover:border-primary"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                  {selectedBrands.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => setSelectedBrands([])}
                      className="rounded-full border border-border bg-background px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-foreground hover:border-primary col-span-2 sm:col-span-1"
                    >
                      {lang === "ta" ? "நீக்கு" : "Clear"}
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border bg-card p-4 sm:p-6 shadow-sm">
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.18em] text-muted-foreground">
                  {lang === "ta" ? "வகை" : "Category"}
                </h3>
                <p className="mt-2 sm:mt-3 text-lg sm:text-xl font-black tracking-tight line-clamp-2">{activeCategory.name}</p>
                <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-muted-foreground line-clamp-3">{activeCategory.description}</p>
                <div className="mt-4 sm:mt-5 overflow-hidden rounded-3xl">
                  <img
                    src={getCategoryImage(activeCategory.key)}
                    alt={activeCategory.name}
                    className="h-40 sm:h-52 w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="rounded-[1.5rem] border border-border bg-card p-8 sm:p-12 text-center text-muted-foreground">
                <p className="text-sm sm:text-base">{lang === "ta" ? "பொருட்களை கண்டுபிடிக்க முடியவில்லை." : "No products matched your search."}</p>
              </div>
            ) : (
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <a
                    key={product.id}
                    href={whatsappLink(`Hello SRS, I'd like to enquire about: ${product.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-elevated"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted/40">
                      <img
                        src={product.image ?? getCategoryImage(product.category)}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-2 sm:left-3 top-2 sm:top-3 rounded-full bg-secondary/95 px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-secondary-foreground shadow-soft">
                        {product.availability}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 sm:gap-3 p-4 sm:p-5">
                      <div className="space-y-0.5 sm:space-y-1">
                        <h3 className="text-base sm:text-lg font-black leading-snug line-clamp-2">{product.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">{product.brand}</p>
                      </div>
                      <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {product.specifications.slice(0, 3).map((spec) => (
                          <li key={spec} className="flex items-center gap-2 line-clamp-1">
                            <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-accent flex-shrink-0" />
                            <span className="truncate">{spec}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-bold text-accent-foreground shadow-soft transition group-hover:scale-[1.02]">
                        <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        {t("cta.enquire")}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-[1.5rem] border border-border bg-card p-12 text-center">
            <p className="text-xl font-black tracking-tight">{lang === "ta" ? "வகையை தேர்ந்தெடுங்கள்" : "Select a category to browse products."}</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {lang === "ta"
                ? "வகை அட்டைகளை கிளிக் செய்து அந்த வகை பொருட்களை பார்க்கவும்." 
                : "Click any category card above to view products and filter by brand."}
            </p>
          </div>
        )}
      </section>
    </>
  );
}
