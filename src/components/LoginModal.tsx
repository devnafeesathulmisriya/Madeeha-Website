"use client";
import { useState } from "react";
import { X, Eye, EyeOff, User, Lock, AlertCircle } from "lucide-react";

interface LoginModalProps {
  onClose: () => void;
  onRegisterClick: () => void;
}

export default function LoginModal({ onClose, onRegisterClick }: LoginModalProps) {
  const [mode, setMode] = useState<"login" | "forgot">("login");
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ username: "", password: "", remember: false });
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotSent(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ background: "var(--bg)", boxShadow: "var(--shadow-neu-raised)", border: "1px solid rgba(255, 255, 255, 0.5)" }}>
        {/* Header */}
        <div
          style={{
            background: "var(--bg)",
            padding: "28px 28px 24px",
            position: "relative",
            textAlign: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
          }}
        >
          {/* Decorative */}
          <div
            style={{
              fontFamily: "Amiri, serif",
              fontSize: 16,
              color: "var(--text-muted)",
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            ✦ بِسْمِ اللَّهِ ✦
          </div>
          <div
            style={{
              width: 68,
              height: 68,
              background: "var(--bg)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
              boxShadow: "var(--shadow-neu-raised-sm)",
            }}
          >
            <User size={30} color="var(--primary)" />
          </div>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: 24,
              fontWeight: 700,
              color: "var(--text-dark)",
              marginBottom: 4,
            }}
          >
            {mode === "login" ? "Student Login" : "Reset Password"}
          </h2>
          <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
            {mode === "login" ? "Welcome back to Madeeha Academy" : "We'll send you a reset link"}
          </p>

          {/* Close */}
          <button
            id="modal-close-btn"
            onClick={onClose}
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "var(--bg)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              width: 34,
              height: 34,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-dark)",
              boxShadow: "var(--shadow-neu-raised-sm)",
              transition: "all 0.2s",
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "28px 28px 24px" }}>
          {mode === "login" ? (
            <form onSubmit={handleLogin}>
              {/* Username */}
              <div style={{ marginBottom: 16 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-dark)",
                    fontFamily: "Inter, sans-serif",
                    marginBottom: 8,
                  }}
                >
                  Username or Email
                </label>
                <div style={{ position: "relative" }}>
                  <User
                    size={16}
                    style={{
                      position: "absolute",
                      left: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--text-muted)",
                    }}
                  />
                  <input
                    id="login-username"
                    type="text"
                    className="input-field"
                    placeholder="Enter username or email"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    style={{ paddingLeft: 44 }}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div style={{ marginBottom: 16 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-dark)",
                    fontFamily: "Inter, sans-serif",
                    marginBottom: 8,
                  }}
                >
                  Password
                </label>
                <div style={{ position: "relative" }}>
                  <Lock
                    size={16}
                    style={{
                      position: "absolute",
                      left: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "var(--text-muted)",
                    }}
                  />
                  <input
                    id="login-password"
                    type={showPass ? "text" : "password"}
                    className="input-field"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    style={{ paddingLeft: 44, paddingRight: 44 }}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    style={{
                      position: "absolute",
                      right: 14,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "var(--text-muted)",
                      display: "flex",
                    }}
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 24,
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    fontFamily: "Inter, sans-serif",
                    color: "var(--text-mid)",
                    cursor: "pointer",
                  }}
                >
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={form.remember}
                    onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                    style={{ accentColor: "var(--primary)", width: 16, height: 16 }}
                  />
                  Keep me signed in
                </label>
                <button
                  type="button"
                  onClick={() => setMode("forgot")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--primary)",
                    fontSize: 13,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit */}
              <button id="login-submit-btn" type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "14px" }}>
                Sign In to Student Portal
              </button>

              {/* Register link */}
              <p
                style={{
                  textAlign: "center",
                  marginTop: 20,
                  fontSize: 13,
                  color: "var(--text-muted)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                New to Madeeha?{" "}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onRegisterClick();
                  }}
                  style={{ background: "none", border: "none", color: "var(--primary)", fontWeight: 600, textDecoration: "none", cursor: "pointer", padding: 0, fontFamily: "Inter, sans-serif" }}
                >
                  Register Now
                </button>
              </p>
            </form>
          ) : (
            /* Forgot Password */
            <form onSubmit={handleForgot}>
              {!forgotSent ? (
                <>
                  <div
                    style={{
                      background: "var(--bg)",
                      border: "1px solid rgba(255, 255, 255, 0.4)",
                      boxShadow: "var(--shadow-neu-sunken-sm)",
                      borderRadius: 12,
                      padding: "12px 16px",
                      marginBottom: 20,
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                    }}
                  >
                    <AlertCircle size={16} style={{ color: "var(--primary)", marginTop: 2, flexShrink: 0 }} />
                    <p style={{ fontSize: 13, color: "var(--text-mid)", fontFamily: "Inter, sans-serif", lineHeight: 1.5 }}>
                      Enter your registered email and we'll send you a secure reset link.
                    </p>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-dark)", fontFamily: "Inter, sans-serif", marginBottom: 8 }}>
                      Email Address
                    </label>
                    <input
                      id="forgot-email"
                      type="email"
                      className="input-field"
                      placeholder="Enter your email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button id="forgot-submit-btn" type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    Send Reset Link
                  </button>
                  <button type="button" onClick={() => setMode("login")} style={{ width: "100%", background: "none", border: "none", color: "var(--text-muted)", fontFamily: "Inter, sans-serif", fontSize: 13, cursor: "pointer", marginTop: 12 }}>
                    ← Back to Login
                  </button>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>📧</div>
                  <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 700, color: "var(--text-dark)", marginBottom: 8 }}>
                    Check Your Email!
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", fontFamily: "Inter, sans-serif", lineHeight: 1.6, marginBottom: 20 }}>
                    We've sent a password reset link to <strong>{forgotEmail}</strong>
                  </p>
                  <button onClick={() => { setMode("login"); setForgotSent(false); }} className="btn-outline" style={{ fontSize: 14 }}>
                    Back to Login
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
