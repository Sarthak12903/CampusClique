import ProfilePic from "../../assets/GradientIcons/ProfilePic.png";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function NavBar({ onMenuClick }) {
  const { authUser, logout } = useAuthStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="w-full h-16 bg-[#1e1e1e] border-b border-gray-700 flex justify-between items-center px-4 md:px-6 sticky top-0 z-40">
      <AiOutlineMenu
        onClick={onMenuClick}
        className="md:hidden text-white text-2xl cursor-pointer"
      />
      <h1 className="font-bold text-2xl text-white">CampusClique</h1>

      {/* SearchBar */}
      <SearchBar />

      {/* Profile Tab */}
      <div
        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#34D399] cursor-pointer hover:bg-gray-900 transition"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img
          src={ProfilePic}
          alt="ProfilePic"
          className="rounded-full h-8 w-8"
        />
        <p className="text-white font-semibold text-sm hidden lg:block whitespace-nowrap">
          {authUser?.fullname || "User"}
        </p>
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute top-16 right-6 bg-[#1e1e1e] border-2 border-[#34D399] rounded-xl p-4 z-50 w-64 shadow-lg">
          <div className="text-white mb-4">
            <p className="font-bold text-lg">{authUser?.fullname}</p>
            <p className="text-xs text-gray-400">{authUser?.email}</p>
            <p className="text-xs text-gray-400">{authUser?.collegeName}</p>
          </div>
          <hr className="border-gray-700 my-3" />
          <button
            onClick={() => {
              navigate("/profile");
              setShowDropdown(false);
            }}
            className="block w-full text-left px-3 py-2 text-white hover:bg-gray-800 rounded text-sm font-medium mb-2"
          >
            👤 View Profile
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-800 rounded text-sm font-medium"
          >
            🚪 Logout
          </button>
        </div>
      )}

      {/* Mobile Profile Icon */}
      <img
        src={ProfilePic}
        alt="ProfilePic"
        className="flex md:hidden rounded-full h-8 w-8 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      />
    </div>
  );
}

      {/* MobileTab  */}
      <img
        src={ProfilePic}
        alt="ProfilePic"
        className="flex md:hidden rounded-full h-8 w-8  border-2 border-white-400 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      />
    </div>
  );
}
