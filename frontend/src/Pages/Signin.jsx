import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SigninPreview = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#070a13] p-4">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
      >
        Sign in to CheckPoint
      </motion.h1>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-md rounded-lg border border-slate-700 shadow-2xl shadow-black/50 overflow-hidden"
      >
        <div className="p-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-md font-medium text-slate-200">
                Email
              </label>
              <div className="flex items-center border border-slate-600 rounded-md focus-within:border-slate-400 transition-colors duration-300">
                <Mail className="m-2 text-slate-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-2 py-2 outline-none text-lg bg-transparent text-white placeholder-slate-500"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-md font-medium text-slate-200">
                Password
              </label>
              <div className="flex items-center border border-slate-600 rounded-md focus-within:border-slate-400 transition-colors duration-300">
                <Lock className="m-2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-2 py-2 outline-none text-lg bg-transparent text-white placeholder-slate-500"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="m-2 focus:outline-none hover:text-slate-300"
                >
                  {showPassword ? (
                    <EyeOff className="text-slate-400 hover:text-slate-300" />
                  ) : (
                    <Eye className="text-slate-400 hover:text-slate-300" />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-6 py-2 bg-[#18294d] text-white rounded-md hover:bg-[#18295dd8] transition-colors duration-300 text-lg font-semibold"
                type="submit"
              >
                Sign In
              </motion.button>
              <div className="flex gap-2 text-slate-200">
                <div>New User?</div>
                <NavLink
                to="/signup"
                className=" hover:text-white hover:underline transition-colors duration-300"
              >
                Register Here
              </NavLink>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SigninPreview;