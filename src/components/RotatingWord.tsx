"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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

const WORD_IMAGES: Record<string, { url: string; size?: string; pos?: string }> = {
  Innovation: {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  Technology: {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  Excellence: {
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    pos: "top center",
  },
  Design: {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
  },
  Creativity: {
    url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
  },
  Craftsmanship: {
    url: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80",
  },
};

/**
 * Always returns the full set of background-related style keys so React
 * never sees a property added or removed between renders — fixes the
 * "shorthand vs non-shorthand" warning.
 */
function getTextStyle(
  word: string,
  homeWord: string,
  homeColor: string
): React.CSSProperties {
  const img = word !== homeWord ? WORD_IMAGES[word] : undefined;

  return {
    color: img ? ("transparent" as const) : homeColor,
    backgroundImage: img ? `url("${img.url}")` : undefined,
    backgroundSize: img ? (img.size ?? "cover") : undefined,
    backgroundPosition: img ? (img.pos ?? "center") : undefined,
    WebkitBackgroundClip: img ? ("text" as const) : undefined,
    WebkitTextFillColor: img ? ("transparent" as const) : undefined,
    backgroundClip: img ? ("text" as const) : undefined,
  };
}

export default function RotatingWord({
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
