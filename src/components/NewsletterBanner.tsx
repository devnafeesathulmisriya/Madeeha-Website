"use client";
import { useState } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

export default function NewsletterBanner() {
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile) {
      setSubmitted(true);
    }
  };

  return (
    <section className="newsletter-section" style={{ padding: "80px 0", background: "var(--bg-dark)" }}>
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.02)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: "5%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.02)",
        }}
      />

      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        {/* Icon */}
        <div
          style={{
            width: 72,
            height: 72,
            background: "var(--bg-dark)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            border: "1px solid rgba(255,255,255,0.05)",
            boxShadow: "var(--shadow-dark-neu-raised)",
          }}
        >
          <Mail size={32} color="var(--gold-light)" />
        </div>

        {/* Heading */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 18px",
            background: "var(--bg-dark)",
            borderRadius: "50px",
            border: "1px solid rgba(255,255,255,0.05)",
            boxShadow: "var(--shadow-dark-neu-sunken-sm)",
            color: "rgba(255,255,255,0.9)",
            fontSize: 12,
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          <Sparkles size={13} /> Course Information
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "white",
            marginBottom: 16,
            lineHeight: 1.2,
          }}
        >
          Get Our Course Details
        </h2>
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.8)",
            maxWidth: 540,
            margin: "0 auto 40px",
            lineHeight: 1.7,
            fontFamily: "var(--font-sans)",
          }}
        >
          Enter your mobile number for getting our course details.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              maxWidth: 500,
              margin: "0 auto",
              gap: 16,
              alignItems: "center",
            }}
          >
            <input
              id="newsletter-mobile"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number..."
              required
              className="input-dark-neu"
              style={{
                flex: 1,
                padding: "16px 24px",
                height: 54,
                borderRadius: "50px",
                fontSize: 15,
                minWidth: 0,
              }}
            />
            <button
              type="submit"
              id="newsletter-submit"
              className="btn-ghost"
              style={{
                padding: "0 32px",
                height: 54,
                borderRadius: "50px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                whiteSpace: "nowrap",
                flexShrink: 0,
                border: "1px solid rgba(255, 255, 255, 0.05)",
                color: "var(--gold-light)",
                boxShadow: "var(--shadow-dark-neu-raised-sm)",
              }}
            >
              Submit <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "20px 36px",
              background: "rgba(255,255,255,0.15)",
              borderRadius: "50px",
              color: "white",
              fontSize: 16,
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              border: "1px solid rgba(255,255,255,0.3)",
              animation: "scale-in 0.4s ease-out",
            }}
          >
            <span style={{ fontSize: 24 }}>✅</span>
            JazakAllah Khair! We will send you the details shortly.
          </div>
        )}
      </div>
    </section>
  );
}
