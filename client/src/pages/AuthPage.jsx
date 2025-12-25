import React, { useState } from "react";
import TravelLogo from "../assets/distance.png";
import { loginUser, signupUser } from "../api/auth.api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoSparkles } from "react-icons/io5";
import Login from "../components/authComponents/Login";
import SignUp from "../components/authComponents/SignUp";

const AuthPage = () => {
  const [currState, setCurrState] = useState("SignUp");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleAuthSuccess = (data) => {
    if (data.token) localStorage.setItem("token", data.token);
    setUser(data.user);
    navigate("/app/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfcfd] relative overflow-hidden px-4">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-50"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="flex items-center justify-center mb-2 gap-5">
          <div className="bg-blue-600 w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-2xl">
            <img
              src={TravelLogo}
              alt="logo"
              className="w-8 h-8 invert brightness-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <IoSparkles className="text-blue-600 animate-pulse" />
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">
              AI Trip Planner
            </span>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl p-8 sm:p-10 border border-gray-100">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">
              {currState === "SignUp" ? "Get Started" : "Welcome Back"}
            </h1>
          </header>

          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 text-red-600 text-[11px] font-bold text-center">
              {error}
            </div>
          )}

          {currState === "SignUp" ? (
            <SignUp
              onAuthSuccess={handleAuthSuccess}
              onToggle={() => setCurrState("Login")}
              signupAPI={signupUser}
              loading={loading}
              setLoading={setLoading}
              setError={setError}
            />
          ) : (
            <Login
              onAuthSuccess={handleAuthSuccess}
              onToggle={() => setCurrState("SignUp")}
              loginAPI={loginUser}
              loading={loading}
              setLoading={setLoading}
              setError={setError}
            />
          )}
        </div>

        <p className="text-center mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          Secure AI Authentication • {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
