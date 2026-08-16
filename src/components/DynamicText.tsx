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

// --- DynamicText.tsx ---
/**
 * @author: @dorianbaffier
 * @description: Dynamic Text — multi-language greeting ticker
 * @version: 2.0.0
 * @license: MIT
 */




interface Greeting {
  text: string;
  language: string;
}

const greetings: Greeting[] = [
  { text: "வணக்கம்", language: "Tamil" },
  { text: "Hello", language: "English" },
  { text: "Hallo", language: "German" },
  { text: "Bonjour", language: "French" },
  { text: "नमस्ते", language: "Hindi" },
  { text: "こんにちは", language: "Japanese" },
  { text: "مرحباً", language: "Arabic" },
  { text: "Welcome to MSAJCEA", language: "English" },
];

const DynamicText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= greetings.length) {
          clearInterval(interval);
          setIsAnimating(false);
          return prev;
        }
        return next;
      });
    }, 1100);

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section
      aria-label="Rapid greetings in different languages"
      className="flex min-h-[48px] items-center justify-start gap-2 py-1 mb-2"
    >
      <div
        aria-hidden="true"
        className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"
      />

      {/* Fixed-width container so layout doesn't jump */}
      <div className="relative h-8 overflow-hidden" style={{ minWidth: "220px" }}>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center font-semibold text-lg tracking-tight"
            style={{ color: "var(--text-color)", whiteSpace: "nowrap" }}
          >
            {greetings[currentIndex].text}
          </motion.span>
        </AnimatePresence>
      </div>
    </section>
  );
};

export { DynamicText };

