import { useState } from "react";
import { FaSearch, FaFire, FaStar } from "react-icons/fa";

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState("trending");

  const trendingTopics = [
    { id: 1, tag: "#ReactJS", posts: "125K posts", trending: "Trending" },
    { id: 2, tag: "#WebDevelopment", posts: "98K posts", trending: "Trending" },
    { id: 3, tag: "#JavaScript", posts: "156K posts", trending: "Trending" },
    { id: 4, tag: "#CampusLife", posts: "234K posts", trending: "Trending" },
    { id: 5, tag: "#OpenSource", posts: "67K posts", trending: "Trending" },
  ];

  const suggestedUsers = [
    {
      id: 1,
      name: "Sarah Dev",
      handle: "sarahdev",
      bio: "Full-stack developer | Open source enthusiast",
      avatar: "https://via.placeholder.com/48",
    },
    {
      id: 2,
      name: "Alex Code",
      handle: "alexcode",
      bio: "Web developer & tech blogger",
      avatar: "https://via.placeholder.com/48",
    },
    {
      id: 3,
      name: "Emma Web",
      handle: "emmaweb",
      bio: "Frontend specialist | UI/UX passionate",
      avatar: "https://via.placeholder.com/48",
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="sticky top-16 z-10 bg-[#1e1e1e] border-b border-gray-700 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-3 bg-gray-900 rounded-full px-4 py-3">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search topics, hashtags, people"
            className="bg-transparent text-white placeholder-gray-500 outline-none flex-1 text-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-700 sticky top-28 z-10 bg-[#1e1e1e] px-4 flex gap-8">
        <button
          onClick={() => setActiveTab("trending")}
          className={`py-4 font-semibold transition border-b-2 ${
            activeTab === "trending"
              ? "text-cyan-400 border-cyan-400"
              : "text-gray-500 border-transparent hover:text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <FaFire className="text-lg" />
            Trending
          </div>
        </button>
        <button
          onClick={() => setActiveTab("users")}
          className={`py-4 font-semibold transition border-b-2 ${
            activeTab === "users"
              ? "text-cyan-400 border-cyan-400"
              : "text-gray-500 border-transparent hover:text-white"
          }`}
        >
          <div className="flex items-center gap-2">
            <FaStar className="text-lg" />
            Suggested Users
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "trending" && (
          <div className="space-y-4">
            {trendingTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-4 hover:bg-gray-900 cursor-pointer transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-gray-500 text-xs">{topic.trending}</p>
                    <p className="text-white font-bold text-lg">{topic.tag}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{topic.posts}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "users" && (
          <div className="space-y-4">
            {suggestedUsers.map((user) => (
              <div
                key={user.id}
                className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-4 hover:bg-gray-900 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-white font-bold">{user.name}</p>
                      <p className="text-gray-500 text-sm">@{user.handle}</p>
                      <p className="text-gray-400 text-sm mt-1">{user.bio}</p>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-[#1BF0FF] to-[#144DFB] text-black px-4 py-2 rounded-full font-semibold hover:opacity-90 transition flex-shrink-0">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
