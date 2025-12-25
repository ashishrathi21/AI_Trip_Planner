import React from "react";
import { Link } from "react-router-dom";
import { IoPlanetOutline } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <IoPlanetOutline className="text-9xl text-blue-600 animate-pulse" />
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              404
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-4">
          Lost in Space?
        </h1>
        <p className="text-gray-500 text-base sm:text-lg mb-8 max-w-md mx-auto">
          Oops! The destination you're looking for doesn't exist in our
          itinerary. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/app/dashboard" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Go to Dashboard
            </button>
          </Link>

          <Link to="/" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white text-gray-600 px-8 py-3 rounded-xl font-bold border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer">
              Landing Page
            </button>
          </Link>
        </div>

        <p className="mt-12 text-gray-400 text-xs uppercase tracking-widest font-medium">
          AI Trip Planner • 2024
        </p>
      </div>
    </div>
  );
};

export default NotFound;
