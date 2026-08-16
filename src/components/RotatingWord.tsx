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

// --- RotatingWord types & helpers ---
interface WordStep {
  word: string;
  duration: number;
}

interface RotatingWordProps {
  homeWord: string;
  words: string[];
  homeDuration?: number;
  wordDuration?: number;
  homeColor?: string;
}

function getTextStyle(
  word: string,
  homeWord: string,
  homeColor: string
): React.CSSProperties {
  if (word === homeWord) {
    return { color: homeColor };
  }
  return { color: "var(--primary-blue)" };
}

export function RotatingWord({

  homeWord,
  words,
  homeDuration = 5000,
  wordDuration = 2000,
  homeColor = "var(--text-color)",
}: RotatingWordProps) {
  // Build the sequence directly during render — refs are mutable, no effect needed
  const sequence = useRef<WordStep[]>([]);
  sequence.current = [
    { word: homeWord, duration: homeDuration },
    ...words.map((w) => ({ word: w, duration: wordDuration })),
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Guard: clamp index in case words array shrank
    const safeIndex = stepIndex % sequence.current.length;
    const step = sequence.current[safeIndex];

    timerRef.current = setTimeout(() => {
      setStepIndex((prev) => (prev + 1) % sequence.current.length);
    }, step.duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [stepIndex]); // stable single dep — sequence is a ref, not state

  const safeIndex = stepIndex % sequence.current.length;
  const currentStep = sequence.current[safeIndex];

  return (
    <motion.span
      layout
      transition={{ layout: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
      style={{
        display: "inline-block",
        position: "relative",
        verticalAlign: "bottom",
        overflow: "hidden",
        height: "1.15em",
      }}
      aria-live="polite"
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={safeIndex}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0%)" }}
          exit={{ clipPath: "inset(0 0% 0 100%)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            lineHeight: "inherit",
            fontWeight: "inherit",
            ...getTextStyle(currentStep.word, homeWord, homeColor),
          }}
        >
          {currentStep.word}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}

