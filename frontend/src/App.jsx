import NavBar from "./Components/NavBar/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import RouteStructure from "./Routes";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <RouteStructure />
      </div>
    </>
  );
}

export default App;
