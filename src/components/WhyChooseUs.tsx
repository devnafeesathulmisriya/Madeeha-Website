"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Star,
  BookOpen,
  Award,
  Video,
  ClipboardCheck,
  Compass,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
    icon: BookOpen,
    title: "Structured Curriculum",
    desc: "Clear learning path from foundation to advanced levels with expert guidance.",
    color: "var(--gradient-primary)",
    glow: "var(--primary-glow)",
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    icon: Award,
    title: "Certificates & Graduation",
    desc: "Recognized completion certificates and graduation ceremonies.",
    color: "var(--gradient-gold)",
    glow: "var(--gold-glow)",
  },
  {
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    icon: Video,
    title: "Recorded Session Access",
    desc: "Missed a class? Watch recordings later at your own pace.",
    color: "var(--gradient-primary)",
    glow: "var(--primary-glow)",
  },
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    icon: ClipboardCheck,
    title: "Assessments & Exams",
    desc: "Regular quizzes and evaluations to track your progress.",
    color: "var(--gradient-gold)",
    glow: "var(--gold-glow)",
  },
  {
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=800&auto=format&fit=crop",
    icon: Compass,
    title: "Character & Tarbiyah Focus",
    desc: "Building Islamic manners, values, and daily practices.",
    color: "var(--gradient-primary)",
    glow: "var(--primary-glow)",
  },
];

