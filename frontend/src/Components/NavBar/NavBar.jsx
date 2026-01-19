import ProfilePic from "../../assets/GradientIcons/ProfilePic.png";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export default function NavBar({onMenuClick}) {
  const { authUser, logout } = useAuthStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="w-screen max-sm:p-5 sm:px-10 md:px-80 lg:px-60  h-[5rem] bg-[#1e1e1e] flex justify-between items-center relative">
      <AiOutlineMenu   onClick={onMenuClick}
        className="md:hidden text-white text-2xl cursor-pointer" />
      <h1 className="font-bold max-sm:text-xl sm:text-2xl text-white">CampusClique</h1>

      {/* SearchBAr */}
     <SearchBar/>

     {/* Profile Tab */}
      <div 
        className="rounded-full hidden md:flex border-2 border-[#34D399] h-[2.5em] w-auto p-1 flex items-center justify-between cursor-pointer hover:bg-gray-900 transition"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p className="text-sm text-white truncate pl-2">{authUser?.fullname || "User"}</p>
        <img src={ProfilePic} alt="ProfilePic" className="rounded-full h-[2em] w-[25%]" />
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute top-20 right-40 bg-[#1e1e1e] border-2 border-[#34D399] rounded-lg p-4 z-50">
          <div className="text-white mb-3">
            <p className="font-semibold">{authUser?.fullname}</p>
            <p className="text-xs text-gray-400">{authUser?.email}</p>
            <p className="text-xs text-gray-400">{authUser?.collegeName}</p>
          </div>
          <hr className="border-gray-700 my-2" />
          <button
            onClick={() => navigate("/profile")}
            className="block w-full text-left px-2 py-2 text-white hover:bg-gray-800 rounded text-sm"
          >
            View Profile
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-2 py-2 text-red-500 hover:bg-gray-800 rounded text-sm"
          >
            Logout
          </button>
        </div>
      )}

      {/* MobileTab  */}
       <img src={ProfilePic} alt="ProfilePic" className="flex md:hidden rounded-full h-8 w-8  border-2 border-white-400 cursor-pointer" onClick={() => setShowDropdown(!showDropdown)} />
    </div>
       
       
   

  );
}
