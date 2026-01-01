import NavBar from "./Components/NavBar/NavBar";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import RouteStructure from "./Routes";
import RightSideBar from "./Components/RightSidebar/RightSideBar";
function App() {
  return (
    <>
      <NavBar />
      <div className="flex w-screen items-start max-sm:px-5 lg:px-30 justify-around  md:gap-5 xl:gap-15 ">
        <LeftSideBar/>
        <RouteStructure/>
      <RightSideBar/>
      </div>

   


    </>
  );
}

export default App;
