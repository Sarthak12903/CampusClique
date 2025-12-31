import {
  IoHomeOutline,
  IoPeopleOutline,
  IoBookmarkOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdEventNote, MdHelpOutline } from "react-icons/md";

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

export default function LeftSideBar() {
  return (
    <div className="w-[20%] h-[80%] py-20 px-10 flex flex-col gap-4 bg-gray-300">
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
      <button className="rounded-full h-10 w-[80%] self-center bg-green-400 mt-5">POST</button>
      <button className="rounded-full h-10 w-[80%] self-center bg-green-400 ">CREATE SPACE</button>
      
    </div>
  );
}
