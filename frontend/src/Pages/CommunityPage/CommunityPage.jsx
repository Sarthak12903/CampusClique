import { useState } from "react";
import { FaUsers, FaSearch, FaPlus, FaStar } from "react-icons/fa";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("discover");

  const communities = [
    {
      id: 1,
      name: "Web Development",
      description: "Discuss all things web development",
      members: "12.5K members",
      avatar: "🌐",
      joined: true,
    },
    {
      id: 2,
      name: "React Masters",
      description: "Learn and master React.js",
      members: "8.3K members",
      avatar: "⚛️",
      joined: false,
    },
    {
      id: 3,
      name: "Campus Tech Club",
      description: "Tech enthusiasts from campus",
      members: "2.1K members",
      avatar: "🏫",
      joined: true,
    },
    {
      id: 4,
      name: "Open Source Contributors",
      description: "Contribute to amazing open source projects",
      members: "5.8K members",
      avatar: "🔓",
      joined: false,
    },
    {
      id: 5,
      name: "Career Growth",
      description: "Networking and career development",
      members: "15.2K members",
      avatar: "💼",
      joined: false,
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="sticky top-16 z-10 bg-[#1e1e1e] border-b border-gray-700 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <FaUsers className="text-cyan-400 text-2xl" />
            <div>
              <h2 className="text-white font-bold text-xl">Communities</h2>
              <p className="text-gray-500 text-sm">
                Join communities of like-minded people
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#1BF0FF] to-[#144DFB] text-black px-4 py-2 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-2">
            <FaPlus className="text-sm" />
            Create
          </button>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 bg-gray-900 rounded-full px-4 py-2">
          <FaSearch className="text-gray-500 text-sm" />
          <input
            type="text"
            placeholder="Search communities"
            className="bg-transparent text-white placeholder-gray-500 outline-none flex-1 text-sm"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-700 sticky top-32 z-10 bg-[#1e1e1e] px-4 flex gap-8">
        <button
          onClick={() => setActiveTab("discover")}
          className={`py-4 font-semibold transition border-b-2 ${
            activeTab === "discover"
              ? "text-cyan-400 border-cyan-400"
              : "text-gray-500 border-transparent hover:text-white"
          }`}
        >
          Discover
        </button>
        <button
          onClick={() => setActiveTab("joined")}
          className={`py-4 font-semibold transition border-b-2 ${
            activeTab === "joined"
              ? "text-cyan-400 border-cyan-400"
              : "text-gray-500 border-transparent hover:text-white"
          }`}
        >
          Joined
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {(activeTab === "discover"
          ? communities
          : communities.filter((c) => c.joined)
        ).map((community) => (
          <div
            key={community.id}
            className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-4 hover:bg-gray-900 transition"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div className="text-4xl">{community.avatar}</div>
                <div className="flex-1">
                  <p className="text-white font-bold text-lg">
                    {community.name}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {community.description}
                  </p>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <FaUsers className="text-cyan-400" />
                      <span>{community.members}</span>
                    </div>
                    {community.joined && (
                      <div className="flex items-center gap-1 text-cyan-400 text-xs">
                        <FaStar />
                        <span>Joined</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <button
                className={`px-6 py-2 rounded-full font-semibold transition flex-shrink-0 ${
                  community.joined
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gradient-to-r from-[#1BF0FF] to-[#144DFB] text-black hover:opacity-90"
                }`}
              >
                {community.joined ? "Joined" : "Join"}
              </button>
            </div>
          </div>
        ))}

        {(activeTab === "discover"
          ? communities
          : communities.filter((c) => c.joined)
        ).length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <FaUsers className="text-gray-600 text-6xl mb-4" />
            <p className="text-gray-400 text-lg">No communities yet</p>
            <p className="text-gray-500 text-sm mt-2">
              Join some communities to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
