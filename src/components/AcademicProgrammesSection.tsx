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

// --- AcademicProgrammesSection.tsx ---
import "swiper/css";
import "swiper/css/effect-fade";

// === Curated Campus Showcase Slides ==========================================
const campusSlides = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    title: "Collaborative Learning & Research",
    subtitle: "Advanced computing, artificial intelligence, and interactive engineering labs.",
    tag: "Campus Life",
  },
  {
    src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    title: "Industry-Standard Labs",
    subtitle: "Robotics, IoT, CNC manufacturing, and Altier research center.",
    tag: "Innovation",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80",
    title: "Global Standards & Accreditations",
    subtitle: "Affiliated to Anna University and approved by AICTE, New Delhi.",
    tag: "Excellence",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    title: "Campus to Corporate Placements",
    subtitle: "Consistently delivering high-package campus offers with tier-1 recruiters.",
    tag: "Placements",
  },
];

// === Academic Pathways Data ==================================================
const academicPathways = [
  {
    level: "Undergraduate",
    degrees: "B.E. / B.Tech",
    title: "Undergraduate Programmes",
    description:
      "Foundational & advanced engineering streams in AI & DS, Computer Science, Robotics, IT, and Mechanical.",
    duration: "4 Years • Full Time",
    href: "#ug",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    icon: GraduationCap,
    badge: "12 Specializations",
  },
  {
    level: "Postgraduate",
    degrees: "M.E. / MBA",
    title: "Postgraduate Programmes",
    description:
      "Specialized Master degrees engineered for technology leaders, system architects, and management professionals.",
    duration: "2 Years • Full Time",
    href: "#pg",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
    icon: BookOpen,
    badge: "Industry Mentorship",
  },
  {
    level: "Doctoral & Research",
    degrees: "Ph.D. / MS by Research",
    title: "Research & Ph.D.",
    description:
      "Recognized Anna University research centers focusing on applied AI, green energy, and embedded systems.",
    duration: "Full Time / Part Time",
    href: "#phd",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    icon: Award,
    badge: "Anna Univ Center",
  },
];

// === Animation Variants ======================================================
const easeCustom = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeCustom },
  },
};

