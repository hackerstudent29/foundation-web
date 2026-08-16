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

export interface LogoItem {
  src: string;
  alt: string;
  scale?: number;
}
export interface PlacementMarqueeProps {
  logos?: LogoItem[];
}

export function PlacementMarquee({ logos = [] }: { logos?: { src: string; alt: string; scale?: number }[] }) {
  return (
    <div className="relative w-full overflow-hidden py-2" aria-label="Top Recruiters">
      {/* Fade masks left and right */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24"
        style={{ background: "linear-gradient(to right, var(--bg-color) 0%, transparent 100%)" }} />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24"
        style={{ background: "linear-gradient(to left, var(--bg-color) 0%, transparent 100%)" }} />

      {/* Scrolling track */}
      <div
        className="flex items-center"
        style={{
          animation: "marquee-slide 30s linear infinite",
          width: "max-content",
          gap: "64px",
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            style={{ height: "52px" }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                height: `${Math.round(36 * (logo.scale || 1))}px`,
                width: "auto",
                maxWidth: "160px",
                objectFit: "contain",
                filter: "var(--logo-filter, grayscale(100%) brightness(0.4))",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

