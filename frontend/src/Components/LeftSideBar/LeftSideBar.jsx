import home from "../../assets/GradientIcons/home.png"
import bookmark from"../../assets/GradientIcons/bookmark.png"
import PrimaryGradientButton from "../PrimaryGradientButton/PrimaryGradientButton";
import messages from "../../assets/GradientIcons/messages.png"
import settings from"../../assets/GradientIcons/setting.png"
import community from "../../assets/GradientIcons/community.png"
import explore from "../../assets/GradientIcons/explore.png"
const sidebarItems = [
  { id: 1, name: "Home", iconImg: home },
  { id: 2, name: "Community", iconImg: community},
  { id: 3, name: "Explore", iconImg: explore },
  { id: 4, name: "Bookmarks", iconImg: bookmark },
  { id: 5, name: "Messages", iconImg: messages },
  { id: 6, name: "Settings", iconImg: settings },
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
          bg-[#1e1e1e]
          py-20 px-6
          flex flex-col gap-4
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:w-[20%]
        `}
      >


{/*

      {sidebarItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="flex items-center gap-6 px-4 py-2 rounded-lg cursor-pointer
                       transition"
          >
            <Icon className="text-2xl text-gray-600" />
            <span className="text-md font-medium text-white  transition-all duration-300
    hover:bg-gradient-to-r
    hover:from-[#1BF0FF]
    hover:to-[#144DFB]
    hover:bg-clip-text
    hover:text-transparent
  ">
              {item.name}
            </span>
          </div>
        );

      })} */}


      {sidebarItems.map((item) => (
  <div
    key={item.id}
    className="flex items-center gap-6 px-4 py-2 rounded-lg cursor-pointer transition"
  >
    {/* PNG Icon */}
    <img
      src={item.iconImg}
      alt={item.name}
      className="w-6 h-6 object-contain"
    />

    {/* Text */}
    <span
      className="text-md font-medium text-white transition-all duration-300
                 hover:bg-gradient-to-r
                 hover:from-[#1BF0FF]
                 hover:to-[#144DFB]
                 hover:bg-clip-text
                 hover:text-transparent"
    >
      {item.name}
    </span>
  </div>
   ))}


      <PrimaryGradientButton buttonName="POST" onClick={()=>{console.log("POST BUTTON ON LEFT SIDE BAR IS CLICKED")}} />
      <PrimaryGradientButton buttonName="CREATE SPACE" onClick={()=>{console.log("Create spaceBUTTON ON LEFT SIDE BAR IS CLICKED")}} />
      
    </div>

    </>
  );
}
