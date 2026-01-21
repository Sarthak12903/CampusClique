import React, { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import RightProfilePanel from "../RightProfilePanel/RightProfilePanel";
import { axiosInstance } from "../../lib/axios";

const RightSideBar = () => {
  const [trendingHashtags, setTrendingHashtags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingHashtags = async () => {
      try {
        const response = await axiosInstance.get("/posts/trending/hashtags");
        setTrendingHashtags(response.data.slice(0, 5)); // Show top 5
      } catch (error) {
        console.error("Error fetching trending hashtags:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingHashtags();
  }, []);

  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K posts`;
    }
    return `${count} posts`;
  };

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

        {isLoading ? (
          <div className="py-4 text-center text-gray-500">Loading...</div>
        ) : trendingHashtags.length > 0 ? (
          trendingHashtags.map((topic, index) => (
            <div
              key={topic.tag || index}
              className="py-3 px-2 hover:bg-gray-900 rounded cursor-pointer transition border-b border-gray-700 last:border-b-0"
            >
              <p className="text-gray-500 text-xs">Trending on Campus</p>
              <p className="text-white font-bold text-sm">#{topic.tag}</p>
              <p className="text-gray-500 text-xs">
                {formatCount(topic.posts)}
              </p>
            </div>
          ))
        ) : (
          <div className="py-4 text-center text-gray-500">
            No trending topics yet
          </div>
        )}
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
