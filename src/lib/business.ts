export const BUSINESS = {
  name: "SRS Computer & Service",
  owner: "R. C. Ramalingam",
  established: "15 November 2009",
  address: {
    en: "1st Floor, Royal Enfield Showroom, Venkatesapuram, Perambalur - 621212",
    ta: "1வது தளம், ராயல் என்ஃபீல்ட் ஷோரூம், வெங்கடேசபுரம், பெரம்பலூர் - 621212",
  },
  phones: ["6380876818", "7305670008"],
  emails: ["srscomputerservicepblr@gmail.com", "srstech123@gmail.com"],
  whatsapp: "6380876818",
  mapLink: "https://share.google/pgsblmcmw5jwUF06Z",
  mapEmbed:
    "https://www.google.com/maps?q=Royal+Enfield+Showroom+Venkatesapuram+Perambalur&output=embed",
  defaultWhatsappMsg: "Hello SRS Computer & Service, I would like to enquire about your products.",
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/91${BUSINESS.whatsapp}?text=${encodeURIComponent(msg ?? BUSINESS.defaultWhatsappMsg)}`;

export const telLink = (n: string) => `tel:+91${n}`;

export type Service = {
  key: string;
  en: string;
  ta: string;
  icon: string; // lucide name
};

export const SERVICES: Service[] = [
  { key: "computer-sales", en: "Computer Sales", ta: "கணினி விற்பனை", icon: "Monitor" },
  { key: "laptop-sales", en: "Laptop Sales", ta: "லேப்டாப் விற்பனை", icon: "Laptop" },
  { key: "desktop-assembly", en: "Desktop Assembly", ta: "டெஸ்க்டாப் சேர்க்கை", icon: "Cpu" },
  { key: "printer-service", en: "Printer Sales & Service", ta: "பிரிண்டர் விற்பனை & சேவை", icon: "Printer" },
  { key: "laptop-repair", en: "Laptop Repair", ta: "லேப்டாப் பழுதுபார்ப்பு", icon: "Wrench" },
  { key: "computer-repair", en: "Computer Repair", ta: "கணினி பழுதுபார்ப்பு", icon: "Settings" },
  { key: "motherboard", en: "Motherboard Repair", ta: "மதர்போர்டு பழுதுபார்ப்பு", icon: "CircuitBoard" },
  { key: "upgrades", en: "RAM & SSD Upgrades", ta: "RAM & SSD மேம்பாடுகள்", icon: "MemoryStick" },
  { key: "cctv", en: "CCTV Installation", ta: "சிசிடிவி நிறுவல்", icon: "Camera" },
  { key: "networking", en: "Networking Solutions", ta: "நெட்வொர்க்கிங்", icon: "Network" },
  { key: "data-recovery", en: "Data Recovery", ta: "தரவு மீட்பு", icon: "HardDrive" },
  { key: "amc", en: "Annual Maintenance Contracts", ta: "ஆண்டு பராமரிப்பு ஒப்பந்தம்", icon: "FileCheck" },
  { key: "refurb", en: "Refurbished Systems", ta: "புதுப்பிக்கப்பட்ட அமைப்புகள்", icon: "RefreshCw" },
  { key: "onsite", en: "On-site Service Support", ta: "இடத்திற்கே வந்து சேவை", icon: "Truck" },
];

export type ProductCategory = {
  key: string;
  en: string;
  ta: string;
  icon: string;
  products: string[];
};

export const CATEGORIES: ProductCategory[] = [
  {
    key: "laptops",
    en: "Laptops",
    ta: "லேப்டாப்புகள்",
    icon: "Laptop",
    products: [
      "Acer Aspire 3 Core i3 13th Gen",
      "Acer Aspire Lite Core i5 13th Gen",
      "Dell Core i3 14th Gen",
      "Dell Ryzen 3 Laptop",
      "Dell Slim Core i3 14th Gen",
      "Refurbished Laptops",
    ],
  },
  {
    key: "desktops",
    en: "Desktop Computers",
    ta: "டெஸ்க்டாப் கணினிகள்",
    icon: "Monitor",
    products: ["Custom Desktop PCs", "Dell Pro Tower Desktop", "Business Desktops", "Refurbished Desktop Systems"],
  },
  {
    key: "printers",
    en: "Printers",
    ta: "பிரிண்டர்கள்",
    icon: "Printer",
    products: [
      "Epson L3210",
      "Epson L3250 WiFi Printer",
      "Epson L6460",
      "Epson M2050",
      "Epson M1100",
      "Canon G2010",
      "Canon MF3010",
      "Canon LBP6030",
      "Canon LBP6030W",
    ],
  },
  {
    key: "cctv",
    en: "CCTV & Security",
    ta: "சிசிடிவி & பாதுகாப்பு",
    icon: "Camera",
    products: [
      "CP Plus Bullet Cameras",
      "CP Plus Dome Cameras",
      "CP Plus NVR",
      "CP Plus DVR",
      "CP Plus Robot Cameras",
      "Dahua Bullet Cameras",
      "Dahua DVR",
      "Dahua NVR",
      "4G SIM Cameras",
      "Home Security Solutions",
      "Office Security Solutions",
    ],
  },
  {
    key: "monitors",
    en: "Monitors",
    ta: "மானிட்டர்கள்",
    icon: "MonitorSmartphone",
    products: [
      "Acer 20 Inch Monitor",
      "Acer 22 Inch IPS Monitor",
      "Dell 20 Inch Monitor",
      "Dell 22 Inch Monitor",
      "Fingers 22 Inch Monitor",
      "EVM LED Monitors",
    ],
  },
  {
    key: "storage",
    en: "Storage Solutions",
    ta: "சேமிப்பு",
    icon: "HardDrive",
    products: ["128GB SSD", "256GB SSD", "512GB SSD", "1TB HDD", "2TB HDD", "NVMe SSD", "Memory Cards", "USB Storage Devices"],
  },
  {
    key: "components",
    en: "RAM & Components",
    ta: "RAM & பாகங்கள்",
    icon: "Cpu",
    products: [
      "4GB RAM",
      "8GB RAM",
      "16GB RAM",
      "Desktop RAM",
      "Laptop RAM",
      "Intel Core i3 Processors",
      "Intel Core i5 Processors",
      "Intel Core i7 Processors",
      "Motherboards",
      "Graphics Cards",
      "SMPS",
      "Cabinets",
    ],
  },
  {
    key: "networking",
    en: "Networking",
    ta: "நெட்வொர்க்கிங்",
    icon: "Network",
    products: ["WiFi Routers", "D-Link Routers", "Network Switches", "CAT6 Cables", "WiFi Dongles", "Network Accessories"],
  },
  {
    key: "accessories",
    en: "Accessories",
    ta: "துணைப் பொருட்கள்",
    icon: "Mouse",
    products: [
      "Keyboard",
      "Mouse",
      "Wireless Mouse",
      "Laptop Bags",
      "Adapters",
      "Speakers",
      "UPS",
      "Power Strips",
      "Webcams",
      "Printer Ink",
      "Printer Toners",
    ],
  },
  {
    key: "refurbished",
    en: "Refurbished Products",
    ta: "புதுப்பிக்கப்பட்ட பொருட்கள்",
    icon: "RefreshCw",
    products: ["Refurbished Laptops", "Refurbished Desktops", "Refurbished Printers"],
  },
];

export type Testimonial = { name: string; role: { en: string; ta: string }; quote: { en: string; ta: string } };

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Karthik R.",
    role: { en: "Small business owner, Perambalur", ta: "சிறு வணிக உரிமையாளர், பெரம்பலூர்" },
    quote: {
      en: "Got my office desktops and a CCTV setup done by SRS. Honest pricing and quick service.",
      ta: "என் அலுவலக டெஸ்க்டாப்புகள் மற்றும் சிசிடிவியை SRS-ல் செய்தேன். நேர்மையான விலை, விரைவான சேவை.",
    },
  },
  {
    name: "Priya S.",
    role: { en: "Student", ta: "மாணவி" },
    quote: {
      en: "My laptop was repaired the same day. Ramalingam sir explained everything clearly.",
      ta: "என் லேப்டாப்பை அதே நாளில் சரி செய்தார்கள். ராமலிங்கம் சார் தெளிவாக விளக்கினார்.",
    },
  },
  {
    name: "Senthil M.",
    role: { en: "School admin", ta: "பள்ளி நிர்வாகி" },
    quote: {
      en: "We use SRS for our school's AMC. Reliable, on time, and very supportive team.",
      ta: "எங்கள் பள்ளியின் AMC-க்காக SRS பயன்படுத்துகிறோம். நம்பகமான, சரியான நேரம், ஆதரவான குழு.",
    },
  },
];
