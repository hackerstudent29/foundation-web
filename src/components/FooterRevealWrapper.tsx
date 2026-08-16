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

// --- FooterRevealWrapper.tsx ---
export function FooterRevealWrapper({ children }: { children: ReactNode }) {
  const [footerHeight, setFooterHeight] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  // Track footer height dynamically
  useEffect(() => {
    if (!footerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setFooterHeight(entry.contentRect.height);
      }
    });
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  // Trigger animation when spacer enters viewport (= footer is revealed)
  useEffect(() => {
    if (!spacerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        } else {
          setIsRevealed(false);
        }
      },
      { threshold: 0.05 } // fire when 5% of spacer is visible
    );
    observer.observe(spacerRef.current);
    return () => observer.disconnect();
  }, [footerHeight]);

  return (
    <>
      {/* Spacer: exact height of footer, sits in normal flow */}
      <div
        ref={spacerRef}
        style={{ height: footerHeight }}
        aria-hidden="true"
      />

      {/* Footer: fixed at bottom, always above z=0 so clicks work */}
      <div
        ref={footerRef}
        style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }}
        data-revealed={isRevealed}
      >
        {children}
      </div>
    </>
  );
}

