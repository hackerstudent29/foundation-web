"use client";

import React, { useState, useEffect, useRef, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence, useAnimationFrame, useMotionValue, useSpring, type Variants, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ArrowRight, ChevronRight, GraduationCap, BookOpen, Award, Sparkles, Compass } from "lucide-react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaYoutube, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Lenis from "lenis";
import "swiper/css";
import "swiper/css/effect-fade";

// --- AboutBannerSection.tsx ---
const images = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", // Graduation
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", // Engineering lab
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"  // Tech collaboration
];

export function AboutBannerSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "520px" }}
      id="about-msajce"
    >
      {/* ── Full-bleed image behind ── */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Campus life at MSAJCE"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.2) 100%)" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center"
        style={{ minHeight: "520px", paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.span
            className="inline-block text-[11px] font-bold tracking-[0.22em] uppercase mb-6"
            style={{ color: "#005DA6" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About MSAJCE
          </motion.span>

          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Empowering Leaders,<br />
            <span style={{ color: "#005DA6" }}>Innovators</span> &amp;<br />
            Changemakers
          </motion.h2>

          {/* Body */}
          <motion.p
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.72)" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Be part of an institution that prepares you for tomorrow's challenges, today.
          </motion.p>

          {/* CTA + NIRF stat */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="#vision"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105"
              style={{ background: "#005DA6", boxShadow: "0 0 32px rgba(0,93,166,0.35)" }}
            >
              MSAJCE Vision &amp; Mission
              <ArrowRight size={16} />
            </a>

            {/* NIRF pill */}
            <div
              className="flex items-center gap-3 px-5 py-3 rounded-full"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(16px)" }}
            >
              <span className="text-2xl font-black text-white leading-none">5<sup className="text-xs font-semibold">th</sup></span>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold text-white">in Tamil Nadu</span>
                <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>NIRF 2024 Engineering</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Image progress indicator ── */}
      <div className="absolute bottom-6 right-8 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className="rounded-full transition-all duration-400"
            style={{
              width: i === currentImage ? "24px" : "8px",
              height: "8px",
              background: i === currentImage ? "#005DA6" : "rgba(255,255,255,0.3)",
            }}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}



