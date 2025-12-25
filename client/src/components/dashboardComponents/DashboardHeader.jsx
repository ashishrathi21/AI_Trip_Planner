import React from "react";
import TravelLogo from "../../assets/distance.png";
import { Link } from "react-router-dom";

const DashboardHeader = ({ user }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
            <img src={TravelLogo} alt="logo" className="w-5 h-5" />
          </div>
          <h1 className="text-lg font-black text-gray-900 uppercase tracking-tighter">
            AI <span className="text-blue-600">Planner</span>
          </h1>
        </div>

        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
              Welcome back
            </p>
            <p className="text-sm font-bold text-gray-900 leading-none">
              {user?.name || "Traveler"}
            </p>
          </div>
          <Link to="/app/profile">
            <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center font-bold shadow-xl group-hover:bg-blue-600 transition-colors duration-300">
              {user?.name?.charAt(0) || "U"}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
