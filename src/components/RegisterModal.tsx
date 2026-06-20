"use client";
import { useState, useEffect } from "react";
import { X, User, Mail, Phone, Calendar, MapPin, BookOpen, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface RegisterModalProps {
  onClose: () => void;
  defaultCourse?: string;
}

const courses = [
  "Madeeha",
  "Al Autsa",
  "Madeeha Da'awa College"
];

export default function RegisterModal({ onClose, defaultCourse = "" }: RegisterModalProps) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "female",
    country: "",
    selectedCourse: defaultCourse || courses[0],
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (defaultCourse && courses.includes(defaultCourse)) {
      setForm((prev) => ({ ...prev, selectedCourse: defaultCourse }));
    }
  }, [defaultCourse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      if (!supabase) {
        throw new Error("Supabase is not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your .env.local file.");
      }
      const { error } = await supabase.from("registrations").insert([
        {
          full_name: form.fullName,
          email: form.email,
          phone: form.phone,
          dob: form.dob,
          gender: form.gender,
          country: form.country,
          emergency_name: "",
          emergency_phone: "",
          relationship: "",
          selected_course: form.selectedCourse,
        },
      ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (err: any) {
      console.error("Error inserting registration:", err);
      setErrorMsg(err.message || "Failed to submit registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1000 }}>
      <div
        className="modal-box animate-scale-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg)",
          boxShadow: "var(--shadow-neu-raised)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          maxHeight: "90vh",
          overflowY: "auto",
          width: "95%",
          maxWidth: "600px",
          borderRadius: "24px",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "var(--bg)",
            padding: "28px 28px 20px",
            position: "relative",
            textAlign: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
          }}
        >

          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: 26,
              fontWeight: 700,
              color: "var(--text-dark)",
              marginBottom: 4,
            }}
          >
            Course Registration
          </h2>
          <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
            Join Madeeha Academy — Empowering Muslim Women globally
          </p>

          {/* Close button */}
          <button
            id="register-modal-close-btn"
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
        <div style={{ padding: "24px 28px 28px" }}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {/* SECTION 1: Course Choice */}
              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--primary-dark)", fontFamily: "Inter, sans-serif", borderBottom: "1px solid var(--green-100)", paddingBottom: 6, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                  <BookOpen size={16} /> Course Selection
                </h3>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-dark)", fontFamily: "Inter, sans-serif", marginBottom: 6 }}>
                    Select Course
                  </label>
                  <select
                    id="register-course"
                    value={form.selectedCourse}
                    onChange={(e) => setForm({ ...form, selectedCourse: e.target.value })}
                    className="input-field"
                    style={{ appearance: "none", cursor: "pointer" }}
                    required
                  >
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* SECTION 2: Personal Info */}
              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--primary-dark)", fontFamily: "Inter, sans-serif", borderBottom: "1px solid var(--green-100)", paddingBottom: 6, marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                  <User size={16} /> Personal Information
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-dark)", fontFamily: "Inter, sans-serif", marginBottom: 6 }}>
                      Full Name
                    </label>
                    <div style={{ position: "relative" }}>
                      <User size={16} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                      <input
                        id="register-name"
                        type="text"
                        placeholder="Enter your full name"
                        value={form.fullName}
                        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                        className="input-field"
                        style={{ paddingLeft: 44 }}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-dark)", fontFamily: "Inter, sans-serif", marginBottom: 6 }}>
                        Email Address
                      </label>
                      <div style={{ position: "relative" }}>
                        <Mail size={16} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                        <input
                          id="register-email"
                          type="email"
                          placeholder="name@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="input-field"
                          style={{ paddingLeft: 44 }}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-dark)", fontFamily: "Inter, sans-serif", marginBottom: 6 }}>
                        Phone / WhatsApp
                      </label>
                      <div style={{ position: "relative" }}>
                        <Phone size={16} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                        <input
                          id="register-phone"
                          type="tel"
                          placeholder="e.g. 9947585621"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="input-field"
                          style={{ paddingLeft: 44 }}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-dark)", fontFamily: "Inter, sans-serif", marginBottom: 6 }}>
                        Date of Birth
                      </label>
                      <div style={{ position: "relative" }}>
                        <Calendar size={16} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                        <input
                          id="register-dob"
                          type="date"
                          value={form.dob}
                          onChange={(e) => setForm({ ...form, dob: e.target.value })}
                          className="input-field"
                          style={{ paddingLeft: 44 }}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-dark)", fontFamily: "Inter, sans-serif", marginBottom: 6 }}>
                        Gender
                      </label>
                      <select
                        id="register-gender"
                        value={form.gender}
                        onChange={(e) => setForm({ ...form, gender: e.target.value })}
                        className="input-field"
                        style={{ cursor: "pointer" }}
                        required
                      >
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-dark)", fontFamily: "Inter, sans-serif", marginBottom: 6 }}>
                      Country / Location
                    </label>
                    <div style={{ position: "relative" }}>
                      <MapPin size={16} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                      <input
                        id="register-country"
                        type="text"
                        placeholder="e.g. UAE, Qatar, India..."
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        className="input-field"
                        style={{ paddingLeft: 44 }}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>


              {/* Error Message */}
              {errorMsg && (
                <div style={{
                  color: "#ef4444",
                  background: "rgba(239, 68, 68, 0.08)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                  borderRadius: "12px",
                  padding: "12px 16px",
                  fontSize: "13px",
                  fontFamily: "Inter, sans-serif",
                  marginBottom: "20px",
                  textAlign: "center"
                }}>
                  ⚠️ {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                id="register-submit-btn"
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "15px",
                  fontSize: "15px",
                  borderRadius: "50px",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.75 : 1,
                }}
              >
                {isSubmitting ? "Submitting Registration..." : "Submit Registration"}
              </button>
            </form>
          ) : (
            /* Success State */
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                <CheckCircle size={60} color="var(--primary)" />
              </div>
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--text-dark)",
                  marginBottom: 10,
                }}
              >
                Registration Successful!
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  fontFamily: "Inter, sans-serif",
                  lineHeight: 1.6,
                  maxWidth: "400px",
                  margin: "0 auto 28px",
                }}
              >
                Assalamu Alaikum, <strong>{form.fullName}</strong>. We have received your registration details for <strong>{form.selectedCourse}</strong>. Our admissions advisor will contact you shortly.
              </p>

              <div style={{
                background: "var(--bg)",
                border: "1px solid rgba(255,255,255,0.4)",
                boxShadow: "var(--shadow-neu-sunken-sm)",
                padding: "16px 20px",
                borderRadius: "16px",
                textAlign: "left",
                fontSize: "13px",
                color: "var(--text-mid)",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.6,
                marginBottom: 30
              }}>
                <div style={{ borderBottom: "1px solid rgba(0,0,0,0.04)", paddingBottom: 6, marginBottom: 8, fontWeight: 700, textTransform: "uppercase", fontSize: 11, color: "var(--primary-dark)" }}>Registration Summary</div>
                <div><strong>Course:</strong> {form.selectedCourse}</div>
                <div><strong>Email:</strong> {form.email}</div>
                <div><strong>Phone:</strong> {form.phone}</div>
                <div><strong>Country:</strong> {form.country}</div>
              </div>

              <button
                onClick={onClose}
                className="btn-primary"
                style={{ padding: "12px 36px", borderRadius: "50px", margin: "0 auto" }}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
