import React from "react";
import Hero from "../components/landingPageComponents/Hero";
import Navbar from "../components/landingPageComponents/Navbar";
import ProblemSection from "../components/landingPageComponents/ProblemSection";
import SolutionSection from "../components/landingPageComponents/SolutionSection";
import HowItWorks from "../components/landingPageComponents/HowItWorks";
import Features from "../components/landingPageComponents/Features";
import SampleItinerary from "../components/landingPageComponents/SampleItinerary";
import FinalCTA from "../components/landingPageComponents/FinalCTA";
import Footer from "../components/landingPageComponents/Footer";

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#fcfcfd] overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <div className="absolute top-20 left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-20 right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <Hero />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-32 border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <ProblemSection />
        </div>
      </section>

      <section className="bg-[#fcfcfd] py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-32">
          <SolutionSection />

          <div className="bg-white rounded-[3rem] p-8 sm:p-16 shadow-xl shadow-blue-50/50 border border-gray-50">
            <HowItWorks />
          </div>

          <Features />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
              Real Output
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tighter">
              Seeing is <span className="text-blue-600">Believing</span>
            </h2>
          </div>
          <SampleItinerary />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          <FinalCTA />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
