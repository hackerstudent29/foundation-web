"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState<string | null>(null);

  // Toggle blur class on body when dropdown is active
  useEffect(() => {
    if (activeDropdown) {
      document.body.classList.add("dropdown-open");
    } else {
      document.body.classList.remove("dropdown-open");
    }
  }, [activeDropdown]);

  // Sync mobile state reset on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
        setActiveMobileSub(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("dropdown-open");
    };
  }, []);

  const toggleDropdown = (paneId: string) => {
    if (activeDropdown === paneId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(paneId);
    }
  };

  const toggleMobileSub = (paneId: string) => {
    if (activeMobileSub === paneId) {
      setActiveMobileSub(null);
    } else {
      setActiveMobileSub(paneId);
    }
  };

  const handleTriggerMouseEnter = (paneId: string) => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(paneId);
    }
  };

  const handleHeaderMouseLeave = () => {
    if (window.innerWidth > 1024) {
      setActiveDropdown(null);
    }
  };

  return (
    <>
      <header 
        className={cn("main-header", activeDropdown || isMobileMenuOpen ? "menu-open" : "")} 
        id="header"
        onMouseLeave={handleHeaderMouseLeave}
      >
        <div className="header-container">
          <a href="#" className="logo-link" id="logo-link" aria-label="MSAJCEA Home">
            <img src="/images/msajce-logo-transparent.png" alt="MSAJCEA Logo" className="header-logo" />
          </a>
          
          <nav className={cn("nav-menu", isMobileMenuOpen ? "active" : "")} id="nav-menu" aria-label="Main Navigation">
            <ul className="nav-list">
              {/* 1. The Institution */}
              <li className={cn("nav-item", activeMobileSub === "about" ? "active-sub-item" : "")}>
                <button 
                  className={cn("nav-trigger", activeDropdown === "about" ? "active" : "", activeMobileSub === "about" ? "active-sub" : "")}
                  onClick={() => window.innerWidth <= 1024 ? toggleMobileSub("about") : toggleDropdown("about")}
                  onMouseEnter={() => handleTriggerMouseEnter("about")}
                  aria-expanded={activeDropdown === "about"}
                  data-dropdown="about"
                >
                  The Institution
                </button>
                <div className={cn("dropdown-pane-mobile-inline", activeMobileSub === "about" ? "active" : "")}>
                  <ul>
                    <li className="mobile-dropdown-category">Overview</li>
                    <li><a href="#about-overview" onClick={() => setIsMobileMenuOpen(false)}>Campus Profile</a></li>
                    <li><a href="#vision" onClick={() => setIsMobileMenuOpen(false)}>Mission & Values</a></li>
                    <li><a href="#management" onClick={() => setIsMobileMenuOpen(false)}>The Trust</a></li>
                    <li><a href="#principal" onClick={() => setIsMobileMenuOpen(false)}>Principal's Message</a></li>
                    <li><a href="#group-institutions" onClick={() => setIsMobileMenuOpen(false)}>Trust Network</a></li>
                    
                    <li className="mobile-dropdown-category mt-4">Administration & Compliance</li>
                    <li><a href="#statutory" onClick={() => setIsMobileMenuOpen(false)}>Governance</a></li>
                    <li><a href="#committees" onClick={() => setIsMobileMenuOpen(false)}>Welfare Committees</a></li>
                    <li><a href="#policies" onClick={() => setIsMobileMenuOpen(false)}>Code of Conduct</a></li>
                    <li><a href="#mandatory-disclosure" onClick={() => setIsMobileMenuOpen(false)}>Compliance</a></li>
                    
                    <li className="mobile-dropdown-category mt-4">Recognitions</li>
                    <li><a href="#naac" onClick={() => setIsMobileMenuOpen(false)}>NAAC</a></li>
                    <li><a href="#iqac" onClick={() => setIsMobileMenuOpen(false)}>IQAC</a></li>
                    <li><a href="#nirf" onClick={() => setIsMobileMenuOpen(false)}>NIRF</a></li>
                    <li><a href="#ariia" onClick={() => setIsMobileMenuOpen(false)}>ARIIA</a></li>
                  </ul>
                </div>
              </li>

              {/* 3. Admissions */}
              <li className={cn("nav-item", activeMobileSub === "admission" ? "active-sub-item" : "")}>
                <button 
                  className={cn("nav-trigger", activeDropdown === "admission" ? "active" : "", activeMobileSub === "admission" ? "active-sub" : "")}
                  onClick={() => window.innerWidth <= 1024 ? toggleMobileSub("admission") : toggleDropdown("admission")}
                  onMouseEnter={() => handleTriggerMouseEnter("admission")}
                  aria-expanded={activeDropdown === "admission"}
                  data-dropdown="admission"
                >
                  Admissions
                </button>
                <div className={cn("dropdown-pane-mobile-inline", activeMobileSub === "admission" ? "active" : "")}>
                  <ul>
                    <li className="mobile-dropdown-category">Join MSAJCE</li>
                    <li><a href="#admission" onClick={() => setIsMobileMenuOpen(false)}>Courses Offered</a></li>
                    <li><a href="#apply" onClick={() => setIsMobileMenuOpen(false)}>Online Application</a></li>
                    <li><a href="#payment" onClick={() => setIsMobileMenuOpen(false)}>Fee Portal</a></li>
                    <li><a href="#scholarship" onClick={() => setIsMobileMenuOpen(false)}>Financial Aid</a></li>
                  </ul>
                </div>
              </li>

              {/* 2. Education */}
              <li className={cn("nav-item", activeMobileSub === "academics" ? "active-sub-item" : "")}>
                <button 
                  className={cn("nav-trigger", activeDropdown === "academics" ? "active" : "", activeMobileSub === "academics" ? "active-sub" : "")}
                  onClick={() => window.innerWidth <= 1024 ? toggleMobileSub("academics") : toggleDropdown("academics")}
                  onMouseEnter={() => handleTriggerMouseEnter("academics")}
                  aria-expanded={activeDropdown === "academics"}
                  data-dropdown="academics"
                >
                  Education
                </button>
                <div className={cn("dropdown-pane-mobile-inline", activeMobileSub === "academics" ? "active" : "")}>
                  <ul>
                    <li className="mobile-dropdown-category">Education</li>
                    <li><a href="#regulations" onClick={() => setIsMobileMenuOpen(false)}>Academic Rules</a></li>
                    <li><a href="#curriculum" onClick={() => setIsMobileMenuOpen(false)}>Course Structure</a></li>
                    <li><a href="#departments" onClick={() => setIsMobileMenuOpen(false)}>Academic Divisions</a></li>
                    
                    <li className="mobile-dropdown-category mt-4">Innovation</li>
                    <li><a href="#tech-centre" onClick={() => setIsMobileMenuOpen(false)}>IDEA Lab</a></li>
                    <li><a href="#research" onClick={() => setIsMobileMenuOpen(false)}>R&D Cell</a></li>
                  </ul>
                </div>
              </li>

              {/* 5. Placements (Direct Link) */}
              <li className="nav-item">
                <a 
                  href="#placement" 
                  className="nav-trigger no-dropdown"
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={() => {
                    if (window.innerWidth > 1024) {
                      setActiveDropdown(null);
                    }
                  }}
                  style={{ textDecoration: 'none' }}
                >
                  Placements
                </a>
              </li>

              {/* 6. Campus Life */}
              <li className={cn("nav-item", activeMobileSub === "life" ? "active-sub-item" : "")}>
                <button 
                  className={cn("nav-trigger", activeDropdown === "life" ? "active" : "", activeMobileSub === "life" ? "active-sub" : "")}
                  onClick={() => window.innerWidth <= 1024 ? toggleMobileSub("life") : toggleDropdown("life")}
                  onMouseEnter={() => handleTriggerMouseEnter("life")}
                  aria-expanded={activeDropdown === "life"}
                  data-dropdown="life"
                >
                  Campus Life
                </button>
                <div className={cn("dropdown-pane-mobile-inline", activeMobileSub === "life" ? "active" : "")}>
                  <ul>
                    <li className="mobile-dropdown-category">Campus Facilities</li>
                    <li><a href="#library" onClick={() => setIsMobileMenuOpen(false)}>Digital Library</a></li>
                    <li><a href="#hostel" onClick={() => setIsMobileMenuOpen(false)}>Student Housing</a></li>
                    <li><a href="#transport" onClick={() => setIsMobileMenuOpen(false)}>Transit & Routes</a></li>
                    <li><a href="#sports" onClick={() => setIsMobileMenuOpen(false)}>Athletics & Gym</a></li>
                    <li><a href="#radio" onClick={() => setIsMobileMenuOpen(false)}>Student Radio</a></li>
                    
                    <li className="mobile-dropdown-category mt-4">Student Engagement</li>
                    <li><a href="#clubs" onClick={() => setIsMobileMenuOpen(false)}>Student Clubs</a></li>
                    <li><a href="#professionalsocities" onClick={() => setIsMobileMenuOpen(false)}>Tech Chapters</a></li>
                    <li><a href="#social-services" onClick={() => setIsMobileMenuOpen(false)}>Social Outreach (NSS)</a></li>
                    <li><a href="#ebsb" onClick={() => setIsMobileMenuOpen(false)}>EBSB</a></li>
                    
                    <li className="mobile-dropdown-category mt-4">Career & Community</li>
                    <li><a href="#students-corner" onClick={() => setIsMobileMenuOpen(false)}>Student Corner</a></li>
                    <li><a href="#alumni" onClick={() => setIsMobileMenuOpen(false)}>Alumni Network</a></li>
                    <li><a href="#incubation" onClick={() => setIsMobileMenuOpen(false)}>Startup Hub</a></li>
                  </ul>
                </div>
              </li>

              

              {/* 4. Examinations */}
              <li className={cn("nav-item", activeMobileSub === "coe" ? "active-sub-item" : "")}>
                <button 
                  className={cn("nav-trigger", activeDropdown === "coe" ? "active" : "", activeMobileSub === "coe" ? "active-sub" : "")}
                  onClick={() => window.innerWidth <= 1024 ? toggleMobileSub("coe") : toggleDropdown("coe")}
                  onMouseEnter={() => handleTriggerMouseEnter("coe")}
                  aria-expanded={activeDropdown === "coe"}
                  data-dropdown="coe"
                >
                  Examinations
                </button>
                <div className={cn("dropdown-pane-mobile-inline", activeMobileSub === "coe" ? "active" : "")}>
                  <ul>
                    <li className="mobile-dropdown-category">Controller of Examinations</li>
                    <li><a href="#timetable" onClick={() => setIsMobileMenuOpen(false)}>Exam Schedules</a></li>
                    <li><a href="https://results.msajce-edu.in" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>Exam Results</a></li>
                    <li><a href="#exam-registration" onClick={() => setIsMobileMenuOpen(false)}>Hall Tickets</a></li>
                    <li><a href="#supplementary" onClick={() => setIsMobileMenuOpen(false)}>Arrear Exams</a></li>
                  </ul>
                </div>
              </li>
            </ul>

            {/* Mobile Contact & Socials Footer (Only visible in mobile menu) */}
            <div className="mobile-menu-footer md:hidden mt-auto w-full border-t border-[var(--border-color)] pt-6 pb-8 px-6 bg-white/50 dark:bg-black/50 backdrop-blur-md">
              <h4 className="text-[var(--text-color)] font-bold text-lg mb-4">Contact Us</h4>
              <div className="flex flex-col gap-3 mb-6">
                <a href="https://www.google.com/maps/search/?api=1&query=Mohamed+Sathak+A.J.+College+of+Engineering+Siruseri+Chennai" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-[var(--text-color)] opacity-85 hover:opacity-100 transition-opacity text-sm">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>34, Rajiv Gandhi Salai (OMR), Inside SIPCOT IT Park, Siruseri, Chennai, Tamil Nadu 603103.</span>
                </a>
              </div>
              
              <h4 className="text-[var(--text-color)] font-bold text-lg mb-4">Connect With Us</h4>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/msajce/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                  <svg className="w-6 h-6 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/msajce" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                  <svg className="w-6 h-6 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.facebook.com/msaj.engg.college/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
                  <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://x.com/msajce_engg/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="X (Twitter)">
                  <svg className="w-5 h-5 text-[var(--text-color)]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://www.youtube.com/@msajce-topengineeringcolle4475" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="YouTube">
                  <svg className="w-7 h-7 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </nav>

          <div className="header-actions">
            <ThemeToggle className="theme-toggle-btn" />
            <a href="#apply" className="btn-apply-now" id="btn-apply-header">Apply 2026-27</a>
            <button 
              className={cn("mobile-menu-toggle", isMobileMenuOpen ? "active" : "")}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              aria-label="Toggle Navigation Menu" 
              aria-expanded={isMobileMenuOpen}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>

        {/* Desktop Apple-style Dropdown Menu Panes */}
        <div 
          className={cn("dropdown-overlay", activeDropdown ? "active" : "")} 
          id="dropdown-overlay"
        >
          <div className="dropdown-pane-container" style={{ position: "relative", height: "100%", width: "100%" }}>
            {/* 1. Discover Dropdown */}
            <div className={cn("dropdown-pane", activeDropdown === "about" ? "active" : "")} id="dropdown-about" role="region" aria-label="The Institution Menu" style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
              <div className="dropdown-grid">
                <div className="dropdown-col">
                  <h3>Overview</h3>
                  <ul>
                    <li><a href="#about-overview">Campus Profile</a></li>
                    <li><a href="#vision">Mission & Values</a></li>
                    <li><a href="#management">The Trust</a></li>
                    <li><a href="#principal">Principal's Message</a></li>
                    <li><a href="#group-institutions">Trust Network</a></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h3>Administration & Compliance</h3>
                  <ul>
                    <li><a href="#statutory">Governance</a></li>
                    <li><a href="#committees">Welfare Committees</a></li>
                    <li><a href="#policies">Code of Conduct</a></li>
                    <li><a href="#mandatory-disclosure">Compliance</a></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h3>Recognitions</h3>
                  <ul>
                    <li><a href="#naac">NAAC</a></li>
                    <li><a href="#iqac">IQAC</a></li>
                    <li><a href="#nirf">NIRF</a></li>
                    <li><a href="#ariia">ARIIA</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Join Us Dropdown */}
            <div className={cn("dropdown-pane", activeDropdown === "admission" ? "active" : "")} id="dropdown-admission" role="region" aria-label="Admissions Menu" style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
              <div className="dropdown-grid">
                <div className="dropdown-col">
                  <h3>Join MSAJCE</h3>
                  <ul>
                    <li><a href="#admission">Courses Offered</a></li>
                    <li><a href="#apply">Online Application</a></li>
                    <li><a href="#payment">Fee Portal</a></li>
                    <li><a href="#scholarship">Financial Aid</a></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                </div>
                <div className="dropdown-col">
                </div>
              </div>
            </div>

            {/* 2. Programs Dropdown */}
            <div className={cn("dropdown-pane", activeDropdown === "academics" ? "active" : "")} id="dropdown-academics" role="region" aria-label="Education Menu" style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
              <div className="dropdown-grid">
                <div className="dropdown-col">
                  <h3>Education</h3>
                  <ul>
                    <li><a href="#regulations">Academic Rules</a></li>
                    <li><a href="#curriculum">Course Structure</a></li>
                    <li><a href="#departments">Academic Divisions</a></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h3>Innovation</h3>
                  <ul>
                    <li><a href="#tech-centre">IDEA Lab</a></li>
                    <li><a href="#research">R&D Cell</a></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  {/* Empty or related links to maintain grid structure */}
                </div>
              </div>
            </div>

            {/* 6. Campus Experience Dropdown (Careers has no dropdown) */}
            <div className={cn("dropdown-pane", activeDropdown === "life" ? "active" : "")} id="dropdown-life" role="region" aria-label="Campus Life Menu" style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
              <div className="dropdown-grid">
                <div className="dropdown-col">
                  <h3>Campus Facilities</h3>
                  <ul>
                    <li><a href="#library">Digital Library</a></li>
                    <li><a href="#hostel">Student Housing</a></li>
                    <li><a href="#transport">Transit & Routes</a></li>
                    <li><a href="#sports">Athletics & Gym</a></li>
                    <li><a href="#radio">Student Radio</a></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h3>Student Engagement</h3>
                  <ul>
                    <li><a href="#clubs">Student Clubs</a></li>
                    <li><a href="#professionalsocities">Tech Chapters</a></li>
                    <li><a href="#social-services">Social Outreach (NSS)</a></li>
                    <li><a href="#ebsb">EBSB</a></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                  <h3>Career & Community</h3>
                  <ul>
                    <li><a href="#students-corner">Student Corner</a></li>
                    <li><a href="#alumni">Alumni Network</a></li>
                    <li><a href="#incubation">Startup Hub</a></li>
                  </ul>
                </div>
              </div>
            </div>
          

            {/* 4. Exams & Results Dropdown */}
            <div className={cn("dropdown-pane", activeDropdown === "coe" ? "active" : "")} id="dropdown-coe" role="region" aria-label="Examinations Menu" style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
              <div className="dropdown-grid">
                <div className="dropdown-col">
                  <h3>Controller of Examinations</h3>
                  <ul>
                    <li><a href="#timetable">Exam Schedules</a></li>
                    <li><a href="https://results.msajce-edu.in" target="_blank" rel="noopener noreferrer">Exam Results</a></li>
                    <li><a href="#exam-registration">Hall Tickets</a></li>
                    <li><a href="#supplementary">Arrear Exams</a></li>
                  </ul>
                </div>
                <div className="dropdown-col">
                </div>
                <div className="dropdown-col">
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
