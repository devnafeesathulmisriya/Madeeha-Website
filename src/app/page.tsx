"use client";
import Image from "next/image";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#e0eee6] via-white to-[#e0eee6] flex flex-col justify-between items-center font-sans">
      
      {/* Import cursive font and custom styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .font-cursive { font-family: 'Great Vibes', cursive; }
        .laptop-frame {
          position: relative;
          width: 100%;
          max-width: 600px;
          aspect-ratio: 16/10;
          background: #111;
          border-radius: 16px 16px 0 0;
          padding: 2.5%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          margin-top: 1rem;
          z-index: 10;
          border: 1px solid #333;
        }
        .laptop-base {
          position: relative;
          width: 115%;
          height: 14px;
          background: linear-gradient(to bottom, #d0d0d0, #a0a0a0);
          border-radius: 0 0 16px 16px;
          margin-left: -7.5%;
          box-shadow: inset 0 -2px 5px rgba(0,0,0,0.4), 0 15px 25px rgba(0,0,0,0.2);
          display: flex;
          justify-content: center;
        }
        .laptop-notch {
          width: 90px;
          height: 5px;
          background: #808080;
          border-radius: 0 0 6px 6px;
          box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
        }
        .wave-bottom {
          position: absolute;
          bottom: -50px;
          left: -10%;
          width: 120%;
          height: 35vh;
          background: #0f4a2c;
          border-top-left-radius: 50% 100%;
          border-top-right-radius: 50% 100%;
          z-index: 0;
        }
        .banner-ribbon {
          position: absolute;
          top: -10px;
          right: 8%;
          background: #0f4a2c;
          color: white;
          width: 120px;
          padding: 30px 0 40px;
          text-align: center;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
          z-index: 20;
          box-shadow: -5px 5px 20px rgba(0,0,0,0.15);
        }
        .shining-rays {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 150vw;
          height: 150vw;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%);
          transform: translate(-50%, -50%);
          z-index: 1;
          pointer-events: none;
        }
      `}} />

      <div className="shining-rays" />

      {/* Ribbon */}
      <div className="banner-ribbon hidden md:block">
        <div className="text-5xl font-black leading-none mb-1">7</div>
        <div className="text-2xl font-bold leading-none mb-2">PM</div>
        <div className="text-2xl font-cursive font-light text-green-300 transform -rotate-12 mt-1">Today</div>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 pt-10 flex flex-col items-center relative z-10 text-center flex-grow">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex flex-col items-center"
        >
          <img src="/logo-Photoroom.png" alt="Madeeha Logo" className="h-[90px] mx-auto object-contain" />
          <div className="text-[#16a34a] font-medium text-sm tracking-widest uppercase mt-1">The sweetness of Iman</div>
        </motion.div>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 flex flex-col items-center relative"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-[#0f4a2c] font-display leading-[1.1] tracking-tight z-10">
            WebSite <br /> Launching
          </h1>
          <div className="text-[5rem] md:text-[7rem] lg:text-[8rem] font-cursive text-[#22c55e] transform -rotate-6 -mt-6 md:-mt-12 z-20" style={{ textShadow: '2px 4px 10px rgba(34, 197, 94, 0.2)'}}>
            Soon!
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center bg-white rounded-full p-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-green-50 max-w-md w-full mb-10 z-30 relative mt-16 md:mt-20"
        >
          <div className="flex-grow text-center text-[#0f4a2c] font-medium px-4 text-base md:text-lg">
            www.madeehaacademy.com
          </div>
          <div className="bg-[#0f4a2c] text-white p-2.5 md:p-3 rounded-full flex-shrink-0 cursor-pointer hover:bg-[#166534] transition-colors shadow-md">
            <Search size={22} strokeWidth={2.5} />
          </div>
        </motion.div>

        {/* Laptop Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-full max-w-[600px] mx-auto flex flex-col items-center mb-10"
        >
          <div className="laptop-frame relative overflow-hidden bg-black flex justify-center items-center">
            <div className="w-full h-full bg-white relative overflow-hidden rounded-[4px]">
              <img src="/website.jpeg" alt="Website Preview" className="w-full h-auto object-cover object-top" />
            </div>
          </div>
          <div className="laptop-base">
            <div className="laptop-notch"></div>
          </div>
        </motion.div>

      </div>

      {/* Footer / Wave */}
      <div className="wave-bottom"></div>
      
      <div className="relative z-20 w-full text-white px-6 md:px-16 pb-8 pt-10 flex flex-col sm:flex-row justify-between items-center text-sm md:text-base font-medium">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <div className="flex gap-2">
            <a href="#" className="bg-white text-[#0f4a2c] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="bg-white text-[#0f4a2c] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
          <span className="tracking-wide ml-2">madeehaacademy</span>
        </div>
        <div className="tracking-wide">www.madeehaacademy.com</div>
      </div>

    </div>
  );
}
