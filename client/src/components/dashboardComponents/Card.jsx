import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, buttonText, linkTo, icon }) => {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 group relative overflow-hidden">
      <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-50 rounded-full blur-3xl group-hover:bg-blue-100 transition-colors"></div>

      <div className="relative z-10">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <Link to={linkTo}>
          <button className="text-blue-600 hover:scale-110 cursor-pointer font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all duration-300">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
