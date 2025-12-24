import React, { useState } from "react";
import TravelLogo from "../assets/distance.png";
import { loginUser, signupUser } from "../api/auth.api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline, IoSparkles } from "react-icons/io5";

const AuthPage = () => {
  const [currState, setCurrState] = useState("SignUp");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let res;
      if (currState === "SignUp") {
        res = await signupUser({ name: fullName, email, password });
      } else {
        res = await loginUser({ email, password });
      }

      if (res.data.success) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }
        setUser(res.data.user);
        setFullName("");
        setEmail("");
        setPassword("");
        navigate("/app/dashboard");
      }
    } catch (err) {
      console.error("Authentication Error:", err);
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfcfd] relative overflow-hidden px-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-50"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="flex items-center justify-center mb-2 gap-5">
          <div className="bg-blue-600 w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-2xl shadow-blue-200 mb-4 transition-transform hover:rotate-6">
            <img
              src={TravelLogo}
              alt="logo"
              className="w-8 h-8 invert brightness-0"
            />
          </div>
          <div className="flex items-center gap-2">
            <IoSparkles className="text-blue-600 animate-pulse" />
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em]">AI Trip Planner</span>
          </div>
        </div>

        {/* Card Section */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-100/50 p-8 sm:p-10 border border-gray-100">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">
              {currState === "SignUp" ? "Get Started" : "Welcome Back"}
            </h1>
            <p className="text-gray-400 mt-2 text-sm font-medium">
              {currState === "SignUp"
                ? "Create your vault and start exploring."
                : "Plan your next big adventure with AI."}
            </p>
          </header>

          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-[11px] font-bold uppercase tracking-wider text-center animate-shake">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
            {currState === "SignUp" && (
              <div className="relative">
                <IoPersonOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  autoComplete="new-name"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:bg-white outline-none transition-all font-medium text-gray-700"
                  required
                />
              </div>
            )}

            <div className="relative">
              <IoMailOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                autoComplete="new-email"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:bg-white outline-none transition-all font-medium text-gray-700"
                required
              />
            </div>

            <div className="relative">
              <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 focus:bg-white outline-none transition-all font-medium text-gray-700"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 cursor-pointer active:scale-95 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white shadow-2xl transition-all active:scale-95 ${
                loading
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-100"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Authenticating
                </div>
              ) : currState === "SignUp" ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Toggle Button */}
          <div className="mt-10 pt-6 border-t border-gray-50 text-center">
            <button
              onClick={() => {
                setCurrState(currState === "SignUp" ? "Login" : "SignUp");
                setError("");
              }}
              className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-blue-600 transition-colors"
            >
              {currState === "SignUp" ? (
                <>Already have an account? <span className="text-blue-600 underline underline-offset-4 cursor-pointer">Login</span></>
              ) : (
                <>New here? <span className="text-blue-600 underline underline-offset-4 cursor-pointer">Create Account</span></>
              )}
            </button>
          </div>
        </div>
        
        {/* Simple Footer */}
        <p className="text-center mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          Secure AI Authentication • 2024
        </p>
      </div>
    </div>
  );
};

export default AuthPage;