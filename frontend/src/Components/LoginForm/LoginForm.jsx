import React from "react";
import { Link } from "react-router-dom";
import SignUpWithGoogle from "../SignUpWithGoogle/SignUpWithGoogle";
import PrimaryGradientButton from "../PrimaryGradientButton/PrimaryGradientButton";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/useAuthStore";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggingIn } = useAuthStore();

  const validateForm = () => {
    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!password.trim()) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      login({ email, password });
    }
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center gap-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2 text-white">Login</h2>

      {/* Login Form */}
      <form className="w-full flex flex-col gap-4" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-3 rounded bg-gray-800 outline-none text-white placeholder-gray-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-3 rounded bg-gray-800 outline-none text-white placeholder-gray-400"
        />

        {/* Reset password */}
        <span className="text-xs text-gray-400 text-right cursor-pointer hover:text-blue-400">
          Reset Password
        </span>

        <PrimaryGradientButton
          buttonName={isLoggingIn ? "Logging in..." : "Login"}
          onClick={handleLogin}
          disabled={isLoggingIn}
        />
      </form>

      {/* OR Divider */}
      <div className="w-full flex items-center gap-3 my-1">
        <div className="flex-1 h-px bg-gray-700"></div>
        <span className="text-gray-400 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Google Login */}
      <SignUpWithGoogle />

      {/* Register Link */}
      <p className="text-sm text-gray-400">
        Don’t have an account?{" "}
        <Link to="/" className="text-blue-500 hover:text-blue-400 font-medium">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
