import CreatePost from "../../Components/CreatePost/CreatePost";
import Post from "../../Components/Post/Post";
import { useEffect } from "react";
import { usePostStore } from "../../store/usePostStore";

export default function HomePage() {
  const { posts, isLoadingPosts, getAllPosts } = usePostStore();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="w-full">
      <CreatePost />
      {isLoadingPosts ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-400">Loading posts...</p>
        </div>
      ) : posts && posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-400">
            No posts yet. Create one to get started!
          </p>
        </div>
      )}
    </div>
  );
}
