import React from "react";
import { Link } from "react-router-dom";
import { IoRocketOutline, IoSparkles } from "react-icons/io5";

const FinalCTA = () => {
  return (
    <div className="relative overflow-hidden bg-blue-600 py-16 sm:py-24 rounded-[2.5rem] sm:rounded-[4rem] mx-4 sm:mx-8 mb-12 shadow-2xl shadow-blue-200">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 opacity-30 blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-white/20 backdrop-blur-md">
          <IoSparkles className="animate-pulse" />
          Final Call to Adventure
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.95]">
          Your Next Journey <br className="hidden sm:block" />
          <span className="text-blue-200">Starts Here</span>
        </h2>

        <p className="text-blue-100 text-sm sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed font-medium">
          Join thousands of smart travelers who ditched spreadsheets for
          AI-powered planning.{" "}
          <span className="text-white font-bold">100% Free.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center">
          <Link to="/auth" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white text-blue-600 px-12 py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-[0.2em] shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
              Create My Trip Now
            </button>
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/70 text-[10px] font-black uppercase tracking-[0.2em]">
          <span className="flex items-center gap-2">✅ No Card Required</span>
          <span className="flex items-center gap-2">⚡ Instant Generation</span>
          <span className="flex items-center gap-2">🌍 Global Access</span>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
