import { useNavigate } from "react-router-dom";
import home from "../../assets/GradientIcons/home.png";
import bookmark from "../../assets/GradientIcons/bookmark.png";
import PrimaryGradientButton from "../PrimaryGradientButton/PrimaryGradientButton";
import messages from "../../assets/GradientIcons/messages.png";
import settings from "../../assets/GradientIcons/setting.png";
import community from "../../assets/GradientIcons/community.png";
import explore from "../../assets/GradientIcons/explore.png";

const sidebarItems = [
  { id: 1, name: "Home", iconImg: home, path: "/" },
  { id: 2, name: "Community", iconImg: community, path: "/community" },
  { id: 3, name: "Explore", iconImg: explore, path: "/explore" },
  { id: 4, name: "Bookmarks", iconImg: bookmark, path: "/bookmarks" },
  { id: 5, name: "Messages", iconImg: messages, path: "/messages" },
  { id: 6, name: "Settings", iconImg: settings, path: "/settings" },
];

export default function LeftSideBar({ isOpen, onClose }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    if (path !== "#") {
      navigate(path);
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}
      <div
        className={`
          fixed top-16 left-0 z-50
          h-[calc(100vh-4rem)]
          w-[75%]
          bg-black
          py-6 px-4
          flex flex-col gap-2
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:top-0 md:w-[22%] md:h-screen md:py-6 md:border-r md:border-gray-700
          overflow-y-auto
        `}
      >
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigation(item.path)}
            className="flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer transition hover:bg-gray-900/50 group"
          >
            {/* PNG Icon */}
            <img
              src={item.iconImg}
              alt={item.name}
              className="w-6 h-6 object-contain group-hover:scale-110 transition"
            />

            {/* Text - Hide on mobile, show on medium+ */}
            <span
              className="text-base font-medium text-white transition-all duration-300
                       group-hover:bg-gradient-to-r
                       group-hover:from-[#1BF0FF]
                       group-hover:to-[#144DFB]
                       group-hover:bg-clip-text
                       group-hover:text-transparent hidden md:block"
            >
              {item.name}
            </span>
          </div>
        ))}

        <div className="mt-6 flex flex-col gap-3">
          <PrimaryGradientButton
            buttonName="POST"
            onClick={() => {
              console.log("POST BUTTON ON LEFT SIDE BAR IS CLICKED");
            }}
          />
          <PrimaryGradientButton
            buttonName="CREATE SPACE"
            onClick={() => {
              console.log("Create space BUTTON ON LEFT SIDE BAR IS CLICKED");
            }}
          />
        </div>
      </div>
    </>
  );
}
