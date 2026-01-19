import { SlPicture } from "react-icons/sl";
import ProfilePic from '../../assets/GradientIcons/ProfilePic.png'
import { FaHeart, FaRegHeart, FaComment, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { usePostStore } from "../../store/usePostStore";
import { useAuthStore } from "../../store/useAuthStore";
import toast from "react-hot-toast";

const Post = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const { likePost, addComment, deletePost, deleteComment } = usePostStore();
  const { authUser } = useAuthStore();

  if (!post) return null;

  const isLiked = post.likes?.includes(authUser?._id);
  const isAuthor = post.user?._id === authUser?._id;

  const handleLike = async () => {
    await likePost(post._id);
  };

  const handleAddComment = async () => {
    if (!commentText.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }
    await addComment(post._id, commentText);
    setCommentText("");
  };

  const handleDeletePost = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePost(post._id);
    }
  };

  const handleDeleteComment = async (commentId) => {
    await deleteComment(post._id, commentId);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };

  return (
    <div className='bg-[#1e1e1e] border-2 text-white border-[#34D399] px-5 py-4 my-6 mx-2 rounded-xl'>
      <div className='flex flex-col '>
        {/* Uploaders details  */}
        <div className='flex justify-between items-start p-3'>
          <div className='flex gap-4 items-center'>
            <img src={ProfilePic} alt="PP" className='h-8 w-8 rounded-full' />
            <div>
              <p className='font-semibold text-sm'>{post.user?.fullname || "User"}</p>
              <p className='text-gray-400 text-xs'>Posted: {formatDate(post.createdAt)}</p>
            </div>
          </div>
          {isAuthor && (
            <button
              onClick={handleDeletePost}
              className="text-red-500 hover:text-red-700 transition"
            >
              <FaTrash className='h-4 w-4' />
            </button>
          )}
        </div>

        {/* Main Content Section   */}
        <div className="px-4 ">
          <p className="text-sm px-2">{post.description}</p>
          {post.image && (
            <img src={post.image} alt="Post" className='w-[80%] h-auto max-sm:h-40 max-sm:m-2 sm:h-60 m-4 rounded-xl'/>
          )}
        </div>

        {/* reaction */}
        <div className="flex items-center justify-between px-6 py-2 bg-[#1e1e1e]">
          <div className="flex items-center gap-6">
            <button
              onClick={handleLike}
              className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition"
            >
              {isLiked ? (
                <FaHeart className='h-4 w-4 text-red-500' />
              ) : (
                <FaRegHeart className='h-4 w-4' />
              )}
              <span className="text-xs">{post.likes?.length || 0}</span>
            </button>
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-1 text-gray-400 hover:text-cyan-500 transition"
            >
              <FaComment className='h-4 w-4' />
              <span className="text-xs">{post.comments?.length || 0}</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="px-4 py-3 border-t border-gray-700">
            {/* Add comment */}
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Add a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddComment()}
                className="flex-1 bg-gray-700 text-white text-sm px-2 py-1 rounded outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                onClick={handleAddComment}
                className="bg-cyan-500 text-black px-3 py-1 rounded text-sm font-semibold hover:bg-cyan-400"
              >
                Post
              </button>
            </div>

            {/* Display comments */}
            <div className="space-y-2">
              {post.comments?.map((comment) => (
                <div key={comment._id} className="bg-gray-800 p-2 rounded text-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-xs">{comment.user?.fullname}</p>
                      <p className="text-gray-300">{comment.text}</p>
                    </div>
                    {comment.user?._id === authUser?._id && (
                      <button
                        onClick={() => handleDeleteComment(comment._id)}
                        className="text-red-500 hover:text-red-700 text-xs"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;