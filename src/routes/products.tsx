import { createFileRoute, useRouterState, useNavigate } from "@tanstack/react-router";
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

const categoryColors: Record<string, { gradient: string; text: string; bg: string }> = {
  "laptops": { gradient: "from-blue-600 to-cyan-500", text: "text-blue-500", bg: "hover:border-blue-500/40 hover:shadow-blue-500/10 hover:bg-blue-500/[0.01]" },
  "desktops": { gradient: "from-indigo-600 to-violet-500", text: "text-indigo-500", bg: "hover:border-indigo-500/40 hover:shadow-indigo-500/10 hover:bg-indigo-500/[0.01]" },
  "monitors": { gradient: "from-violet-600 to-fuchsia-500", text: "text-violet-500", bg: "hover:border-violet-500/40 hover:shadow-violet-500/10 hover:bg-violet-500/[0.01]" },
  "printers": { gradient: "from-amber-600 to-orange-500", text: "text-amber-500", bg: "hover:border-amber-500/40 hover:shadow-amber-500/10 hover:bg-amber-500/[0.01]" },
  "printer-inks-toners": { gradient: "from-orange-600 to-red-500", text: "text-orange-500", bg: "hover:border-orange-500/40 hover:shadow-orange-500/10 hover:bg-orange-500/[0.01]" },
  "cctv-cameras": { gradient: "from-emerald-600 to-teal-500", text: "text-emerald-500", bg: "hover:border-emerald-500/40 hover:shadow-emerald-500/10 hover:bg-emerald-500/[0.01]" },
  "dvr-nvr": { gradient: "from-teal-600 to-cyan-500", text: "text-teal-500", bg: "hover:border-teal-500/40 hover:shadow-teal-500/10 hover:bg-teal-500/[0.01]" },
  "networking": { gradient: "from-sky-600 to-blue-500", text: "text-sky-500", bg: "hover:border-sky-500/40 hover:shadow-sky-500/10 hover:bg-sky-500/[0.01]" },
  "ram": { gradient: "from-rose-600 to-pink-500", text: "text-rose-500", bg: "hover:border-rose-500/40 hover:shadow-rose-500/10 hover:bg-rose-500/[0.01]" },
  "ssd-hdd": { gradient: "from-pink-600 to-rose-500", text: "text-pink-500", bg: "hover:border-pink-500/40 hover:shadow-pink-500/10 hover:bg-pink-500/[0.01]" },
  "processors": { gradient: "from-cyan-600 to-blue-500", text: "text-cyan-500", bg: "hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:bg-cyan-500/[0.01]" },
  "motherboards": { gradient: "from-fuchsia-600 to-purple-500", text: "text-fuchsia-500", bg: "hover:border-fuchsia-500/40 hover:shadow-fuchsia-500/10 hover:bg-fuchsia-500/[0.01]" },
  "graphics-cards": { gradient: "from-purple-600 to-indigo-500", text: "text-purple-500", bg: "hover:border-purple-500/40 hover:shadow-purple-500/10 hover:bg-purple-500/[0.01]" },
  "cabinets": { gradient: "from-slate-600 to-zinc-500", text: "text-slate-500", bg: "hover:border-slate-500/40 hover:shadow-slate-500/10 hover:bg-slate-500/[0.01]" },
  "smps": { gradient: "from-yellow-600 to-amber-500", text: "text-yellow-500", bg: "hover:border-yellow-500/40 hover:shadow-yellow-500/10 hover:bg-yellow-500/[0.01]" },
  "ups": { gradient: "from-lime-600 to-green-500", text: "text-lime-500", bg: "hover:border-lime-500/40 hover:shadow-lime-500/10 hover:bg-lime-500/[0.01]" },
  "keyboard-mouse": { gradient: "from-teal-600 to-emerald-500", text: "text-teal-500", bg: "hover:border-teal-500/40 hover:shadow-teal-500/10 hover:bg-teal-500/[0.01]" },
  "adapters": { gradient: "from-blue-600 to-slate-500", text: "text-blue-500", bg: "hover:border-blue-500/40 hover:shadow-blue-500/10 hover:bg-blue-500/[0.01]" },
  "speakers": { gradient: "from-red-600 to-orange-500", text: "text-red-500", bg: "hover:border-red-500/40 hover:shadow-red-500/10 hover:bg-red-500/[0.01]" },
  "cables-connectors": { gradient: "from-emerald-600 to-green-500", text: "text-emerald-500", bg: "hover:border-emerald-500/40 hover:shadow-emerald-500/10 hover:bg-emerald-500/[0.01]" },
  "memory-cards": { gradient: "from-sky-600 to-indigo-500", text: "text-sky-500", bg: "hover:border-sky-500/40 hover:shadow-sky-500/10 hover:bg-sky-500/[0.01]" }
};

