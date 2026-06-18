"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  Menu,
  X,
  BookOpen,
  GraduationCap,
} from "lucide-react";

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [scrolled, setScrolled]   = useState(false);
  const [hidden, setHidden]       = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      // Hide on scroll down, reveal on scroll up
      if (currentY > lastY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          background: scrolled
            ? "rgba(255, 255, 255, 0.82)"
            : "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
          borderBottom: scrolled
            ? "1px solid rgba(30, 122, 74, 0.12)"
            : "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(30, 122, 74, 0.08), 0 1px 0 rgba(255,255,255,0.8)"
            : "none",
          transition: "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        <div className="container">
          <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 74, gap: 24 }}>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <Link href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
                <Image
                  src="/logo-Photoroom.png"
                  alt="Madeeha Academy"
                  width={130}
                  height={52}
                  style={{ objectFit: "contain", mixBlendMode: "multiply" }}
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Nav Links */}
            <motion.div
              className="desktop-only"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ display: "flex", alignItems: "center", gap: 32 }}
            >
              {["Home", "About Us", "Courses", "Blog", "Contact Us"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`}
                    className="nav-link"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              {/* Search */}
              <div style={{ position: "relative" }}>
                <motion.button
                  id="search-btn"
                  onClick={() => setSearchOpen(!searchOpen)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-muted)",
                    padding: 9,
                    borderRadius: 10,
                    display: "flex",
                    transition: "color 0.2s",
                  }}
                  aria-label="Search"
                >
                  <Search size={20} />
                </motion.button>

                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -8 }}
                      transition={{ duration: 0.22 }}
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "calc(100% + 10px)",
                        background: "white",
                        borderRadius: 16,
                        boxShadow: "0 20px 60px rgba(0,0,0,0.14)",
                        border: "1px solid var(--border)",
                        padding: 14,
                        width: 280,
                        zIndex: 300,
                      }}
                    >
                      <input
                        className="input-field"
                        placeholder="Search courses..."
                        style={{ fontSize: 14 }}
                        autoFocus
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Portal Login CTA */}
              <motion.a
                id="student-login-btn"
                href="https://madeeha-thesweetnessofiman.web.app/"
                className="desktop-only btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{ padding: "10px 24px", fontSize: 14, gap: 7, textDecoration: "none" }}
              >
                <User size={15} /> Portal Login
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                className="mobile-only"
                onClick={() => setMobileOpen(!mobileOpen)}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 7,
                  borderRadius: 10,
                  color: "var(--text-dark)",
                }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mobile-only"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
              style={{
                background: "rgba(255,255,255,0.96)",
                backdropFilter: "blur(24px)",
                borderTop: "1px solid var(--border)",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "20px 24px 28px" }}>
                {["Home", "About Us", "Courses", "Blog", "Contact Us"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`}
                      className="nav-link"
                      style={{ display: "block", padding: "13px 0", borderBottom: "1px solid rgba(0,0,0,0.04)", fontSize: 16 }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  style={{ marginTop: 20, display: "flex", gap: 12 }}
                >
                  <Link href="#register-student" className="btn-outline" style={{ flex: 1, justifyContent: "center", padding: "11px 16px", fontSize: 14 }}>
                    Register Now
                  </Link>
                  <a href="https://madeeha-thesweetnessofiman.web.app/" className="btn-primary" style={{ flex: 1, justifyContent: "center", fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                    <User size={15} /> Login
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer for fixed navbar */}
      <div style={{ height: 74 }} />
    </>
  );
}
