import UserIdTab from "../UserIdTab/UserIdTab";
import { MdEdit } from "react-icons/md";
import { useAuthStore } from "../../store/useAuthStore";
const ProfileTab = () => {
  const { authUser } = useAuthStore();
  return (
    <div className="relative w-full h-56 rounded-xl border-b border-gray-700 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
      {/*User Pic and name*/}
      <UserIdTab />
      {/*Followers -Following*/}
      <div className="hidden sm:flex absolute bottom-4 right-4 gap-6">
        <div className="text-center">
          <p className="font-bold text-white text-lg">0</p>
          <p className="text-gray-400 text-xs">Following</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-white text-lg">0</p>
          <p className="text-gray-400 text-xs">Followers</p>
        </div>
      </div>
      {/*Edit*/}
      <button className="absolute bottom-4 left-4 bg-gradient-to-r from-[#1BF0FF] to-[#144DFB] text-black px-4 py-2 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-2">
        <MdEdit className="h-4 w-4" />
        Edit Profile
      </button>
    </div>
  );
};

export default ProfileTab;
