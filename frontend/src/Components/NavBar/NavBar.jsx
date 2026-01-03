import ProfilePic from "../../assets/GradientIcons/ProfilePic.png";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar({onMenuClick}) {
  return (
    <div className="w-screen max-sm:p-5 sm:px-10 md:px-80 lg:px-60  h-[5rem] bg-[#1e1e1e] flex justify-between items-center">
      <AiOutlineMenu   onClick={onMenuClick}
        className="md:hidden text-white text-2xl cursor-pointer" />
      <h1 className="font-bold max-sm:text-xl sm:text-2xl text-white">CampusClique</h1>

      {/* SearchBAr */}
     <SearchBar/>

     {/* Profile Tab */}
      <div className="rounded-full hidden md:flex border-2 border-[#34D399] h-[2.5em] w-auto p-1 flex items-center justify-between ">
        <p className="text-sm text-white truncate pl-1">John Smith Doe</p>
        <img src={ProfilePic} alt="ProfilePic" className="rounded-full h-[2em] w-[25%]" />
      </div>
      {/* MobileTab  */}
       <img src={ProfilePic} alt="ProfilePic" className="flex md:hidden rounded-full h-8 w-8  border-2 border-white-400 " />
    </div>
       
       
   

  );
}
