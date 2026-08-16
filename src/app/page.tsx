import Image from "next/image";
import { 
  Header, 
  DraggableTicker, 
  DynamicText, 
  HeroSection,
  PlacementMarquee, 
  RotatingWord, 
  Footer, 
  TestimonialsSection 
} from "@/components";

export default function Home() {
  return (
    <>
      {/* Main content layer — sits above the fixed footer (z:1) */}
      <div style={{ position: 'relative', zIndex: 2, backgroundColor: 'var(--bg-color, white)' }}>
        <Header />
        <main id="main-content">
          <HeroSection />
          
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

          {/* ── Testimonials ── */}
          <TestimonialsSection />

        {/* ── The MSAJCE Edge / About ── */}
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
