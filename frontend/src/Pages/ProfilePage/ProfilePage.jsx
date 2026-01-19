import ProfileDescription from "../../Components/ProfileDescription/ProfileDescription";
import ProfileTab from "../../Components/ProfileTab/ProfileTab";
import SecondaryGradientButton from "../../Components/SecondaryGradientButton/SecondaryGradientButton";
import Post from '../../Components/Post/Post'
import { useState, useEffect } from "react";
import { usePostStore } from "../../store/usePostStore";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts");
  const { userPosts, isLoadingPosts, getUserPosts } = usePostStore();

  useEffect(() => {
    getUserPosts();
  }, []);

  return (
    <div className="py-4  max-sm:px-5 sm:px-20 md:px-0 w-full md:w-[35%]">
      <ProfileTab/>
      <ProfileDescription/>
      <div className="flex p-2 items-center justify-center gap-2 mt-2">
        <SecondaryGradientButton 
          buttonName="Posts" 
          onClick={() => setActiveTab("posts")}
          style={activeTab === "posts" ? { opacity: 1 } : { opacity: 0.6 }}
        />
        <SecondaryGradientButton 
          buttonName="Bookmarks" 
          onClick={() => setActiveTab("bookmarks")}
          style={activeTab === "bookmarks" ? { opacity: 1 } : { opacity: 0.6 }}
        />
        <SecondaryGradientButton 
          buttonName="Liked" 
          onClick={() => setActiveTab("liked")}
          style={activeTab === "liked" ? { opacity: 1 } : { opacity: 0.6 }}
        />
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
