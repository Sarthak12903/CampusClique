import ProfileDescription from "../../Components/ProfileDescription/ProfileDescription";
import ProfileTab from "../../Components/ProfileTab/ProfileTab";
import SecondaryGradientButton from "../../Components/SecondaryGradientButton/SecondaryGradientButton";
import Post from "../../Components/Post/Post";
import { useState, useEffect } from "react";
import { usePostStore } from "../../store/usePostStore";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts");
  const { userPosts, isLoadingPosts, getUserPosts } = usePostStore();

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <div className="w-full">
      <ProfileTab />
      <ProfileDescription />
      <div className="flex p-4 items-center justify-start gap-4 border-b border-gray-700">
        <button
          onClick={() => setActiveTab("posts")}
          className={`px-4 py-2 rounded-full font-semibold transition ${
            activeTab === "posts"
              ? "bg-cyan-500 text-black"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab("bookmarks")}
          className={`px-4 py-2 rounded-full font-semibold transition ${
            activeTab === "bookmarks"
              ? "bg-cyan-500 text-black"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Bookmarks
        </button>
        <button
          onClick={() => setActiveTab("liked")}
          className={`px-4 py-2 rounded-full font-semibold transition ${
            activeTab === "liked"
              ? "bg-cyan-500 text-black"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Liked
        </button>
      </div>

      {activeTab === "posts" && (
        <div>
          {isLoadingPosts ? (
            <div className="flex justify-center py-10">
              <p className="text-gray-400">Loading posts...</p>
            </div>
          ) : userPosts && userPosts.length > 0 ? (
            userPosts.map((post) => <Post key={post._id} post={post} />)
          ) : (
            <div className="flex justify-center py-10">
              <p className="text-gray-400">No posts yet</p>
            </div>
          )}
        </div>
      )}

      {activeTab === "bookmarks" && (
        <div className="flex justify-center py-10">
          <p className="text-gray-400">Bookmarks feature coming soon</p>
        </div>
      )}

      {activeTab === "liked" && (
        <div className="flex justify-center py-10">
          <p className="text-gray-400">Liked posts feature coming soon</p>
        </div>
      )}
    </div>
  );
}
