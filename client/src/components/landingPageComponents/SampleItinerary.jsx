import React from "react";
import {
  IoSunnyOutline,
  IoLocationOutline,
  IoFlashOutline,
  IoSparkles
} from "react-icons/io5";

const SampleItinerary = () => {
  return (
    <div className="w-full py-10">
      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-blue-100">
           <IoSparkles className="animate-pulse" /> Live Preview
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-[0.95] mb-8">
          See the <span className="text-blue-600">AI Magic</span> <br className="hidden sm:block"/> In Action
        </h2>
        
        {/* User Input Mock Tags */}
        <div className="flex flex-wrap justify-center gap-3 px-4">
          {[
            { label: "Destination", val: "Goa, India", icon: "📍" },
            { label: "Duration", val: "5 Days", icon: "⏱️" },
            { label: "Type", val: "Couple", icon: "👫" },
            { label: "Budget", val: "₹25,000", icon: "💰" }
          ].map((tag, i) => (
            <div key={i} className="bg-white border border-gray-100 px-4 py-2 rounded-2xl shadow-sm flex items-center gap-2">
              <span className="text-sm">{tag.icon}</span>
              <div className="text-left leading-none">
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{tag.label}</p>
                <p className="text-xs font-bold text-gray-800">{tag.val}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The Journal Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-blue-100/50 border border-gray-50 overflow-hidden transition-all duration-500 hover:shadow-blue-200/50">
        
        {/* Header Bar */}
        <div className="bg-gray-900 p-8 text-white flex justify-between items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-[60px] opacity-40 -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <p className="text-blue-400 text-[10px] uppercase font-black tracking-[0.3em] mb-2">
              Itinerary Generated
            </p>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight uppercase">The Golden Sands Route</h3>
          </div>
          <IoSunnyOutline className="text-4xl text-blue-400 animate-spin-slow relative z-10" />
        </div>

        <div className="p-8 sm:p-14 space-y-12">
          
          {/* Day 1 - Visual Timeline */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 group">
            <div className="sm:w-24 shrink-0 flex flex-col items-center sm:items-start">
               <span className="text-xs font-black text-blue-600 uppercase tracking-widest leading-none">Day</span>
               <span className="text-5xl font-black text-gray-100 group-hover:text-blue-50 transition-colors">01</span>
            </div>
            <div className="flex-1 space-y-4 pt-1 border-l-2 border-gray-50 pl-8 relative">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-blue-600"></div>
              <h4 className="font-black text-gray-900 text-xl tracking-tight uppercase">Arrival & Coastal Vibes</h4>
              <ul className="space-y-4">
                {[
                  "Private transfer to Candolim (optimized for cost)",
                  "Sunset walk at the beach & local shacks",
                  "Dinner at Fisherman’s Cove (High-rated local pick)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500 text-sm sm:text-base font-medium">
                    <IoLocationOutline className="mt-1 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 group">
            <div className="sm:w-24 shrink-0 flex flex-col items-center sm:items-start">
               <span className="text-xs font-black text-blue-600 uppercase tracking-widest leading-none">Day</span>
               <span className="text-5xl font-black text-gray-100 group-hover:text-blue-50 transition-colors">02</span>
            </div>
            <div className="flex-1 space-y-4 pt-1 border-l-2 border-gray-50 pl-8 relative">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-4 border-blue-600"></div>
              <h4 className="font-black text-gray-900 text-xl tracking-tight uppercase">North Goa Exploration</h4>
              <ul className="space-y-4">
                {[
                  "Fort Aguada visit (Early morning to avoid heat)",
                  "Water sports package at Baga Beach",
                  "Curated Nightlife suggestions based on style",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-500 text-sm sm:text-base font-medium">
                    <IoLocationOutline className="mt-1 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI Insight Box */}
          <div className="bg-blue-600 rounded-[2rem] p-6 sm:p-8 flex items-start gap-5 shadow-xl shadow-blue-100">
            <div className="bg-white/20 p-3 rounded-2xl text-white">
              <IoFlashOutline size={24} className="animate-pulse" />
            </div>
            <div className="space-y-1 text-left">
               <p className="text-blue-100 text-[10px] font-black uppercase tracking-widest">AI Smart Adjustment</p>
               <p className="text-sm sm:text-base text-white font-bold leading-relaxed">
                "I've moved Fort Aguada to 8:00 AM. Based on real-time data, crowd density increases by 65% after 10:30 AM."
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleItinerary;