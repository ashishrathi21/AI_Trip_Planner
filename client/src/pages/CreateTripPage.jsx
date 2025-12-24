import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createTrip } from "../api/trip.api";
import { useAuth } from "../context/AuthContext";
import { MdFamilyRestroom } from "react-icons/md";
import { GiThreeFriends } from "react-icons/gi";
import { IoManSharp, IoWomanSharp, IoArrowBack, IoSparkles } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";

const CreateTripPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    days: "",
    interests: [],
    travelstyle: "Moderate",
    travelersType: "Single",
  });

  const travelerOptions = [
    { label: "Single", icon: <IoIosMan size={24} />, desc: "Solo" },
    { 
      label: "Couple", 
      icon: <div className="flex -space-x-1"><IoManSharp size={22}/><IoWomanSharp size={22}/></div>, 
      desc: "Romantic" 
    },
    { label: "Family", icon: <MdFamilyRestroom size={24} />, desc: "Group" },
    { label: "Friends", icon: <GiThreeFriends size={24} />, desc: "Squad" },
  ];

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        interests: user.preferences?.length > 0 ? user.preferences : prev.interests,
        travelstyle: user.travelStyle || "Moderate",
      }));
    }
  }, [user]);

  const interestsList = ["Adventure", "Beaches", "Culture", "Food", "Nature", "Shopping", "Nightlife"];

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.interests.length === 0) {
      alert("Please select at least one interest!");
      return;
    }
    setLoading(true);
    try {
      const res = await createTrip(formData);
      if (res.data.success && res.data.trip?._id) {
        navigate(`/app/trips/${res.data.trip._id}`);
      }
    } catch (error) {
      alert("Something went wrong. Please try again. Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] px-4 py-10 sm:py-16">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link to="/app/dashboard">
            <button className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-colors group">
              <IoArrowBack className="group-hover:-translate-x-1 transition-transform"/> Back to Dashboard
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-50/50 border border-gray-100 p-6 sm:p-12 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>

          <div className="relative z-10">
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <IoSparkles className="text-blue-600 animate-pulse" />
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">AI Planner</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tighter">
                Build Your Journey
              </h1>
              <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
                Provide your preferences and let our AI engine design <br className="hidden sm:block"/> a personalized itinerary just for you.
              </p>
            </header>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Destination & Days */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Where to?</label>
                  <input
                    type="text"
                    placeholder="e.g. Paris, France"
                    className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 focus:ring-4 focus:ring-blue-50 outline-none focus:border-blue-200 transition-all font-medium"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Total Days</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    placeholder="7"
                    className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 focus:ring-4 focus:ring-blue-50 outline-none focus:border-blue-200 transition-all font-medium"
                    value={formData.days}
                    onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Budget (INR)</label>
                <input
                  type="number"
                  placeholder="e.g. 50000"
                  className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 focus:ring-4 focus:ring-blue-50 outline-none focus:border-blue-200 transition-all font-medium"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  required
                  disabled={loading}
                />
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">What defines this trip?</label>
                <div className="flex flex-wrap gap-2">
                  {interestsList.map((interest) => (
                    <button
                      type="button"
                      key={interest}
                      disabled={loading}
                      onClick={() => handleInterestChange(interest)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all border-2 ${
                        formData.interests.includes(interest)
                          ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100"
                          : "bg-white text-gray-400 border-gray-50 hover:border-gray-200"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {/* Travel Pace */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Travel Intensity</label>
                <div className="grid grid-cols-3 gap-3">
                  {["Relaxed", "Moderate", "Packed"].map((p) => (
                    <button
                      type="button"
                      key={p}
                      disabled={loading}
                      onClick={() => setFormData({ ...formData, travelstyle: p })}
                      className={`py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] border-2 transition-all ${
                        formData.travelstyle === p
                          ? "bg-gray-900 text-white border-gray-900 shadow-xl"
                          : "bg-white text-gray-400 border-gray-50 hover:border-gray-200"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              {/* Travelers Type */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Travel Companion</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {travelerOptions.map((option) => (
                    <button
                      key={option.label}
                      type="button"
                      disabled={loading}
                      onClick={() => setFormData({ ...formData, travelersType: option.label })}
                      className={`flex flex-col items-center justify-center p-5 rounded-[1.5rem] border-2 transition-all duration-300 gap-2 ${
                        formData.travelersType === option.label
                          ? "border-blue-600 bg-blue-50 text-blue-600 shadow-inner"
                          : "border-gray-50 bg-gray-50 text-gray-400 hover:bg-gray-100"
                      }`}
                    >
                      <div className={`${formData.travelersType === option.label ? "scale-110" : ""} transition-transform`}>
                        {option.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className={`cursor-pointer w-full py-5 rounded-[1.5rem] font-black text-sm uppercase tracking-[0.3em] transition-all shadow-2xl ${
                    loading
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-blue-600 text-white shadow-blue-100 hover:bg-blue-700 active:scale-95"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing with AI
                    </span>
                  ) : (
                    "Generate Itinerary"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTripPage;