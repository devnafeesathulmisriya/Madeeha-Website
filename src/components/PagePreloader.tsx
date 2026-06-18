"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PagePreloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only show once per session
    const seen = sessionStorage.getItem("madeeha_loaded");
    if (seen) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("madeeha_loaded", "1");
    }, 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--bg-dark)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          {/* Background glow orbs */}
          <div style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(30,122,74,0.15) 0%, transparent 70%)",
            top: "20%",
            left: "30%",
            filter: "blur(40px)",
            animation: "glow-pulse 3s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
            bottom: "20%",
            right: "25%",
            filter: "blur(40px)",
            animation: "glow-pulse 3s ease-in-out infinite 1.5s",
          }} />

          {/* Islamic pattern background */}
          <div className="islamic-pattern-gold" style={{
            position: "absolute",
            inset: 0,
            opacity: 0.3,
          }} />

          {/* Central content */}
          <div style={{ position: "relative", textAlign: "center", zIndex: 2 }}>
            {/* Spinning ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: "1px solid rgba(201, 168, 76, 0.25)",
                margin: "0 auto 8px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Outer spinning ring */}
              <div style={{
                position: "absolute",
                inset: -6,
                borderRadius: "50%",
                border: "2px solid transparent",
                borderTopColor: "var(--primary)",
                borderRightColor: "rgba(30,122,74,0.3)",
                animation: "spin-slow 2s linear infinite",
              }} />
              {/* Inner spinning ring */}
              <div style={{
                position: "absolute",
                inset: 6,
                borderRadius: "50%",
                border: "1.5px solid transparent",
                borderBottomColor: "var(--gold)",
                borderLeftColor: "rgba(201,168,76,0.3)",
                animation: "spin-reverse 3s linear infinite",
              }} />

              {/* Arabic letter */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{
                  fontFamily: "Amiri, serif",
                  fontSize: 40,
                  color: "var(--gold-light)",
                  lineHeight: 1,
                }}
              >
                م
              </motion.span>
            </motion.div>

            {/* Academy name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                fontWeight: 700,
                color: "white",
                letterSpacing: 1,
                marginBottom: 4,
              }}>
                Madeeha Academy
              </div>
              <div style={{
                fontFamily: "Amiri, serif",
                fontSize: 16,
                color: "rgba(240, 217, 138, 0.7)",
                letterSpacing: 2,
              }}>
                حلاوة الإيمان
              </div>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ marginTop: 40, width: 160, margin: "36px auto 0" }}
            >
              <div style={{
                height: 2,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 2,
                overflow: "hidden",
              }}>
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, var(--primary), var(--gold))",
                    borderRadius: 2,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
