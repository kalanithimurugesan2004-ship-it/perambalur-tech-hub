import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ta";

type Dict = Record<string, { en: string; ta: string }>;

const DICT: Dict = {
  "nav.home": { en: "Home", ta: "முகப்பு" },
  "nav.services": { en: "Services", ta: "சேவைகள்" },
  "nav.products": { en: "Products", ta: "தயாரிப்புகள்" },
  "nav.about": { en: "About", ta: "எங்களைப் பற்றி" },
  "nav.contact": { en: "Contact", ta: "தொடர்பு" },

  "cta.whatsapp": { en: "WhatsApp Enquiry", ta: "வாட்ஸ்அப் தொடர்பு" },
  "cta.call": { en: "Call Now", ta: "அழைக்கவும்" },
  "cta.visit": { en: "Visit Store", ta: "கடைக்கு வாருங்கள்" },
  "cta.enquire": { en: "Enquire on WhatsApp", ta: "வாட்ஸ்அப்பில் கேளுங்கள்" },
  "cta.viewAll": { en: "View all", ta: "அனைத்தையும் காண" },

  "hero.eyebrow": { en: "Trusted since 2009 · Perambalur", ta: "2009 முதல் நம்பகமான · பெரம்பலூர்" },
  "hero.headline": {
    en: "Perambalur's Trusted Computer Sales & Service Center Since 2009",
    ta: "2009 முதல் பெரம்பலூரின் நம்பகமான கணினி விற்பனை மற்றும் சேவை மையம்",
  },
  "hero.subheadline": {
    en: "Computers, Laptops, Printers, CCTV Cameras, Networking, Accessories, Refurbished Systems & Professional Repair Services.",
    ta: "கணினிகள், லேப்டாப்புகள், பிரிண்டர்கள், சிசிடிவி, நெட்வொர்க்கிங், பாகங்கள், புதுப்பிக்கப்பட்ட அமைப்புகள் மற்றும் தொழில்முறை பழுதுபார்ப்பு.",
  },

  "stats.years": { en: "Years of Service", ta: "சேவை ஆண்டுகள்" },
  "stats.customers": { en: "Happy Customers", ta: "மகிழ்ச்சியான வாடிக்கையாளர்கள்" },
  "stats.products": { en: "Product Range", ta: "தயாரிப்பு வகைகள்" },
  "stats.brands": { en: "Trusted Brands", ta: "நம்பகமான பிராண்டுகள்" },

  "section.services": { en: "Our Services", ta: "எங்கள் சேவைகள்" },
  "section.servicesSub": {
    en: "Honest pricing. Quick turnaround. On-site support across Perambalur.",
    ta: "நேர்மையான விலை. விரைவான சேவை. பெரம்பலூர் முழுவதும் இடத்திற்கே வந்து சேவை.",
  },
  "section.products": { en: "Products We Stock", ta: "எங்கள் தயாரிப்புகள்" },
  "section.productsSub": {
    en: "Browse our full range. Tap any item to enquire on WhatsApp.",
    ta: "எங்கள் முழுமையான வரிசையை பாருங்கள். எதைக் கேட்கவும் WhatsApp-ல் தட்டுங்கள்.",
  },
  "section.about": { en: "Meet R. C. Ramalingam", ta: "ஆர். சி. ராமலிங்கம் அவர்களைச் சந்திக்கவும்" },
  "section.aboutBody": {
    en: "For more than 15 years, R. C. Ramalingam has been serving customers across Perambalur and surrounding villages with honest pricing, reliable service, and quality technology products. SRS Computer & Service has become one of the most trusted names in the area for computer sales, repairs, printers, CCTV installations, and IT support.",
    ta: "15 ஆண்டுகளுக்கும் மேலாக, ஆர். சி. ராமலிங்கம் பெரம்பலூர் மற்றும் சுற்றுவட்டார கிராமங்களில் உள்ள வாடிக்கையாளர்களுக்கு நேர்மையான விலை, நம்பகமான சேவை மற்றும் தரமான தொழில்நுட்ப தயாரிப்புகளை வழங்கி வருகிறார். SRS Computer & Service கணினி விற்பனை, பழுதுபார்ப்பு, பிரிண்டர்கள், சிசிடிவி நிறுவல் மற்றும் ஐடி ஆதரவில் மிகவும் நம்பகமான பெயராக மாறியுள்ளது.",
  },
  "section.testimonials": { en: "What Our Customers Say", ta: "வாடிக்கையாளர்கள் கூறுவது" },
  "section.contact": { en: "Visit Our Store", ta: "எங்கள் கடைக்கு வாருங்கள்" },
  "section.refurb": { en: "Refurbished Systems", ta: "புதுப்பிக்கப்பட்ட அமைப்புகள்" },
  "section.refurbSub": {
    en: "Quality-tested laptops, desktops and printers at affordable prices.",
    ta: "தர சோதனை செய்யப்பட்ட லேப்டாப்புகள், டெஸ்க்டாப்புகள் மற்றும் பிரிண்டர்கள் மலிவான விலையில்.",
  },

  "contact.address": { en: "Address", ta: "முகவரி" },
  "contact.phone": { en: "Phone", ta: "தொலைபேசி" },
  "contact.email": { en: "Email", ta: "மின்னஞ்சல்" },
  "contact.hours": { en: "Business Hours", ta: "வேலை நேரம்" },
  "contact.hoursValue": { en: "Mon–Sat · 9:30 AM – 8:30 PM · Sun: 10 AM – 2 PM", ta: "திங்கள்–சனி · காலை 9:30 – இரவு 8:30 · ஞாயிறு: காலை 10 – மதியம் 2" },
  "contact.directions": { en: "Get Directions", ta: "வழித்தடம் காண" },

  "footer.tagline": {
    en: "Honest service. Genuine products. Local pride.",
    ta: "நேர்மையான சேவை. அசல் தயாரிப்புகள். உள்ளூர் பெருமை.",
  },
  "footer.rights": { en: "All rights reserved.", ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை." },

  "badge.inStock": { en: "In stock", ta: "கையிருப்பில்" },
  "badge.new": { en: "New arrival", ta: "புதிய வரவு" },
  "badge.refurb": { en: "Refurbished", ta: "புதுப்பிக்கப்பட்டது" },
};

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof typeof DICT | string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("srs-lang") as Lang | null;
      if (stored === "en" || stored === "ta") setLangState(stored);
    } catch { /* noop */ }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { window.localStorage.setItem("srs-lang", l); } catch { /* noop */ }
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "ta" ? "ta" : "en";
    }
  };

  const t = (key: string) => {
    const entry = DICT[key];
    if (!entry) return key;
    return entry[lang];
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
