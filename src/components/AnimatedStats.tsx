"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Users, GraduationCap, BookOpen } from "lucide-react";

const stats = [
  { icon: Globe,          value: 8,    suffix: "+",  label: "Countries Reached", desc: "Global community" },
  { icon: Users,          value: 2000, suffix: "+",  label: "Active Students",   desc: "And growing daily" },
  { icon: GraduationCap,  value: 50,   suffix: "+",  label: "Expert Tutors",     desc: "Certified alimas" },
  { icon: BookOpen,       value: 30,   suffix: "+",  label: "Courses Available", desc: "Across all levels" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, start, index }: { stat: typeof stats[0]; start: boolean; index: number }) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value, 2000 + index * 200, start);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={start ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.8, 0.25, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        textAlign: "center",
        padding: "44px 28px",
        background: "var(--bg-dark)",
        borderRadius: 28,
        border: "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: "var(--shadow-dark-neu-raised)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "box-shadow 0.3s ease",
      }}
    >
      {/* Glow effect on top */}
      <div style={{
        position: "absolute",
        top: -60,
        left: "50%",
        transform: "translateX(-50%)",
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: index % 2 === 0
          ? "radial-gradient(circle, rgba(30,122,74,0.3) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
        filter: "blur(20px)",
        pointerEvents: "none",
      }} />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        style={{
          width: 68,
          height: 68,
          background: "var(--bg-dark)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: 22,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 24px",
          boxShadow: "var(--shadow-dark-neu-raised-sm)",
          position: "relative",
        }}
      >
        <Icon size={30} color={index % 2 === 0 ? "var(--primary-light)" : "var(--gold)"} />
      </motion.div>

      {/* Number */}
      <div
        className="stat-number stat-number-dark"
        style={{ marginBottom: 10 }}
      >
        {count.toLocaleString()}{stat.suffix}
      </div>

      {/* Label */}
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: 17,
        fontWeight: 700,
        color: "var(--text-white)",
        marginBottom: 6,
      }}>
        {stat.label}
      </div>

      {/* Desc */}
      <div style={{
        fontSize: 13,
        color: "var(--text-white-muted)",
        fontFamily: "var(--font-sans)",
      }}>
        {stat.desc}
      </div>
    </motion.div>
  );
}

export default function AnimatedStats() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      id="stats"
      style={{
        padding: "100px 0",
        background: "var(--bg-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Islamic pattern overlay */}
      <div className="islamic-pattern-gold" style={{ position: "absolute", inset: 0, opacity: 0.25 }} />

      {/* Large ambient orbs */}
      <div style={{
        position: "absolute",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(30,122,74,0.12) 0%, transparent 65%)",
        top: "-20%",
        left: "-10%",
        filter: "blur(60px)",
        animation: "glow-pulse 4s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%)",
        bottom: "-15%",
        right: "-8%",
        filter: "blur(60px)",
        animation: "glow-pulse 4s ease-in-out infinite 2s",
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
          <div className="ornament ornament-gold">
            <span style={{ color: "var(--gold)", fontSize: 18 }}>✦</span>
          </div>
          <div className="section-tag section-tag-dark">
            <Globe size={13} /> Our Impact
          </div>
          <h2 className="section-title section-title-dark">
            Trusted by Families <span>Worldwide</span>
          </h2>
          <p className="section-subtitle section-subtitle-dark" style={{ margin: "0 auto" }}>
            Our numbers speak for themselves — a thriving global community of
            learners rooted in faith and knowledge.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div
          ref={sectionRef}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} start={started} index={i} />
          ))}
        </div>

        {/* Arabic hadith quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
          style={{ textAlign: "center", marginTop: 72, padding: "36px 0" }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 16,
          }}>
            <div style={{ width: 40, height: 1, background: "linear-gradient(to right, transparent, var(--gold))" }} />
            <span style={{ color: "var(--gold)", fontSize: 16 }}>✦</span>
            <div style={{ width: 40, height: 1, background: "linear-gradient(to left, transparent, var(--gold))" }} />
          </div>
          <div style={{
            fontFamily: "Amiri, serif",
            fontSize: 26,
            color: "var(--gold-light)",
            marginBottom: 12,
            letterSpacing: 1.2,
          }}>
            طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
          </div>
          <div style={{
            fontSize: 14.5,
            color: "var(--text-white-muted)",
            fontFamily: "var(--font-sans)",
            fontStyle: "italic",
          }}>
            &ldquo;Seeking knowledge is an obligation upon every Muslim.&rdquo; — Prophet Muhammad ﷺ
          </div>
        </motion.div>
      </div>
    </section>
  );
}
