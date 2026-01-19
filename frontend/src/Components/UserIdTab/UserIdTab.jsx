import React from "react";
import ProfilePic from "../../assets/GradientIcons/ProfilePic.png";
import { useAuthStore } from "../../store/useAuthStore";
const UserIdTab = () => {
  const { authUser } = useAuthStore();
  return (
    <div
      className="absolute bottom-2 left-4 
                flex items-center gap-3
                bg-black px-4 py-2 rounded-xl text-white"
    >
      <img
        src={ProfilePic}
        alt="PP"
        className="h-12 w-12 rounded-full flex-shrink-0"
      />
      <div className="min-w-0">
        <p className="font-bold text-sm">{authUser?.fullname || "User"}</p>
        <p className="text-xs text-gray-400 truncate">
          {authUser?.collegeName || "College"}
        </p>
      </div>
    </div>
  );
};

export default UserIdTab;
