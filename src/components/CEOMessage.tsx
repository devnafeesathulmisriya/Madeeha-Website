"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Heart, Quote, Award } from "lucide-react";

// Stagger children reveal
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const lineVariants = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0 },
};


export default function CEOMessage() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  const textInView = useInView(textRef, { once: true, margin: "-80px" });
  const photoInView = useInView(photoRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section"
      style={{
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bg pattern */}
      <div className="islamic-pattern" style={{ position: "absolute", inset: 0, opacity: 0.35 }} />

      {/* Large bg gradient orb */}
      <div style={{
        position: "absolute",
        width: 700,
        height: 700,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(30,122,74,0.04) 0%, transparent 70%)",
        top: "-20%",
        left: "-10%",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

          {/* ── Left: Photo ── */}
          <motion.div
            ref={photoRef}
            initial={{ opacity: 0, x: -50 }}
            animate={photoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.25, 0.8, 0.25, 1] }}
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            {/* Decorative background rings */}
            <div style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: "50%",
              border: "1px solid rgba(30,122,74,0.1)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "spin-slow 40s linear infinite",
            }} />
            <div style={{
              position: "absolute",
              width: 360,
              height: 360,
              borderRadius: "50%",
              border: "1px dashed rgba(201, 168, 76, 0.2)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animation: "spin-reverse 30s linear infinite",
            }} />

            {/* Bg circle */}
            <div style={{
              position: "absolute",
              inset: -16,
              background: "var(--bg)",
              borderRadius: "50%",
              boxShadow: "var(--shadow-neu-sunken)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
            }} />

            {/* Parallax photo frame */}
            <motion.div style={{ y: photoY, position: "relative", zIndex: 2 }}>
              <div style={{
                width: 330,
                height: 410,
                borderRadius: 32,
                overflow: "hidden",
                position: "relative",
                boxShadow: "var(--shadow-neu-raised)",
                border: "5px solid var(--bg)",
              }}>
                <img
                  src="/CEO.jpeg"
                  alt="Rafeeh Asani PCH - Founder & CEO"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {/* Overlay gradient */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(6,15,9,0.35) 0%, transparent 50%)",
                }} />
              </div>
            </motion.div>

            {/* Floating mission card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={photoInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="card animate-float"
              style={{
                position: "absolute",
                bottom: 24,
                right: -16,
                padding: "16px 20px",
                maxWidth: 210,
                zIndex: 10,
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                <div style={{
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  background: "var(--bg)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  boxShadow: "var(--shadow-neu-raised-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Heart size={14} color="var(--primary)" fill="var(--primary)" />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", fontFamily: "var(--font-display)", letterSpacing: 0.4 }}>
                  Our Mission
                </span>
              </div>
              <p style={{ fontSize: 12.5, color: "var(--text-muted)", fontFamily: "var(--font-sans)", lineHeight: 1.55 }}>
                Empowering every Muslim woman with knowledge that nourishes the soul.
              </p>
            </motion.div>

            {/* Floating award badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: -20 }}
              animate={photoInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="card"
              style={{
                position: "absolute",
                top: 28,
                left: -12,
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                zIndex: 10,
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: "var(--bg)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                boxShadow: "var(--shadow-neu-raised-sm)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <Award size={16} color="var(--gold-dark)" />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text-dark)", fontFamily: "var(--font-display)", lineHeight: 1.1 }}>500+</div>
                <div style={{ fontSize: 10.5, color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>Learners Guided</div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Message ── */}
          <motion.div
            ref={textRef}
            variants={containerVariants}
            initial="hidden"
            animate={textInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.div variants={lineVariants}>
              <div className="ornament" style={{ justifyContent: "flex-start" }}>
                <span style={{ color: "var(--primary)", fontSize: 18 }}>✦</span>
              </div>
            </motion.div>

            <motion.div variants={lineVariants}>
              <div className="section-tag" style={{ marginBottom: 18 }}>
                <Heart size={13} /> Founder's Message
              </div>
            </motion.div>

            <motion.h2 variants={lineVariants} className="section-title">
              A Personal Message <span>From Our Founder</span>
            </motion.h2>

            {/* Arabic quote */}
            <motion.div
              variants={lineVariants}
              style={{
                display: "flex",
                gap: 14,
                marginBottom: 28,
                padding: "16px 20px",
                background: "var(--bg)",
                boxShadow: "var(--shadow-neu-sunken-sm)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                borderRadius: "16px",
              }}
            >
              <Quote size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2, opacity: 0.6 }} />
              <div style={{
                fontFamily: "Amiri, serif",
                fontSize: 20,
                color: "var(--primary)",
                fontStyle: "italic",
                lineHeight: 1.5,
              }}>
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </div>
            </motion.div>

            <motion.p
              variants={lineVariants}
              style={{ fontSize: 16.5, color: "var(--text-mid)", lineHeight: 1.9, marginBottom: 36, fontFamily: "var(--font-sans)" }}
            >
              Our mission at Madeeha Women&apos;s Virtual Academy is to enlighten hearts and minds through sacred knowledge. With the grace of the Almighty, we have successfully guided over 500 learners in their spiritual journey through our free Madeeha Course. We remain committed to empowering women globally by making quality Islamic learning accessible to everyone, completely free of cost.
            </motion.p>

            <motion.div variants={lineVariants} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <motion.a
                href="#courses"
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Learning Today
              </motion.a>

            </motion.div>

            {/* Signature */}
            <motion.div
              variants={lineVariants}
              style={{
                marginTop: 36,
                paddingTop: 28,
                borderTop: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div>
                <div style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 24,
                  color: "var(--primary)",
                  letterSpacing: 0.3,
                }}>
                  Rafeeh Asani PCH
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-sans)", marginTop: 2 }}>
                  Founder & CEO, Madeeha Academy
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Coordinators Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            marginTop: 80,
            paddingTop: 48,
            borderTop: "1px solid rgba(30, 122, 74, 0.1)",
          }}
        >
          <div className="ornament" style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
            <span style={{ color: "var(--primary)", fontSize: 18 }}>✦</span>
          </div>
          <div className="section-tag" style={{ margin: "0 auto 16px", display: "flex", justifyContent: "center", width: "max-content", gap: 6 }}>
            <Award size={13} /> Our Team
          </div>
          <h3 className="section-title" style={{ textAlign: "center", fontSize: 32, marginBottom: 40 }}>
            Our Beloved <span>Coordinators</span>
          </h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 28,
            maxWidth: 1000,
            margin: "0 auto",
            padding: "10px 0"
          }}>
            {[
              { name: "Sheeba Muhammad Misriyya Mueena", role: "Coordinator" },
              { name: "Mubashira Falila Misriyya", role: "Coordinator" },
              { name: "Ummu Habeeba Falila Misriyya", role: "Coordinator" }
            ].map((coordinator, idx) => (
              <motion.div
                key={coordinator.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="card"
                style={{
                  padding: "32px 24px",
                  borderRadius: 24,
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  background: "var(--bg)",
                  boxShadow: "var(--shadow-neu-raised)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden"
                }}
                whileHover={{ y: -6, boxShadow: "6px 6px 16px #cbd5cf, -6px -6px 16px #ffffff" }}
              >
                {/* Decorative background shape */}
                <div style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(30,122,74,0.04) 0%, transparent 70%)",
                  zIndex: 0
                }} />

                {/* Elegant initials/profile circle */}
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "var(--bg)",
                  border: "1px solid rgba(201, 168, 76, 0.3)",
                  boxShadow: "var(--shadow-neu-sunken-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  marginBottom: 18,
                  zIndex: 1,
                  position: "relative"
                }}>
                  <span style={{ color: "var(--primary)", fontFamily: "var(--font-serif)" }}>🧕</span>
                </div>

                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 16.5,
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  lineHeight: 1.4,
                  marginBottom: 6,
                  zIndex: 1
                }}>
                  {coordinator.name}
                </div>

                <div style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12.5,
                  color: "var(--primary)",
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  zIndex: 1
                }}>
                  {coordinator.role}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
