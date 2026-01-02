import {
  IoHomeOutline,
  IoPeopleOutline,
  IoBookmarkOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdEventNote, MdHelpOutline } from "react-icons/md";
import PrimaryGradientButton from "../PrimaryGradientButton/PrimaryGradientButton";

const sidebarItems = [
  {
    id: 1,
    name: "Home",
    icon: IoHomeOutline,
  },
  {
    id: 2,
    name: "Community",
    icon: IoPeopleOutline,
  },
  {
    id: 3,
    name: "Events",
    icon: MdEventNote,
  },
  {
    id: 4,
    name: "Saved",
    icon: IoBookmarkOutline,
  },
  {
    id: 5,
    name: "Help",
    icon: MdHelpOutline,
  },
  {
    id: 6,
    name: "Settings",
    icon: IoSettingsOutline,
  },
];

export default function LeftSideBar({ isOpen, onClose }) {
  return (
    <>
       {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
    {/* <div className="hidden md:flex md:w-[30%] xl:w-[20%] h-[80%] py-20 px-10 flex flex-col gap-4 bg-gray-300"> */}
     <div
        className={`
          fixed top-0 left-0 z-50
          h-full w-[75%]
          bg-gray-300
          py-20 px-6
          flex flex-col gap-4
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:w-[20%]
        `}
      >
      {sidebarItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="flex items-center gap-6 px-4 py-2 rounded-lg cursor-pointer
                       transition"
          >
            <Icon className="text-2xl text-gray-600" />
            <span className="text-md font-medium text-gray-700  hover:text-blue-100">
              {item.name}
            </span>
          </div>
        );
      })}
      {/* <button className="rounded-full h-10 w-[80%] self-center bg-green-400 mt-5">POST</button> */}
      {/* <button className="rounded-full h-10 w-[80%] self-center bg-green-400 ">CREATE SPACE</button> */}
      <PrimaryGradientButton buttonName="POST" onClick={()=>{console.log("POST BUTTON ON LEFT SIDE BAR IS CLICKED")}} />
      <PrimaryGradientButton buttonName="CREATE SPACE" onClick={()=>{console.log("Create spaceBUTTON ON LEFT SIDE BAR IS CLICKED")}} />
      
    </div>
    </>
  );
}
