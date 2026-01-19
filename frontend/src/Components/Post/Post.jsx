import { SlPicture } from "react-icons/sl";
import ProfilePic from "../../assets/GradientIcons/ProfilePic.png";
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
      day: "numeric",
    });
  };

  return (
    <div className="bg-[#1e1e1e] border-b border-gray-700 text-white p-4 hover:bg-[#262626] transition">
      <div className="flex flex-col">
        {/* Author Info */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-3 items-center flex-1">
            <img
              src={ProfilePic}
              alt="PP"
              className="h-10 w-10 rounded-full flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-bold text-sm hover:underline cursor-pointer">
                  {post.user?.fullname || "User"}
                </p>
                <p className="text-gray-500 text-sm">
                  @{post.user?.fullname?.toLowerCase().replace(" ", "")}
                </p>
              </div>
              <p className="text-gray-500 text-sm">
                {formatDate(post.createdAt)}
              </p>
            </div>
          </div>
          {isAuthor && (
            <button
              onClick={handleDeletePost}
              className="text-gray-500 hover:text-red-500 transition"
            >
              <FaTrash className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Post Content */}
        <p className="text-base mb-3 whitespace-pre-wrap break-words">
          {post.description}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt="Post"
            className="w-full rounded-2xl mb-3 max-h-96 object-cover"
          />
        )}

        {/* Reactions */}
        <div className="flex gap-8 py-3 border-y border-gray-700 text-gray-500 text-sm px-4 mb-3">
          <button
            onClick={handleLike}
            className="flex items-center gap-2 hover:text-red-500 hover:bg-red-500/10 rounded-full px-3 py-2 transition group"
          >
            {isLiked ? (
              <FaHeart className="h-4 w-4 text-red-500" />
            ) : (
              <FaRegHeart className="h-4 w-4 group-hover:text-red-500" />
            )}
            <span className="text-xs">{post.likes?.length || 0}</span>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 hover:text-cyan-500 hover:bg-cyan-500/10 rounded-full px-3 py-2 transition group"
          >
            <FaComment className="h-4 w-4 group-hover:text-cyan-500" />
            <span className="text-xs">{post.comments?.length || 0}</span>
          </button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="space-y-3 py-3 border-t border-gray-700">
            {/* Add comment */}
            <div className="flex gap-3 items-start">
              <img
                src={ProfilePic}
                alt="PP"
                className="h-8 w-8 rounded-full flex-shrink-0"
              />
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Post your reply"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddComment()}
                  className="flex-1 bg-transparent text-white text-sm outline-none border-b border-gray-600 focus:border-cyan-400 py-2"
                />
                <button
                  onClick={handleAddComment}
                  className="text-cyan-400 font-bold hover:text-cyan-300 disabled:opacity-50"
                >
                  Reply
                </button>
              </div>
            </div>

            {/* Display comments */}
            <div className="space-y-3 pl-12">
              {post.comments?.map((comment) => (
                <div
                  key={comment._id}
                  className="pb-3 border-b border-gray-700 last:border-b-0"
                >
                  <div className="flex gap-2">
                    <img
                      src={ProfilePic}
                      alt="PP"
                      className="h-8 w-8 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-sm">
                          {comment.user?.fullname}
                        </p>
                        <p className="text-gray-500 text-sm">
                          @
                          {comment.user?.fullname
                            ?.toLowerCase()
                            .replace(" ", "")}
                        </p>
                      </div>
                      <p className="text-sm text-gray-300 mt-1">
                        {comment.text}
                      </p>
                      {comment.user?._id === authUser?._id && (
                        <button
                          onClick={() => handleDeleteComment(comment._id)}
                          className="text-gray-500 hover:text-red-500 text-xs mt-1 transition"
                        >
                          Delete
                        </button>
                      )}
                    </div>
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
