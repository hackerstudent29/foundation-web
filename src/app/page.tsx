import Image from "next/image";
import Header from "@/components/Header";
import DraggableTicker from "@/components/DraggableTicker";
import DynamicText from "@/components/DynamicText";
import PlacementMarquee from "@/components/PlacementMarquee";
import RotatingWord from "@/components/RotatingWord";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">

        {/* ── Hero Section (UAL Editorial Style) ── */}
        <section className="hero-section" id="hero">
          <div className="hero-grid">

            {/* Left: Typography + Links */}
            <div className="hero-text-block">
              <DynamicText />
              <h1 className="hero-heading">
                Mohamed Sathak A.J. College of{" "}
                <RotatingWord
                  homeWord="Engineering"
                  words={["Innovation", "Technology", "Excellence"]}
                  homeDuration={5000}
                  wordDuration={2000}
                />
                {" "}&{" "}
                <RotatingWord
                  homeWord="Architecture"
                  words={["Design", "Creativity", "Craftsmanship"]}
                  homeDuration={5000}
                  wordDuration={2000}
                />
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

        {/* Mobile-only: Horizontal swipeable image strip */}
        <div className="md:hidden w-full flex" style={{
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          scrollSnapType: "x mandatory",
          height: "220px",
          gap: "8px",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingBottom: "8px",
          background: "var(--bg-color)",
        }}>
          {[
            { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&h=300&q=80", label: "Research" },
            { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400&h=300&q=80", label: "Heritage" },
            { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&h=300&q=80", label: "Affiliation" },
            { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=300&q=80", label: "Placements" },
            { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&h=300&q=80", label: "Campus Life" },
            { src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&h=300&q=80", label: "Philosophy" },
          ].map((item, i) => (
            <div key={i} className="relative flex-shrink-0" style={{
              width: "72vw",
              maxWidth: "280px",
              height: "204px",
              scrollSnapAlign: "start",
              borderRadius: "6px",
              overflow: "hidden",
            }}>
              <img src={item.src} alt={item.label} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)" }} />
              <span className="absolute bottom-3 left-3 text-white font-bold text-xs tracking-widest uppercase" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Top Recruiters Section */}
        <section className="top-recruiters-section" id="top-recruiters">
          <h2 className="top-recruiters-title">TOP RECRUITERS</h2>
          <PlacementMarquee
            logos={[
              { src: "/images/amazon.svg", alt: "Amazon" },
              { src: "/images/cognizant.svg", alt: "Cognizant" },
              { src: "/images/zoho.svg", alt: "Zoho" },
              { src: "/images/tcs.svg", alt: "TCS" },
              { src: "/images/infosys.svg", alt: "Infosys" },
              { src: "/images/wipro.svg", alt: "Wipro" },
              { src: "/images/ibm.svg", alt: "IBM" },
              { src: "/images/hitachi.svg", alt: "Hitachi", scale: 1.8 },
              { src: "/images/atos.svg", alt: "Atos", scale: 2.0 },
              { src: "/images/lenovo.svg", alt: "Lenovo" },
              { src: "/images/valeo.svg", alt: "Valeo", scale: 1.8 }
            ]}
          />
        </section>



        {/* ── Stats Section ── */}
        <section className="editorial-grid-section" id="stats-section">
          <div className="section-header">
            <h2>MSAJCE in Numbers</h2>
          </div>
          <div className="stats-grid">
            <div className="stats-card">
              <span className="stats-number">25+</span>
              <span className="stats-label">Years of Excellence</span>
            </div>
            <div className="stats-card">
              <span className="stats-number">5000+</span>
              <span className="stats-label">Successful Alumni</span>
            </div>
            <div className="stats-card">
              <span className="stats-number">95%</span>
              <span className="stats-label">Placement Record</span>
            </div>
            <div className="stats-card">
              <span className="stats-number">50+</span>
              <span className="stats-label">Industry Recruiters</span>
            </div>
          </div>
        </section>

        {/* ── Departments Section ── */}
        <section className="editorial-grid-section" id="departments-section">
          <div className="section-header">
            <h2>Academic Departments</h2>
            <p className="section-subtitle">Choose from our specialized engineering domains designed for future innovators.</p>
          </div>
          <div className="departments-grid">
            <div className="dept-card bg-white text-black">
              <div className="dept-card-body">
                <span className="dept-code">CSE</span>
                <h3>Computer Science &amp; Engineering</h3>
                <p>Focuses on advanced software development, AI, machine learning, systems architecture, and cyber security.</p>
                <a href="#dept-cse" className="dept-link">Explore CSE →</a>
              </div>
            </div>
            <div className="dept-card bg-blue text-white">
              <div className="dept-card-body">
                <span className="dept-code">IT</span>
                <h3>Information Technology</h3>
                <p>Specialized curriculum in cloud architecture, network infrastructure, database administration, and web engineering.</p>
                <a href="#dept-it" className="dept-link text-white">Explore IT →</a>
              </div>
            </div>
            <div className="dept-card bg-black text-white">
              <div className="dept-card-body">
                <span className="dept-code">ECE</span>
                <h3>Electronics &amp; Communication</h3>
                <p>Study microelectronics, wireless networks, IoT systems, signal processing, and telecommunication technologies.</p>
                <a href="#dept-ece" className="dept-link text-white">Explore ECE →</a>
              </div>
            </div>
            <div className="dept-card bg-gray text-white">
              <div className="dept-card-body">
                <span className="dept-code">AIDS</span>
                <h3>AI &amp; Data Science</h3>
                <p>Curriculum designed for big data analysis, data warehousing, deep learning, and predictive computational modelling.</p>
                <a href="#dept-ads" className="dept-link text-white">Explore AIDS →</a>
              </div>
            </div>
            <div className="dept-card bg-white text-black">
              <div className="dept-card-body">
                <span className="dept-code">MECH</span>
                <h3>Mechanical Engineering</h3>
                <p>Covers computer-aided design, robotics, fluid dynamics, thermodynamic systems, and smart automation.</p>
                <a href="#dept-mech" className="dept-link">Explore Mech →</a>
              </div>
            </div>
            <div className="dept-card bg-blue text-white">
              <div className="dept-card-body">
                <span className="dept-code">EEE</span>
                <h3>Electrical &amp; Electronics</h3>
                <p>Focus on clean energy grid systems, power electronics, electric vehicle technologies, and electrical controls.</p>
                <a href="#dept-eee" className="dept-link text-white">Explore EEE →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Placement Partners ── */}
        <section className="editorial-grid-section" id="recruiters-section">
          <div className="section-header">
            <h2>Our Placement Network</h2>
            <p className="section-subtitle">MSAJCE students are hired by top-tier MNCs and technology startups globally.</p>
          </div>
          <div className="partners-grid">
            {[
              { src: "/images/amazon.svg", alt: "Amazon" },
              { src: "/images/cognizant.svg", alt: "Cognizant" },
              { src: "/images/zoho.svg", alt: "Zoho" },
              { src: "/images/tcs.svg", alt: "TCS" },
              { src: "/images/infosys.svg", alt: "Infosys" },
              { src: "/images/wipro.svg", alt: "Wipro" },
              { src: "/images/ibm.svg", alt: "IBM" },
              { src: "/images/hitachi.svg", alt: "Hitachi" },
              { src: "/images/atos.svg", alt: "Atos" },
              { src: "/images/lenovo.svg", alt: "Lenovo" },
              { src: "/images/valeo.svg", alt: "Valeo" },
            ].map((logo) => (
              <div className="partner-logo-box" key={logo.alt}>
                <img src={logo.src} alt={`${logo.alt} Logo`} className="partner-logo" />
              </div>
            ))}
          </div>
        </section>

        {/* ── About / Info Split ── */}
        <section className="editorial-info-split" id="about-section">
          <div className="info-split-grid">
            <div className="info-image-block bg-blue text-white">
              <div className="block-content">
                <h2>The MSAJCE Edge</h2>
                <ul className="bullet-list-editorial">
                  <li>Located in the IT Corridor of Chennai (OMR), providing rich access to tech hubs.</li>
                  <li>Strong industry collaboration, student hackathons, and corporate mentorship.</li>
                  <li>Modern infrastructure with fully integrated research labs.</li>
                  <li>Scholarships for meritorious students and sports achievers.</li>
                </ul>
              </div>
            </div>
            <div className="info-text-block bg-black text-white">
              <div className="block-content">
                <h2>Nurturing Leaders, Shaping Innovators</h2>
                <p>Established with the objective of providing quality technical education to young minds, M.S.A.J. College of Engineering is dedicated to raising ethical engineers with superior academic capability.</p>
                <p>We combine interactive learning systems with intensive industry readiness training programs from year one, ensuring students hit the ground running upon graduation.</p>
                <a href="#admissions" className="btn-primary-blue-cta">Join MSAJCE Admissions 2026</a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="main-footer" id="contact">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/images/msajce-logo-transparent.png" alt="MSAJCE Footer Logo" className="footer-logo" width={120} height={80} />
            <p>M.S.A.J. College of Engineering</p>
            <p className="copyright">&copy; 2026 MSAJCE. All Rights Reserved.</p>
          </div>
          <div className="footer-links-col">
            <h4>Admissions</h4>
            <ul>
              <li><a href="#apply">Apply UG</a></li>
              <li><a href="#apply">Apply PG</a></li>
              <li><a href="#scholarships">Scholarships</a></li>
              <li><a href="#fee-structure">Fees &amp; Guidelines</a></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Departments</h4>
            <ul>
              <li><a href="#dept-cse">Computer Science</a></li>
              <li><a href="#dept-it">Information Technology</a></li>
              <li><a href="#dept-ece">Electronics &amp; Communication</a></li>
              <li><a href="#dept-ads">AI &amp; Data Science</a></li>
            </ul>
          </div>
          <div className="footer-links-col">
            <h4>Contact & Socials</h4>
            <p className="address mb-4">
              <a href="https://www.google.com/maps/search/?api=1&query=Mohamed+Sathak+A.J.+College+of+Engineering+Siruseri+Chennai" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-blue)] transition-colors">
                34, Rajiv Gandhi Salai (OMR),<br />
                Inside SIPCOT IT Park, Siruseri,<br />
                Chennai, Tamil Nadu 603103.
              </a>
            </p>
            <div className="flex items-center gap-4 mt-6">
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
        </div>
      </footer>
    </>
  );
}
