"use client";

import React from "react";

export default function AcademicProgrammesSection() {
  return (
    <>
      {/* Spacer to prevent margin collapse with PlacementMarquee */}
      <div className="w-full h-16 md:h-24 lg:h-32 bg-transparent"></div>

      <section 
        className="w-full relative pt-16 lg:pt-20 pb-40 lg:pb-48" 
        id="academic-programmes" 
        style={{ backgroundColor: "#EAE3DA" }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16">
          
          {/* Main Grid Wrapper */}
          <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-20">
            
            {/* Left Image */}
            <div className="w-full lg:w-[44%] h-[400px] lg:h-[600px] relative shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Students in classroom"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[56%] flex flex-col justify-center">
              <span className="font-bold text-sm tracking-wide" style={{ color: "#1a1a1a" }}>
                Studying at MSAJCE
              </span>
              
              <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-medium leading-[1.1] tracking-tight mt-4" style={{ color: "#1a1a1a", fontFamily: "var(--font-switzer), sans-serif" }}>
                Shape Your Future with<br/>MSAJCE's Industry-relevant Programmes
              </h2>
              
              <p className="mt-5 text-lg opacity-70 leading-relaxed max-w-xl" style={{ color: "#1a1a1a" }}>
                Our innovative curriculum equips students with critical thinking, leadership skills, and a global perspective, preparing them to excel in diverse, rapidly evolving industries.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                <a 
                  href="#programmes" 
                  className="px-6 py-3.5 border-2 transition-colors font-bold text-sm hover:bg-[#1a1a1a] hover:text-white" 
                  style={{ color: "#1a1a1a", borderColor: "#1a1a1a" }}
                >
                  Find a Programme &raquo;
                </a>
                <a 
                  href="#admissions" 
                  className="px-6 py-3.5 border-2 transition-colors font-bold text-sm hover:bg-[#1a1a1a] hover:text-white" 
                  style={{ color: "#1a1a1a", borderColor: "#1a1a1a" }}
                >
                  Admissions Information &raquo;
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Bottom Banner — inset from left edge, overlapping image */}
        <div className="w-full max-w-[1440px] mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 px-8 md:px-16 transform translate-y-1/2 flex justify-start">
          <div 
            className="w-full lg:w-[85%] ml-0 lg:ml-16 text-white p-6 md:p-8 lg:p-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 shadow-2xl border-t-[6px]"
            style={{ backgroundColor: "#8B7355", borderTopColor: "#0B2053" }}
          >
            <h3 className="font-bold text-xl md:text-2xl leading-tight max-w-sm">
              Explore programmes by academic levels
            </h3>
            
            <div className="flex flex-wrap items-center gap-3">
              <a href="#ug" className="px-5 py-2.5 border border-white/50 hover:bg-white hover:text-[#8B7355] transition-colors text-sm font-medium">
                Undergraduates &raquo;
              </a>
              <a href="#pg" className="px-5 py-2.5 border border-white/50 hover:bg-white hover:text-[#8B7355] transition-colors text-sm font-medium">
                Postgraduates &raquo;
              </a>
              <a href="#phd" className="px-5 py-2.5 border border-white/50 hover:bg-white hover:text-[#8B7355] transition-colors text-sm font-medium">
                Professional & Continuing Education &raquo;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}