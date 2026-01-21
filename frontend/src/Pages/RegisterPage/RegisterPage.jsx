import React from "react";
import { Link } from "react-router-dom";
import LoginPageVectorImg2 from "../../assets/Images/LoginPageVectorImg2.png";
import SignUpWithGoogle from "../../Components/SignUpWithGoogle/SignUpWithGoogle";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/useAuthStore";

const CreateAccountPage = () => {
  const [fullname, setFullname] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const { register, isRegistering, authUser } = useAuthStore();

  // Don't render the page if user is authenticated
  // The App component will handle showing the main UI
  if (authUser) {
    return null;
  }
  const validateForm = () => {
    if (!fullname.trim()) {
      toast.error("Full name is required");
      return false;
    }

    if (!email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!collegeName.trim()) {
      toast.error("College name is required");
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

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    if (password != rePassword) {
      toast.error("Password must be same");
      return false;
    }

    return true;
  };

  const registerData = (e) => {
    e.preventDefault();
    const result = validateForm();

    if (result) {
      register({ fullname, collegeName, email, password, rePassword });
    }
  };
  return (
    <div className="bg-black min-h-[100dvh] w-full text-white overflow-hidden flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
      <div className="max-sm:m-10 lg:ml-30 w-full md:w-1/2 flex flex-col items-center justify-center gap-6">
        <h2 className="text-3xl font-bold mb-4">Create Account</h2>

        <form
          onSubmit={registerData}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            className="p-3 rounded bg-gray-800 outline-none"
          />

          <input
            type="text"
            onChange={(e) => setCollegeName(e.target.value)}
            value={collegeName}
            placeholder="College Name"
            className="p-3 rounded bg-gray-800 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="p-3 rounded bg-gray-800 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="p-3 rounded bg-gray-800 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => {
              setRePassword(e.target.value);
            }}
            value={rePassword}
            className="p-3 rounded bg-gray-800 outline-none"
          />

          <button
            type="submit"
            disabled={isRegistering}
            className={`
        w-full
        py-3
        rounded-lg
        text-sm
        font-semibold
        text-white
        bg-gradient-to-r from-[#1BF0FF] to-[#144DFB]
        hover:opacity-90
        active:scale-[0.98]
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
      `}
          >
            Register
          </button>
        </form>

        <div className="w-full max-w-md flex items-center gap-3 my-2">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Google signup */}
        <SignUpWithGoogle />

        {/* Already have an account */}
        <p className="text-sm text-gray-400 mt-2">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-400 font-medium"
          >
            Login
          </Link>
        </p>
      </div>

      {/* Right Section – Branding */}
      <div className="lg:mr-30 hidden md:flex flex-col md:w-1/2 items-center justify-center">
        <h1 className="text-4xl text-right font-bold m-5">CampusClique</h1>

        <img
          src={LoginPageVectorImg2}
          alt="Register Illustration"
          className="w-full max-w-md lg:max-w-lg h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default CreateAccountPage;
