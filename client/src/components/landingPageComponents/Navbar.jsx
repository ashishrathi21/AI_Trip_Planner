import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/distance.png";
import { IoSparkles } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="sticky top-4 z-50 mx-4 sm:mx-8 lg:mx-12">
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-white/20 rounded-[1.5rem] shadow-2xl shadow-blue-100/20">
        <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-blue-600 h-10 w-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform duration-300">
              <img
                src={logo}
                alt="Logo"
                className="w-6 h-6 invert brightness-0"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-black text-gray-900 uppercase tracking-tighter leading-none">
                AI <span className="text-blue-600">Planner</span>
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <IoSparkles className="text-blue-600 text-[8px] animate-pulse" />
                <span className="text-[7px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                  Smart Trips
                </span>
              </div>
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {["Home", "How It Works", "Features"].map((item) => (
              <li
                key={item}
                className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] cursor-pointer hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <Link to="/auth">
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-blue-600 hover:-translate-y-0.5 transition-all active:scale-95 cursor-pointer">
              Start Planning
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
