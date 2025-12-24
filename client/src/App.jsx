import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";

import Landing from "./pages/LandingPage";
import Login from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTripPage";
import TripDetails from "./pages/TripDetailsPage";
import SavedTrips from "./pages/SavedTripsPage";
import Profile from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Login />} />

        <Route path="/app" element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="create" element={<CreateTrip />} />
          <Route path="trips/:id" element={<TripDetails />} />
          <Route path="saved" element={<SavedTrips />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
