"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Gallery", href: "#gallery" },
    { label: "Blogs", href: "#testimonials" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Student Portal", href: "#" },
    { label: "Faculty Login", href: "#" },
    { label: "Register Now", href: "#" },
  ],
  Legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

function SocialIcon({ type }: { type: string }) {
  if (type === "facebook") return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  );
  if (type === "instagram") return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  );
  if (type === "youtube") return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
  );
  // X (formerly Twitter) — custom SVG since lucide renamed it
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#0f1f17", color: "white", position: "relative", overflow: "hidden" }}>
      {/* Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container" style={{ position: "relative" }}>
        {/* Main footer */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: 48,
            padding: "64px 0 48px",
          }}
        >
          {/* Brand column */}
          <div>
            <Image
              src="/logo-Photoroom.png"
              alt="Madeeha Academy"
              width={140}
              height={56}
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)", marginBottom: 20 }}
            />
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontFamily: "var(--font-sans)", marginBottom: 24 }}>
              Madeeha Academy — empowering Muslim women and children worldwide with authentic Islamic education in a safe, modern, and flexible online environment.
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: "facebook", href: "#", label: "Facebook" },
                { icon: "instagram", href: "#", label: "Instagram" },
                { icon: "youtube", href: "#", label: "YouTube" },
                { icon: "x", href: "#", label: "X (Twitter)" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--primary)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "white";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  <SocialIcon type={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,0.9)", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 20 }}>
                {title}
              </h4>
              <ul style={{ listStyle: "none" }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 10 }}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        fontFamily: "var(--font-sans)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#86efac")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "28px 0",
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
          }}
        >
          <a href="mailto:support@madeeha.com" style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-sans)", transition: "color 0.2s" }}>
            <Mail size={16} style={{ color: "var(--accent)" }} />
            support@madeeha.com
          </a>
          <a href="tel:+919947588621" style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-sans)", transition: "color 0.2s" }}>
            <Phone size={16} style={{ color: "var(--accent)" }} />
            +91 99475 88621
          </a>
          <a href="tel:+919072800787" style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 14, fontFamily: "var(--font-sans)", transition: "color 0.2s" }}>
            <Phone size={16} style={{ color: "var(--accent)" }} />
            +91 90728 00787
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.6)", fontSize: 14, fontFamily: "var(--font-sans)" }}>
            <MapPin size={16} style={{ color: "var(--accent)" }} />
            Online — Serving Globally
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-sans)" }}>
            © 2026 Madeeha Academy. All rights reserved. Made with ❤️ for Muslim women worldwide.
          </p>
          <div style={{ fontFamily: "Amiri, serif", color: "rgba(255,255,255,0.3)", fontSize: 16, letterSpacing: 2 }}>
            ✦ The Sweetness of Iman ✦
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-of-type {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer .container > div:first-of-type {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