export function AcademicProgrammesSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <section
      id="academic-programmes"
      className="w-full relative overflow-hidden bg-[var(--bg-color)] transition-colors duration-300"
      style={{ fontFamily: "var(--font-switzer), var(--font-sans), sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-24 md:pb-36 relative z-10">

        {/* ===================================================================
            PART 1: HERO SHOWCASE (EDITORIAL ASYMMETRIC SPLIT)
        =================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 md:mb-36">
          
          {/* Left Column: Interactive Framed Media Window (6 cols) */}
          <motion.div
            className="lg:col-span-6 w-full order-1"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: easeCustom }}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-xl border bg-neutral-900" style={{ borderColor: "var(--border-color)" }}>
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 4200, disableOnInteraction: false }}
                loop
                onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
                className="w-full h-full"
              >
                {campusSlides.map((slide, idx) => (
                  <SwiperSlide key={idx} className="w-full h-full relative">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-[2500ms] ease-out scale-100"
                    />

                    {/* Gradient Protection Scrim with solid bottom contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                    {/* Slide Information Overlay (strictly bottom aligned) */}
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
                      <div className="inline-flex self-start items-center px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-white mb-3 shadow-sm" style={{ backgroundColor: "var(--primary-blue)" }}>
                        {slide.tag}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/90 mt-2 leading-relaxed">
                        {slide.subtitle}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Slide Counter Indicator (Top Right - with zero overlap) */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-widest text-white bg-black/60 backdrop-blur-md border border-white/20">
                0{activeSlideIndex + 1} / 0{campusSlides.length}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Typography & Action (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2">
            {/* Clean Eyebrow Pill without arbitrary brackets */}
            <div className="flex items-center gap-2 mb-6">
              <span 
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border"
                style={{ 
                  color: "var(--primary-blue)", 
                  backgroundColor: "rgba(0, 93, 166, 0.1)", 
                  borderColor: "rgba(0, 93, 166, 0.25)" 
                }}
              >
                <Sparkles size={13} style={{ color: "var(--primary-blue)" }} />
                Studying at MSAJCE
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[var(--text-color)]">
              Shape Your Future with{" "}
              <span style={{ color: "var(--primary-blue)" }}>
                Industry-Relevant
              </span>{" "}
              Programmes
            </h2>

            {/* Narrative Body */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--text-color)] opacity-75 max-w-xl">
              Our future-proof curriculum blends hands-on engineering, innovation incubators, 
              and active corporate partnerships to groom confident problem solvers ready for 
              next-generation technology industries.
            </p>

            {/* Fast Stats Row */}
            <div className="grid grid-cols-3 gap-6 py-8 my-8 border-y" style={{ borderColor: "var(--border-color)" }}>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-color)]">25+</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mt-1 text-[var(--text-color)] font-medium">Years of Legacy</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#005DA6]" style={{ color: "var(--primary-blue)" }}>95%</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mt-1 text-[var(--text-color)] font-medium">Placement Track</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[var(--text-color)]">100+</div>
                <div className="text-xs uppercase tracking-wider opacity-60 mt-1 text-[var(--text-color)] font-medium font-semibold">Recruiters</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                href="#academic-pathways"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold tracking-wider text-white uppercase shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: "var(--primary-blue)" }}
              >
                <span>Find a Programme</span>
                <ArrowRight size={16} strokeWidth={2.2} />
              </a>

              <a
                href="#admissions"
                className="inline-flex items-center gap-2.5 border-2 px-8 py-4 rounded-full text-sm font-bold tracking-wider text-[var(--text-color)] uppercase bg-transparent transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:-translate-y-0.5 active:translate-y-0"
                style={{ borderColor: "var(--border-color)" }}
              >
                <span>Admissions Guide</span>
                <ChevronRight size={16} strokeWidth={2.2} />
              </a>

              <a
                href="#campus-tours"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold tracking-wide text-[var(--text-color)] opacity-80 hover:opacity-100 hover:text-[#005DA6] bg-transparent transition-all duration-200"
              >
                <Compass size={16} strokeWidth={2} />
                <span>Campus Tour</span>
              </a>
            </div>
          </div>

        </div>

        {/* ===================================================================
            PART 2: ACADEMIC PATHWAYS (3 EDITORIAL CARDS)
        =================================================================== */}
        <div id="academic-pathways" className="w-full">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: "var(--primary-blue)" }}>
              Academic Levels
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-color)]">
              Explore Programmes by Level
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-color)] opacity-70 mt-4 leading-relaxed">
              Find the degree path designed to elevate your technical prowess, leadership, and career growth.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {academicPathways.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.a
                  key={index}
                  href={card.href}
                  className="group relative flex flex-col rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2 flex-1"
                  style={{ 
                    backgroundColor: "var(--card-bg)", 
                    borderColor: "var(--border-color)" 
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: easeCustom }}
                >
                  {/* Card Visual Header */}
                  <div className="relative w-full aspect-[16/11] overflow-hidden bg-neutral-900">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-106"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Floating Degree Badge */}
                    <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                      <IconComponent size={14} style={{ color: "var(--primary-blue)" }} />
                      <span>{card.degrees}</span>
                    </div>

                    {/* Duration / Specialization Badge */}
                    <div className="absolute bottom-3 right-4 z-10 text-[11px] font-medium tracking-wide text-white/90 drop-shadow">
                      {card.duration}
                    </div>
                  </div>

                  {/* Card Content Block */}
                  <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Sub-label */}
                      <span className="text-xs font-bold tracking-widest uppercase block mb-2" style={{ color: "var(--primary-blue)" }}>
                        {card.level}
                      </span>

                      {/* Main Title */}
                      <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-color)] group-hover:text-[#005DA6] transition-colors duration-300">
                        {card.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-[var(--text-color)] opacity-70 mt-3">
                        {card.description}
                      </p>
                    </div>

                    {/* Footer Action Link */}
                    <div className="mt-8 pt-5 border-t border-opacity-20 flex items-center justify-between" style={{ borderColor: "var(--border-color)" }}>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-color)] opacity-80 group-hover:text-[#005DA6] group-hover:opacity-100 transition-colors">
                        View Curriculum &amp; Eligibility
                      </span>
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "var(--text-color)" }}
                      >
                        <ArrowRight size={14} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

