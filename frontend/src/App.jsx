import NavBar from "./Components/NavBar/NavBar";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import RouteStructure from "./Routes";
import RightSideBar from "./Components/RightSidebar/RightSideBar";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { useState } from "react";
import CreateProfile from "./Pages/CreateProfile/CreateProfile";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
    <div className="bg-black">
      <NavBar onMenuClick={() => setIsSidebarOpen(true)} />
      <div className="flex w-screen items-start max-sm:px-5 lg:px-40 justify-around   lg:gap-10 ">
        <LeftSideBar  isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}/>
        <RouteStructure/>
      <RightSideBar/>
      </div>

   {/* <LoginPage/> */}
   {/* <CreateProfile/> */}
</div>

    </>
  );
}

export default App;
