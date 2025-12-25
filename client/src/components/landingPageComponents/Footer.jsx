import React from "react";
import { Link } from "react-router-dom";
import TravelLogo from "../../assets/distance.png";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                <img src={TravelLogo} alt="logo" className="w-5 h-5 invert brightness-0" />
              </div>
              <h1 className="text-lg font-black text-gray-900 uppercase tracking-tighter">
                AI <span className="text-blue-600">Planner</span>
              </h1>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
              The next generation of travel planning. Harnessing AI to create 
              personalized journeys in seconds. 
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <button className="hover:text-blue-600 transition-colors cursor-pointer"><IoLogoTwitter size={20}/></button>
              <button className="hover:text-blue-600 transition-colors cursor-pointer"><IoLogoLinkedin size={20}/></button>
              <button className="hover:text-blue-600 transition-colors cursor-pointer"><IoLogoGithub size={20}/></button>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.2em] mb-6">Product</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><Link to="/auth" className="hover:text-blue-600 transition-colors">Generate Trip</Link></li>
              <li><Link to="/auth" className="hover:text-blue-600 transition-colors">Features</Link></li>
              <li><Link to="/auth" className="hover:text-blue-600 transition-colors">Sample Plans</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-[10px] font-black text-gray-900 uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} AI Trip Planner — All Rights Reserved
          </p>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
            <a href="https://ashish-rathi-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">By Ashish Rathi</a>
          </p>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
            Built with <span className="text-blue-600">✦</span> for Modern Travelers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;