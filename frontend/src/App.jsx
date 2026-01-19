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
        <div className="bg-black min-h-screen">
          <NavBar onMenuClick={() => setIsSidebarOpen(true)} />
          <div className="flex w-full">
            <LeftSideBar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
            <div className="flex-1 flex justify-center">
              <div className="w-full md:w-[600px] lg:w-[700px] border-l border-r border-gray-700">
                <RouteStructure />
              </div>
            </div>
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
