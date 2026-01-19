import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import RightProfilePanel from "../RightProfilePanel/RightProfilePanel";

const RightSideBar = () => {
  const trendingTopics = [
    { id: 1, tag: "#ReactJS", posts: "45.2K posts" },
    { id: 2, tag: "#WebDevelopment", posts: "128K posts" },
    { id: 3, tag: "#JavaScript", posts: "95.3K posts" },
    { id: 4, tag: "#OpenSource", posts: "67.8K posts" },
    { id: 5, tag: "#CampusLife", posts: "234K posts" },
  ];

  return (
    <div className="hidden lg:flex lg:w-[25%] h-screen flex-col px-4 py-6 gap-4 bg-black border-l border-gray-700">
      {/* Search Box */}
      <div className="bg-[#1e1e1e] rounded-full px-4 py-3 border border-gray-700 flex items-center gap-2">
        <input
          type="text"
          placeholder="Search CampusClique"
          className="bg-transparent text-white placeholder-gray-500 outline-none w-full text-sm"
        />
      </div>

      {/* Trending Section */}
      <div className="bg-[#1e1e1e] rounded-2xl border border-gray-700 p-4">
        <h2 className="text-white font-bold text-xl mb-4">What's happening!</h2>

        {trendingTopics.map((topic) => (
          <div
            key={topic.id}
            className="py-3 px-2 hover:bg-gray-900 rounded cursor-pointer transition border-b border-gray-700 last:border-b-0"
          >
            <p className="text-gray-500 text-xs">Trending Worldwide</p>
            <p className="text-white font-bold text-sm">{topic.tag}</p>
            <p className="text-gray-500 text-xs">{topic.posts}</p>
          </div>
        ))}
      </div>

      {/* Subscribe Section */}
      <div className="bg-gradient-to-r from-[#1BF0FF] to-[#144DFB] rounded-2xl p-4">
        <h3 className="text-black font-bold text-lg mb-2">Stay Updated</h3>
        <p className="text-black text-sm mb-4">
          Subscribe to get the latest campus updates and networking
          opportunities!
        </p>
        <button className="w-full bg-black text-cyan-400 font-bold py-2 rounded-full hover:bg-gray-900 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
