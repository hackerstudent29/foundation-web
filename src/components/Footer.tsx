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

// --- Footer.tsx ---
import { FooterRevealWrapper } from "./FooterRevealWrapper";

// --- Animation Variants ---
const footerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const footerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Helper Components ---
function LinkItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <motion.li variants={footerItemVariants}>
      <a
        href={href}
        className="group relative inline-flex items-center text-[15px] custom-footer-text-muted hover:text-[var(--primary-blue)] transition-colors duration-300 font-normal pb-0.5"
      >
        {children}
        {/* Animated underline: slides in from left on hover */}
        <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[var(--primary-blue)] transition-all duration-300 ease-out group-hover:w-full" />
      </a>
    </motion.li>
  );
}

function SocialIcon({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label={label}
      type="button"
      className="relative z-50 cursor-pointer pointer-events-auto group flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border-color)] overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-[0_0_20px_rgba(0,93,166,0.3)] bg-transparent outline-none"
    >
      <div className="absolute inset-0 bg-[var(--primary-blue)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none"></div>
      <Icon className="relative z-10 text-[20px] text-[var(--text-color)] group-hover:text-white transition-colors duration-300 pointer-events-none" />
    </button>
  );
}

// --- Block 1: Brand + Link columns (isolated) ---
function FooterLinksSection({ animate }: { animate: boolean }) {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-8 md:px-16 z-50">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-12 gap-y-12 w-full"
        variants={footerContainerVariants}
        initial="hidden"
        animate={animate ? "visible" : "hidden"}
      >
        <motion.div variants={footerItemVariants} className="flex flex-col items-start md:col-start-2 md:col-span-5 pr-8">
          <Image
            src="/images/msajce-typography.svg"
            alt="MSAJCEA Typography Logo"
            width={450}
            height={140}
            className="object-contain -ml-8 hover:scale-105 transition-transform duration-500 ease-out origin-left"
            priority
          />
          {/* Animated Social Icons - Moved to top */}
          <div className="flex items-center gap-4 mt-8 relative z-50 pointer-events-auto">
            <SocialIcon href="https://www.instagram.com/msajce/" icon={FaInstagram} label="Instagram" />
            <SocialIcon href="https://www.facebook.com/msaj.engg.college/" icon={FaFacebookF} label="Facebook" />
            <SocialIcon href="https://www.linkedin.com/in/msajce" icon={FaLinkedin} label="LinkedIn" />
            <SocialIcon href="https://www.youtube.com/@msajce-topengineeringcolle4475" icon={FaYoutube} label="YouTube" />
            <SocialIcon href="https://x.com/msajce_engg/" icon={FaXTwitter} label="X (Twitter)" />
          </div>
        </motion.div>

        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8 lg:gap-16 mt-8 md:mt-0">
          <div className="flex flex-col">
            <motion.h4 variants={footerItemVariants} className="text-[15px] custom-footer-text-muted pb-2 font-bold uppercase tracking-[0.15em] text-[var(--text-color)]">
              ADMISSIONS
            </motion.h4>
            <ul className="flex flex-col gap-2.5" style={{ marginTop: '20px' }}>
              <LinkItem href="#admission">Courses Offered</LinkItem>
              <LinkItem href="#apply">Apply UG (B.E)</LinkItem>
              <LinkItem href="#apply">Apply PG (M.E)</LinkItem>
              <LinkItem href="#payment">Fee Portal</LinkItem>
              <LinkItem href="#scholarships">Scholarships</LinkItem>
              <LinkItem href="#fee-structure">Fee Structure</LinkItem>
            </ul>
          </div>

          <div className="flex flex-col">
            <motion.h4 variants={footerItemVariants} className="text-[15px] custom-footer-text-muted pb-2 font-bold uppercase tracking-[0.15em] text-[var(--text-color)]">
              DEPARTMENTS
            </motion.h4>
            <ul className="flex flex-col gap-2.5" style={{ marginTop: '20px' }}>
              <LinkItem href="#dept-cse">Computer Science</LinkItem>
              <LinkItem href="#dept-it">Information Tech</LinkItem>
              <LinkItem href="#dept-ece">Electronics</LinkItem>
              <LinkItem href="#dept-ads">AI &amp; Data Science</LinkItem>
              <LinkItem href="#dept-mech">Mechanical Engg</LinkItem>
              <LinkItem href="#dept-civil">Civil Engg</LinkItem>
              <LinkItem href="#dept-eee">Electrical Engg</LinkItem>
            </ul>
          </div>

          <div className="flex flex-col">
            <motion.h4 variants={footerItemVariants} className="text-[15px] custom-footer-text-muted pb-2 font-bold uppercase tracking-[0.15em] text-[var(--text-color)]">
              QUICK LINKS
            </motion.h4>
            <ul className="flex flex-col gap-2.5" style={{ marginTop: '20px' }}>
              <LinkItem href="#about-overview">About MSAJCE</LinkItem>
              <LinkItem href="#placement">Placements</LinkItem>
              <LinkItem href="#research">R&amp;D Cell</LinkItem>
              <LinkItem href="#library">Digital Library</LinkItem>
              <LinkItem href="#clubs">Student Clubs</LinkItem>
              <LinkItem href="#naac">NAAC</LinkItem>
              <LinkItem href="#contact">Contact Us</LinkItem>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// --- Block 2: Giant wordmark ---
function FooterGiantWordmark({ revealed = false }: { revealed?: boolean }) {
  const [hovered, setHovered] = React.useState(false);
  const [introPlayed, setIntroPlayed] = React.useState(false);
  const [introActive, setIntroActive] = React.useState(false);

  React.useEffect(() => {
    if (revealed && !introPlayed) {
      setIntroPlayed(true);
      setIntroActive(true);
      // Let the animation play out and stay visible for a moment, then fade back
      const timer = setTimeout(() => {
        setIntroActive(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [revealed, introPlayed]);

  const isActive = hovered || introActive;
  const letters = "MSAJCEA".split("");

  return (
    <div
      className="relative w-full h-[20vw] md:h-[18vw] overflow-hidden cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
        <div className="flex">
          {letters.map((letter, i) => (
            <span
              key={i}
              className="text-[18vw] font-serif font-black tracking-tighter leading-none select-none inline-block"
              style={{
                WebkitTextFillColor: isActive ? "var(--primary-blue)" : "transparent",
                WebkitTextStroke: isActive ? "0px" : "1px rgba(150, 150, 150, 0.2)",
                textShadow: isActive ? "0 0 40px rgba(0, 93, 166, 0.35)" : "none",
                transitionProperty: "all",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-out",
                transitionDelay: isActive ? `${i * 0.06}s` : `${(letters.length - 1 - i) * 0.04}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Block 3: Copyright bar ---
function FooterCopyrightBar() {
  return (
    <div className="w-full">
      {/* Same 12-column grid as the top section to perfectly align the copyright text with the logo's 'M' */}
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full gap-y-4">
          <div className="md:col-start-2 md:col-span-5 flex items-center">
            <p className="font-bold tracking-wide text-[var(--text-color)] text-[15px] md:text-[16px]">
              2026 &copy; M.S.A.J. College of Engineering.
            </p>
          </div>
          
          <div className="md:col-span-6 flex items-center md:justify-end">
            <div className="flex items-center gap-6 font-bold text-[15px] md:text-[16px]">
              <a href="#privacy" className="text-[var(--text-color)] hover:text-[var(--primary-blue)] transition-all duration-300 hover:underline underline-offset-4">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[var(--text-color)] hover:text-[var(--primary-blue)] transition-all duration-300 hover:underline underline-offset-4">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function Footer() {
  const [revealed, setRevealed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      // Trigger when within 200px of the very bottom of the page
      if (scrollBottom >= docHeight - 200) {
        setRevealed(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check immediately in case page loads already at bottom
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FooterRevealWrapper>
      <footer
        className="main-footer w-full h-screen flex flex-col justify-between custom-footer-bg overflow-hidden"
        style={{ paddingTop: '160px' }}
        id="contact"
      >
        <FooterLinksSection animate={revealed} />
        <div className="flex flex-col">
          <FooterGiantWordmark revealed={revealed} />
          <FooterCopyrightBar />
        </div>
      </footer>
    </FooterRevealWrapper>
  );
}

