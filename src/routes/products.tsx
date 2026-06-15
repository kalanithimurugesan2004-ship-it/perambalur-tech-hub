import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import * as Icons from "lucide-react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CATEGORIES, whatsappLink } from "@/lib/business";
import { getProductImage, ACER_ASPIRE_LITE_IMAGES, DELL_I3_IMAGES, DELL_RYZEN_IMAGES, DELL_SLIM_IMAGES, EPSON_L3210_IMAGES, EPSON_L3250_IMAGES, EPSON_L6460_IMAGES, EPSON_M2050_IMAGES, EPSON_M1100_IMAGES, CANON_G2010_IMAGES, CANON_MF3010_IMAGES, CANON_LBP6030_IMAGES, CANON_LBP6030W_IMAGES, CP_PLUS_BULLET_IMAGES, CP_PLUS_DOME_IMAGES, CP_PLUS_NVR_IMAGES, CP_PLUS_DVR_IMAGES, CP_PLUS_ROBOT_IMAGES, DAHUA_BULLET_IMAGES, DAHUA_DVR_IMAGES, DAHUA_NVR_IMAGES, SIM_4G_CAMERA_IMAGES, HOME_SECURITY_IMAGES, OFFICE_SECURITY_IMAGES, ACER_20_MONITOR_IMAGES, ACER_22_MONITOR_IMAGES, DELL_20_MONITOR_IMAGES, DELL_22_MONITOR_IMAGES, FINGERS_22_MONITOR_IMAGES, EVM_MONITOR_IMAGES, SSD_128GB_IMAGES, SSD_256GB_IMAGES, SSD_512GB_IMAGES, HDD_1TB_IMAGES, HDD_2TB_IMAGES } from "@/lib/product-images";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Laptops, Printers, CCTV, Components | SRS Perambalur" },
      {
        name: "description",
        content:
          "Browse laptops (Acer, Dell), printers (Epson, Canon), CCTV (CP Plus, Dahua), monitors, RAM, SSD, networking & accessories in Perambalur.",
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

interface ProductDetails {
  title: string;
  badge: { en: string; ta: string };
  images: string[];
  specs: { label: string; value: string; icon: string }[];
  whatsappEnquiry: string;
}

const INTERACTIVE_PRODUCTS: Record<string, (lang: string) => ProductDetails> = {
  "Acer Aspire Lite Core i5 13th Gen": (lang) => ({
    title: "Acer Aspire Lite Core i5 13th Gen",
    badge: {
      en: "Featured Premium Laptop",
      ta: "பிரீமியம் லேப்டாப்",
    },
    images: ACER_ASPIRE_LITE_IMAGES,
    specs: [
      { label: lang === "ta" ? "செயலி (Processor)" : "Processor", value: "Intel Core i5 13th Gen (i5-1335U)", icon: "Cpu" },
      { label: lang === "ta" ? "நினைவகம் (Memory)" : "RAM", value: "16 GB DDR4 Dual-Channel", icon: "Layers" },
      { label: lang === "ta" ? "சேமிப்பகம் (Storage)" : "Storage", value: "512 GB PCIe NVMe M.2 SSD", icon: "HardDrive" },
      { label: lang === "ta" ? "திரை (Display)" : "Display", value: '15.6" Full HD LED Backlit (1920x1080)', icon: "Monitor" },
      { label: lang === "ta" ? "இயக்க முறைமை (OS)" : "Operating System", value: "Windows 11 Home", icon: "Settings" },
      { label: lang === "ta" ? "எடை & உடல்" : "Form Factor & Weight", value: "Super Thin & Light: 1.59 kg · Steel Gray Finish", icon: "Scale" },
    ],
    whatsappEnquiry: "Acer Aspire Lite Core i5 13th Gen laptop",
  }),
  "Dell Core i3 14th Gen": (lang) => ({
    title: "Dell Core i3 14th Gen",
    badge: {
      en: "Latest 14th Gen Laptop",
      ta: "புதிய 14வது தலைமுறை",
    },
    images: DELL_I3_IMAGES,
    specs: [
      { label: lang === "ta" ? "செயலி (Processor)" : "Processor", value: "Intel Core i3 14th Gen (14100U)", icon: "Cpu" },
      { label: lang === "ta" ? "நினைவகம் (Memory)" : "RAM", value: "8 GB DDR4 Dual-Channel", icon: "Layers" },
      { label: lang === "ta" ? "சேமிப்பகம் (Storage)" : "Storage", value: "512 GB PCIe NVMe M.2 SSD", icon: "HardDrive" },
      { label: lang === "ta" ? "திரை (Display)" : "Display", value: '15.6" Full HD ComfortView (1920x1080)', icon: "Monitor" },
      { label: lang === "ta" ? "இயக்க முறைமை (OS)" : "Operating System", value: "Windows 11 Home + MS Office", icon: "Settings" },
      { label: lang === "ta" ? "எடை & உடல்" : "Form Factor & Weight", value: "Sleek Modern Design · 1.65 kg · Platinum Silver", icon: "Scale" },
    ],
    whatsappEnquiry: "Dell Core i3 14th Gen laptop",
  }),
  "Dell Ryzen 3 Laptop": (lang) => ({
    title: "Dell Ryzen 3 Laptop",
    badge: {
      en: "Best Budget AMD Ryzen Laptop",
      ta: "சிறந்த பட்ஜெட் AMD ரைசன்",
    },
    images: DELL_RYZEN_IMAGES,
    specs: [
      { label: lang === "ta" ? "செயலி (Processor)" : "Processor", value: "AMD Ryzen 3 7320U (Quad-Core)", icon: "Cpu" },
      { label: lang === "ta" ? "நினைவகம் (Memory)" : "RAM", value: "8 GB LPDDR5 Dual-Channel", icon: "Layers" },
      { label: lang === "ta" ? "சேமிப்பகம் (Storage)" : "Storage", value: "512 GB PCIe NVMe M.2 SSD", icon: "HardDrive" },
      { label: lang === "ta" ? "திரை (Display)" : "Display", value: '15.6" Full HD Anti-Glare (1920x1080)', icon: "Monitor" },
      { label: lang === "ta" ? "இயக்க முறைமை (OS)" : "Operating System", value: "Windows 11 Home + MS Office", icon: "Settings" },
      { label: lang === "ta" ? "எடை & உடல்" : "Form Factor & Weight", value: "Modern Matte Finish · 1.63 kg · Carbon Black", icon: "Scale" },
    ],
    whatsappEnquiry: "Dell Ryzen 3 Laptop",
  }),
  "Dell Slim Core i3 14th Gen": (lang) => ({
    title: "Dell Slim Core i3 14th Gen",
    badge: {
      en: "Ultra-Slim & Lightweight",
      ta: "மிகவும் மெலிதானது & இலகுவானது",
    },
    images: DELL_SLIM_IMAGES,
    specs: [
      { label: lang === "ta" ? "செயலி (Processor)" : "Processor", value: "Intel Core i3 14th Gen (14100U)", icon: "Cpu" },
      { label: lang === "ta" ? "நினைவகம் (Memory)" : "RAM", value: "8 GB LPDDR5 Dual-Channel", icon: "Layers" },
      { label: lang === "ta" ? "சேமிப்பகம் (Storage)" : "Storage", value: "512 GB PCIe NVMe M.2 SSD", icon: "HardDrive" },
      { label: lang === "ta" ? "திரை (Display)" : "Display", value: '14.0" Full HD ComfortView (1920x1080)', icon: "Monitor" },
      { label: lang === "ta" ? "இயக்க முறைமை (OS)" : "Operating System", value: "Windows 11 Home + MS Office", icon: "Settings" },
      { label: lang === "ta" ? "எடை & உடல்" : "Form Factor & Weight", value: "Ultra-Slim Metal Chassis · 1.48 kg · Platinum Silver", icon: "Scale" },
    ],
    whatsappEnquiry: "Dell Slim Core i3 14th Gen laptop",
  }),
  "Epson L3210": (lang) => ({
    title: "Epson L3210",
    badge: {
      en: "EcoTank Color Ink Tank Printer",
      ta: "எகோடேங்க் கலர் இங்க் டேங்க் பிரிண்டர்",
    },
    images: EPSON_L3210_IMAGES,
    specs: [
      { label: lang === "ta" ? "பிரிண்டர் வகை (Type)" : "Printer Type", value: "Print, Scan, Copy (All-in-One)", icon: "Printer" },
      { label: lang === "ta" ? "அச்சு வேகம் (Print Speed)" : "Print Speed", value: "33 ppm (Black) · 15 ppm (Color)", icon: "Zap" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "5760 x 1440 dpi", icon: "Maximize" },
      { label: lang === "ta" ? "பயன்படும் மை (Compatible Ink)" : "Compatible Ink", value: "Epson 003 Ink Bottles (C, M, Y, K)", icon: "Droplet" },
      { label: lang === "ta" ? "பக்க உற்பத்தி (Page Yield)" : "Page Yield", value: "4,500 Pages (Black) · 7,500 Pages (Color)", icon: "FileText" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "High-Speed USB 2.0", icon: "Link" },
    ],
    whatsappEnquiry: "Epson L3210 EcoTank Printer",
  }),
  "Epson L3250 WiFi Printer": (lang) => ({
    title: "Epson L3250 WiFi Printer",
    badge: {
      en: "EcoTank WiFi Color All-in-One Printer",
      ta: "வைஃபை எகோடேங்க் கலர் ஆல்-இன்-ஒன் பிரிண்டர்",
    },
    images: EPSON_L3250_IMAGES,
    specs: [
      { label: lang === "ta" ? "பிரிண்டர் வகை (Type)" : "Printer Type", value: "Print, Scan, Copy (All-in-One)", icon: "Printer" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "Wireless WiFi · Wi-Fi Direct · USB 2.0 · Smart Panel App", icon: "Wifi" },
      { label: lang === "ta" ? "அச்சு வேகம் (Print Speed)" : "Print Speed", value: "33 ppm (Black) · 15 ppm (Color)", icon: "Zap" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "5760 x 1440 dpi", icon: "Maximize" },
      { label: lang === "ta" ? "பயன்படும் மை (Compatible Ink)" : "Compatible Ink", value: "Epson 003 Ink Bottles (C, M, Y, K)", icon: "Droplet" },
      { label: lang === "ta" ? "பக்க உற்பத்தி (Page Yield)" : "Page Yield", value: "4,500 Pages (Black) · 7,500 Pages (Color)", icon: "FileText" },
    ],
    whatsappEnquiry: "Epson L3250 WiFi EcoTank Printer",
  }),
  "Epson L6460": (lang) => ({
    title: "Epson L6460",
    badge: {
      en: "EcoTank Business Duplex Printer with ADF",
      ta: "வணிக தேவைகளுக்கான எகோடேங்க் டூப்ளக்ஸ் பிரிண்டர்",
    },
    images: EPSON_L6460_IMAGES,
    specs: [
      { label: lang === "ta" ? "பிரிண்டர் வகை (Type)" : "Printer Type", value: "Print, Scan, Copy with ADF & Auto-Duplex", icon: "Printer" },
      { label: lang === "ta" ? "கட்டுப்பாட்டு பலகம் (Control Panel)" : "Control Panel", value: "2.4\" Color LCD Touch Screen", icon: "Sliders" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "Wireless WiFi · Wi-Fi Direct · Ethernet · USB 2.0", icon: "Wifi" },
      { label: lang === "ta" ? "அச்சு வேகம் (Print Speed)" : "Print Speed", value: "Up to 37 ppm (Black) · 23 ppm (Color)", icon: "Zap" },
      { label: lang === "ta" ? "பயன்படும் மை (Compatible Ink)" : "Compatible Ink", value: "Epson 008 Pigment Ink Bottles (C, M, Y, K)", icon: "Droplet" },
      { label: lang === "ta" ? "பக்க உற்பத்தி (Page Yield)" : "Page Yield", value: "7,500 Pages (Black) · 6,000 Pages (Color)", icon: "FileText" },
    ],
    whatsappEnquiry: "Epson L6460 WiFi Duplex Printer",
  }),
  "Epson M2050": (lang) => ({
    title: "Epson M2050",
    badge: {
      en: "EcoTank Monochrome WiFi All-in-One Printer",
      ta: "கருப்பு-வெள்ளை வைஃபை எகோடேங்க் பிரிண்டர்",
    },
    images: EPSON_M2050_IMAGES,
    specs: [
      { label: lang === "ta" ? "பிரிண்டர் வகை (Type)" : "Printer Type", value: "Monochrome Print, Scan, Copy (All-in-One)", icon: "Printer" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "Wireless WiFi · Wi-Fi Direct · USB 2.0 · Smart Panel App", icon: "Wifi" },
      { label: lang === "ta" ? "அச்சு வேகம் (Print Speed)" : "Print Speed", value: "High-Speed Monochrome: Up to 33 ppm", icon: "Zap" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "Sharp Black Text: 1440 x 720 dpi", icon: "Maximize" },
      { label: lang === "ta" ? "பயன்படும் மை (Compatible Ink)" : "Compatible Ink", value: "Epson 005 Pigment Black Ink Bottle", icon: "Droplet" },
      { label: lang === "ta" ? "பக்க உற்பத்தி (Page Yield)" : "Page Yield", value: "Ultra-High Yield: Up to 6,000 Pages", icon: "FileText" },
    ],
    whatsappEnquiry: "Epson M2050 Monochrome WiFi Printer",
  }),
  "Epson M1100": (lang) => ({
    title: "Epson M1100",
    badge: {
      en: "EcoTank Monochrome Single-Function Printer",
      ta: "ஒற்றைச் செயல்பாடு எகோடேங்க் கருப்பு-வெள்ளை பிரிண்டர்",
    },
    images: EPSON_M1100_IMAGES,
    specs: [
      { label: lang === "ta" ? "பிரிண்டர் வகை (Type)" : "Printer Type", value: "Monochrome Print (Single Function)", icon: "Printer" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "High-Speed USB 2.0", icon: "Link" },
      { label: lang === "ta" ? "அச்சு வேகம் (Print Speed)" : "Print Speed", value: "Up to 32 ppm", icon: "Zap" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "1440 x 720 dpi", icon: "Maximize" },
      { label: lang === "ta" ? "பயன்படும் மை (Compatible Ink)" : "Compatible Ink", value: "Epson 005 Pigment Black Ink Bottle", icon: "Droplet" },
      { label: lang === "ta" ? "பக்க உற்பத்தி (Page Yield)" : "Page Yield", value: "Up to 6,000 Pages", icon: "FileText" },
    ],
    whatsappEnquiry: "Epson M1100 Monochrome Printer",
  }),
  "Canon G2010": (lang) => ({
    title: "Canon G2010",
    badge: {
      en: "PIXMA Color All-in-One Ink Tank Printer",
      ta: "பிக்ஸ்மா கலர் ஆல்-இன்-ஒன் இங்க் டேங்க் பிரிண்டர்",
    },
    images: CANON_G2010_IMAGES,
    specs: [
      { label: lang === "ta" ? "பிரிண்டர் வகை (Type)" : "Printer Type", value: "Print, Scan, Copy (All-in-One)", icon: "Printer" },
      { label: lang === "ta" ? "அச்சு வேகம் (Print Speed)" : "Print Speed", value: "8.8 ipm (Black) · 5.0 ipm (Color)", icon: "Zap" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "4800 x 1200 dpi", icon: "Maximize" },
      { label: lang === "ta" ? "பயன்படும் மை (Compatible Ink)" : "Compatible Ink", value: "Canon GI-790 Ink Bottles (C, M, Y, BK)", icon: "Droplet" },
      { label: lang === "ta" ? "பக்க உற்பத்தி (Page Yield)" : "Page Yield", value: "6,000 Pages (Black) · 7,000 Pages (Color)", icon: "FileText" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "High-Speed USB 2.0", icon: "Link" },
    ],
    whatsappEnquiry: "Canon G2010 All-in-One Printer",
  }),
  "Canon MF3010": (lang) => ({
    title: "Canon MF3010",
    badge: {
      en: "imageCLASS Monochrome Laser Multi-Function Printer",
      ta: "இமேஜ்கிளாஸ் மோனோக்ரோம் லேசர் ஆல்-இன்-ஒன் பிரிண்டர்",
    },
    images: CANON_MF3010_IMAGES,
    specs: [
      { label: lang === "ta" ? "பிரிண்டர் வகை (Type)" : "Printer Type", value: "Monochrome Laser (Print, Scan, Copy)", icon: "Printer" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "High-Speed USB 2.0", icon: "Link" },
      { label: lang === "ta" ? "அச்சு வேகம் (Print Speed)" : "Print Speed", value: "Up to 18 ppm (A4)", icon: "Zap" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "Up to 1200 x 600 dpi", icon: "Maximize" },
      { label: lang === "ta" ? "பயன்படும் டோனர் (Compatible Toner)" : "Compatible Toner", value: "Canon Cartridge 325 (Black)", icon: "Droplet" },
      { label: lang === "ta" ? "பக்க உற்பத்தி (Page Yield)" : "Page Yield", value: "Up to 1,600 Pages", icon: "FileText" },
    ],
    whatsappEnquiry: "Canon MF3010 Monochrome Laser Printer",
  }),
  "Canon LBP6030": (lang) => ({
    title: "Canon LBP6030",
    badge: {
      en: "imageCLASS Monochrome Laser Printer",
      ta: "இமேஜ்கிளாஸ் மோனோக்ரோம் லேசர் பிரிண்டர்",
    },
    images: CANON_LBP6030_IMAGES,
    specs: [
      { label: lang === "ta" ? "பிரிண்டர் வகை (Type)" : "Printer Type", value: "Monochrome Laser (Single Function)", icon: "Printer" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "High-Speed USB 2.0", icon: "Link" },
      { label: lang === "ta" ? "அச்சு வேகம் (Print Speed)" : "Print Speed", value: "Up to 18 ppm (A4)", icon: "Zap" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "Up to 2400 x 600 dpi", icon: "Maximize" },
      { label: lang === "ta" ? "பயன்படும் டோனர் (Compatible Toner)" : "Compatible Toner", value: "Canon Cartridge 325 (Black)", icon: "Droplet" },
      { label: lang === "ta" ? "பக்க உற்பத்தி (Page Yield)" : "Page Yield", value: "Up to 1,600 Pages", icon: "FileText" },
    ],
    whatsappEnquiry: "Canon LBP6030 Monochrome Laser Printer",
  }),
  "Canon LBP6030W": (lang) => ({
    title: "Canon LBP6030W",
    badge: {
      en: "imageCLASS Monochrome WiFi Laser Printer",
      ta: "இமேஜ்கிளாஸ் மோனோக்ரோம் வைஃபை லேசர் பிரிண்டர்",
    },
    images: CANON_LBP6030W_IMAGES,
    specs: [
      { label: lang === "ta" ? "பிரிண்டர் வகை (Type)" : "Printer Type", value: "Monochrome Laser (Single Function)", icon: "Printer" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "Wireless WiFi · Wi-Fi Direct · USB 2.0", icon: "Wifi" },
      { label: lang === "ta" ? "அச்சு வேகம் (Print Speed)" : "Print Speed", value: "Up to 18 ppm (A4)", icon: "Zap" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "Up to 2400 x 600 dpi", icon: "Maximize" },
      { label: lang === "ta" ? "பயன்படும் டோனர் (Compatible Toner)" : "Compatible Toner", value: "Canon Cartridge 325 (Black)", icon: "Droplet" },
      { label: lang === "ta" ? "பக்க உற்பத்தி (Page Yield)" : "Page Yield", value: "Up to 1,600 Pages", icon: "FileText" },
    ],
    whatsappEnquiry: "Canon LBP6030W WiFi Monochrome Laser Printer",
  }),
  "CP Plus Bullet Cameras": (lang) => ({
    title: "CP Plus Bullet Cameras",
    badge: {
      en: "High-Definition Outdoor Bullet Security Camera",
      ta: "உயர்தர வெளிப்புற புல்லட் பாதுகாப்பு கேமரா",
    },
    images: CP_PLUS_BULLET_IMAGES,
    specs: [
      { label: lang === "ta" ? "வகை (Type)" : "Camera Type", value: "Outdoor HD Bullet Camera", icon: "Video" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "2.4 MP / 5.0 MP Full HD (1080p)", icon: "Maximize" },
      { label: lang === "ta" ? "இரவு பார்வை (Night Vision)" : "Night Vision", value: "Smart IR Cut Filter up to 20 meters", icon: "Moon" },
      { label: lang === "ta" ? "லென்ஸ் (Lens)" : "Lens Specification", value: "3.6mm Fixed Lens", icon: "Camera" },
      { label: lang === "ta" ? "பாதுகாப்பு (Protection)" : "Durability", value: "IP66 Weatherproof & Dustproof Rating", icon: "Shield" },
      { label: lang === "ta" ? "சென்சார் (Sensor)" : "Sensor", value: "1/2.7\" Progressive Scan CMOS Sensor", icon: "Cpu" },
    ],
    whatsappEnquiry: "CP Plus Bullet Cameras outdoor security",
  }),
  "CP Plus Dome Cameras": (lang) => ({
    title: "CP Plus Dome Cameras",
    badge: {
      en: "High-Definition Indoor/Outdoor Dome Security Camera",
      ta: "உயர்தர உள்/வெளிப்புற டோம் பாதுகாப்பு கேமரா",
    },
    images: CP_PLUS_DOME_IMAGES,
    specs: [
      { label: lang === "ta" ? "வகை (Type)" : "Camera Type", value: "Indoor/Outdoor HD Dome Camera", icon: "Video" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "2.4 MP / 5.0 MP Full HD (1080p)", icon: "Maximize" },
      { label: lang === "ta" ? "இரவு பார்வை (Night Vision)" : "Night Vision", value: "Smart IR Cut Filter up to 20 meters", icon: "Moon" },
      { label: lang === "ta" ? "லென்ஸ் (Lens)" : "Lens Specification", value: "3.6mm Fixed Lens · 360° Ceiling Mount", icon: "Camera" },
      { label: lang === "ta" ? "பாதுகாப்பு (Protection)" : "Durability", value: "IP66 Weatherproof & Vandal-Resistant", icon: "Shield" },
      { label: lang === "ta" ? "சென்சார் (Sensor)" : "Sensor", value: "1/2.7\" Progressive Scan CMOS Sensor", icon: "Cpu" },
    ],
    whatsappEnquiry: "CP Plus Dome Cameras indoor/outdoor security",
  }),
  "CP Plus NVR": (lang) => ({
    title: "CP Plus NVR",
    badge: {
      en: "Network Video Recorder for IP Camera Systems",
      ta: "ஐபி கேமரா அமைப்புக்கான நெட்வொர்க் வீடியோ ரெக்கார்டர்",
    },
    images: CP_PLUS_NVR_IMAGES,
    specs: [
      { label: lang === "ta" ? "வகை (Type)" : "Recorder Type", value: "Network Video Recorder (NVR)", icon: "Server" },
      { label: lang === "ta" ? "சேனல்கள் (Channels)" : "Channels", value: "4 / 8 / 16 Channel Support", icon: "LayoutGrid" },
      { label: lang === "ta" ? "அதிகபட்ச தெளிவுத்திறன் (Resolution)" : "Max Recording Resolution", value: "Up to 8MP (4K) per Channel", icon: "Maximize" },
      { label: lang === "ta" ? "சேமிப்பகம் (Storage)" : "HDD Support", value: "Up to 2 × SATA HDDs (Max 8 TB each)", icon: "HardDrive" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "Gigabit Ethernet · HDMI · VGA · USB 2.0/3.0", icon: "Network" },
      { label: lang === "ta" ? "அணுகல் (Remote Access)" : "Remote Access", value: "CP Plus Mobile App (gCMOS) · Web Browser", icon: "Smartphone" },
    ],
    whatsappEnquiry: "CP Plus NVR network video recorder",
  }),
  "CP Plus DVR": (lang) => ({
    title: "CP Plus DVR",
    badge: {
      en: "Digital Video Recorder for Analog & HD Camera Systems",
      ta: "அனாலாக் மற்றும் எச்டி கேமராக்கான டிஜிட்டல் வீடியோ ரெக்கார்டர்",
    },
    images: CP_PLUS_DVR_IMAGES,
    specs: [
      { label: lang === "ta" ? "வகை (Type)" : "Recorder Type", value: "Digital Video Recorder (DVR) — Hybrid HD", icon: "Server" },
      { label: lang === "ta" ? "சேனல்கள் (Channels)" : "Channels", value: "4 / 8 / 16 Channel Support", icon: "LayoutGrid" },
      { label: lang === "ta" ? "அதிகபட்ச தெளிவுத்திறன் (Resolution)" : "Max Recording Resolution", value: "Up to 5MP (2K Lite) per Channel", icon: "Maximize" },
      { label: lang === "ta" ? "சேமிப்பகம் (Storage)" : "HDD Support", value: "1 × SATA HDD (Max 8 TB)", icon: "HardDrive" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "HDMI · VGA · LAN · USB 2.0 · BNC Video In", icon: "Network" },
      { label: lang === "ta" ? "அணுகல் (Remote Access)" : "Remote Access", value: "CP Plus Mobile App (gCMOS) · Web Browser", icon: "Smartphone" },
    ],
    whatsappEnquiry: "CP Plus DVR digital video recorder",
  }),
  "CP Plus Robot Cameras": (lang) => ({
    title: "CP Plus Robot Cameras",
    badge: {
      en: "Smart WiFi Pan-Tilt IP Camera with AI Detection",
      ta: "AI கண்டுபிடிப்புடன் ஸ்மார்ட் வைஃபை பான்-டில்ட் ஐபி கேமரா",
    },
    images: CP_PLUS_ROBOT_IMAGES,
    specs: [
      { label: lang === "ta" ? "வகை (Type)" : "Camera Type", value: "WiFi Pan-Tilt (PT) Indoor IP Camera", icon: "Video" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "2 MP Full HD 1080p", icon: "Maximize" },
      { label: lang === "ta" ? "இயக்கம் (Pan/Tilt)" : "Pan / Tilt Range", value: "360° Pan · 90° Tilt — Full Room Coverage", icon: "RefreshCw" },
      { label: lang === "ta" ? "இரவு பார்வை (Night Vision)" : "Night Vision", value: "IR Night Vision up to 10 meters", icon: "Moon" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "2.4GHz WiFi · Two-Way Audio · Micro SD (up to 128GB)", icon: "Wifi" },
      { label: lang === "ta" ? "ஐபி கண்டுபிடிப்பு (AI Detection)" : "AI Detection", value: "Motion Alert · Human Detection · gCMOS App", icon: "Cpu" },
    ],
    whatsappEnquiry: "CP Plus Robot Pan-Tilt WiFi Camera",
  }),
  "Dahua Bullet Cameras": (lang) => ({
    title: "Dahua Bullet Cameras",
    badge: {
      en: "HD Outdoor Bullet Security Camera",
      ta: "உயர்தர வெளிப்புற டாஹுவா புல்லட் பாதுகாப்பு கேமரா",
    },
    images: DAHUA_BULLET_IMAGES,
    specs: [
      { label: lang === "ta" ? "வகை (Type)" : "Camera Type", value: "Outdoor HD Bullet Camera (HDCVI / IP)", icon: "Video" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "2 MP / 5 MP Full HD (1080p / 2K)", icon: "Maximize" },
      { label: lang === "ta" ? "இரவு பார்வை (Night Vision)" : "Night Vision", value: "Smart IR up to 30 meters", icon: "Moon" },
      { label: lang === "ta" ? "லென்ச் (Lens)" : "Lens Specification", value: "2.8mm / 3.6mm Fixed Lens", icon: "Camera" },
      { label: lang === "ta" ? "பாதுகாப்பு (Protection)" : "Durability", value: "IP67 Weatherproof & Dustproof Rating", icon: "Shield" },
      { label: lang === "ta" ? "சென்சார் (Sensor)" : "Sensor", value: "1/2.7\" CMOS · Wide Dynamic Range (WDR)", icon: "Cpu" },
    ],
    whatsappEnquiry: "Dahua Bullet Cameras outdoor security",
  }),
  "Dahua DVR": (lang) => ({
    title: "Dahua DVR",
    badge: {
      en: "WizSense HDCVI Digital Video Recorder",
      ta: "விஸ்சென்ஸ் எச்டிசிவிஐ டிஜிட்டல் வீடியோ ரெக்கார்டர்",
    },
    images: DAHUA_DVR_IMAGES,
    specs: [
      { label: lang === "ta" ? "வகை (Type)" : "Recorder Type", value: "HDCVI DVR — WizSense AI Series", icon: "Server" },
      { label: lang === "ta" ? "சேனல்கள் (Channels)" : "Channels", value: "4 / 8 / 16 Channel Support", icon: "LayoutGrid" },
      { label: lang === "ta" ? "அதிகபட்ச தெளிவுத்திறன் (Resolution)" : "Max Recording Resolution", value: "Up to 5MP Lite per Channel", icon: "Maximize" },
      { label: lang === "ta" ? "சேமிப்பகம் (Storage)" : "HDD Support", value: "1 × SATA HDD (Max 8 TB)", icon: "HardDrive" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "HDMI · VGA · LAN · USB 2.0 · BNC Video In", icon: "Network" },
      { label: lang === "ta" ? "AI கண்டுபிடிப்பு (AI Features)" : "AI Features", value: "SMD Plus — Human & Vehicle Detection", icon: "Cpu" },
    ],
    whatsappEnquiry: "Dahua DVR WizSense digital video recorder",
  }),
  "Dahua NVR": (lang) => ({
    title: "Dahua NVR",
    badge: {
      en: "WizSense Network Video Recorder for IP Cameras",
      ta: "ஐபி கேமராக்கான டாஹுவா விச்சென்ச் நெட்வொர்க் வீடியோ ரெக்கார்டர்",
    },
    images: DAHUA_NVR_IMAGES,
    specs: [
      { label: lang === "ta" ? "வகை (Type)" : "Recorder Type", value: "Network Video Recorder (NVR) — WizSense AI", icon: "Server" },
      { label: lang === "ta" ? "சேனல்கள் (Channels)" : "Channels", value: "4 / 8 / 16 / 32 Channel Support", icon: "LayoutGrid" },
      { label: lang === "ta" ? "அதிகபட்ச தெளிவுத்திறன் (Resolution)" : "Max Recording Resolution", value: "Up to 8MP (4K Ultra HD) per Channel", icon: "Maximize" },
      { label: lang === "ta" ? "சேமிப்பகம் (Storage)" : "HDD Support", value: "Up to 2 × SATA HDDs (Max 8 TB each)", icon: "HardDrive" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "Gigabit Ethernet · HDMI · VGA · USB 3.0", icon: "Network" },
      { label: lang === "ta" ? "AI கண்டுபிடிப்பு (AI Features)" : "AI Features", value: "SMD Plus — Human & Vehicle Detection", icon: "Cpu" },
    ],
    whatsappEnquiry: "Dahua NVR WizSense network video recorder",
  }),
  "4G SIM Cameras": (lang) => ({
    title: "4G SIM Cameras",
    badge: {
      en: "4G SIM Card Outdoor IP Camera — No WiFi Needed",
      ta: "4ஜி சிம் கார்ட் வெளிப்புற ஐபி கேமரா — வைஃபை தேவையில்லை",
    },
    images: SIM_4G_CAMERA_IMAGES,
    specs: [
      { label: lang === "ta" ? "வகை (Type)" : "Camera Type", value: "4G SIM-Based Outdoor Security Camera", icon: "Video" },
      { label: lang === "ta" ? "தெளிவுத்திறன் (Resolution)" : "Resolution", value: "Full HD 1080p / 4K Ultra HD", icon: "Maximize" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "4G LTE SIM Card — Works with Jio, Airtel, BSNL, Vodafone", icon: "Wifi" },
      { label: lang === "ta" ? "இரவு பார்வை (Night Vision)" : "Night Vision", value: "IR & Full-Colour Night Vision up to 30m", icon: "Moon" },
      { label: lang === "ta" ? "இயக்கம் (Pan/Tilt)" : "Pan / Tilt", value: "360° Pan · 90° Tilt — Remote Control via App", icon: "RefreshCw" },
      { label: lang === "ta" ? "கூடுதல் அமைப்புகள் (Features)" : "Extra Features", value: "Motion Alert · Two-Way Audio · IP66 Weatherproof", icon: "Shield" },
    ],
    whatsappEnquiry: "4G SIM Camera outdoor security no WiFi needed",
  }),
  "Home Security Solutions": (lang) => ({
    title: lang === "ta" ? "வீட்டு பாதுகாப்பு தீர்வுகள்" : "Home Security Solutions",
    badge: {
      en: "Complete Smart Home Security",
      ta: "முழுமையான வீட்டு பாதுகாப்பு",
    },
    images: HOME_SECURITY_IMAGES,
    specs: [
      { label: lang === "ta" ? "தொகுப்பு உள்ளடக்கம்" : "Package Includes", value: "Smart Cameras · Motion Sensors · Video Doorbell", icon: "ShieldAlert" },
      { label: lang === "ta" ? "கண்காணிப்பு (Surveillance)" : "Video Quality", value: "1080p Full HD Resolution with Night Vision", icon: "Video" },
      { label: lang === "ta" ? "இணைப்பு (Connectivity)" : "Connectivity", value: "WiFi Connected · App Control (iOS & Android)", icon: "Wifi" },
      { label: lang === "ta" ? "அலாரங்கள் (Alerts)" : "Smart Alerts", value: "Instant Motion Detection & Intruder Warning", icon: "Bell" },
      { label: lang === "ta" ? "இருவழி பேச்சு (Audio)" : "Audio Type", value: "Two-way Real-time Talkback Support", icon: "Mic" },
      { label: lang === "ta" ? "சேமிப்பகம் (Storage)" : "Storage Support", value: "Cloud Storage Options + Local MicroSD Slot", icon: "HardDrive" },
    ],
    whatsappEnquiry: "Home Security Solutions package",
  }),
  "Office Security Solutions": (lang) => ({
    title: lang === "ta" ? "அலுவலக பாதுகாப்பு தீர்வுகள்" : "Office Security Solutions",
    badge: {
      en: "Enterprise Grade CCTV & Monitoring",
      ta: "நிறுவன தர கண்காணிப்பு",
    },
    images: OFFICE_SECURITY_IMAGES,
    specs: [
      { label: lang === "ta" ? "தொகுப்பு உள்ளடக்கம்" : "Package Includes", value: "Multi-Camera System · NVR Storage · PoE Switch", icon: "ShieldCheck" },
      { label: lang === "ta" ? "வீடியோ தரம் (Video)" : "Video Quality", value: "4K UHD Professional IP Cameras", icon: "Video" },
      { label: lang === "ta" ? "சேமிப்பகம் (Storage)" : "Storage System", value: "Dedicated 2TB/4TB Surveillance NVR Hard Drive", icon: "HardDrive" },
      { label: lang === "ta" ? "தூரக்கால அணுகல் (Remote)" : "Remote Monitoring", value: "Multi-User Live Feed access via App & PC", icon: "Monitor" },
      { label: lang === "ta" ? "சக்தி மூலம் (Power)" : "Power Delivery", value: "PoE (Power over Ethernet) — Clean Installation", icon: "Zap" },
      { label: lang === "ta" ? "அமைப்புகள் (Smart Features)" : "Smart Analytics", value: "Face Recognition · Perimeter Detection · Motion Log", icon: "Brain" },
    ],
    whatsappEnquiry: "Office Security Solutions enterprise package",
  }),
  "Acer 20 Inch Monitor": (lang) => ({
    title: lang === "ta" ? "ஏசர் 20 இன்ச் மானிட்டர்" : "Acer 20 Inch Monitor",
    badge: {
      en: "Compact HD LED Monitor",
      ta: "காம்பாக்ட் எச்டி எல்இடி மானிட்டர்",
    },
    images: ACER_20_MONITOR_IMAGES,
    specs: [
      { label: lang === "ta" ? "திரை அளவு" : "Screen Size", value: '19.5" (49.53 cm) HD Display', icon: "Monitor" },
      { label: lang === "ta" ? "தெளிவுத்திறன்" : "Resolution", value: "HD+ (1600 x 900) at 60Hz", icon: "Maximize" },
      { label: lang === "ta" ? "பேனல் வகை" : "Panel Type", value: "TN Panel with 16.7 Million Colors", icon: "Layers" },
      { label: lang === "ta" ? "பதிற்செயல் நேரம்" : "Response Time", value: "5 ms Fast Response Time", icon: "Zap" },
      { label: lang === "ta" ? "இணைப்புகள்" : "Ports", value: "VGA & HDMI Input Ports", icon: "Link" },
      { label: lang === "ta" ? "பாதுகாப்பு" : "Eye Care Technology", value: "Blue Light Filter · Flickerless Panel", icon: "Shield" },
    ],
    whatsappEnquiry: "Acer 20 Inch Monitor",
  }),
  "Acer 22 Inch IPS Monitor": (lang) => ({
    title: lang === "ta" ? "ஏசர் 22 இன்ச் ஐபிஎஸ் மானிட்டர்" : "Acer 22 Inch IPS Monitor",
    badge: {
      en: "Bezel-less Full HD IPS Monitor",
      ta: "பெசல்-லெஸ் முழு எச்டி ஐபிஎஸ் மானிட்டர்",
    },
    images: ACER_22_MONITOR_IMAGES,
    specs: [
      { label: lang === "ta" ? "திரை அளவு" : "Screen Size", value: '21.5" (54.61 cm) Edge-to-Edge Display', icon: "Monitor" },
      { label: lang === "ta" ? "தெளிவுத்திறன்" : "Resolution", value: "Full HD (1920 x 1080) at 75Hz", icon: "Maximize" },
      { label: lang === "ta" ? "பேனல் வகை" : "Panel Type", value: "IPS Panel with 178° Wide Viewing Angle", icon: "Layers" },
      { label: lang === "ta" ? "பதிற்செயல் நேரம்" : "Response Time", value: "4 ms Response Time", icon: "Zap" },
      { label: lang === "ta" ? "இணைப்புகள்" : "Ports", value: "HDMI, VGA & Audio-out Ports", icon: "Link" },
      { label: lang === "ta" ? "பாதுகாப்பு" : "Eye Care Features", value: "Acer VisionCare · Low Blue Light", icon: "Shield" },
    ],
    whatsappEnquiry: "Acer 22 Inch IPS Monitor",
  }),
  "Dell 20 Inch Monitor": (lang) => ({
    title: lang === "ta" ? "டெல் 20 இன்ச் மானிட்டர்" : "Dell 20 Inch Monitor",
    badge: {
      en: "Reliable Office Monitor",
      ta: "நம்பகமான அலுவலக மானிட்டர்",
    },
    images: DELL_20_MONITOR_IMAGES,
    specs: [
      { label: lang === "ta" ? "திரை அளவு" : "Screen Size", value: '19.5" (49.53 cm) Wide LED Display', icon: "Monitor" },
      { label: lang === "ta" ? "தெளிவுத்திறன்" : "Resolution", value: "HD+ (1600 x 900) at 60Hz", icon: "Maximize" },
      { label: lang === "ta" ? "விகிதம்" : "Aspect Ratio", value: "16:9 Widescreen Aspect Ratio", icon: "Tv" },
      { label: lang === "ta" ? "பதிற்செயல் நேரம்" : "Response Time", value: "5 ms Fast Response Time", icon: "Zap" },
      { label: lang === "ta" ? "இணைப்புகள்" : "Ports", value: "HDMI & VGA Input Ports", icon: "Link" },
      { label: lang === "ta" ? "மின் சேமிப்பு" : "Energy Saving", value: "ENERGY STAR® Certified · Eco-conscious Design", icon: "Leaf" },
    ],
    whatsappEnquiry: "Dell 20 Inch Monitor",
  }),
  "Dell 22 Inch Monitor": (lang) => ({
    title: lang === "ta" ? "டெல் 22 இன்ச் மானிட்டர்" : "Dell 22 Inch Monitor",
    badge: {
      en: "Full HD Office & Media Monitor",
      ta: "முழு எச்டி அலுவலக & மீடியா மானிட்டர்",
    },
    images: DELL_22_MONITOR_IMAGES,
    specs: [
      { label: lang === "ta" ? "திரை அளவு" : "Screen Size", value: '21.5" (54.61 cm) Full HD Display', icon: "Monitor" },
      { label: lang === "ta" ? "தெளிவுத்திறன்" : "Resolution", value: "Full HD (1920 x 1080) at 60Hz", icon: "Maximize" },
      { label: lang === "ta" ? "கோணம்" : "Viewing Angle", value: "178° Horizontal / 178° Vertical", icon: "RefreshCw" },
      { label: lang === "ta" ? "பதிற்செயல் நேரம்" : "Response Time", value: "5 ms Fast Response Time", icon: "Zap" },
      { label: lang === "ta" ? "இணைப்புகள்" : "Ports", value: "HDMI & VGA Input Ports", icon: "Link" },
      { label: lang === "ta" ? "வண்ணங்கள்" : "Color Depth", value: "16.7 Million Colors · Anti-glare Screen", icon: "Palette" },
    ],
    whatsappEnquiry: "Dell 22 Inch Monitor",
  }),
  "Fingers 22 Inch Monitor": (lang) => ({
    title: lang === "ta" ? "பிங்கர்ஸ் 22 இன்ச் மானிட்டர்" : "Fingers 22 Inch Monitor",
    badge: {
      en: "Ultra-Slim Bezel-less IPS Monitor",
      ta: "அல்ட்ரா-ஸ்லிம் பெசல்-லெஸ் ஐபிஎஸ் மானிட்டர்",
    },
    images: FINGERS_22_MONITOR_IMAGES,
    specs: [
      { label: lang === "ta" ? "திரை அளவு" : "Screen Size", value: '21.5" (54.61 cm) Bezel-less Display', icon: "Monitor" },
      { label: lang === "ta" ? "தெளிவுத்திறன்" : "Resolution", value: "Full HD (1920 x 1080) at 75Hz", icon: "Maximize" },
      { label: lang === "ta" ? "பேனல் வகை" : "Panel Type", value: "IPS Panel with 178° Wide Viewing Angle", icon: "Layers" },
      { label: lang === "ta" ? "பதிற்செயல் நேரம்" : "Response Time", value: "5 ms Fast Response Time", icon: "Zap" },
      { label: lang === "ta" ? "இணைப்புகள்" : "Ports", value: "HDMI, VGA & Audio-out Ports", icon: "Link" },
      { label: lang === "ta" ? "உடல் வடிவமைப்பு" : "Design Specification", value: "Ultra-Slim Frame · Anti-Glare Screen", icon: "Sliders" },
    ],
    whatsappEnquiry: "Fingers 22 Inch Monitor",
  }),
  "EVM LED Monitors": (lang) => ({
    title: lang === "ta" ? "EVM எல்இடி மானிட்டர்கள்" : "EVM LED Monitors",
    badge: {
      en: "Eco-Friendly HD LED Monitor",
      ta: "சுற்றுச்சூழல் நட்பு எச்டி எல்இடி மானிட்டர்",
    },
    images: EVM_MONITOR_IMAGES,
    specs: [
      { label: lang === "ta" ? "திரை அளவு" : "Screen Size", value: '18.5" / 19.5" / 21.5" Active Matrix Display', icon: "Monitor" },
      { label: lang === "ta" ? "தெளிவுத்திறன்" : "Resolution", value: "HD / Full HD Output Support", icon: "Maximize" },
      { label: lang === "ta" ? "திரை வகை" : "Display Tech", value: "LED Backlight with Slim Form Factor", icon: "Layers" },
      { label: lang === "ta" ? "பதிற்செயல் நேரம்" : "Response Time", value: "5 ms Fast Response Time", icon: "Zap" },
      { label: lang === "ta" ? "இணைப்புகள்" : "Ports", value: "HDMI & VGA Input Connectors", icon: "Link" },
      { label: lang === "ta" ? "உத்தரவாதம்" : "Warranty Period", value: "3 Years Manufacturer Warranty", icon: "Shield" },
    ],
    whatsappEnquiry: "EVM LED Monitors",
  }),
  "128GB SSD": (lang) => ({
    title: lang === "ta" ? "128 ஜிபி எஸ்எஸ்டி" : "128GB SSD",
    badge: {
      en: "High-Speed Internal SATA SSD",
      ta: "அதிவேக உள்நாட்டு சேமிப்பு எஸ்எஸ்டி",
    },
    images: SSD_128GB_IMAGES,
    specs: [
      { label: lang === "ta" ? "சேமிப்பக திறன்" : "Capacity", value: "128 GB Storage Space", icon: "HardDrive" },
      { label: lang === "ta" ? "படிக்கும் வேகம்" : "Sequential Read Speed", value: "Up to 550 MB/s", icon: "Zap" },
      { label: lang === "ta" ? "எழுதும் வேகம்" : "Sequential Write Speed", value: "Up to 500 MB/s", icon: "Activity" },
      { label: lang === "ta" ? "வடிவமைப்பு" : "Interface & Form Factor", value: "SATA III 6Gb/s · 2.5-Inch (7mm)", icon: "Layers" },
      { label: lang === "ta" ? "பொருந்தக்கூடிய தன்மை" : "Compatibility", value: "Laptops & Desktop Computer PCs", icon: "Server" },
      { label: lang === "ta" ? "உத்தரவாதம்" : "Warranty Period", value: "3 to 5 Years Warranty (Brand Specific)", icon: "Shield" },
    ],
    whatsappEnquiry: "128GB Solid State Drive (SSD)",
  }),
  "256GB SSD": (lang) => ({
    title: lang === "ta" ? "256 ஜிபி எஸ்எஸ்டி" : "256GB SSD",
    badge: {
      en: "High-Performance Internal SATA SSD",
      ta: "அதிவேக செயல்திறன் கொண்ட உள்நாட்டு எஸ்எஸ்டி",
    },
    images: SSD_256GB_IMAGES,
    specs: [
      { label: lang === "ta" ? "சேமிப்பக திறன்" : "Capacity", value: "256 GB Storage Space", icon: "HardDrive" },
      { label: lang === "ta" ? "படிக்கும் வேகம்" : "Sequential Read Speed", value: "Up to 560 MB/s", icon: "Zap" },
      { label: lang === "ta" ? "எழுதும் வேகம்" : "Sequential Write Speed", value: "Up to 520 MB/s", icon: "Activity" },
      { label: lang === "ta" ? "வடிவமைப்பு" : "Interface & Form Factor", value: "SATA III 6Gb/s · 2.5-Inch (7mm)", icon: "Layers" },
      { label: lang === "ta" ? "பொருந்தக்கூடிய தன்மை" : "Compatibility", value: "Laptops, Ultrabooks & Desktop PCs", icon: "Server" },
      { label: lang === "ta" ? "உத்தரவாதம்" : "Warranty Period", value: "3 to 5 Years Warranty (Brand Specific)", icon: "Shield" },
    ],
    whatsappEnquiry: "256GB Solid State Drive (SSD)",
  }),
  "512GB SSD": (lang) => ({
    title: lang === "ta" ? "512 ஜிபி எஸ்எஸ்டி" : "512GB SSD",
    badge: {
      en: "Ultra-Fast NVMe PCIe / SATA SSD",
      ta: "அதிவேக என்விஎம்இ பிசிஐஇ / சாட்டா எஸ்எஸ்டி",
    },
    images: SSD_512GB_IMAGES,
    specs: [
      { label: lang === "ta" ? "சேமிப்பக திறன்" : "Capacity", value: "512 GB Storage Space", icon: "HardDrive" },
      { label: lang === "ta" ? "படிக்கும் வேகம்" : "Sequential Read Speed", value: "Up to 5000 MB/s (NVMe) / 560 MB/s (SATA)", icon: "Zap" },
      { label: lang === "ta" ? "எழுதும் வேகம்" : "Sequential Write Speed", value: "Up to 4800 MB/s (NVMe) / 520 MB/s (SATA)", icon: "Activity" },
      { label: lang === "ta" ? "இடைமுகம் (Interface)" : "Interface Options", value: "NVMe M.2 (2280) PCIe Gen 4x4 or SATA III 2.5\"", icon: "Layers" },
      { label: lang === "ta" ? "பொருந்தக்கூடிய தன்மை" : "Compatibility", value: "High-End Laptops, Gaming PCs & Desktops", icon: "Server" },
      { label: lang === "ta" ? "உத்தரவாதம்" : "Warranty Period", value: "3 to 5 Years Warranty (Brand Specific)", icon: "Shield" },
    ],
    whatsappEnquiry: "512GB Solid State Drive (SSD)",
  }),
  "1TB HDD": (lang) => ({
    title: lang === "ta" ? "1டிபி ஹார்ட் டிஸ்க்" : "1TB HDD",
    badge: {
      en: "High-Capacity Desktop Hard Drive",
      ta: "அதிவேக மற்றும் அதிக சேமிப்பு கொண்ட ஹார்ட் டிஸ்க்",
    },
    images: HDD_1TB_IMAGES,
    specs: [
      { label: lang === "ta" ? "சேமிப்பக திறன்" : "Capacity", value: "1 TB (1000 GB) Storage Space", icon: "HardDrive" },
      { label: lang === "ta" ? "சுழற்சி வேகம்" : "Rotational Speed", value: "7200 RPM High Performance", icon: "RefreshCw" },
      { label: lang === "ta" ? "இடைமுகம் (Interface)" : "Interface", value: "SATA III 6Gb/s Interface", icon: "Layers" },
      { label: lang === "ta" ? "கேச் நினைவகம்" : "Cache Buffer", value: "64 MB Cache Memory", icon: "Zap" },
      { label: lang === "ta" ? "பொருந்தக்கூடிய தன்மை" : "Form Factor & Compatibility", value: "3.5-inch Desktop PCs / Storage Enclosures", icon: "Server" },
      { label: lang === "ta" ? "உத்தரவாதம்" : "Warranty Period", value: "2 to 3 Years Warranty (Brand Specific)", icon: "Shield" },
    ],
    whatsappEnquiry: "1TB Internal Hard Disk Drive (HDD)",
  }),
  "2TB HDD": (lang) => ({
    title: lang === "ta" ? "2டிபி ஹார்ட் டிஸ்க்" : "2TB HDD",
    badge: {
      en: "Enterprise & Surveillance High-Capacity HDD",
      ta: "தொழில்முறை மற்றும் கண்காணிப்பு அதிக சேமிப்பு கொண்ட ஹார்ட் டிஸ்க்",
    },
    images: HDD_2TB_IMAGES,
    specs: [
      { label: lang === "ta" ? "சேமிப்பக திறன்" : "Capacity", value: "2 TB (2000 GB) Storage Space", icon: "HardDrive" },
      { label: lang === "ta" ? "வகை & பயன்பாடு" : "Usage Type", value: "Surveillance (WD Purple) / Desktop (WD Blue, Barracuda)", icon: "ShieldCheck" },
      { label: lang === "ta" ? "சுழற்சி வேகம்" : "Rotational Speed", value: "5400 RPM / 7200 RPM Performance", icon: "RefreshCw" },
      { label: lang === "ta" ? "இடைமுகம் (Interface)" : "Interface", value: "SATA III 6Gb/s Interface", icon: "Layers" },
      { label: lang === "ta" ? "பொருந்தக்கூடிய தன்மை" : "Form Factor & Compatibility", value: "3.5-inch Desktop PCs / NVR & DVR Surveillance Systems", icon: "Server" },
      { label: lang === "ta" ? "உத்தரவாதம்" : "Warranty Period", value: "2 to 3 Years Warranty (Brand Specific)", icon: "Shield" },
    ],
    whatsappEnquiry: "2TB Internal Hard Disk Drive (HDD)",
  })
};

function ProductsPage() {
  const { t, lang } = useI18n();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <section className="relative isolate overflow-hidden gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary">{t("nav.products")}</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">{t("section.products")}</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">{t("section.productsSub")}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <a
                key={c.key}
                href={`#${c.key}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur transition hover:bg-primary-foreground/20"
              >
                <Icon name={c.icon} className="h-3.5 w-3.5 text-secondary" />
                {lang === "ta" ? c.ta : c.en}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {CATEGORIES.map((c) => (
            <section key={c.key} id={c.key} className="scroll-mt-24">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-hero text-primary-foreground shadow-soft">
                  <Icon name={c.icon} className="h-7 w-7" />
                </span>
                <div className="min-w-0">
                  <h2 className="truncate text-2xl font-black tracking-tight sm:text-3xl">
                    {lang === "ta" ? c.ta : c.en}
                  </h2>
                  <p className="text-sm text-muted-foreground">{c.products.length} {lang === "ta" ? "தயாரிப்புகள்" : "items"}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {c.products.map((p) => {
                  const isRefurb = /refurb/i.test(p);
                  const isInteractive = p in INTERACTIVE_PRODUCTS;
                  return (
                    <article
                      key={p}
                      onClick={() => {
                        if (isInteractive) {
                          setSelectedProduct(p);
                          setCurrentSlide(0);
                        }
                      }}
                      className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 ${
                        isInteractive ? "cursor-pointer hover:border-primary/50" : ""
                      } hover:-translate-y-1 hover:shadow-elevated`}
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                        <img
                          src={getProductImage(p, c.key)}
                          alt={p}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {isInteractive && (
                          <span className="absolute left-3 top-3 rounded-full bg-primary/95 text-primary-foreground px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider border border-primary/20 shadow-sm animate-pulse">
                            {lang === "ta" ? "விவரங்கள் பார்க்க கிளிக் செய்யவும்" : "Click for Details"}
                          </span>
                        )}
                        <span
                          className={`absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border border-white/10 ${
                            isRefurb
                              ? "bg-secondary/90 text-secondary-foreground"
                              : "bg-accent/90 text-accent-foreground"
                          }`}
                        >
                          {isRefurb ? t("badge.refurb") : t("badge.inStock")}
                        </span>
                      </div>
                      
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-sm font-bold leading-snug text-card-foreground line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors duration-200">
                          {p}
                        </h3>
                        <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                          {lang === "ta" ? "கடையில் கிடைக்கும்" : "Available in store"}
                        </p>
                        <a
                          href={whatsappLink(`Hello SRS, I'd like to enquire about: ${p}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-bold text-accent-foreground shadow-soft transition hover:scale-[1.02] mt-auto"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          {t("cta.enquire")}
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProduct && INTERACTIVE_PRODUCTS[selectedProduct] && (() => {
        const details = INTERACTIVE_PRODUCTS[selectedProduct](lang);
        return (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
            onClick={() => setSelectedProduct(null)}
          >
            <div 
              className="relative w-full max-w-3xl bg-card rounded-3xl border border-border shadow-elevated overflow-hidden flex flex-col p-6 max-h-[90vh] md:max-h-[580px] animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition z-10 cursor-pointer"
              >
                <Icons.X className="h-4 w-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-4 pr-10">
                <span className="rounded-full bg-accent/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/20">
                  {lang === "ta" ? details.badge.ta : details.badge.en}
                </span>
                <h3 className="text-xl font-black tracking-tight text-foreground mt-1.5">
                  {details.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden min-h-0">
                {/* Left Column: Slideshow */}
                <div className="relative flex flex-col justify-between bg-muted/20 rounded-2xl overflow-hidden p-2 border border-border/80 h-full min-h-0">
                  <div className="relative flex-1 aspect-[4/3] md:aspect-auto w-full rounded-xl overflow-hidden bg-black flex items-center justify-center min-h-0">
                    <img
                      src={details.images[currentSlide]}
                      alt={`${details.title} Slide ${currentSlide + 1}`}
                      className="h-full w-full object-cover transition-all duration-300"
                    />
                    
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev === 0 ? details.images.length - 1 : prev - 1))}
                      className="absolute left-2 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 transition cursor-pointer"
                    >
                      <Icons.ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev === details.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-2 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-black/60 text-white hover:bg-black/80 transition cursor-pointer"
                    >
                      <Icons.ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="flex justify-center gap-1.5 mt-3 mb-1 shrink-0">
                    {details.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          currentSlide === idx ? "w-6 bg-primary" : "w-2 bg-primary/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Column: Specs & CTA */}
                <div className="flex flex-col justify-between h-full overflow-hidden min-h-0">
                  <div className="space-y-3 overflow-y-auto pr-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">
                      {lang === "ta" ? "கணினி விவரங்கள்" : "Technical Specifications"}
                    </h4>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                      {details.specs.map((spec) => (
                        <div key={spec.label} className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-muted/40 p-2">
                          <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary-soft text-primary shrink-0">
                            <Icon name={spec.icon} className="h-4 w-4" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[9px] font-semibold text-muted-foreground leading-none">{spec.label}</p>
                            <p className="font-bold text-card-foreground mt-0.5 truncate text-[11px]">{spec.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={whatsappLink(`Hello SRS, I'd like to enquire about the ${details.whatsappEnquiry}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-bold text-accent-foreground shadow-soft transition hover:scale-[1.02] shrink-0"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    {t("cta.enquire")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}
