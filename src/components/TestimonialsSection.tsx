"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Aravind Kumar",
    dept: "Computer Science — Batch 2022",
    company: "Software Engineer @ TCS",
    quote: "MSAJCE gave me a rock-solid foundation in both theory and practical development. The placement training was incredibly thorough — I walked into my TCS interview with complete confidence.",
    avatar: "https://i.pravatar.cc/120?img=11",
    stars: 5,
  },
  {
    name: "Priya Lakshmi",
    dept: "Information Technology — Batch 2023",
    company: "Cloud Associate @ Zoho",
    quote: "The faculty here genuinely cares about every student. They stayed late to help us prep for technical rounds, and the IDEA Lab let me build my first real cloud application. Best decision of my life.",
    avatar: "https://i.pravatar.cc/120?img=47",
    stars: 5,
  },
  {
    name: "Mohammed Farhan",
    dept: "Electronics & Communication — Batch 2021",
    company: "Embedded Engineer @ Valeo",
    quote: "The industry exposure through college partnerships was outstanding. I worked on a live IoT project in my third year — that hands-on experience is exactly what landed me my role at Valeo.",
    avatar: "https://i.pravatar.cc/120?img=12",
    stars: 5,
  },
  {
    name: "Sneha Rajan",
    dept: "AI & Data Science — Batch 2024",
    company: "Data Analyst @ Cognizant",
    quote: "MSAJCE's AI curriculum is genuinely forward-thinking. We were building real ML pipelines from semester three. That depth of practice is what set me apart in every interview I attended.",
    avatar: "https://i.pravatar.cc/120?img=48",
    stars: 5,
  },
  {
    name: "Karthik Selvam",
    dept: "Mechanical Engineering — Batch 2022",
    company: "Design Engineer @ L&T",
    quote: "The CAD labs and workshops at MSAJCE are world-class. My final year project on smart automation got me noticed at the campus placement drive, and L&T offered me on the spot.",
    avatar: "https://i.pravatar.cc/120?img=15",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={s <= count ? "#FBBF24" : "none"}
          stroke={s <= count ? "#FBBF24" : "var(--border-color)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

const StickyTestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  const total = testimonials.length;
  // Calculate static chaotic rotation: deeper cards are rotated more, alternating left/right. The top card is 0deg.
  const rotation = (() => {
    if (index === total - 1) return 0;
    const severity = (total - index) * 1.5;
    return index % 2 === 0 ? -severity : severity;
  })();

  return (
    <div
      className="sticky w-full max-w-4xl mx-auto flex flex-col justify-center transition-all duration-500"
      style={{
        // All cards stick at the exact same position so they perfectly pile up
        top: "24vh",
        height: "60vh",
        minHeight: "450px",
      }}
    >
      <div
        className="w-full h-full relative flex flex-col justify-between rounded-[2rem] overflow-hidden group bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-md"
        style={{
          padding: "clamp(2rem, 5vw, 4rem)",
          border: "1px solid rgba(150, 150, 150, 0.2)",
          borderTop: "4px solid var(--primary-blue)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)",
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center 80%", // Rotate near the bottom so the top fans out wildly
        }}
      >
        {/* Giant decorative quotation mark */}
        <div 
          className="absolute -top-12 right-4 md:right-12 select-none pointer-events-none transition-transform duration-700 group-hover:scale-110"
          style={{ 
            fontSize: "15rem", 
            lineHeight: 1, 
            fontFamily: "serif",
            color: "var(--primary-blue)",
            opacity: 0.15,
            fontWeight: 900
          }}
        >
          &rdquo;
        </div>

        {/* Subtle glow effect behind the text */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,93,166,0.15)_0%,transparent_70%)] pointer-events-none" />

        {/* Top Section: Stars & Quote */}
        <div className="relative z-10">
          <StarRating count={testimonial.stars} />
          
          <p
            style={{ 
              color: "var(--text-color)",
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
              fontWeight: 500,
              lineHeight: 1.6,
              marginTop: "2rem"
            }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>

        {/* Bottom Section: Profile */}
        <div className="flex items-center gap-5 mt-8">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            style={{ 
              width: "64px", 
              height: "64px", 
              borderRadius: "50%", 
              objectFit: "cover", 
              border: "2px solid var(--primary-blue)" 
            }}
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-lg md:text-xl" style={{ color: "var(--text-color)" }}>
              {testimonial.name}
            </h3>
            <p className="text-sm font-medium opacity-80" style={{ color: "var(--text-color)" }}>
              {testimonial.dept}
            </p>
            <p className="text-sm font-bold mt-1" style={{ color: "var(--primary-blue)" }}>
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"]
  });

  // Base theme color fades out.
  const baseOpacity = useTransform(scrollYProgress, [0, 1], [0.15, 0]);
  
  // Blue color fades in.
  const blueOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Make the background word physically slide down the screen behind the cards as we scroll!
  const wordY = useTransform(scrollYProgress, [0, 1], ["0vh", "75vh"]);

  // Fade out the entire wordmark at the very end of the scroll so it doesn't overlap the next section
  const containerOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col items-center px-4"
      id="testimonials"
      style={{
        background: "var(--bg-color)",
        minHeight: "200vh",
        paddingTop: "24vh",
        paddingBottom: "25vh",
      }}
    >
      {/* BACKGROUND "TESTIMONIALS" WORDMARK */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0, opacity: containerOpacity }}
      >
        <div 
          className="sticky top-0 left-0 w-full h-screen flex flex-col items-center justify-start pt-[2vh] pointer-events-none"
        >
          {/* Base faded text (fades out at the end) */}
          <motion.h2 
            className="absolute font-black uppercase select-none tracking-tighter whitespace-nowrap" 
            style={{ fontSize: "13.5vw", color: "var(--text-color)", lineHeight: 1.1, opacity: baseOpacity, y: wordY, willChange: "transform, opacity" }}
          >
            TESTIMONIALS
          </motion.h2>

          {/* Blue highlighted text (fades in at the end) */}
          <motion.h2 
            className="absolute font-black uppercase select-none tracking-tighter whitespace-nowrap" 
            style={{ fontSize: "13.5vw", color: "var(--primary-blue)", lineHeight: 1.1, opacity: blueOpacity, y: wordY, willChange: "transform, opacity" }}
          >
            TESTIMONIALS
          </motion.h2>
        </div>
      </motion.div>

      {/* The animated sticky background wordmark now serves as the only header for this section */}

      {/* Sticky Cards Container */}
      <div className="relative z-10 flex flex-col items-center w-full" style={{ gap: "10vh" }}>
        {testimonials.map((t, idx) => (
          <StickyTestimonialCard key={idx} testimonial={t} index={idx} />
        ))}
      </div>
    </section>
  );
}
