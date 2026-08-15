import Image from "next/image";
import Header from "@/components/Header";
import DraggableTicker from "@/components/DraggableTicker";
import DynamicText from "@/components/DynamicText";
import PlacementMarquee from "@/components/PlacementMarquee";
import RotatingWord from "@/components/RotatingWord";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Main content layer — sits above the fixed footer (z:1) */}
      <div style={{ position: 'relative', zIndex: 2, backgroundColor: 'var(--bg-color, white)' }}>
        <Header />
        <main id="main-content">

        {/* ── Hero Section (UAL Editorial Style) ── */}
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
      </div>
      {/* ✨ Footer ✨ */}
      <Footer />
    </>
  );
}
