import { motion } from "framer-motion";
import showroomImg from "@/assets/showroom-composition.png";

export function PremiumShowroomShowcase() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible select-none py-2 lg:py-6">
      {/* Background glow effects matching the purple/cyan neon ring */}
      <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full bg-cyan-500/10 blur-[80px] top-1/4 left-1/4 pointer-events-none -z-10" />
      <div className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full bg-purple-500/10 blur-[90px] bottom-1/4 right-1/4 pointer-events-none -z-10" />

      {/* Floating composite showroom showcase image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: [0, -12, 0] 
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: {
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut"
          }
        }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        className="relative z-10 w-full max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] flex items-center justify-center filter drop-shadow-[0_20px_50px_rgba(0,102,255,0.22)]"
      >
        <img
          src={showroomImg}
          alt="Premium Technology Showroom"
          className="w-full h-auto object-contain rounded-[2rem] border border-white/5 shadow-2xl"
          loading="eager"
        />
        
        {/* Sleek light overlay sweep */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
}
