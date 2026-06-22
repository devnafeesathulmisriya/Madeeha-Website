"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatYouWillLearn from "@/components/WhatYouWillLearn";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import AppShowcase from "@/components/AppShowcase";
import CEOMessage from "@/components/CEOMessage";
import AnimatedStats from "@/components/AnimatedStats";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import PagePreloader from "@/components/PagePreloader";
import CustomCursor from "@/components/CustomCursor";
import LegalModal from "@/components/LegalModal";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState("");
  const [legalDocType, setLegalDocType] = useState<"terms" | "privacy" | "cookie" | null>(null);

  const handleRegisterClick = (courseTitle: string = "") => {
    setPreselectedCourse(courseTitle);
    setShowRegister(true);
  };

  return (
    <>
      {/* Entry sequence preloader */}
      <PagePreloader />

      {/* Custom lerp cursor (desktop only) */}
      <CustomCursor />

      <Navbar onLoginClick={() => setShowLogin(true)} onRegisterClick={() => handleRegisterClick()} />
      <main>
        <HeroSection />
        <WhatYouWillLearn />
        <FeaturedCourses onRegisterClick={handleRegisterClick} />
        <WhyChooseUs />
        <AppShowcase />
        <CEOMessage />

        <Testimonials />
        <Gallery />
        <NewsletterBanner />
      </main>
      <Footer 
        onRegisterClick={() => handleRegisterClick()} 
        onTermsClick={() => setLegalDocType("terms")}
        onPrivacyClick={() => setLegalDocType("privacy")}
        onCookieClick={() => setLegalDocType("cookie")}
      />
      <ChatbotWidget />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onRegisterClick={() => handleRegisterClick()} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} defaultCourse={preselectedCourse} />}
      {legalDocType && <LegalModal type={legalDocType} onClose={() => setLegalDocType(null)} />}
    </>
  );
}
