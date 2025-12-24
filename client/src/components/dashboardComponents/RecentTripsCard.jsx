import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const RecentTripsCard = ({ ...trip }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/app/trips/${trip._id}`)}
      className="group p-6 flex flex-col sm:flex-row justify-between items-center bg-white hover:bg-blue-50/30 cursor-pointer transition-all duration-300"
    >
      <div className="flex gap-5 items-center w-full sm:w-auto">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shrink-0 shadow-sm">
          <MapPin size={24} />
        </div>

        <div className="flex-1">
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">
            Destination
          </p>
          <h4 className="text-lg font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">
            {trip?.destination || "New Adventure"}
          </h4>
          <div className="flex items-center gap-4 mt-1">
            <span className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
              <Calendar size={14} className="text-blue-400" />
              {trip?.days ? `${trip?.days} Days` : "Planning..."}
            </span>
            <span className="text-gray-200">|</span>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {trip?.travelStyle || "Custom"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4 sm:mt-0 w-full sm:w-auto justify-end">
        <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:text-blue-600 group-hover:border-blue-200 group-hover:translate-x-1 transition-all bg-white shadow-sm">
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default RecentTripsCard;
