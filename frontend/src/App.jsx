import NavBar from "./Components/NavBar/NavBar";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import RouteStructure from "./Routes";
import RightSideBar from "./Components/RightSidebar/RightSideBar";
function App() {
  return (
    <>
      <NavBar />
      <div className="flex w-full items-start px-30 justify-around gap-15">
        <LeftSideBar/>
        <RouteStructure/>
      <RightSideBar/>
      </div>

   


    </>
  );
}

export default App;
