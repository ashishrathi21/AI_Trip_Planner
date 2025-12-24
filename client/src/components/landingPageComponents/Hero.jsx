import React from "react";
import { Link } from "react-router-dom";
import { IoSparkles, IoPlayOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center text-center py-12 sm:py-24 relative">
      
      {/* 1. Animated Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full mb-8 animate-fade-in">
        <IoSparkles className="text-blue-600 text-sm animate-pulse" />
        <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em]">
          Next-Gen AI Travel Engine
        </span>
      </div>

      {/* 2. Main Headline */}
      <div className="max-w-5xl flex flex-col gap-6 px-4">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[0.95] text-gray-900 tracking-tighter uppercase">
          Plan Your Trip <br className="hidden sm:block" />
          <span className="text-blue-600 relative inline-block">
            In Seconds
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-100 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="text-gray-500 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium mt-4">
          Personalized travel itineraries based on your budget, interests, and 
          travel style. No spreadsheets. No guesswork. <span className="text-gray-900 font-bold">Just smart AI planning.</span>
        </p>
      </div>

      {/* 3. Modern Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-5 mt-12 w-full sm:w-auto px-6">
        <Link to="/auth" className="w-full sm:w-auto">
          <button
            className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-[1.5rem]
              font-black text-sm uppercase tracking-widest shadow-2xl shadow-blue-200
              hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300
              active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            Start Planning Now
          </button>
        </Link>

        <Link to="/auth" className="w-full sm:w-auto">
          <button
            className="w-full sm:w-auto bg-white text-gray-900 px-10 py-4 rounded-[1.5rem]
              font-black text-sm uppercase tracking-widest border-2 border-gray-100
              hover:border-blue-600 hover:text-blue-600 transition-all duration-300
              active:scale-95 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
          >
            <IoPlayOutline size={18} /> View Sample
          </button>
        </Link>
      </div>

      {/* 4. Social Proof / Trust Indicators */}
      <div className="mt-16 sm:mt-24">
        <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.3em] font-black flex flex-wrap justify-center gap-x-8 gap-y-4">
          <span className="flex items-center gap-2"><span className="text-green-500">✓</span> Real-Time Data</span>
          <span className="flex items-center gap-2"><span className="text-green-500">✈︎</span> 1000+ Destinations</span>
          <span className="flex items-center gap-2"><span className="text-green-500">⚡︎</span> Instant Generation</span>
        </p>
      </div>

    </header>
  );
};

export default Hero;