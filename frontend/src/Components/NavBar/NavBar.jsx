import ProfilePic from "../../assets/GradientIcons/ProfilePic.png";
import { IoSearchOutline } from "react-icons/io5";
export default function NavBar() {
  return (
    <div className="w-full max-sm:p-5 sm:px-10 md:px-40  h-[5rem] bg-[#1e1e1e] flex justify-between items-center">
      <h1 className="font-bold max-sm:text-xl sm:text-2xl text-white">CampusClique</h1>

      {/* SearchBAr */}
      <div className="hidden sm:flex  items-center h-[2em] w-[25%] bg-white rounded-full border-2 border-gray-300  overflow-hidden">
        <div className="flex items-center justify-center w-[2.5em] h-full">
          <IoSearchOutline className="text-gray-400 text-lg" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 h-full outline-none pl-3 text-sm "
        />
      </div>
     <div className="flex sm:hidden">
          <IoSearchOutline className="text-gray-400 text-lg" />

     </div>

     {/* Profile Tab */}
      <div className="rounded-full border-2 border-red-500 h-[2.5em] w-[12%] p-1 flex items-center justify-between">
        <p className="text-sm ">John Doe</p>
        <img src={ProfilePic} alt="ProfilePic" className="rounded-full h-[2em] w-[25%]" />
      </div>
    </div>


  );
}
