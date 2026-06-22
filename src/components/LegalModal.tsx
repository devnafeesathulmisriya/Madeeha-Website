"use client";
import { X, FileText, ShieldCheck, Cookie } from "lucide-react";

interface LegalModalProps {
  type: "terms" | "privacy" | "cookie";
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  const getHeaderIcon = () => {
    switch (type) {
      case "terms":
        return <FileText size={30} color="var(--primary)" />;
      case "privacy":
        return <ShieldCheck size={30} color="var(--primary)" />;
      case "cookie":
        return <Cookie size={30} color="var(--primary)" />;
    }
  };

  const getTitle = () => {
    switch (type) {
      case "terms":
        return "Terms of Service";
      case "privacy":
        return "Privacy Policy";
      case "cookie":
        return "Cookie Policy";
    }
  };

  const getSubtitle = () => {
    switch (type) {
      case "terms":
        return "Our agreement and student rules of conduct";
      case "privacy":
        return "How we secure and handle your personal data";
      case "cookie":
        return "How we use cookies to improve your learning experience";
    }
  };

  const renderContent = () => {
    switch (type) {
      case "terms":
        return (
          <div style={{ color: "var(--text-mid)", fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: "1.75" }}>
            <p style={{ marginBottom: "16px" }}>
              Welcome to Madeeha Academy. By accessing our services, enrolling in our courses, or using our online platforms, you agree to comply with and be bound by the following Terms of Service. Please review them carefully.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              1. Acceptance of Agreement
            </h3>
            <p style={{ marginBottom: "12px" }}>
              You agree to the terms and conditions outlined in this Terms of Service Agreement with respect to our website and services. This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              2. Student Conduct & Ethics
            </h3>
            <p style={{ marginBottom: "12px" }}>
              Madeeha Academy is dedicated to providing an authentic, safe, and respectful Islamic learning environment for Muslim women and children worldwide. As a student or parent of a student, you agree to:
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "12px", listStyleType: "disc" }}>
              <li style={{ marginBottom: "6px" }}>Maintain respectful communication with instructors, administrators, and fellow students.</li>
              <li style={{ marginBottom: "6px" }}>Keep account credentials, including Student Portal logins, secure and not share them with third parties.</li>
              <li style={{ marginBottom: "6px" }}>Refrain from recording, reproducing, or redistributing course content, lectures, or study guides without explicit written consent.</li>
            </ul>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              3. Intellectual Property Rights
            </h3>
            <p style={{ marginBottom: "12px" }}>
              All contents, curriculum materials, lecture recordings, logos, graphics, and course outlines provided by Madeeha Academy are proprietary assets protected under intellectual property laws. Your enrollment grants you a limited, non-exclusive, non-transferable license to access materials for personal learning purposes only.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              4. Payment, Enrollment & Refunds
            </h3>
            <p style={{ marginBottom: "12px" }}>
              Course enrollment is finalized upon receipt of the tuition or subscription payment. Fees are structured on a program-by-program basis:
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "12px", listStyleType: "disc" }}>
              <li style={{ marginBottom: "6px" }}>Subscriptions are billed in advance on a recurring monthly cycle.</li>
              <li style={{ marginBottom: "6px" }}>Refunds are not provided for partial billing periods unless otherwise specified in the program's official syllabus or admissions documentation.</li>
              <li style={{ marginBottom: "6px" }}>Failure to settle recurring fees may result in temporary suspension of Student Portal access.</li>
            </ul>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              5. Disclaimer & Limitation of Liability
            </h3>
            <p style={{ marginBottom: "12px" }}>
              While we strive to maintain the highest quality of online instruction, Madeeha Academy services are provided on an "as is" and "as available" basis. We do not guarantee uninterrupted access due to third-party internet service issues. Under no circumstances shall Madeeha Academy be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our portal.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              6. Governing Law & Dispute Resolution
            </h3>
            <p style={{ marginBottom: "12px" }}>
              This Agreement shall be governed by and construed in accordance with the laws applicable to educational institutions in our primary operating jurisdiction. Any disputes arising under this Agreement shall be resolved through amicable consultation.
            </p>

            <p style={{ marginTop: "24px", fontSize: "12px", color: "var(--text-muted)", fontStyle: "italic" }}>
              Last Updated: June 2026
            </p>
          </div>
        );
      case "privacy":
        return (
          <div style={{ color: "var(--text-mid)", fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: "1.75" }}>
            <p style={{ marginBottom: "16px" }}>
              At Madeeha Academy, we take the privacy of our students, parents, and visitors extremely seriously. This Privacy Policy details how we collect, store, utilize, and secure your personal information.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              1. Information We Collect
            </h3>
            <p style={{ marginBottom: "12px" }}>
              When you visit our site, submit a course registration, or sign up for our services, we collect relevant information to process your request:
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "12px", listStyleType: "disc" }}>
              <li style={{ marginBottom: "6px" }}><strong>Personal Details:</strong> Full name, date of birth, gender, and country of residence.</li>
              <li style={{ marginBottom: "6px" }}><strong>Contact Info:</strong> Email address and WhatsApp/phone number.</li>
              <li style={{ marginBottom: "6px" }}><strong>Academic Logins:</strong> Usernames and encrypted password credentials for accessing the Student Portal.</li>
              <li style={{ marginBottom: "6px" }}><strong>Payment Data:</strong> Payment details processed securely through certified third-party payment gateway integrations. We do not store raw credit card numbers on our servers.</li>
            </ul>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              2. How We Use Your Information
            </h3>
            <p style={{ marginBottom: "12px" }}>
              We use the collected information for purposes necessary to run the Academy, including:
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "12px", listStyleType: "disc" }}>
              <li style={{ marginBottom: "6px" }}>Evaluating admissions requests and establishing student cohorts.</li>
              <li style={{ marginBottom: "6px" }}>Granting access to virtual classrooms, materials, and student profiles.</li>
              <li style={{ marginBottom: "6px" }}>Sending essential administrative notifications, newsletter updates, and class reminders.</li>
              <li style={{ marginBottom: "6px" }}>Enhancing landing page loading times and optimizing educational portal features.</li>
            </ul>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              3. Data Protection and Security
            </h3>
            <p style={{ marginBottom: "12px" }}>
              We implement robust security controls, including industry-standard SSL encryption and secure database access protocols (via Supabase), to safeguard your sensitive information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              4. Sharing Data with Third Parties
            </h3>
            <p style={{ marginBottom: "12px" }}>
              Madeeha Academy will never sell, trade, or rent student personal details to third parties. We share data only with trusted partner systems (e.g., hosting infrastructure, communications, and database systems) solely to deliver our services, under strictly defined confidentiality agreements.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              5. Your Legal Rights
            </h3>
            <p style={{ marginBottom: "12px" }}>
              You retain full rights to request details of personal information that we hold about you. You can request corrections to out-of-date information, or request full deletion of your record by reaching out to our support staff at <a href="mailto:support@madeeha.com" style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}>support@madeeha.com</a>.
            </p>

            <p style={{ marginTop: "24px", fontSize: "12px", color: "var(--text-muted)", fontStyle: "italic" }}>
              Last Updated: June 2026
            </p>
          </div>
        );
      case "cookie":
        return (
          <div style={{ color: "var(--text-mid)", fontFamily: "Inter, sans-serif", fontSize: "14px", lineHeight: "1.75" }}>
            <p style={{ marginBottom: "16px" }}>
              Madeeha Academy utilizes cookies and similar tracking technologies to deliver a personalized, secure, and high-performance online experience. This Cookie Policy outlines what cookies are and how we use them.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              1. What are Cookies?
            </h3>
            <p style={{ marginBottom: "12px" }}>
              Cookies are small text files stored on your computer or mobile device when you browse websites. They help the site identify your device, store preference settings, and ensure seamless transition between different sections of the application.
            </p>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              2. How We Use Cookies
            </h3>
            <p style={{ marginBottom: "12px" }}>
              We use cookies for crucial functions across our platforms:
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "12px", listStyleType: "disc" }}>
              <li style={{ marginBottom: "6px" }}><strong>Authentication:</strong> Keeping you logged into your Student Portal account securely as you navigate between lessons and grades.</li>
              <li style={{ marginBottom: "6px" }}><strong>Preferences:</strong> Saving user choices such as dark mode preference, language choice, and course filters.</li>
              <li style={{ marginBottom: "6px" }}><strong>Performance:</strong> Analyzing anonymous traffic metrics to identify slow-loading pages and maintain site stability.</li>
            </ul>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              3. The Types of Cookies We Use
            </h3>
            <p style={{ marginBottom: "12px" }}>
              Our platform uses the following categories:
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "12px", listStyleType: "disc" }}>
              <li style={{ marginBottom: "6px" }}><strong>Essential Cookies:</strong> Vital for running basic features like login sessions and registration forms. Deactivating these will prevent portal functions.</li>
              <li style={{ marginBottom: "6px" }}><strong>Functional & Customization Cookies:</strong> Remember settings to provide a tailored user experience.</li>
              <li style={{ marginBottom: "6px" }}><strong>Analytical Cookies:</strong> Gather aggregate statistics about visits and navigation behavior to help us optimize the learning platform.</li>
            </ul>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--primary-dark)", margin: "20px 0 8px" }}>
              4. Controlling and Disabling Cookies
            </h3>
            <p style={{ marginBottom: "12px" }}>
              Most modern web browsers allow you to manage cookie permissions via their settings panels. You can choose to block all cookies or receive notifications when cookies are saved. Please note that blocking essential cookies may disrupt parts of the Madeeha Academy learning portal.
            </p>

            <p style={{ marginTop: "24px", fontSize: "12px", color: "var(--text-muted)", fontStyle: "italic" }}>
              Last Updated: June 2026
            </p>
          </div>
        );
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 2000 }}>
      <div
        className="modal-box animate-scale-spring"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg)",
          boxShadow: "var(--shadow-neu-raised)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          maxHeight: "85vh",
          width: "95%",
          maxWidth: "640px",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "var(--bg)",
            padding: "24px 28px 16px",
            position: "relative",
            textAlign: "center",
            borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: "Amiri, serif",
              fontSize: 15,
              color: "var(--text-muted)",
              letterSpacing: 2,
              marginBottom: 10,
            }}
          >
            ✦ The Sweetness of Iman ✦
          </div>
          <div
            style={{
              width: 58,
              height: 58,
              background: "var(--bg)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 12px",
              boxShadow: "var(--shadow-neu-raised-sm)",
            }}
          >
            {getHeaderIcon()}
          </div>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "24px",
              fontWeight: 700,
              color: "var(--text-dark)",
              marginBottom: 4,
            }}
          >
            {getTitle()}
          </h2>
          <p style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
            {getSubtitle()}
          </p>

          {/* Close button */}
          <button
            id="legal-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "var(--bg)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-dark)",
              boxShadow: "var(--shadow-neu-raised-sm)",
              transition: "all 0.2s",
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div style={{ padding: "24px 28px", overflowY: "auto", flexGrow: 1 }}>
          {renderContent()}
        </div>

        {/* Footer actions */}
        <div
          style={{
            padding: "16px 28px",
            borderTop: "1px solid rgba(255, 255, 255, 0.4)",
            display: "flex",
            justifyContent: "flex-end",
            background: "var(--bg)",
            flexShrink: 0,
          }}
        >
          <button
            onClick={onClose}
            className="btn-primary"
            style={{
              padding: "10px 24px",
              fontSize: "13px",
              borderRadius: "50px",
              height: "auto",
              boxShadow: "var(--shadow-neu-raised-sm)",
            }}
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
