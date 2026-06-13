import storeSign from "@/assets/store-sign.png";
import cctvCameras from "@/assets/cctv-cameras.png";
import storeShelf from "@/assets/store-shelf.png";
import accessoriesCabinet from "@/assets/accessories-cabinet.png";
import components from "@/assets/components.png";
import printerSupplies from "@/assets/printer-supplies.png";

export type ShopImage = {
  src: string;
  alt: string;
  caption: { en: string; ta: string };
};

export const GALLERY_IMAGES: ShopImage[] = [
  {
    src: storeSign,
    alt: "SRS Computer & Service store sign",
    caption: { en: "SRS Computer & Service — Perambalur", ta: "SRS Computer & Service — பெரம்பலூர்" },
  },
  {
    src: cctvCameras,
    alt: "CCTV and security cameras in stock",
    caption: { en: "CCTV & WiFi / 4G Security Cameras", ta: "சிசிடிவி & WiFi / 4G பாதுகாப்பு கேமராக்கள்" },
  },
  {
    src: storeShelf,
    alt: "Store shelf with computers and accessories",
    caption: { en: "Computers, Monitors & Peripherals", ta: "கணினிகள், மானிட்டர்கள் & துணைப் பொருட்கள்" },
  },
  {
    src: accessoriesCabinet,
    alt: "Laptop adapters, SSDs and accessories",
    caption: { en: "Laptop Adapters, SSDs & Accessories", ta: "லேப்டாப் அடாப்டர்கள், SSD & துணைப் பொருட்கள்" },
  },
  {
    src: components,
    alt: "Motherboards, RAM and computer components",
    caption: { en: "Motherboards, RAM & Components", ta: "மதர்போர்டுகள், RAM & பாகங்கள்" },
  },
  {
    src: printerSupplies,
    alt: "Printer ink, toners and networking products",
    caption: { en: "Printer Ink, Toners & Networking", ta: "பிரிண்டர் மை, டோனர் & நெட்வொர்க்கிங்" },
  },
];

export type ProductShowcase = {
  key: string;
  en: string;
  ta: string;
  image: string;
};

export const PRODUCT_SHOWCASE: ProductShowcase[] = [
  { key: "cctv", en: "CCTV Camera", ta: "சிசிடிவி கேமரா", image: cctvCameras },
  { key: "cctv-smart", en: "CCTV SIM / WiFi / Solar Camera", ta: "சிசிடிவி SIM / WiFi / சோலார் கேமரா", image: cctvCameras },
  { key: "computer", en: "Computer", ta: "கணினி", image: storeShelf },
  { key: "laptop", en: "Laptop", ta: "லேப்டாப்", image: storeShelf },
  { key: "monitor", en: "Monitor", ta: "மானிட்டர்", image: storeShelf },
  { key: "printer", en: "All Model Printer", ta: "அனைத்து மாடல் பிரிண்டர்", image: printerSupplies },
  { key: "toner", en: "Toner & Toner Refilling", ta: "டோனர் & டோனர் ரீஃபில்", image: printerSupplies },
  { key: "adapters", en: "Laptop Adapters", ta: "லேப்டாப் அடாப்டர்கள்", image: accessoriesCabinet },
  { key: "storage", en: "SSD & Data Card", ta: "SSD & டேட்டா கார்டு", image: accessoriesCabinet },
  { key: "router", en: "Wireless Router", ta: "வயர்லெஸ் ரூட்டர்", image: printerSupplies },
  { key: "components", en: "Motherboard & RAM", ta: "மதர்போர்டு & RAM", image: components },
  { key: "keyboard", en: "Keyboard & Mouse", ta: "விசைப்பலகை & சுட்டி", image: printerSupplies },
  { key: "ups", en: "UPS & Speakers", ta: "UPS & ஸ்பீக்கர்கள்", image: storeShelf },
  { key: "scanner", en: "Scanner", ta: "ஸ்கேனர்", image: printerSupplies },
];
