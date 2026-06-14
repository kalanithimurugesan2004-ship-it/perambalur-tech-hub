import laptop from "@/assets/products/laptop.jpg";
import acerLaptop from "@/assets/products/acer-laptop.jpg";
import dellLaptop from "@/assets/products/dell-laptop.jpg";
import refurbLaptop from "@/assets/products/refurb-laptop.jpg";
import desktop from "@/assets/products/desktop.jpg";
import cabinet from "@/assets/products/cabinet.jpg";
import refurbDesktop from "@/assets/products/refurb-desktop.jpg";
import printer from "@/assets/products/printer.jpg";
import epsonPrinter from "@/assets/products/epson-printer.jpg";
import canonPrinter from "@/assets/products/canon-printer.jpg";
import refurbPrinter from "@/assets/products/refurb-printer.jpg";
import cpPlusCamera from "@/assets/products/cp-plus-camera.jpg";
import cctvDome from "@/assets/products/cctv-dome.jpg";
import cctvBullet from "@/assets/products/cctv-bullet.jpg";
import cctvWifi from "@/assets/products/cctv-wifi.jpg";
import robotCamera from "@/assets/products/robot-camera.jpg";
import dahuaCamera from "@/assets/products/dahua-camera.jpg";
import fourGCamera from "@/assets/products/4g-camera.jpg";
import simCamera from "@/assets/products/sim-camera.jpg";
import solarCamera from "@/assets/products/solar-camera.jpg";
import securitySystem from "@/assets/products/security-system.jpg";
import nvr from "@/assets/products/nvr.jpg";
import acerMonitor from "@/assets/products/acer-monitor.jpg";
import monitor from "@/assets/products/monitor.jpg";
import dellMonitor from "@/assets/products/dell-monitor.jpg";
import fingersMonitor from "@/assets/products/fingers-monitor.jpg";
import evmMonitor from "@/assets/products/evm-monitor.jpg";
import ssd from "@/assets/products/ssd.jpg";
import nvmeSsd from "@/assets/products/nvme-ssd.jpg";
import hdd from "@/assets/products/hdd.jpg";
import memoryCard from "@/assets/products/memory-card.jpg";
import usbDrive from "@/assets/products/usb-drive.jpg";
import ram from "@/assets/products/ram.jpg";
import intelCpu from "@/assets/products/intel-cpu.jpg";
import motherboard from "@/assets/products/motherboard.jpg";
import graphicsCard from "@/assets/products/graphics-card.jpg";
import smps from "@/assets/products/smps.jpg";
import router from "@/assets/products/router.jpg";
import networkSwitch from "@/assets/products/switch.jpg";
import cable from "@/assets/products/cable.jpg";
import dongle from "@/assets/products/dongle.jpg";
import keyboardMouse from "@/assets/products/keyboard-mouse.jpg";
import mouse from "@/assets/products/mouse.jpg";
import wirelessMouse from "@/assets/products/wireless-mouse.jpg";
import laptopBag from "@/assets/products/laptop-bag.jpg";
import adapter from "@/assets/products/adapter.jpg";
import speaker from "@/assets/products/speaker.jpg";
import ups from "@/assets/products/ups.jpg";
import powerStrip from "@/assets/products/power-strip.jpg";
import webcam from "@/assets/products/webcam.jpg";
import ink from "@/assets/products/ink.jpg";
import toner from "@/assets/products/toner.jpg";
import scanner from "@/assets/products/scanner.jpg";
import tablet from "@/assets/products/tablet.jpg";
import battery from "@/assets/products/battery.jpg";

const PRODUCT_IMAGES: Record<string, string> = {
  "Acer Aspire 3 Core i3 13th Gen": acerLaptop,
  "Acer Aspire Lite Core i5 13th Gen": laptop,
  "Dell Core i3 14th Gen": dellLaptop,
  "Dell Ryzen 3 Laptop": dellLaptop,
  "Dell Slim Core i3 14th Gen": dellLaptop,
  "Refurbished Laptops": refurbLaptop,
  "Custom Desktop PCs": desktop,
  "Dell Pro Tower Desktop": cabinet,
  "Business Desktops": desktop,
  "Refurbished Desktop Systems": refurbDesktop,
  "Epson L3210": epsonPrinter,
  "Epson L3250 WiFi Printer": epsonPrinter,
  "Epson L6460": printer,
  "Epson M2050": printer,
  "Epson M1100": epsonPrinter,
  "Canon G2010": canonPrinter,
  "Canon MF3010": canonPrinter,
  "Canon LBP6030": canonPrinter,
  "Canon LBP6030W": canonPrinter,
  "CP Plus Bullet Cameras": cpPlusCamera,
  "CP Plus Dome Cameras": cctvDome,
  "CP Plus NVR": nvr,
  "CP Plus DVR": nvr,
  "CP Plus Robot Cameras": robotCamera,
  "Dahua Bullet Cameras": dahuaCamera,
  "Dahua DVR": nvr,
  "Dahua NVR": nvr,
  "4G SIM Cameras": fourGCamera,
  "Home Security Solutions": securitySystem,
  "Office Security Solutions": cctvWifi,
  "Acer 20 Inch Monitor": acerMonitor,
  "Acer 22 Inch IPS Monitor": monitor,
  "Dell 20 Inch Monitor": dellMonitor,
  "Dell 22 Inch Monitor": dellMonitor,
  "Fingers 22 Inch Monitor": fingersMonitor,
  "EVM LED Monitors": evmMonitor,
  "128GB SSD": ssd,
  "256GB SSD": ssd,
  "512GB SSD": nvmeSsd,
  "1TB HDD": hdd,
  "2TB HDD": hdd,
  "NVMe SSD": nvmeSsd,
  "Memory Cards": memoryCard,
  "USB Storage Devices": usbDrive,
  "4GB RAM": ram,
  "8GB RAM": ram,
  "16GB RAM": ram,
  "Desktop RAM": ram,
  "Laptop RAM": ram,
  "Intel Core i3 Processors": intelCpu,
  "Intel Core i5 Processors": intelCpu,
  "Intel Core i7 Processors": intelCpu,
  "Motherboards": motherboard,
  "Graphics Cards": graphicsCard,
  "SMPS": smps,
  "Cabinets": cabinet,
  "WiFi Routers": router,
  "D-Link Routers": router,
  "Network Switches": networkSwitch,
  "CAT6 Cables": cable,
  "WiFi Dongles": dongle,
  "Network Accessories": cable,
  Keyboard: keyboardMouse,
  Mouse: mouse,
  "Wireless Mouse": wirelessMouse,
  "Laptop Bags": laptopBag,
  Adapters: adapter,
  Speakers: speaker,
  UPS: ups,
  "Power Strips": powerStrip,
  Webcams: webcam,
  "Printer Ink": ink,
  "Printer Toners": toner,
  "Refurbished Desktops": refurbDesktop,
  "Refurbished Printers": refurbPrinter,
};

