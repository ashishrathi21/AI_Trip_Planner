import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  getTripById,
  savedTrip as saveTripAPI,
  deleteTripById,
} from "../api/trip.api";
import { useReactToPrint } from "react-to-print";
import { useAuth } from "../context/AuthContext";
import {
  IoArrowBack,
  IoTrashOutline,
  IoBookmarkOutline,
  IoBookmark,
  IoDownloadOutline,
  IoWalletOutline,
  IoCalendarOutline,
  IoPeopleOutline,
  IoWalkOutline,
} from "react-icons/io5";

const TripDetailsPage = () => {
  const { id } = useParams();
  const { user, setUser } = useAuth();
  const [trip, setTrip] = useState(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [itemImages, setItemImages] = useState({});

  const componentRef = useRef();
  const navigate = useNavigate();

  const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: `${trip?.destination || "Trip"}_Itinerary`,
  });

  const fetchUnsplashImages = async (tripData) => {
    const newImages = {};
    const days = tripData?.aiResponse?.days || [];
    const promises = days.map(async (day) => {
      const query = `${tripData.destination} ${day.imageKeyword || "landmark"}`;
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos`,
          {
            params: { query: query, per_page: 1, orientation: "landscape",content_filter: "high" },
            headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
          }
        );
        const imageUrl = response.data.results[0]?.urls?.regular;
      
      // Agar Unsplash pe result nahi mila, toh Pollinations AI (AI generated)
      newImages[day.day] = imageUrl || `https://image.pollinations.ai/prompt/${encodeURIComponent(query)}?width=800&height=500&nologo=true`;
      } catch (err) {
        console.error("Error fetching image for day", day.day, err);
        newImages[day.day] =
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800";
      }
    });
    await Promise.all(promises);
    setItemImages(newImages);
  };

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        setLoading(true);
        const res = await getTripById(id);
        if (res.data.success) {
          setTrip(res.data.trip);
          await fetchUnsplashImages(res.data.trip);
          const isAlreadySaved = user?.savedTrips?.some(
            (t) => (typeof t === "string" ? t : t._id) === id
          );
          if (isAlreadySaved) setSaved(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchTripData();
  }, [id, user]);

  const handleSaveTrip = async (tripId) => {
    try {
      const res = await saveTripAPI(tripId);
      if (res.data.success) {
        setSaved(true);
        if (setUser && user) {
          setUser({ ...user, savedTrips: [...user.savedTrips, tripId] });
        }
        alert("Trip saved! 🎉");
      }
    } catch (err) {
      alert("Failed to save. Error: " + err.message);
    }
  };

  const handleDeleteTrip = (tripId) => {
    if (!window.confirm("Delete this trip?")) return;
    deleteTripById(tripId).then(() => {
      navigate("/app/dashboard");
    });
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-blue-600 font-bold animate-pulse">
        Designing your itinerary...
      </div>
    );
  if (!trip)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Trip not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-[#fcfcfd] pb-20">
      {/* HEADER NAVIGATION (No Print) */}
      <nav className="no-print sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/app/dashboard"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-bold"
          >
            <IoArrowBack /> Dashboard
          </Link>
          <div className="flex gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition"
            >
              <IoDownloadOutline size={22} />
            </button>
            <button
              onClick={() => handleDeleteTrip(id)}
              className="p-2 text-red-400 hover:bg-red-50 rounded-full transition"
            >
              <IoTrashOutline size={22} />
            </button>
          </div>
        </div>
      </nav>

      <div
        ref={componentRef}
        className="print-container max-w-5xl mx-auto px-4 py-8 space-y-12"
      >
        {/* HERO: CLEAN & IMPACTFUL */}
        <header className="relative h-[300px] sm:h-[450px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-100">
          <img
            src={`https://image.pollinations.ai/prompt/scenic%20wide%20shot%20of%20${trip?.destination}%20travel?width=1280&height=720&nologo=true`}
            className="w-full h-full object-cover"
            alt={trip?.destination}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent flex flex-col justify-end p-6 sm:p-12">
            <div className="space-y-2">
              <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em]">
                Personalized Itinerary
              </span>
              <h1 className="text-4xl sm:text-7xl font-black text-white tracking-tighter uppercase">
                {trip?.destination}
              </h1>
              <p className="text-white/70 text-sm sm:text-xl font-medium tracking-wide">
                {trip?.days} Days in the heart of culture and adventure
              </p>
            </div>
          </div>
        </header>

        {/* QUICK STATS CARDS */}
        <section className="stats-section grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Budget",
              val: `₹${trip?.budget}`,
              icon: <IoWalletOutline className="text-blue-500" />,
            },
            {
              label: "Duration",
              val: `${trip?.days} Days`,
              icon: <IoCalendarOutline className="text-indigo-500" />,
            },
            {
              label: "Travelers",
              val: trip?.travelersType,
              icon: <IoPeopleOutline className="text-purple-500" />,
            },
            {
              label: "Pace",
              val: trip?.travelStyle || trip?.pace,
              icon: <IoWalkOutline className="text-orange-500" />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 p-5 rounded-3xl shadow-sm flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-xl">
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
                <p className="font-bold text-gray-900 capitalize">{stat.val}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ROADMAP SECTION (The Redesigned Timeline from before) */}
        {/* ROADMAP SECTION */}
        <section className=" space-y-16 pt-10">
          <div className="flex flex-col gap-2 px-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">
                Day-wise Breakdown
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              The Roadmap
            </h2>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {trip?.aiResponse?.days?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-8 lg:gap-16 day-card-container"
              >
                {/* LEFT: IMAGE & DAY NUMBER */}
                <div className="lg:w-5/12">
                  <div className="sticky top-24 space-y-4">
                    {/* Day Header - Better Visibility */}
                    <div className="flex items-end justify-between lg:justify-start lg:gap-6 mb-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-black text-blue-600 uppercase tracking-tighter">
                          Day
                        </span>
                        <h3 className="text-6xl font-black text-gray-900 leading-none">
                          {String(item.day).padStart(2, "0")}
                        </h3>
                      </div>

                      {/* Estimated Cost - Font and Visibility increased */}
                      <div className="bg-green-100 border border-green-200 px-4 py-1.5 rounded-xl">
                        <p className="text-[10px] font-black text-green-700 uppercase tracking-widest leading-none mb-1">
                          Estimated Cost
                        </p>
                        <p className="text-lg font-extrabold text-green-800 leading-none">
                          {item.estimatedCost}
                        </p>
                      </div>
                    </div>

                    {/* Image Container - Hover scope limited to image only */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-xl bg-gray-100">
                      <img
                        src={
                          itemImages[item.day] ||
                          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
                        }
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        alt={`Day ${item.day}`}
                      />
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: TIMELINE CONTENT */}
                <div className="lg:w-7/12 border-l-2 border-gray-100 pl-8 ml-2 relative space-y-10 py-4">
                  {/* Morning Row */}
                  <div className="relative group/item">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-4 border-orange-400 group-hover/item:scale-125 transition-transform"></div>
                    <div className="space-y-1">
                      <h4 className="text-[11px] font-black text-orange-500 uppercase tracking-widest flex items-center gap-2">
                        <span className="sm:hidden">☀️</span> Morning
                      </h4>
                      <p className="text-gray-700 font-medium leading-relaxed text-base sm:text-lg">
                        {item.morning}
                      </p>
                    </div>
                  </div>

                  {/* Afternoon Row */}
                  <div className="relative group/item">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-4 border-blue-500 group-hover/item:scale-125 transition-transform"></div>
                    <div className="space-y-1">
                      <h4 className="text-[11px] font-black text-blue-500 uppercase tracking-widest flex items-center gap-2">
                        <span className="sm:hidden">🍽️</span> Afternoon
                      </h4>
                      <p className="text-gray-700 font-medium leading-relaxed text-base sm:text-lg">
                        {item.afternoon}
                      </p>
                    </div>
                  </div>

                  {/* Evening Row */}
                  <div className="relative group/item">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 group-hover/item:scale-125 transition-transform"></div>
                    <div className="space-y-1">
                      <h4 className="text-[11px] font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2">
                        <span className="sm:hidden">🌙</span> Evening
                      </h4>
                      <p className="text-gray-700 font-medium leading-relaxed text-base sm:text-lg">
                        {item.evening}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM ACTION BAR (No Print) */}
        <section className="no-print bg-gray-900 rounded-[2.5rem] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Love this plan?</h3>
            <p className="text-gray-400 text-sm mt-1">
              Save it to your profile or take it offline as a PDF.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => handleSaveTrip(id)}
              disabled={saved}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold transition ${
                saved
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {saved ? <IoBookmark /> : <IoBookmarkOutline />}{" "}
              {saved ? "Saved" : "Save Trip"}
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-2xl font-bold hover:bg-gray-100 transition"
            >
              <IoDownloadOutline size={20} /> PDF
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TripDetailsPage;
