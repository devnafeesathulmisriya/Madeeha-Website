"use client";
import Image from "next/image";
import { BookOpen, FileText, Video, TrendingUp, Smartphone, User, Search, Star, Clock, Home, Calendar, Plus, MessageSquare } from "lucide-react";

const featuresLeft = [
  {
    title: "Easy Course Access",
    desc: "Access all your courses, materials, and assignments effortlessly with our user-friendly interface.",
    icon: BookOpen,
  },
  {
    title: "Weekly Tests",
    desc: "Assess your knowledge and track your progress with our regular weekly quizzes and assignments.",
    icon: FileText,
  },
];

const featuresRight = [
  {
    title: "Live Interactive Classes",
    desc: "Join real-time sessions directly from your phone and engage with your teachers and peers.",
    icon: Video,
  },
  {
    title: "Progress Tracking",
    desc: "Monitor your academic and spiritual growth through insightful charts and quick assessments.",
    icon: TrendingUp,
  },
];

export default function AppShowcase() {
  return (
    <section id="app-showcase" className="section" style={{ background: "var(--bg-subtle)", overflow: "hidden" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="ornament">
            <span style={{ color: "var(--primary)", fontSize: 18 }}>✦</span>
          </div>
          <div className="section-tag">
            <Smartphone size={14} /> Mobile App
          </div>
          <h2 className="section-title">
            Learn Anywhere, <span>Anytime</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Experience the sweetness of Iman on the go with our dedicated mobile application.
          </p>
        </div>

        <div className="app-showcase-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 40, alignItems: "center" }}>
          {/* Left Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 60, textAlign: "right" }} className="app-features-col">
            {featuresLeft.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="app-feature-item left">
                  <div className="feature-icon-wrapper" style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
                    <div style={{ background: "var(--green-50)", color: "var(--primary)", width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--text-dark)", marginBottom: 8, lineHeight: 1.3 }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)" }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center Phone Mockup */}
          <div style={{ position: "relative", width: 300, height: 600, margin: "0 auto" }}>
            <div style={{ width: "100%", height: "100%", background: "white", borderRadius: 40, border: "12px solid #111", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", overflow: "hidden", position: "relative" }}>
               {/* Phone Notch */}
               <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 120, height: 25, background: "#111", borderBottomLeftRadius: 16, borderBottomRightRadius: 16, zIndex: 10 }}></div>
               
               {/* Phone Content (screenshot) */}
               <div style={{ height: "100%", width: "100%", position: "relative" }}>
                 <Image src="/Ui.jpg" alt="Madeeha App Screenshot" fill style={{ objectFit: "cover" }} />
               </div>
            </div>
          </div>

          {/* Right Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: 60, textAlign: "left" }} className="app-features-col">
            {featuresRight.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="app-feature-item right">
                  <div className="feature-icon-wrapper" style={{ display: "flex", justifyContent: "flex-start", marginBottom: 16 }}>
                    <div style={{ background: "var(--green-50)", color: "var(--primary)", width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--text-dark)", marginBottom: 8, lineHeight: 1.3 }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.7, fontFamily: "var(--font-sans)" }}>
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 992px) {
          .app-showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .app-features-col {
            text-align: center !important;
            gap: 40px !important;
          }
          .feature-icon-wrapper {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