const CATEGORY_IMAGES: Record<string, string> = {
  laptops: laptop,
  desktops: desktop,
  monitors: monitor,
  printers: printer,
  "printer-inks-toners": ink,
  "cctv-cameras": cctvBullet,
  "dvr-nvr": nvr,
  networking: router,
  ram: ram,
  "ssd-hdd": ssd,
  processors: intelCpu,
  motherboards: motherboard,
  "graphics-cards": graphicsCard,
  cabinets: cabinet,
  smps: smps,
  ups: ups,
  "keyboard-mouse": keyboardMouse,
  adapters: adapter,
  speakers: speaker,
  "cables-connectors": cable,
  "memory-cards": memoryCard,
};

export function getCategoryImage(categoryKey: string): string {
  if (CATEGORY_IMAGES[categoryKey]) return CATEGORY_IMAGES[categoryKey];
  return laptop;
}

export function getProductImage(name: string): string {
  if (PRODUCT_IMAGES[name]) return PRODUCT_IMAGES[name];

  const lower = name.toLowerCase();
  if (/acer.*laptop|aspire/i.test(name)) return acerLaptop;
  if (/dell.*laptop|ryzen/i.test(name)) return dellLaptop;
  if (/refurb.*laptop/i.test(name)) return refurbLaptop;
  if (/desktop|tower|cabinet/i.test(name)) return desktop;
  if (/epson/i.test(name)) return epsonPrinter;
  if (/canon/i.test(name)) return canonPrinter;
  if (/printer/i.test(name)) return printer;
  if (/bullet.*camera|cp plus/i.test(name)) return cpPlusCamera;
  if (/dome/i.test(name)) return cctvDome;
  if (/4g|sim/i.test(name)) return simCamera;
  if (/wifi.*camera|solar/i.test(name)) return solarCamera;
  if (/cctv|camera|security/i.test(name)) return cctvBullet;
  if (/nvr|dvr/i.test(name)) return nvr;
  if (/acer.*monitor/i.test(name)) return acerMonitor;
  if (/dell.*monitor/i.test(name)) return dellMonitor;
  if (/monitor/i.test(name)) return monitor;
  if (/nvme/i.test(name)) return nvmeSsd;
  if (/ssd/i.test(name)) return ssd;
  if (/hdd|hard/i.test(name)) return hdd;
  if (/memory card|sd/i.test(name)) return memoryCard;
  if (/usb/i.test(name)) return usbDrive;
  if (/intel|processor|cpu/i.test(name)) return intelCpu;
  if (/ram/i.test(name)) return ram;
  if (/motherboard/i.test(name)) return motherboard;
  if (/graphics|gpu/i.test(name)) return graphicsCard;
  if (/smps|power supply/i.test(name)) return smps;
  if (/router/i.test(name)) return router;
  if (/switch/i.test(name)) return networkSwitch;
  if (/cable/i.test(name)) return cable;
  if (/dongle/i.test(name)) return dongle;
  if (/keyboard/i.test(name)) return keyboardMouse;
  if (/wireless mouse/i.test(name)) return wirelessMouse;
  if (/mouse/i.test(name)) return mouse;
  if (/adapter|charger/i.test(name)) return adapter;
  if (/battery/i.test(name)) return battery;
  if (/speaker/i.test(name)) return speaker;
  if (/ups/i.test(name)) return ups;
  if (/webcam/i.test(name)) return webcam;
  if (/toner/i.test(name)) return toner;
  if (/ink/i.test(name)) return ink;
  if (/scanner/i.test(name)) return scanner;
  if (/tablet/i.test(name)) return tablet;
  if (/bag/i.test(name)) return laptopBag;
  if (/laptop/i.test(name)) return laptop;

  return laptop;
}

export {
  laptop,
  desktop,
  monitor,
  printer,
  cctvBullet,
  cctvWifi,
  simCamera,
  solarCamera,
  adapter,
  ssd,
  nvmeSsd,
  memoryCard,
  router,
  motherboard,
  keyboardMouse,
  ups,
  speaker,
  scanner,
  toner,
  tablet,
  battery,
};
