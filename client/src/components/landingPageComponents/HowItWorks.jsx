import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForward, IoSparklesSharp } from "react-icons/io5";

const HowItWorks = () => {
  const steps = [
    {
      title: "Share Your Vibe",
      desc: "Tell us your destination, budget, and travel soul in seconds.",
      label: "Input",
    },
    {
      title: "AI Crafts Magic",
      desc: "Our engine builds a hyper-personalized day-wise roadmap.",
      label: "Process",
    },
    {
      title: "Explore & Sync",
      desc: "Save your trip, export to PDF, or modify on the go.",
      label: "Output",
    },
  ];

  return (
    <div className="w-full py-10">
      {/* Header Section */}
      <div className="text-center mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-100">
           Simple Process
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-[0.95]">
          Three Steps to Your <br className="hidden sm:block" />
          <span className="text-blue-600">Perfect Journey</span>
        </h2>
      </div>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
        
        {/* Connection Line (Desktop Only) */}
        <div className="hidden md:block absolute top-[2.75rem] left-[15%] w-[70%] h-[2px] bg-gradient-to-r from-transparent via-blue-100 to-transparent"></div>

        {steps.map((step, index) => (
          <div key={index} className="group relative flex flex-col items-center text-center">
            
            {/* Step Number Circle */}
            <div className="w-20 h-20 bg-white border-4 border-gray-50 rounded-[2rem] flex items-center justify-center relative z-10 shadow-xl shadow-blue-50 group-hover:border-blue-600 group-hover:scale-105 transition-all duration-500 mb-8">
              <span className="text-2xl font-black text-gray-900 group-hover:text-blue-600">
                0{index + 1}
              </span>
              
              {/* Pulse effect for Step 2 (The AI Step) */}
              {index === 1 && (
                <div className="absolute inset-0 rounded-[2rem] bg-blue-400 animate-ping opacity-10"></div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-3">
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">
                {step.label}
              </p>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight uppercase">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium max-w-[250px] mx-auto">
                {step.desc}
              </p>
            </div>

            {/* Arrow for mobile (Desktop hidden) */}
            {index !== 2 && (
              <div className="mt-8 text-gray-200 md:hidden">
                <IoArrowForward className="rotate-90 text-3xl" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Bottom */}
      <div className="text-center mt-20 sm:mt-28">
        <Link to="/auth">
          <button className="w-full sm:w-auto bg-gray-900 text-white px-12 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-blue-600 hover:-translate-y-2 transition-all duration-500 active:scale-95 flex items-center justify-center gap-3 mx-auto">
            <IoSparklesSharp /> Plan Your First Trip
          </button>
        </Link>
        <p className="text-gray-400 text-[10px] mt-6 uppercase tracking-[0.3em] font-black flex items-center justify-center gap-2">
           No Card Required <span className="text-blue-600">✦</span> AI Powered
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;