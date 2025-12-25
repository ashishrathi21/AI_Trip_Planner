import React, { useState } from "react";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";

const Login = ({
  onAuthSuccess,
  onToggle,
  loginAPI,
  loading,
  setLoading,
  setError,
}) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await loginAPI(formData);
      if (res.data.success) onAuthSuccess(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
      <div className="relative">
        <IoMailOutline
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          placeholder="Email Address"
          required
          autoComplete="new-email"
          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium"
        />
      </div>
      <div className="relative">
        <IoLockClosedOutline
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          type="password"
          placeholder="Password"
          required
          autoComplete="new-password"
          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium"
        />
      </div>
      <button
        disabled={loading}
        className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white transition-all ${
          loading ? "bg-gray-200" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={onToggle}
          className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] hover:text-blue-600"
        >
          New here?{" "}
          <span className="text-blue-600 underline underline-offset-4">
            Create Account
          </span>
        </button>
      </div>
    </form>
  );
};

export default Login;