function ProductsPage() {
  const { t, lang } = useI18n();
  const navigate = useNavigate();
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
    if (!hash) {
      setSelectedCategory(null);
      return;
    }
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
    } else if (key === "") {
      setSelectedCategory(null);
    }
  }, [hash, categoriesByKey]);

  const activeCategory = selectedCategory
    ? categoriesByKey[selectedCategory]
    : {
        key: "all",
        name: lang === "ta" ? "அனைத்து தயாரிப்புகள்" : "All Products",
        icon: "Boxes",
        description: lang === "ta"
          ? "எங்கள் கணினிகள், லேப்டாப்புகள், பிரிண்டர்கள் மற்றும் CCTV கேமராக்களின் முழுமையான வரிசையை ஆராயுங்கள்."
          : "Browse our complete range of laptops, custom desktops, CCTV cameras, printers, and genuine IT accessories.",
      };

  const categoryProducts = selectedCategory
    ? PRODUCTS.filter((product) => product.category === selectedCategory)
    : PRODUCTS;

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
    setSelectedCategory(key || null);
    setSearchTerm("");
    setSelectedBrands([]);
    navigate({ to: "/products", hash: key || undefined, replace: true });
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
              const isSelected = selectedCategory === category.key;
              const colors = categoryColors[category.key] || { gradient: "from-primary to-accent", text: "text-primary", bg: "hover:border-primary" };
              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => selectCategory(category.key)}
                  className={`group flex flex-col rounded-[1.5rem] border p-4 sm:p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    isSelected 
                      ? "border-white bg-card shadow-lg" 
                      : "border-white/10 bg-card/10 hover:bg-card/20 text-white"
                  }`}
                >
                  <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} text-white shadow-soft transition-transform group-hover:scale-105 duration-300`}>
                    <Icon name={category.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="mt-3 sm:mt-4 flex-1">
                    <h2 className={`text-base sm:text-lg font-black tracking-tight line-clamp-2 ${isSelected ? "text-foreground font-extrabold" : "text-white"}`}>{category.name}</h2>
                    <p className={`mt-1 sm:mt-2 text-xs sm:text-sm line-clamp-2 ${isSelected ? "text-muted-foreground" : "text-white/70"}`}>{category.description}</p>
                  </div>
                  <span className={`mt-3 sm:mt-4 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider ${
                    isSelected 
                      ? `bg-gradient-to-br ${colors.gradient} text-white` 
                      : "bg-white/10 text-white/90 group-hover:bg-white/20"
                  }`}>
                    {productCount} {lang === "ta" ? "தயாரிப்புகள்" : "items"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="category-results">
        <div className="space-y-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center">
              {selectedCategory && (
                <button
                  type="button"
                  onClick={() => selectCategory("")}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary cursor-pointer animate-fade-up"
                >
                  <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  {lang === "ta" ? "அனைத்து தயாரிப்புகள்" : "All Products"}
                </button>
              )}
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
                    className={`rounded-full border px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition truncate cursor-pointer ${
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
                    className="rounded-full border border-border bg-background px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-foreground hover:border-primary col-span-2 sm:col-span-1 cursor-pointer"
                  >
                    {lang === "ta" ? "நீக்கு" : "Clear"}
                  </button>
                ) : null}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-border bg-card p-4 sm:p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] sm:tracking-[0.18em] text-muted-foreground">
                  {lang === "ta" ? "வகை" : "Category"}
                </h3>
                <p className="mt-2 sm:mt-3 text-lg sm:text-xl font-black tracking-tight line-clamp-2">{activeCategory.name}</p>
                <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-muted-foreground line-clamp-3">{activeCategory.description}</p>
              </div>
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
              {filteredProducts.map((product) => {
                const colors = categoryColors[product.category] || { gradient: "from-primary to-accent", text: "text-primary", bg: "hover:border-primary" };
                return (
                  <a
                    key={product.id}
                    href={whatsappLink(`Hello SRS, I'd like to enquire about: ${product.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col overflow-hidden rounded-[1.5rem] border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${colors.bg}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted/40">
                      <img
                        src={product.image ?? getCategoryImage(product.category)}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className={`absolute left-2 sm:left-3 top-2 sm:top-3 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-soft ${
                        product.availability.toLowerCase().includes("in stock") 
                          ? "bg-emerald-500 text-white" 
                          : product.availability.toLowerCase().includes("limited") 
                          ? "bg-amber-500 text-white" 
                          : "bg-indigo-600 text-white"
                      }`}>
                        {product.availability}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 sm:gap-3 p-4 sm:p-5">
                      <div className="space-y-0.5 sm:space-y-1">
                        <h3 className="text-base sm:text-lg font-black leading-snug line-clamp-2 text-foreground group-hover:text-foreground">{product.name}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground truncate">{product.brand}</p>
                      </div>
                      <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {product.specifications.slice(0, 3).map((spec) => (
                          <li key={spec} className="flex items-center gap-2 line-clamp-1">
                            <CheckCircle2 className={`h-3 w-3 sm:h-4 sm:w-4 ${colors.text} flex-shrink-0`} />
                            <span className="truncate">{spec}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br ${colors.gradient} px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-bold text-white shadow-soft transition group-hover:scale-[1.02] cursor-pointer`}>
                        <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        {t("cta.enquire")}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
