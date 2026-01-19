import NavBar from "./Components/NavBar/NavBar";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import RouteStructure from "./Routes/MainRouteStructure";
import RightSideBar from "./Components/RightSidebar/RightSideBar";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { useState } from "react";
import CreateProfile from "./Pages/CreateProfile/CreateProfile";
import CreateAccountPage from "./Pages/RegisterPage/RegisterPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import AuthRoute from "./Routes/AuthRoute";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { authUser, checkAuth, isInitializing } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, []);
  console.log({ authUser, isInitializing });

  // Show loading screen while initializing
  if (isInitializing) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-black">
        <div className="text-white text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <>
      {authUser ? (
        <div className="bg-black">
          <NavBar onMenuClick={() => setIsSidebarOpen(true)} />
          <div className="flex w-screen items-start max-sm:px-5 lg:px-40 justify-around   lg:gap-10 ">
            <LeftSideBar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
            <RouteStructure />
            <RightSideBar />
          </div>
        </div>
      ) : (
        <>
          <AuthRoute />
        </>
      )}
    </>
  );
}

export default App;
