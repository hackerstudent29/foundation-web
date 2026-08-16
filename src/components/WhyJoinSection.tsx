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

// --- WhyJoinSection.tsx ---
export function WhyJoinSection() {
  const reasons = [
    {
      number: "01",
      title: "Prime Location",
      desc: "Situated on the OMR IT Corridor — Chennai's tech superhighway — giving students unmatched access to global MNCs, ambitious startups, and pioneering research institutions.",
      img: "https://images.unsplash.com/photo-1541888018376-7ec93d14dd84?q=80&w=1400&auto=format&fit=crop",
      accent: "#005DA6",
    },
    {
      number: "02",
      title: "Industry Tie-ups",
      desc: "Live capstone projects, immersive corporate mentorship, and high-stakes hackathons — running year-round in active partnership with marquee technology companies.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
      accent: "#005DA6",
    },
    {
      number: "03",
      title: "State-of-the-Art Labs",
      desc: "Fully equipped research labs, innovation centres, and a dedicated IDEA Lab engineered to transform bold ideas into real-world, field-ready prototypes.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1400&auto=format&fit=crop",
      accent: "#005DA6",
    },
    {
      number: "04",
      title: "Scholarships & Sports",
      desc: "Merit-based and sports scholarships ensure that every form of talent — academic brilliance or athletic excellence — is always recognised and rewarded.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
      accent: "#005DA6",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="w-full relative overflow-hidden"
      id="why-msajce"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      {/* ── Section Label ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-0 flex items-center gap-4">
        <span
          className="text-[11px] font-bold tracking-[0.2em] uppercase"
          style={{ color: "#005DA6" }}
        >
          Why MSAJCE
        </span>
        <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.12)" }} />
      </div>

      {/* ── Main Two-Column Layout ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-0 lg:gap-24 items-start pt-16 pb-32">

        {/* Left: Sticky panel with heading + animated image */}
        <div className="lg:w-5/12 lg:sticky lg:top-28 flex flex-col gap-8 pb-16 lg:pb-0">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Why<br />
            <span style={{ color: "#005DA6" }}>Join</span><br />
            MSAJCE?
          </motion.h2>

          {/* Animated image frame */}
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ aspectRatio: "4/3", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={reasons[activeIndex].img}
                alt={reasons[activeIndex].title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Scrim gradient */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />

            {/* Active reason number overlay */}
            <div className="absolute bottom-6 left-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="text-6xl font-black"
                  style={{ color: "rgba(255,255,255,0.15)", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {reasons[activeIndex].number}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="absolute top-5 right-5 flex gap-2">
              {reasons.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? "24px" : "8px",
                    height: "8px",
                    background: i === activeIndex ? "#005DA6" : "rgba(255,255,255,0.3)",
                  }}
                  aria-label={`Go to reason ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Scrolling cards */}
        <div className="lg:w-7/12 flex flex-col gap-4 pt-4">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-40% 0px -40% 0px" }}
              onViewportEnter={() => setActiveIndex(i)}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl cursor-pointer transition-all duration-400"
              style={{
                background: activeIndex === i
                  ? "rgba(0, 93, 166, 0.08)"
                  : "rgba(255,255,255,0.03)",
                border: activeIndex === i
                  ? "1px solid rgba(0, 93, 166, 0.35)"
                  : "1px solid rgba(255,255,255,0.07)",
                padding: "32px",
              }}
              onClick={() => setActiveIndex(i)}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 h-[2px] rounded-t-2xl transition-all duration-700"
                style={{
                  width: activeIndex === i ? "100%" : "0%",
                  background: "linear-gradient(to right, #005DA6, rgba(0,93,166,0.3))",
                }}
              />

              <div className="flex items-start gap-6">
                {/* Number */}
                <span
                  className="text-4xl font-black flex-shrink-0 leading-none transition-colors duration-300"
                  style={{
                    color: activeIndex === i ? "#005DA6" : "rgba(255,255,255,0.15)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {item.number}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-3 pt-1">
                  <h3
                    className="text-xl md:text-2xl font-bold leading-tight transition-colors duration-300"
                    style={{ color: activeIndex === i ? "#fff" : "rgba(255,255,255,0.65)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed transition-all duration-500"
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      maxHeight: activeIndex === i ? "200px" : "0px",
                      overflow: "hidden",
                      opacity: activeIndex === i ? 1 : 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


