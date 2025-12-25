import React, { useEffect, useState } from "react";
import { getTrips } from "../api/trip.api";
import { getCurrentUser } from "../api/auth.api";
import DashboardHeader from "../components/dashboardComponents/DashboardHeader";
import Card from "../components/dashboardComponents/Card";
import RecentTripsCard from "../components/dashboardComponents/RecentTripsCard";
import { Link } from "react-router-dom";
import { IoSettingsSharp, IoCreate, IoArchive } from "react-icons/io5";

const Dashboard = () => {
  const [recentTrips, setRecentTrips] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getTrips().then((res) => {
      setRecentTrips(res.data.trips);
    });
    getCurrentUser().then((res) => {
      setUser(res.data.user);
    });
  }, []);

  const cards = [
    {
      title: "Create New Trip",
      icon: <IoCreate />,
      description: "Generate a personalized itinerary using AI.",
      buttonText: "Start Planning →",
      linkTo: "/app/create",
    },
    {
      title: "Saved Trips",
      icon: <IoArchive />,
      description: "View and manage your previously planned trips.",
      buttonText: "View Trips →",
      linkTo: "/app/saved",
    },
    {
      title: "Profile Settings",
      icon: <IoSettingsSharp />,
      description: "Update your preferences and travel style.",
      buttonText: "Edit Profile →",
      linkTo: "/app/profile",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfd]">
      <DashboardHeader user={user} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">
              Overview
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Travel Dashboard
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-md">
            Your personal hub for AI-powered travel planning and saved
            adventures.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              Recent Itineraries
            </h3>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Total: {recentTrips.length}
            </span>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl shadow-blue-50/50 border border-gray-100 overflow-hidden transition-all">
            {recentTrips.length === 0 ? (
              <div className="p-12 sm:p-20 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <IoCreate size={30} />
                </div>
                <p className="text-gray-500 font-medium">
                  No trips generated yet.
                </p>
                <Link to="/app/create">
                  <button className="mt-4 text-blue-600 font-bold hover:underline underline-offset-4 decoration-2">
                    Start your first journey →
                  </button>
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-gray-50">
                {recentTrips.map((trip, index) => (
                  <RecentTripsCard key={index} {...trip} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
