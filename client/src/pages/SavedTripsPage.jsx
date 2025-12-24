import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllSavedTrips } from "../api/trip.api";
import { IoArrowBack, IoAdd, IoWalletOutline, IoTimerOutline, IoCompassOutline } from "react-icons/io5";

const SavedTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAllSavedTrips()
      .then((res) => {
        if (res.data.success) {
          setTrips(res.data.savedTrips);
        }
      })
      .catch((err) => console.error("Error fetching saved trips:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcfcfd]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="font-bold text-gray-400 uppercase tracking-widest text-xs">Fetching Adventures...</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#fcfcfd] px-4 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation & Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <Link to="/app/dashboard">
               <button className="cursor-pointer flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-colors group">
                 <IoArrowBack className="group-hover:-translate-x-1 transition-transform"/> Back to Dashboard
               </button>
            </Link>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">Vault</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tighter">
              Saved <span className="text-blue-600">Journeys</span>
            </h1>
          </div>

          <Link to="/app/create">
            <button className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 w-full sm:w-auto justify-center">
              <IoAdd size={20} /> Create New Trip
            </button>
          </Link>
        </div>

        {trips.length === 0 ? (
          <div className="bg-white rounded-[2.5rem] border border-dashed border-gray-200 p-16 sm:p-24 text-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
               <IoCompassOutline size={40} className="animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Your collection is empty</h3>
            <p className="text-gray-500 max-w-xs mx-auto mb-8 text-sm">
              You haven't saved any travel plans yet. Let's build your dream itinerary today.
            </p>
            <Link to="/app/create">
              <button className="text-blue-600 font-black text-xs uppercase tracking-widest hover:underline underline-offset-8">
                Plan your first trip →
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div
                key={trip._id}
                onClick={() => navigate(`/app/trips/${trip._id}`)}
                className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 cursor-pointer flex flex-col"
              >
                {/* Visual Header (Mock Image Background) */}
                <div className="h-32 bg-gray-900 relative overflow-hidden">
                   <img 
                    src={`https://image.pollinations.ai/prompt/scenic%20view%20of%20${trip?.destination}%20landmark?width=400&height=200&nologo=true`} 
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                    alt=""
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                   <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                      {trip?.days} Days
                   </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight capitalize group-hover:text-blue-600 transition-colors">
                      {trip?.destination}
                    </h3>
                    <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">
                      {trip?.countryEmoji || "📍"}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-50 group-hover:bg-blue-50 transition-colors">
                      <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                         <IoWalletOutline size={12} />
                         <p className="text-[9px] uppercase font-black tracking-widest">Budget</p>
                      </div>
                      <p className="font-bold text-gray-800 text-sm">₹{trip.budget}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-50 group-hover:bg-blue-50 transition-colors">
                      <div className="flex items-center gap-1.5 text-gray-400 mb-1">
                         <IoTimerOutline size={12} />
                         <p className="text-[9px] uppercase font-black tracking-widest">Style</p>
                      </div>
                      <p className="font-bold text-gray-800 text-sm truncate capitalize">
                        {trip.travelStyle || trip.pace || "Moderate"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
                     <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details →
                     </span>
                     <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">
                        {trip?.travelersType}
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedTripsPage;