import React from "react";
import { SlPicture } from "react-icons/sl";
import PrimaryGradientButton from "../PrimaryGradientButton/PrimaryGradientButton";
import ProfilePic from "../../assets/GradientIcons/ProfilePic.png";
import { useState } from "react";
import { usePostStore } from "../../store/usePostStore";
import { useAuthStore } from "../../store/useAuthStore";
import toast from "react-hot-toast";

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const { createPost, isCreatingPost } = usePostStore();
  const { authUser } = useAuthStore();

  const handlePostSubmit = async () => {
    if (!description.trim()) {
      toast.error("Please write something to post");
      return;
    }

    const postData = {
      description: description.trim(),
      category: "general",
    };

    const result = await createPost(postData);
    if (result) {
      setDescription("");
    }
  };

  return (
    <div className="bg-[#1e1e1e] border-b border-gray-700 p-4 sticky top-16 z-10">
      <div className="flex gap-4 items-start mb-4">
        <img
          src={ProfilePic}
          alt="PP"
          className="h-10 w-10 rounded-full flex-shrink-0"
        />
        <div className="flex-1">
          <input
            type="text"
            placeholder="What's on your mind?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-900 text-white placeholder-gray-500 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
          />
        </div>
      </div>

      <div className="flex items-center justify-between px-4">
        <div className="flex gap-4">
          <SlPicture className="h-5 w-5 text-gray-500 cursor-pointer hover:text-cyan-400 transition" />
          <SlPicture className="h-5 w-5 text-gray-500 cursor-pointer hover:text-cyan-400 transition" />
          <SlPicture className="h-5 w-5 text-gray-500 cursor-pointer hover:text-cyan-400 transition" />
        </div>
        <button
          disabled={isCreatingPost}
          onClick={handlePostSubmit}
          className="bg-gradient-to-r from-[#1BF0FF] to-[#144DFB] text-black px-6 py-2 rounded-full font-bold hover:opacity-90 disabled:opacity-50 transition"
        >
          {isCreatingPost ? "Posting..." : "POST"}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
