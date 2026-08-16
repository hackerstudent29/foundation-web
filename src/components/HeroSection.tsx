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

import { DynamicText } from "./DynamicText";
import { RotatingWord } from "./RotatingWord";
import { DraggableTicker } from "./DraggableTicker";

export function HeroSection() {
  return (
<section className="hero-section" id="hero">
          <div className="hero-grid">

            {/* Left: Typography + Links */}
            <div className="hero-text-block">
              <DynamicText />
              <h1 className="hero-heading flex flex-col gap-2 mb-12">
                <span>Mohamed Sathak</span>
                <span>A.J. College of</span>
                <span className="mt-2 flex flex-wrap items-center gap-x-3">
                  <RotatingWord
                    homeWord="Engineering"
                    words={["Innovation", "Technology", "Excellence"]}
                    homeDuration={5000}
                    wordDuration={2000}
                  />
                  <span>&amp;</span>
                  <RotatingWord
                    homeWord="Architecture"
                    words={["Design", "Creativity", "Craftsmanship"]}
                    homeDuration={5000}
                    wordDuration={2000}
                  />
                </span>
              </h1>
              <div className="hero-links-list">
                <a href="#apply" className="hero-link-item" id="link-apply">
                  <span>Apply for Admission</span>
                  <span className="arrow">→</span>
                </a>
                <a href="#departments" className="hero-link-item" id="link-dept">
                  <span>Explore Engineering Branches</span>
                  <span className="arrow">→</span>
                </a>
                <a href="#placements" className="hero-link-item" id="link-placements">
                  <span>Our Industry Partners</span>
                  <span className="arrow">→</span>
                </a>
                <a href="#campus-tours" className="hero-link-item" id="link-tours">
                  <span>Virtual Campus Tour</span>
                  <span className="arrow">→</span>
                </a>
                <a href="#contact" className="hero-link-item" id="link-contact">
                  <span>Speak to Advisor</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>

            {/* Right Column — Desktop only (hidden on mobile) */}
            <div className="hidden md:flex flex-col h-full min-h-[calc(100vh-72px)] min-w-0 w-full overflow-hidden">
              {/* Interactive Draggable Ticker Reel */}
              <div className="hero-visual-reel w-full h-[calc(100vh-72px)] relative overflow-hidden flex items-center justify-center">
              <DraggableTicker speed={30} gap={0} direction="up" draggable={true} itemHeight={350}>
                {[
                  { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&h=450&q=80", tag: "Research", title: "Inspiring Innovation", desc: "Fostering academic excellence through rigorous study and research." },
                  { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&h=450&q=80", tag: "Heritage", title: "25+ Years of Legacy", desc: "Delivering outstanding technical education in Chennai since 2001." },
                  { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&h=450&q=80", tag: "Affiliation", title: "Approved by AICTE", desc: "Approved by AICTE and affiliated to Anna University, Chennai." },
                  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=450&q=80", tag: "Placements", title: "95% Placement Record", desc: "Outstanding placement training and hiring by top MNCs." },
                  { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&h=450&q=80", tag: "Campus Life", title: "OMR IT Corridor Location", desc: "Located in Chennai IT highway, featuring state-of-the-art labs." },
                  { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&h=450&q=80", tag: "Philosophy", title: "Build a Life", desc: "Nurturing ethical engineers, shaping future technology leaders." }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full h-[350px] relative overflow-hidden select-none group cursor-pointer"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover pointer-events-none"
                      loading="lazy"
                    />

                    {/* Spreading black gradient — expands from bottom on hover */}
                    <div
                      className="absolute inset-0 transition-all duration-500 ease-out"
                      style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.0) 0%, transparent 100%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
                      style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.1) 65%, transparent 100%)",
                      }}
                    />

                    {/* Text block — hidden at rest, rises up on hover */}
                    <div className="event-card-text absolute left-8 right-8 bottom-8 flex flex-col gap-2
                      translate-y-6 opacity-0
                      group-hover:translate-y-0 group-hover:opacity-100
                      transition-all duration-500 ease-out"
                    >
                      {/* Category badge */}
                      <span
                        className="inline-flex self-start items-center px-2.5 py-[3px] rounded-[3px] text-[9px] tracking-[0.15em] uppercase font-black"
                        style={{ background: "var(--primary-blue)", color: "#fff" }}
                      >
                        {item.tag}
                      </span>

                      {/* Large bold event title */}
                      <h3
                        className="event-card-text font-black leading-[1.1] tracking-tight"
                        style={{
                          color: "#ffffff",
                          fontSize: "clamp(1.35rem, 3.5vw, 1.85rem)",
                          textShadow: "0 2px 20px rgba(0,0,0,0.7)",
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* 1–2 line description */}
                      <p
                        className="event-card-text text-[12px] leading-relaxed line-clamp-2 max-w-[88%]
                          opacity-0 group-hover:opacity-100
                          translate-y-2 group-hover:translate-y-0
                          transition-all duration-500 delay-150 ease-out"
                        style={{ color: "rgba(255,255,255,0.9)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </DraggableTicker>
              </div>
            </div>
          </div>
        </section>
  );
}



