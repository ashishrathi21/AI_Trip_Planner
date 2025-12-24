import React from "react";
import {
  IoSparklesOutline,
  IoCalendarOutline,
  IoCashOutline,
  IoOptionsOutline,
  IoMapOutline,
  IoCloudDownloadOutline,
} from "react-icons/io5";

const Features = () => {
  const features = [
    {
      title: "Personalized itineraries",
      desc: "Every plan is unique to your tastes, interests, and past travel soul.",
      icon: <IoSparklesOutline />,
    },
    {
      title: "Day-wise smart planning",
      desc: "Optimized routes to save time and reduce travel fatigue significantly.",
      icon: <IoCalendarOutline />,
    },
    {
      title: "Budget-aware picks",
      desc: "Get recommendations that fit your wallet perfectly without compromise.",
      icon: <IoCashOutline />,
    },
    {
      title: "AI-powered edits",
      desc: "Change one thing, and our AI re-optimizes the whole day instantly.",
      icon: <IoOptionsOutline />,
    },
    {
      title: "Interactive maps",
      desc: "Visualise your journey with integrated navigation and points of interest.",
      icon: <IoMapOutline />,
    },
    {
      title: "Offline Access",
      desc: "Download your plans and access them without roaming data or WiFi.",
      icon: <IoCloudDownloadOutline />,
    },
  ];

  return (
    <div className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-100">
             Powerful Toolkit
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-[0.95]">
            Everything you need for <br className="hidden sm:block" />
            <span className="text-blue-600">Stress-Free Travel</span>
          </h2>
          <p className="mt-6 text-gray-500 font-medium max-w-xl mx-auto text-sm sm:text-lg">
            Our AI doesn't just plan; it understands. Experience a travel assistant that works around your life.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 sm:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative background glow for each card */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gray-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-sm">
                  {feature.icon}
                </div>

                <h3 className="font-black text-gray-900 text-xl sm:text-2xl mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                  {feature.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="h-px w-6 bg-blue-600"></span>
                   <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Learn More</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;