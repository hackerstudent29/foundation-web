"use client";

import { motion } from "framer-motion";

export default function WhyJoinSection() {
  const stats = [
    { num: "25+", label: "Years of Excellence" },
    { num: "5000+", label: "Successful Alumni" },
    { num: "95%", label: "Placement Record" },
    { num: "50+", label: "Industry Recruiters" },
  ];

  const reasons = [
    { title: "Prime Location", desc: "Situated on the OMR IT Corridor — Chennai's tech highway — giving students unmatched access to MNCs, startups, and research hubs." },
    { title: "Industry Tie-ups", desc: "Live projects, corporate mentorship, and hackathons run year-round in partnership with top-tier technology companies." },
    { title: "State-of-the-Art Labs", desc: "Fully equipped research labs, innovation centres, and an IDEA Lab designed to transform ideas into real-world prototypes." },
    { title: "Scholarships & Sports", desc: "Merit-based and sports scholarships available so that talent — academic or athletic — is always recognised and rewarded." },
    { title: "Anna Univ Affiliated", desc: "Approved by AICTE and affiliated to Anna University, Chennai — ensuring globally recognised degrees and academic credibility." },
    { title: "Student-Led Chapters", desc: "IEEE, CSI, and other professional chapters run by students, building leadership, networking, and real-world experience." },
  ];

  return (
    <section className="w-full relative header-padding" id="why-msajce" style={{ background: "var(--bg-color)", paddingTop: "8rem", paddingBottom: "12rem" }}>
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left: Sticky Header & Stats */}
        <div className="lg:w-1/3 lg:sticky lg:top-32 flex flex-col gap-16 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8" style={{ color: "var(--text-color)" }}>
              Why<br/><span style={{ color: "var(--primary-blue)" }}>Join</span><br/>MSAJCE?
            </h2>
            <p className="text-xl md:text-2xl font-medium opacity-80 leading-relaxed border-l-4 pl-6" style={{ borderColor: "var(--primary-blue)", color: "var(--text-color)" }}>
              A campus that turns ambition into achievement — every single day.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Futuristic glow behind stat */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
                <span 
                  className="relative text-5xl md:text-7xl font-black tracking-tighter"
                  style={{ 
                    background: "linear-gradient(135deg, var(--text-color) 0%, var(--primary-blue) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  {stat.num}
                </span>
                <span className="relative text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 mt-3" style={{ color: "var(--text-color)" }}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Futuristic Bento Grid */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full z-10">
          {reasons.map((item, i) => {
            // Make every 3rd card span full width for a Bento layout
            const isWide = i === 0 || i === 3;
            
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                className={`group relative overflow-hidden rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 ${isWide ? 'md:col-span-2' : 'col-span-1'}`}
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid rgba(150, 150, 150, 0.15)",
                  boxShadow: "0 20px 40px -20px rgba(0,0,0,0.05)"
                }}
              >
                {/* Animated Gradient Glow on Hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0B2053]/5 via-transparent to-[#907957]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Accent Line on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-[#0B2053] to-[#907957] group-hover:w-full transition-all duration-700 ease-out" />
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  {/* Top section: Icon/Number & Title */}
                  <div className={`flex ${isWide ? 'flex-row items-center gap-6' : 'flex-col items-start gap-4'}`}>
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <span className="text-2xl font-black" style={{ color: "var(--text-color)" }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className={`font-bold tracking-tight ${isWide ? 'text-3xl md:text-4xl' : 'text-2xl'}`} style={{ color: "var(--text-color)" }}>
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Bottom section: Description */}
                  <p className={`opacity-70 leading-relaxed font-medium ${isWide ? 'text-xl max-w-2xl' : 'text-base'}`} style={{ color: "var(--text-color)" }}>
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Tech Grid overlay (very subtle) */}
                <div 
                  className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none transition-opacity group-hover:opacity-[0.04] dark:group-hover:opacity-[0.08]"
                  style={{ backgroundImage: 'radial-gradient(var(--text-color) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
