import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, updateProfileAPI } from "../api/auth.api";
import { useAuth } from "../context/AuthContext";
import { IoArrowBack, IoLogOutOutline, IoPersonOutline, IoColorWandOutline } from "react-icons/io5";

const ALL_PREFERENCES = ["Beaches", "Food", "Culture", "Nature", "Adventure", "Shopping", "Nightlife"];

const ProfilePage = () => {
  const { logout, setUser: setGlobalUser } = useAuth();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentUser().then((res) => {
      setUser(res.data.user);
    });
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to logout?")) {
      await logout();
      navigate("/auth");
    }
  };

  const handleUpdateProfile = async () => {
    if (!isEdit) {
      setIsEdit(true);
      return;
    }

    try {
      setLoading(true);
      const res = await updateProfileAPI({
        name: user.name,
        bio: user.bio,
        preferences: user.preferences,
        travelStyle: user.travelStyle,
      });

      if (res.data.success) {
        setGlobalUser(res.data.user);
        setUser(res.data.user);
        alert("Profile updated successfully! 🎉");
        setIsEdit(false);
      }
    } catch (err) {
      console.error("Update failed:", err);
      alert("Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  const togglePreference = (pref) => {
    setUser((prev) => ({
      ...prev,
      preferences: prev.preferences.includes(pref)
        ? prev.preferences.filter((p) => p !== pref)
        : [...prev.preferences, pref],
    }));
  };

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfcfd]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="font-bold text-gray-400 uppercase tracking-widest text-xs">Loading Profile...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfcfd] px-4 py-10 sm:py-14">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link to="/app/dashboard">
            <button className="flex items-center gap-2 text-gray-500 cursor-pointer hover:text-blue-600 font-bold text-xs uppercase tracking-widest transition-colors group">
              <IoArrowBack className="group-hover:-translate-x-1 transition-transform"/> Back to Dashboard
            </button>
          </Link>
        </div>

        {/* PROFILE HEADER CARD */}
        <section className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-50/50 border border-gray-100 p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
          
          <div className="shrink-0 relative">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center text-4xl font-black shadow-2xl shadow-blue-200">
              {user?.name?.charAt(0) || "U"}
            </div>
            
          </div>

          <div className="flex-1 w-full space-y-6 relative z-10">
            {!isEdit ? (
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                   Member Account
                </div>
                <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tighter">
                  {user?.name}
                </h1>
                <p className="text-gray-400 font-medium">{user?.email}</p>
                <p className="text-gray-600 leading-relaxed max-w-md italic">
                  "{user?.bio || "No bio added yet. Tell us about your travel soul..."}"
                </p>
                <div className="pt-2">
                  <span className="px-4 py-2 rounded-xl bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.2em]">
                    Pace: {user?.travelStyle || "Moderate"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-3 focus:ring-4 focus:ring-blue-50 outline-none focus:border-blue-200 transition-all font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Traveler Bio</label>
                  <textarea
                    rows="3"
                    value={user.bio}
                    onChange={(e) => setUser({ ...user, bio: e.target.value })}
                    className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-3 focus:ring-4 focus:ring-blue-50 outline-none focus:border-blue-200 transition-all font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Travel Pace</label>
                  <select
                    value={user.travelStyle}
                    onChange={(e) => setUser({ ...user, travelStyle: e.target.value })}
                    className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-3 focus:ring-4 focus:ring-blue-50 outline-none focus:border-blue-200 transition-all font-medium appearance-none cursor-pointer"
                  >
                    <option>Relaxed</option>
                    <option>Moderate</option>
                    <option>Packed</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="w-full md:w-auto shrink-0 pt-4 md:pt-0">
            <button
              onClick={handleUpdateProfile}
              disabled={loading}
              className={`w-full md:w-auto cursor-pointer px-3 py-2 rounded-lg font-black text-sm uppercase tracking-widest transition-all shadow-xl active:scale-95 ${
                isEdit
                  ? "bg-green-600 text-white shadow-green-100 hover:bg-green-700"
                  : "bg-blue-600 text-white shadow-blue-100 hover:bg-blue-700"
              }`}
            >
              {loading ? "Saving..." : isEdit ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </section>

        {/* PREFERENCES SECTION */}
        <section className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-50/50 border border-gray-100 p-6 sm:p-10">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <IoPersonOutline className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">Travel Interests</h2>
            </div>
            {isEdit && (
              <span className="text-[10px] bg-blue-600 text-white px-3 py-1 rounded-full font-black animate-pulse uppercase tracking-widest">
                Selecting
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {ALL_PREFERENCES.map((pref) => (
              <button
                key={pref}
                onClick={() => isEdit && togglePreference(pref)}
                className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2
                  ${
                    user?.preferences?.includes(pref)
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100"
                      : "bg-white text-gray-400 border-gray-50 hover:border-gray-200"
                  }
                  ${isEdit ? "cursor-pointer active:scale-90" : "cursor-default opacity-80"}
                `}
              >
                {pref}
              </button>
            ))}
          </div>
        </section>

        {/* LOGOUT ACTION */}
        <div className="flex justify-center pt-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-red-500 font-bold text-xs uppercase tracking-[0.3em] transition-all group py-4"
          >
            <IoLogOutOutline className="text-lg group-hover:rotate-12 transition-transform" />
            Logout Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;