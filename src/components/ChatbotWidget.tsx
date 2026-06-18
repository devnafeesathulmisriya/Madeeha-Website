"use client";
import { useState } from "react";
import { MessageCircle, X, ArrowRight, ChevronRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Welcome to Madeeha! 👋",
    subtitle: "How can we help you today?",
    question: "What is your name?",
    placeholder: "Enter your name...",
    field: "name",
  },
  {
    id: 2,
    title: "Nice to meet you, {{name}}!",
    subtitle: "We're here to help",
    question: "What are you interested in?",
    options: ["Quran Classes", "Virtual Madrasa", "K12 Tuition", "Suffa Kids (Preschool)", "Islamic Dars", "Other"],
    field: "interest",
  },
  {
    id: 3,
    title: "Perfect choice! 🌟",
    subtitle: "One more thing",
    question: "Which country are you based in?",
    placeholder: "e.g. UAE, Qatar, Canada...",
    field: "country",
  },
];

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: "", interest: "", country: "" });
  const [inputValue, setInputValue] = useState("");
  const [showWA, setShowWA] = useState(false);

  const currentStep = steps[step];
  const progress = ((step + 1) / (steps.length + 1)) * 100;

  const handleNext = () => {
    if (step < steps.length - 1) {
      setData((prev) => ({ ...prev, [currentStep.field]: inputValue }));
      setInputValue("");
      setStep((s) => s + 1);
    } else {
      setData((prev) => ({ ...prev, [currentStep.field]: inputValue }));
      setShowWA(true);
    }
  };

  const handleOption = (opt: string) => {
    setData((prev) => ({ ...prev, [currentStep.field]: opt }));
    setInputValue(opt);
    setTimeout(() => {
      setStep((s) => s + 1);
      setInputValue("");
    }, 200);
  };

  const waMessage = encodeURIComponent(
    `Assalamu Alaikum! My name is ${data.name}. I'm interested in ${data.interest}. I'm based in ${data.country || inputValue}. Please guide me about enrolling at Madeeha Academy.`
  );
  const waUrl = `https://wa.me/923001234567?text=${waMessage}`;

  return (
    <div className="chatbot-widget">
      {/* Chat Panel */}
      {open && (
        <div className="chatbot-panel animate-slide-in-right">
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)",
              padding: "20px 20px 16px",
              color: "white",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#86efac", animation: "pulse-green 2s infinite" }} />
                  <span style={{ fontSize: 12, fontFamily: "Inter, sans-serif", opacity: 0.85 }}>Online now</span>
                </div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 18, fontWeight: 700 }}>
                  Madeeha Advisor
                </h3>
                <p style={{ fontSize: 12, opacity: 0.7, fontFamily: "Inter, sans-serif" }}>AI-powered admissions guide</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "white" }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Progress */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div className="progress-bar" style={{ flex: 1 }}>
                <div className="progress-fill" style={{ width: `${showWA ? 100 : progress}%` }} />
              </div>
              <span style={{ fontSize: 11, opacity: 0.7, fontFamily: "Inter, sans-serif", whiteSpace: "nowrap" }}>
                Step {showWA ? steps.length : step + 1} of {steps.length}
              </span>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: 20 }}>
            {!showWA ? (
              <>
                {/* Bot message */}
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      background: "var(--green-50)",
                      border: "1px solid var(--green-100)",
                      borderRadius: "16px 16px 16px 4px",
                      padding: "14px 16px",
                      marginBottom: 12,
                    }}
                  >
                    <p style={{ fontSize: 15, fontFamily: "Playfair Display, serif", fontWeight: 600, color: "var(--primary)", marginBottom: 4 }}>
                      {currentStep.title.replace("{{name}}", data.name || "Sister")}
                    </p>
                    <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
                      {currentStep.subtitle}
                    </p>
                  </div>
                  <div
                    style={{
                      background: "white",
                      border: "1px solid var(--green-100)",
                      borderRadius: "16px 16px 16px 4px",
                      padding: "12px 16px",
                    }}
                  >
                    <p style={{ fontSize: 14, fontFamily: "Inter, sans-serif", color: "var(--text-dark)", fontWeight: 500 }}>
                      {currentStep.question}
                    </p>
                  </div>
                </div>

                {/* Options or input */}
                {currentStep.options ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {currentStep.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOption(opt)}
                        style={{
                          padding: "10px 16px",
                          borderRadius: 10,
                          border: inputValue === opt ? "2px solid var(--primary)" : "1px solid var(--green-200)",
                          background: inputValue === opt ? "var(--green-50)" : "white",
                          color: inputValue === opt ? "var(--primary)" : "var(--text-dark)",
                          fontSize: 14,
                          fontFamily: "Inter, sans-serif",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "all 0.2s",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {opt} <ChevronRight size={14} />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: 8 }}>
                    <input
                      className="input-field"
                      placeholder={currentStep.placeholder}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && inputValue && handleNext()}
                      style={{ fontSize: 14 }}
                      autoFocus
                    />
                    <button
                      onClick={handleNext}
                      disabled={!inputValue}
                      style={{
                        padding: "13px 16px",
                        background: inputValue ? "var(--primary)" : "var(--green-100)",
                        color: inputValue ? "white" : "var(--text-muted)",
                        border: "none",
                        borderRadius: 12,
                        cursor: inputValue ? "pointer" : "not-allowed",
                        transition: "all 0.2s",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* WhatsApp handoff */
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 700, marginBottom: 8, color: "var(--text-dark)" }}>
                  You're all set, {data.name}!
                </h3>
                <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "Inter, sans-serif", lineHeight: 1.6, marginBottom: 20 }}>
                  Our admissions team is ready for you on WhatsApp. Click below to start chatting instantly.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatsapp-chat-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "14px 24px",
                    background: "#25d366",
                    color: "white",
                    borderRadius: 12,
                    textDecoration: "none",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    transition: "all 0.2s",
                    boxShadow: "0 6px 20px rgba(37, 211, 102, 0.35)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp Now
                </a>
                <button
                  onClick={() => { setStep(0); setData({ name: "", interest: "", country: "" }); setShowWA(false); }}
                  style={{ marginTop: 12, background: "none", border: "none", color: "var(--text-muted)", fontSize: 12, cursor: "pointer", fontFamily: "Inter, sans-serif" }}
                >
                  Start over
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bubble Button */}
      <button
        id="chatbot-toggle-btn"
        onClick={() => setOpen(!open)}
        className="chatbot-bubble"
        aria-label="Open admissions chat"
      >
        {open ? <X size={24} color="white" /> : <MessageCircle size={26} color="white" />}
      </button>

      {/* Tooltip */}
      {!open && (
        <div
          style={{
            position: "absolute",
            bottom: 72,
            right: 0,
            background: "white",
            borderRadius: 12,
            padding: "10px 16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            border: "1px solid var(--green-100)",
            whiteSpace: "nowrap",
            fontSize: 13,
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            color: "var(--text-dark)",
            animation: "fadeInUp 0.4s ease-out",
          }}
        >
          💬 Need help? Chat with us!
          <div style={{ position: "absolute", bottom: -6, right: 24, width: 12, height: 12, background: "white", transform: "rotate(45deg)", border: "1px solid var(--green-100)", borderTop: "none", borderLeft: "none" }} />
        </div>
      )}
    </div>
  );
}
