"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Play, BookOpen, Star, Users, ArrowDown } from "lucide-react";

// Word-by-word animation helper
function AnimatedHeadline({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.25em" }}>
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.08,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// Floating badge
function FloatingBadge({
  icon: Icon,
  label,
  value,
  style,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: delay ?? 0.8, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="animate-float-slow card"
      style={{
        position: "absolute",
        padding: "12px 18px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        minWidth: 160,
        ...style,
      }}
    >
      <div style={{
        width: 38,
        height: 38,
        borderRadius: 12,
        background: "var(--bg)",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: "var(--shadow-neu-raised-sm)",
      }}>
        <Icon size={18} color="var(--primary)" />
      </div>
      <div>
        <div style={{ fontSize: 18, fontWeight: 800, color: "var(--text-dark)", fontFamily: "var(--font-display)", lineHeight: 1.1 }}>
          {value}
        </div>
        <div style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--font-sans)", letterSpacing: 0.4 }}>
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 600], [0, -120]);
  const textY = useTransform(scrollY, [0, 400], [0, 60]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        position: "relative",
        minHeight: "calc(100dvh - 74px)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--bg)",
        paddingBottom: 60,
        paddingTop: 20,
      }}
    >
      {/* ── Parallax Orbs ── */}
      <motion.div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", y: orbY }}>
        {/* Large green orb */}
        <motion.div
          animate={{
            x: mousePos.x * 25,
            y: mousePos.y * 20,
          }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30, 122, 74, 0.09) 0%, transparent 65%)",
            top: "-15%",
            right: "-10%",
            filter: "blur(2px)",
          }}
        />
        {/* Medium gold orb */}
        <motion.div
          animate={{
            x: mousePos.x * -18,
            y: mousePos.y * -14,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 20 }}
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201, 168, 76, 0.07) 0%, transparent 65%)",
            bottom: "-5%",
            left: "-8%",
            filter: "blur(2px)",
          }}
        />
        {/* Small accent orb */}
        <motion.div
          animate={{
            x: mousePos.x * 35,
            y: mousePos.y * 30,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30, 122, 74, 0.06) 0%, transparent 65%)",
            top: "40%",
            left: "40%",
            filter: "blur(2px)",
          }}
        />
      </motion.div>

      {/* Diagonal lines pattern */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0, opacity: 0.4 }}>
        <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none" style={{ position: "absolute", top: 0, left: 0 }}>
          {[-200, -100, 0, 100, 200, 300, 400].map((offset, i) => (
            <line
              key={i}
              x1="-200"
              y1={offset + 400}
              x2="1640"
              y2={offset - 400}
              stroke={i % 2 === 0 ? "var(--green-200)" : "rgba(201,168,76,0.2)"}
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      {/* Islamic pattern overlay */}
      <div className="islamic-pattern" style={{ position: "absolute", inset: 0, opacity: 0.25, zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

          {/* ── Right Column: Text ── */}
          <motion.div className="hero-text-content" style={{ y: textY }}>

            {/* Arabic bismillah badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "9px 24px",
                background: "linear-gradient(135deg, rgba(30,122,74,0.08) 0%, rgba(30,122,74,0.04) 100%)",
                border: "1px solid rgba(30,122,74,0.18)",
                borderRadius: "50px",
                color: "var(--primary-dark)",
                fontSize: 14,
                fontFamily: "Amiri, serif",
                marginBottom: 32,
                letterSpacing: 1.2,
                boxShadow: "0 4px 16px rgba(30,122,74,0.06)",
              }}
            >
              <Sparkles size={14} style={{ color: "var(--primary)" }} />
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(44px, 5.5vw, 74px)",
                fontWeight: 800,
                color: "var(--text-dark)",
                lineHeight: 1.08,
                marginBottom: 28,
                letterSpacing: "-1px",
              }}
            >
              <AnimatedHeadline text="Now let's praise" delay={0.3} />
              {" "}
              <span style={{ color: "var(--primary)", display: "inline-block", overflow: "hidden" }}>
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
                  style={{ display: "inline-block" }}
                >
                  مُحَمَّدٌﷺ
                </motion.span>
              </span>
              {" "}
              <AnimatedHeadline text="with heart" delay={0.85} />
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              style={{
                fontSize: "18px",
                color: "var(--text-muted)",
                marginBottom: 44,
                lineHeight: 1.75,
                maxWidth: 500,
                fontFamily: "var(--font-sans)",
              }}
            >
              Discover the beauty of the life and teachings of Prophet Muhammad ﷺ through structured learning, inspiring lessons, and interactive sessions designed to strengthen faith and practice.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="hero-buttons-desktop"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}
            >
              <motion.a
                href="#courses"
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{ fontSize: 16, padding: "16px 40px" }}
              >
                Get Started
              </motion.a>

              <motion.a
                href="#demo"
                whileHover={{ gap: 18 }}
                style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 16, fontWeight: 600, color: "var(--text-dark)", textDecoration: "none", transition: "color 0.25s, gap 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dark)")}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "var(--bg)",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    boxShadow: "var(--shadow-neu-raised-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                    flexShrink: 0,
                    transition: "all 0.3s",
                  }}
                >
                  <Play size={18} fill="currentColor" style={{ marginLeft: 3 }} />
                </motion.div>
                Learn how it works
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}
            >

            </motion.div>
          </motion.div>

          {/* ── Left Column: Image & Floating Badges ── */}
          <div className="hero-image-content" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", alignSelf: "end" }}>

            {/* Glow behind image */}
            <div style={{
              position: "absolute",
              width: "70%",
              height: "70%",
              background: "radial-gradient(ellipse, rgba(30,122,74,0.12) 0%, transparent 70%)",
              borderRadius: "50%",
              bottom: 0,
              left: "15%",
              filter: "blur(30px)",
            }} />

            {/* Decorative Circle Shape behind image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              style={{
                position: "absolute",
                width: "85%",
                aspectRatio: "1/1",
                background: "var(--bg)",
                borderRadius: "50%",
                bottom: "5%",
                zIndex: 1,
                boxShadow: "var(--shadow-neu-sunken)",
                border: "4px solid rgba(255, 255, 255, 0.4)",
              }}
            />

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
              style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 620, aspectRatio: "4/5" }}
            >
              <Image
                src="/hero2.png"
                alt="Muslim student learning"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "contain", objectPosition: "bottom", filter: "drop-shadow(0 24px 50px rgba(0,0,0,0.12))" }}
                priority
              />
            </motion.div>

            {/* Floating badge: Students */}


            {/* Floating badge: Courses */}

            {/* Mobile buttons */}
            <motion.div
              className="hero-buttons-mobile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ display: "none", gap: 16, alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginTop: 24, marginBottom: 20, position: "relative", zIndex: 3 }}
            >
              <a href="#courses" className="btn-primary" style={{ fontSize: 15, padding: "14px 32px" }}>
                Get Started
              </a>
              <a href="#demo" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 600, color: "var(--text-dark)", textDecoration: "none" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "white", border: "1px solid var(--border)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)" }}>
                  <Play size={17} fill="currentColor" style={{ marginLeft: 3 }} />
                </div>
                Learn how
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          zIndex: 3,
        }}
      >
        <span style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: 2, textTransform: "uppercase", fontFamily: "var(--font-display)", fontWeight: 600 }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} color="var(--primary)" />
        </motion.div>
      </motion.div>

      {/* Wavy divider */}
      <div style={{ position: "absolute", bottom: -1, left: 0, width: "100%", overflow: "hidden", lineHeight: 0, zIndex: 1 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
          <path fill="var(--green-50)" d="M0,40L80,45C160,50,320,60,480,56C640,52,800,36,960,32C1120,28,1280,36,1360,40L1440,44L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
        </svg>
      </div>

      {/* Responsive styles */}
      <style>{`
        .hero-text-content { order: 2; }
        .hero-image-content { order: 1; }

        @media (max-width: 992px) {
          #home .container > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-text-content { order: 1; }
          .hero-image-content { order: 2; }
          #home p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-buttons-desktop {
            display: none !important;
          }
          .hero-buttons-mobile {
            display: flex !important;
          }
          #home .container > div > div:last-child {
            margin-top: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
