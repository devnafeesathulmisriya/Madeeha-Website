"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ScrollText, Lightbulb, HeartHandshake, Compass } from "lucide-react";

const learningTopics = [
  {
    title: "Biography of the Prophet ﷺ (Seerah)",
    description: "Study the inspiring life, struggles, and triumphs of Prophet Muhammad ﷺ to draw lessons for today.",
    icon: ScrollText,
    color: "rgba(30, 122, 74, 0.08)",
    iconBg: "var(--gradient-primary)",
  },
  {
    title: "Knowledge about the Prophet ﷺ",
    description: "Deepen your understanding of his character, miracles, and the profound impact of his message.",
    icon: Lightbulb,
    color: "rgba(201, 168, 76, 0.08)",
    iconBg: "linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 100%)",
  },
  {
    title: "Love for Prophet Muhammad ﷺ",
    description: "Cultivate a deep, spiritual connection and genuine love for the final Messenger of Allah.",
    icon: HeartHandshake,
    color: "rgba(30, 122, 74, 0.08)",
    iconBg: "var(--gradient-primary)",
  },
  {
    title: "Following the Prophet ﷺ in Daily Life",
    description: "Learn to implement his Sunnah in your everyday routines, manners, and interactions.",
    icon: Compass,
    color: "rgba(201, 168, 76, 0.08)",
    iconBg: "linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 100%)",
  },
];

function LearnCard({ topic, index }: { topic: typeof learningTopics[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = topic.icon;
  const isGold = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.8, 0.25, 1] }}
      className="card"
      style={{
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(145deg, #ffffff 0%, ${topic.color} 100%)`,
        cursor: "default",
      }}
    >
      {/* Decorative large bg icon */}
      <div style={{ position: "absolute", top: -10, right: -10, opacity: 0.04, color: isGold ? "var(--gold)" : "var(--primary)" }}>
        <Icon size={130} />
      </div>

      {/* Bottom accent bar */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 3,
        background: isGold ? "var(--gradient-gold)" : "var(--gradient-primary)",
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
      }} className="card-accent-bar" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{
          width: 60,
          height: 60,
          borderRadius: "18px",
          background: topic.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isGold ? "0 8px 24px var(--gold-glow)" : "0 8px 24px var(--primary-glow)",
          flexShrink: 0,
        }}
      >
        <Icon size={26} color="white" />
      </motion.div>

      {/* Text */}
      <div>
        <h3 style={{
          fontSize: 20,
          fontWeight: 700,
          fontFamily: "var(--font-display)",
          color: "var(--text-dark)",
          marginBottom: 10,
          lineHeight: 1.3,
        }}>
          {topic.title}
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: 15.5, lineHeight: 1.7, fontFamily: "var(--font-sans)" }}>
          {topic.description}
        </p>
      </div>

      {/* Hover reveal: read more hint */}
      <style>{`
        .learn-card-wrap:hover .card-accent-bar { transform: scaleX(1) !important; }
      `}</style>
    </motion.div>
  );
}

export default function WhatYouWillLearn() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      className="section"
      id="what-you-will-learn"
      style={{ background: "var(--green-50)", position: "relative", overflow: "hidden" }}
    >
      {/* Background orb */}
      <div style={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(30,122,74,0.05) 0%, transparent 70%)",
        top: "-10%",
        right: "-10%",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>

        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div className="ornament">
            <span style={{ color: "var(--primary)", fontSize: 18 }}>✦</span>
          </div>
          <div className="section-tag">
            <BookOpen size={13} /> Curriculum Highlights
          </div>
          <h2 className="section-title">
            What You Will <span>Learn</span> From Us
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A comprehensive curriculum designed to nurture both your academic goals and spiritual growth.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 32 }}>
          {learningTopics.map((topic, index) => (
            <div key={topic.title} className="learn-card-wrap" style={{ position: "relative" }}>
              <LearnCard topic={topic} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
