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
import PagePreloader from "@/components/PagePreloader";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Entry sequence preloader */}
      <PagePreloader />

      {/* Custom lerp cursor (desktop only) */}
      <CustomCursor />

      <Navbar onLoginClick={() => setShowLogin(true)} />
      <main>
        <HeroSection />
        <WhatYouWillLearn />
        <FeaturedCourses />
        <WhyChooseUs />
        <AppShowcase />
        <CEOMessage />

        <Testimonials />
        <Gallery />
        <NewsletterBanner />
      </main>
      <Footer />
      <ChatbotWidget />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