// Spinning star SVG background
const IslamicStarBackground = () => (
  <svg
    viewBox="0 0 200 200"
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "120%",
      height: "120%",
      zIndex: 0,
      opacity: 0.75,
      pointerEvents: "none",
      animation: "spin-slow 40s linear infinite",
    }}
  >
    <path d="M100 10 L125 55 L175 45 L150 90 L190 120 L140 130 L150 180 L100 155 L50 180 L60 130 L10 120 L50 90 L25 45 L75 55 Z"
      fill="none" stroke="rgba(30, 122, 74, 0.05)" strokeWidth="1.5" />
    <path d="M100 25 L118 64 L160 55 L138 92 L172 118 L128 125 L138 168 L100 148 L62 168 L72 125 L28 118 L62 92 L40 55 L82 64 Z"
      fill="none" stroke="rgba(201, 168, 76, 0.1)" strokeWidth="1" />
    <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(30, 122, 74, 0.03)" strokeWidth="1" />
    <circle cx="100" cy="100" r="25" fill="none" stroke="rgba(201, 168, 76, 0.05)" strokeWidth="1" />
  </svg>
);

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef  = useRef<HTMLElement>(null);
  const headerRef   = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const cardsRef    = useRef<HTMLDivElement>(null);
  const cardsInView = useInView(cardsRef,  { once: true, margin: "-80px" });

  const active = features[activeIndex];

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="section"
      style={{ background: "white", paddingTop: 60, paddingBottom: 80, overflow: "hidden", position: "relative" }}
    >
      {/* Ambient background */}
      <div style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(30,122,74,0.04) 0%, transparent 70%)",
        top: "10%",
        right: "-5%",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>

        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div className="ornament">
            <span style={{ color: "var(--primary)", fontSize: 18 }}>✦</span>
          </div>
          <div className="section-tag">
            <Star size={13} /> Why Choose Us
          </div>
          <h2 className="section-title">
            The <span>Madeeha</span> Difference
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We are not just an online school — we are a community built on
            faith, trust, and academic excellence for Muslim women worldwide.
          </p>
        </motion.div>

        {/* Premium Interactive Showcase Grid */}
        <div className="why-us-premium-container">

          {/* Left Column: Visual Portal (Sticky) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={cardsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="why-us-visual-column"
          >
            <div className="why-us-visual-sticky-wrapper">
              <div className="ambient-glow-1" />
              <div className="ambient-glow-2" />
              <IslamicStarBackground />

              <div className="mihrab-archway">
                <div className="islamic-pattern-overlay" />

                {/* Crossfading images with Framer Motion */}
                <div className="mihrab-image-container">
                  <AnimatePresence>
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.75, ease: [0.25, 0.8, 0.25, 1] }}
                      style={{ position: "absolute", inset: 0 }}
                    >
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        sizes="(max-width: 1024px) 290px, 320px"
                        style={{ objectFit: "cover" }}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mihrab-gradient-overlay" />

                {/* Active feature label at bottom */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    className="mihrab-badge-card"
                  >
                    <span className="badge-arabic">✦</span>
                    <div className="badge-line" />
                    <span className="badge-eng">{active.title}</span>
                    <span className="badge-sub">Madeeha Academy</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <div ref={cardsRef} className="why-us-cards-column">
            {features.map((f, idx) => {
              const IconComponent = f.icon;
              const isActive = activeIndex === idx;

              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={cardsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`feature-premium-card ${isActive ? "active" : ""}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActiveIndex(idx);
                  }}
                  aria-pressed={isActive}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {/* Icon Box */}
                  <motion.div
                    className="feature-premium-icon-box"
                    animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    <IconComponent size={22} />
                  </motion.div>

                  {/* Content */}
                  <div className="feature-premium-content">
                    <h3 className="feature-premium-title">{f.title}</h3>
                    <p className="feature-premium-desc">{f.desc}</p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="feature-premium-arrow"
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight size={18} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Embedded CSS */}
        <style>{`
          .why-us-premium-container {
            display: grid;
            grid-template-columns: 40% 60%;
            gap: 64px;
            align-items: start;
            margin-top: 40px;
          }

          .why-us-visual-column {
            position: relative;
            width: 100%;
          }

          .why-us-visual-sticky-wrapper {
            position: sticky;
            top: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 30px 0;
          }

          .ambient-glow-1 {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(30, 122, 74, 0.1) 0%, transparent 70%);
            top: 5%; left: 5%;
            filter: blur(28px);
            z-index: 0;
            pointer-events: none;
            animation: glow-pulse 4s ease-in-out infinite;
          }

          .ambient-glow-2 {
            position: absolute;
            width: 240px;
            height: 240px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(201, 168, 76, 0.08) 0%, transparent 70%);
            bottom: 10%; right: 10%;
            filter: blur(28px);
            z-index: 0;
            pointer-events: none;
            animation: glow-pulse 4s ease-in-out infinite 2s;
          }

          .mihrab-archway {
            position: relative;
            width: 320px;
            height: 480px;
            border-radius: 32px;
            overflow: hidden;
            box-shadow: 0 32px 80px -15px rgba(6, 15, 9, 0.28),
                        0 0 50px rgba(30, 122, 74, 0.06),
                        inset 0 1px 0 rgba(255,255,255,0.1);
            border: 1px solid var(--border-gold);
            background: var(--bg-dark);
            z-index: 10;
          }

          .mihrab-archway::after {
            content: '';
            position: absolute;
            inset: 6px;
            border-radius: 26px;
            border: 1px dashed rgba(201, 168, 76, 0.25);
            pointer-events: none;
            z-index: 25;
          }

          .islamic-pattern-overlay {
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='none' stroke='rgba(201,168,76,0.05)' stroke-width='0.75'/%3E%3Ccircle cx='20' cy='20' r='10' fill='none' stroke='rgba(201,168,76,0.04)' stroke-width='0.5'/%3E%3C/svg%3E");
            background-size: 40px 40px;
            opacity: 0.8;
            z-index: 20;
            pointer-events: none;
          }

          .mihrab-image-container {
            position: relative;
            width: 100%;
            height: 100%;
            z-index: 15;
          }

          .mihrab-gradient-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom,
              rgba(6, 15, 9, 0.04) 0%,
              rgba(6, 15, 9, 0.3) 55%,
              rgba(6, 15, 9, 0.85) 100%);
            z-index: 18;
            pointer-events: none;
          }

          .mihrab-badge-card {
            position: absolute;
            bottom: 24px;
            left: 20px;
            right: 20px;
            background: rgba(6, 15, 9, 0.82);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--border-gold);
            border-radius: 18px;
            padding: 16px 12px;
            text-align: center;
            z-index: 22;
            box-shadow: 0 12px 36px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 4px;
          }

          .badge-arabic {
            font-family: 'Amiri', serif;
            font-size: 18px;
            color: var(--gold-light);
            display: block;
            line-height: 1;
          }

          .badge-line {
            width: 50px;
            height: 1px;
            background: linear-gradient(to right, transparent, var(--gold), transparent);
            margin: 4px auto;
          }

          .badge-eng {
            font-family: var(--font-display);
            font-size: 13px;
            color: #ffffff;
            font-weight: 600;
            display: block;
            line-height: 1.2;
            letter-spacing: 0.3px;
          }

          .badge-sub {
            font-family: var(--font-sans);
            font-size: 9px;
            color: rgba(255, 255, 255, 0.4);
            text-transform: uppercase;
            letter-spacing: 1.5px;
            display: block;
          }

          .why-us-cards-column {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .feature-premium-card {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 20px 26px;
            background: #ffffff;
            border: 1px solid rgba(30, 122, 74, 0.06);
            border-radius: 22px;
            cursor: pointer;
            transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
            position: relative;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
            text-align: left;
            outline: none;
          }

          .feature-premium-card:hover {
            box-shadow: 0 12px 32px rgba(30, 122, 74, 0.08);
            border-color: rgba(30, 122, 74, 0.14);
            background: linear-gradient(135deg, rgba(30,122,74,0.01) 0%, #ffffff 100%);
          }

          .feature-premium-card.active {
            background: linear-gradient(100deg, rgba(30, 122, 74, 0.03) 0%, #ffffff 100%);
            border-color: var(--primary);
            box-shadow: 0 12px 32px rgba(30, 122, 74, 0.1), 0 0 0 1px rgba(30,122,74,0.08);
          }

          .feature-premium-card:focus-visible {
            outline: 2px solid var(--primary);
            outline-offset: 2px;
          }

          .feature-premium-card::before {
            content: '';
            position: absolute;
            left: 0; top: 0; bottom: 0;
            width: 4px;
            background: var(--gradient-primary);
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .feature-premium-card.active::before {
            opacity: 1;
          }

          .feature-premium-icon-box {
            flex-shrink: 0;
            width: 52px;
            height: 52px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(30, 122, 74, 0.06) 0%, rgba(30, 122, 74, 0.02) 100%);
            border: 1px solid rgba(30, 122, 74, 0.1);
            color: var(--primary);
            transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          .feature-premium-card.active .feature-premium-icon-box {
            background: var(--gradient-primary);
            border-color: var(--primary);
            color: #ffffff;
            box-shadow: 0 8px 20px var(--primary-glow);
          }

          .feature-premium-card:hover:not(.active) .feature-premium-icon-box {
            background: linear-gradient(135deg, rgba(30, 122, 74, 0.1) 0%, rgba(30, 122, 74, 0.04) 100%);
            border-color: rgba(30, 122, 74, 0.15);
          }

          .feature-premium-content { flex-grow: 1; }

          .feature-premium-title {
            font-family: var(--font-display);
            font-size: 17px;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 4px;
            transition: color 0.3s ease;
            letter-spacing: -0.1px;
          }

          .feature-premium-card.active .feature-premium-title {
            color: var(--primary-dark);
          }

          .feature-premium-desc {
            font-family: var(--font-sans);
            font-size: 13.5px;
            color: var(--text-muted);
            line-height: 1.55;
          }

          .feature-premium-arrow {
            color: var(--primary);
            flex-shrink: 0;
            transition: all 0.3s ease;
          }

          @media (max-width: 1024px) {
            .why-us-premium-container {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            .why-us-visual-sticky-wrapper {
              position: relative;
              top: 0;
              padding: 10px 0;
            }
            .mihrab-archway {
              width: 290px;
              height: 435px;
              border-radius: 24px;
            }
            .mihrab-archway::after {
              border-radius: 18px;
            }
          }

          @media (max-width: 640px) {
            .feature-premium-card { padding: 16px; gap: 14px; }
            .feature-premium-icon-box { width: 44px; height: 44px; border-radius: 12px; }
            .feature-premium-title { font-size: 15.5px; }
            .feature-premium-desc { font-size: 13px; }
          }
        `}</style>
      </div>
    </section>
  );
}
