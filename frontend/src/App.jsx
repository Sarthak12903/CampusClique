import NavBar from "./Components/NavBar/NavBar";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import RouteStructure from "./Routes";
import RightSideBar from "./Components/RightSidebar/RightSideBar";
import LoginPage from "./Pages/LoginPage/LoginPage";
function App() {
  return (
    <>
      {/* <NavBar />
      <div className="flex w-screen items-start max-sm:px-5 lg:px-40 justify-around   lg:gap-10 ">
        <LeftSideBar/>
        <RouteStructure/>
      <RightSideBar/>
      </div> */}

   <LoginPage/>


    </>
  );
}

export default App;
