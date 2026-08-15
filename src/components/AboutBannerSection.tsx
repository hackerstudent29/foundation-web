"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", // Graduation
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Engineering lab
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"  // Tech collaboration
];

export default function AboutBannerSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Swap every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[450px] md:h-[500px] flex overflow-hidden">
      {/* Right Image Background Slideshow */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Campus life"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      {/* Layered Chevrons (The arrows pointing left) */}
      
      {/* Base Solid Background */}
      <div 
        className="absolute top-0 left-0 h-full w-[100%] md:w-[75%] lg:w-[65%] z-10"
        style={{ 
          background: "#907957", 
          clipPath: "polygon(0 0, 100% 0, calc(100% - 120px) 50%, 100% 100%, 0 100%)" 
        }}
      />
      
      {/* Decorative Semi-transparent Chevron 1 */}
      <div 
        className="absolute top-0 left-0 h-full w-[100%] md:w-[75%] lg:w-[65%] z-10 hidden md:block"
        style={{ 
          background: "rgba(0,0,0,0.1)", 
          clipPath: "polygon(100% 0, calc(100% + 120px) 0, calc(100% + 0px) 50%, calc(100% + 120px) 100%, 100% 100%, calc(100% - 120px) 50%)" 
        }}
      />

      {/* Decorative Semi-transparent Chevron 2 */}
      <div 
        className="absolute top-0 left-0 h-full w-[100%] md:w-[75%] lg:w-[65%] z-10 hidden md:block"
        style={{ 
          background: "rgba(0,0,0,0.1)", 
          clipPath: "polygon(calc(100% + 120px) 0, calc(100% + 240px) 0, calc(100% + 120px) 50%, calc(100% + 240px) 100%, calc(100% + 120px) 100%, calc(100% + 0px) 50%)" 
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full h-full flex items-center header-padding">
        <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-start justify-center gap-4 text-white py-8">
          <span className="font-bold text-xs tracking-wide uppercase">About MSAJCE</span>
          
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight">
            Empowering Leaders, Innovators & Changemakers
          </h2>
          
          <p className="text-base md:text-lg opacity-90 leading-relaxed max-w-lg font-medium mt-1">
            Be part of an institution that prepares you for tomorrow's challenges, today.
          </p>

          <button className="mt-2 px-5 py-2.5 border border-white text-white hover:bg-white hover:text-[#907957] transition-colors font-bold text-sm flex items-center gap-2">
            MSAJCE Vision and Mission &raquo;
          </button>

          <div className="w-full max-w-sm h-[1px] bg-white/30 mt-6 mb-3" />

          <div className="flex flex-col items-start md:items-center w-full max-w-sm text-left md:text-center">
             <span className="text-lg font-bold tracking-tight">5<sup className="text-xs font-medium">th</sup> in Tamil Nadu</span>
             <span className="text-xs italic opacity-90 mt-1">by NIRF 2024 Engineering Rankings</span>
          </div>

          <div className="w-full max-w-sm h-[1px] bg-white/30 mt-3" />
        </div>
      </div>
    </section>
  );
}
