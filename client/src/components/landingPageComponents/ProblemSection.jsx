import React from "react";
import { IoCloseOutline, IoAlertCircleOutline } from "react-icons/io5";

const ProblemSection = () => {
  const problems = [
    "Endless Google searches",
    "Confusing travel blogs",
    "Budget overruns",
    "Poor day-wise planning",
    "Missed local experiences",
    "Overwhelming logistics",
  ];

  return (
    <div className="w-full py-10">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-red-100">
           <IoAlertCircleOutline size={14} /> The Struggle is Real
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-[0.95]">
          Planning Shouldn’t Be <br className="hidden sm:block" />
          A <span className="text-red-500 underline decoration-red-200 underline-offset-8">Full-Time Job</span>
        </h2>
        <p className="text-gray-500 mt-8 text-sm sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-4">
          The old way of planning is broken. Stop stressing over browser tabs and start dreaming of destinations.
        </p>
      </div>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {problems.map((item, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-100 rounded-[2rem] p-8 flex items-start gap-4 transition-all duration-500 hover:bg-red-50/30 hover:border-red-100 relative overflow-hidden"
          >
            {/* Background Numbering for depth */}
            <span className="absolute -right-4 -bottom-4 text-7xl font-black text-gray-50 group-hover:text-red-100/50 transition-colors">
              {index + 1}
            </span>

            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
              <IoCloseOutline size={24} className="group-hover:rotate-90 transition-transform" />
            </div>
            
            <div className="relative z-10">
              <p className="text-gray-800 font-black text-base sm:text-lg uppercase tracking-tight group-hover:line-through group-hover:text-red-400 transition-all decoration-2">
                {item}
              </p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Old Method</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Comparison */}
      <div className="mt-20 sm:mt-32 text-center relative">
        {/* Decorative Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-blue-600 hidden sm:block"></div>
        
        <div className="pt-20">
          <p className="text-2xl sm:text-4xl font-black text-gray-900 px-4 leading-tight uppercase tracking-tighter">
            Most travel apps <span className="text-red-500">show places.</span> <br />
            <span className="text-blue-600 bg-blue-50 px-4 py-1 rounded-2xl inline-block mt-4 sm:mt-2">
              We design your journey.
            </span>
          </p>
          <p className="mt-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
            Experience the AI difference
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;