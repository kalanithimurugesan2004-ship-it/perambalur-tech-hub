import { useState, useRef, useEffect } from "react";
import { Laptop, Monitor, Printer, Camera, Network, Cpu, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface CubeFace {
  id: string;
  name: { en: string; ta: string };
  desc: { en: string; ta: string };
  icon: typeof Laptop;
  gradient: string;
  glowColor: string;
  transform: string;
}

export function TechHeroAnimation3D() {
  const { lang } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: -15, y: 35 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeFace, setActiveFace] = useState(0);

  // Auto rotation when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setRotate((prev) => ({
        x: prev.x + 0.15,
        y: prev.y + 0.35,
      }));
    }, 16);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Convert mouse position to degrees
    const factor = 0.25;
    setRotate({
      x: -y * factor - 10,
      y: x * factor + 30,
    });
  };

  const faces: CubeFace[] = [
    {
      id: "laptops",
      name: { en: "Premium Laptops", ta: "லேப்டாப்புகள்" },
      desc: { en: "Thin & Light, Gaming, Business", ta: "மெல்லிய, கேமிங், பிசினஸ்" },
      icon: Laptop,
      gradient: "from-blue-600/90 to-cyan-500/90",
      glowColor: "rgba(6, 182, 212, 0.4)",
      transform: "translateZ(var(--cube-translate))",
    },
    {
      id: "desktops",
      name: { en: "Custom Desktops", ta: "டெஸ்க்டாப் கணினிகள்" },
      desc: { en: "Office PCs & Gaming Rigs", ta: "அலுவலகம் & கேமிங் பிசிக்கள்" },
      icon: Monitor,
      gradient: "from-indigo-600/90 to-violet-500/90",
      glowColor: "rgba(139, 92, 246, 0.4)",
      transform: "rotateY(90deg) translateZ(var(--cube-translate))",
    },
    {
      id: "printers",
      name: { en: "Smart Printers", ta: "பிரிண்டர்கள்" },
      desc: { en: "Epson, Canon Sales & Service", ta: "விற்பனை மற்றும் பழுதுபார்ப்பு" },
      icon: Printer,
      gradient: "from-amber-600/90 to-orange-500/90",
      glowColor: "rgba(249, 115, 22, 0.4)",
      transform: "rotateY(180deg) translateZ(var(--cube-translate))",
    },
    {
      id: "cctv",
      name: { en: "HD CCTV Systems", ta: "சிசிடிவி கேமராக்கள்" },
      desc: { en: "Bullet, Dome & Sim Cameras", ta: "பாதுகாப்பு கேமரா தீர்வுகள்" },
      icon: Camera,
      gradient: "from-emerald-600/90 to-teal-500/90",
      glowColor: "rgba(20, 184, 166, 0.4)",
      transform: "rotateY(-90deg) translateZ(var(--cube-translate))",
    },
    {
      id: "components",
      name: { en: "PC Parts & Upgrades", ta: "கணினி பாகங்கள்" },
      desc: { en: "RAM, SSDs, Motherboards", ta: "RAM, SSD மற்றும் மதர்போர்டுகள்" },
      icon: Cpu,
      gradient: "from-rose-600/90 to-pink-500/90",
      glowColor: "rgba(244, 63, 94, 0.4)",
      transform: "rotateX(90deg) translateZ(var(--cube-translate))",
    },
    {
      id: "networking",
      name: { en: "Networking Gear", ta: "நெட்வொர்க்கிங்" },
      desc: { en: "Routers, Switches & Cabling", ta: "ரவுட்டர்கள், சுவிட்சுகள் & கேபிளிங்" },
      icon: Network,
      gradient: "from-sky-600/90 to-blue-500/90",
      glowColor: "rgba(14, 165, 233, 0.4)",
      transform: "rotateX(-90deg) translateZ(var(--cube-translate))",
    },
  ];

  // Rotate faces description cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFace((prev) => (prev + 1) % faces.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-6 w-full overflow-hidden select-none cube-viewport">
      <style>{`
        .cube-viewport {
          --cube-size: 190px;
          --cube-translate: 95px;
          --cube-container-size: 260px;
        }
        @media (min-width: 640px) {
          .cube-viewport {
            --cube-size: 240px;
            --cube-translate: 120px;
            --cube-container-size: 320px;
          }
        }
        @media (min-width: 1024px) {
          .cube-viewport {
            --cube-size: 260px;
            --cube-translate: 130px;
            --cube-container-size: 360px;
          }
        }
      `}</style>

      {/* 3D Scene viewport */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setRotate({ x: -15, y: 35 });
        }}
        className="relative flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ 
          perspective: "1000px",
          width: "var(--cube-container-size)",
          height: "var(--cube-container-size)"
        }}
      >
        {/* Glow behind the cube */}
        <div 
          className="absolute rounded-full filter blur-[60px] opacity-40 transition-all duration-1000"
          style={{ 
            background: `radial-gradient(circle, ${faces[activeFace].glowColor} 0%, transparent 70%)`,
            boxShadow: `0 0 100px ${faces[activeFace].glowColor}`,
            width: "calc(var(--cube-size) * 0.85)",
            height: "calc(var(--cube-size) * 0.85)",
          }}
        />

        {/* 3D Rotating Cube Container */}
        <div
          className="relative transform-style preserve-3d transition-transform duration-200 ease-out"
          style={{
            width: "var(--cube-size)",
            height: "var(--cube-size)",
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          }}
        >
          {faces.map((face, index) => {
            const IconComp = face.icon;
            const isActive = activeFace === index;
            return (
              <div
                key={face.id}
                className={`absolute inset-0 w-full h-full rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 flex flex-col justify-between border select-none transition-all duration-700 backface-hidden ${
                  isActive 
                    ? "border-white/50 shadow-2xl scale-[1.02]" 
                    : "border-white/10 opacity-70"
                }`}
                style={{
                  transform: face.transform,
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)`,
                  backdropFilter: "blur(16px)",
                  boxShadow: isActive ? `0 0 40px ${face.glowColor}` : "none",
                }}
              >
                {/* Accent glow corner */}
                <div className={`absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 rounded-bl-[3.5rem] sm:rounded-bl-[4rem] rounded-tr-[1.5rem] sm:rounded-tr-[2rem] bg-gradient-to-br ${face.gradient} opacity-20 filter blur-sm`} />

                {/* Top header on card */}
                <div className="flex items-center justify-between">
                  <div className={`flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${face.gradient} text-white shadow-lg shadow-black/10`}>
                    <IconComp className="h-4.5 w-4.5 sm:h-6 sm:w-6" />
                  </div>
                  <span className="flex items-center gap-1 text-[8px] sm:text-[10px] font-bold text-white/50 tracking-widest uppercase">
                    <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-amber-400" />
                    SRS TECH
                  </span>
                </div>

                {/* Content */}
                <div className="z-10 mt-auto">
                  <h3 className="text-sm sm:text-lg font-black tracking-tight text-white leading-tight">
                    {lang === "ta" ? face.name.ta : face.name.en}
                  </h3>
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-white/80 font-medium leading-snug line-clamp-2">
                    {lang === "ta" ? face.desc.ta : face.desc.en}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating active card tracker */}
      <div className="mt-4 sm:mt-6 flex gap-1.5 justify-center">
        {faces.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveFace(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              activeFace === idx ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/20 hover:bg-primary-foreground/45"
            }`}
            aria-label={`Select face ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
