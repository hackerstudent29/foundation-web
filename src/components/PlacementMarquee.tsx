"use client";

import React from "react";

interface LogoItem {
  src: string;
  alt: string;
  scale?: number;
}

interface PlacementMarqueeProps {
  logos: LogoItem[];
}

export default function PlacementMarquee({ logos = [] }: PlacementMarqueeProps) {
  const logoImg = (logo: LogoItem, key: string) => (
    <div key={key} className="flex-shrink-0 flex items-center justify-center bg-transparent w-[120px] h-[55px] sm:w-[160px] sm:h-[65px] md:w-[180px] md:h-[75px] transition-transform hover:scale-110">
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-w-full max-h-full object-contain"
        style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
        loading="lazy"
      />
    </div>
  );

  const row2Logos = [...logos.slice(5), ...logos.slice(0, 5)];

  return (
    <div className="placement-marquee-container w-full py-8 bg-transparent select-none overflow-hidden">
      <div className="flex flex-col gap-6 mt-2">
        {/* Row 1 - Left to Right */}
        <div className="marquee-wrapper overflow-hidden relative w-full flex group">
          <div className="flex-shrink-0 flex gap-20 min-w-full animate-marquee pr-20 group-hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }}>
            {logos.map((logo, idx) => logoImg(logo, `r1-1-${idx}`))}
          </div>
          <div className="flex-shrink-0 flex gap-20 min-w-full animate-marquee pr-20 group-hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }} aria-hidden="true">
            {logos.map((logo, idx) => logoImg(logo, `r1-2-${idx}`))}
          </div>
        </div>

        {/* Row 2 - Same Direction, Different Pace, Shifted Logos */}
        <div className="marquee-wrapper overflow-hidden relative w-full flex group mb-4">
          <div className="flex-shrink-0 flex gap-20 min-w-full animate-marquee pr-20 group-hover:[animation-play-state:paused]" style={{ animationDuration: '30s' }}>
            {row2Logos.map((logo, idx) => logoImg(logo, `r2-1-${idx}`))}
          </div>
          <div className="flex-shrink-0 flex gap-20 min-w-full animate-marquee pr-20 group-hover:[animation-play-state:paused]" style={{ animationDuration: '30s' }} aria-hidden="true">
            {row2Logos.map((logo, idx) => logoImg(logo, `r2-2-${idx}`))}
          </div>
        </div>
      </div>
    </div>
  );
}
