export default function NavBar() {
  return (
    <div className="w-screen h-[5rem] bg-[#1E1E1E] flex justify-between items-center">
      <h1 className="text-white font-bold text-2xl">CampusClique</h1>
      <div>
        <input type="text" className="bg-white" placeholder="Search" />
      </div>
    </div>
  );
}
