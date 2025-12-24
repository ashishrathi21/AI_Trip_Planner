import React from "react";
import {
  IoWalletOutline,
  IoTimeOutline,
  IoHeartOutline,
  IoFootstepsOutline,
  IoSparkles
} from "react-icons/io5";

const SolutionSection = () => {
  const features = [
    { title: "Your budget", icon: <IoWalletOutline />, label: "Finance" },
    { title: "Your time", icon: <IoTimeOutline />, label: "Schedule" },
    { title: "Your interests", icon: <IoHeartOutline />, label: "Vibe" },
    { title: "Your pace", icon: <IoFootstepsOutline />, label: "Intensity" },
  ];

  return (
    <div className="w-full py-10 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Modern Header */}
        <div className="space-y-4 mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-blue-100">
             <IoSparkles className="animate-pulse" /> Intelligence
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-[0.95]">
            Meet Your Personal <br className="hidden sm:block" />
            <span className="text-blue-600">AI Travel Assistant</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-xl font-medium leading-relaxed px-4 pt-4">
            Our AI doesn't just look at maps. It understands how <span className="text-gray-900 font-bold underline decoration-blue-200 underline-offset-4">real people</span> travel. 
            Every plan is a unique reflection of you.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle Icon Background */}
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-inner">
                  {item.icon}
                </div>

                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2">
                  {item.label}
                </p>
                
                <p className="font-black text-gray-900 text-xl tracking-tight uppercase group-hover:text-blue-600 transition-colors">
                  {item.title}
                </p>

                <div className="mt-6 flex gap-1 items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                   <div className="h-1 w-1 rounded-full bg-blue-600"></div>
                   <div className="h-1 w-8 rounded-full bg-blue-600"></div>
                   <div className="h-1 w-1 rounded-full bg-blue-600"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-xl shadow-blue-50/50 group hover:border-blue-200 transition-colors">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
              AI Engine <span className="text-blue-600">Online</span> & Ready to Plan
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;