import React from 'react'
import { SlPicture } from "react-icons/sl";
import PrimaryGradientButton from '../PrimaryGradientButton/PrimaryGradientButton';
import ProfilePic from "../../assets/GradientIcons/ProfilePic.png"
import { useState } from 'react';
import { usePostStore } from '../../store/usePostStore';
import { useAuthStore } from '../../store/useAuthStore';
import toast from 'react-hot-toast';

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
      category: "general"
    };

    const result = await createPost(postData);
    if (result) {
      setDescription("");
    }
  };

  return (
    <div className='bg-[#1e1e1e] border-2 border-[#34D399] p-2 rounded-xl'>

      <div className='flex justify-around max-md:justify:center p-4 items-center gap-3 my-2'>
        <img src={ProfilePic} alt="PP" className='h-8 w-8 rounded-full' />
        <input
          type="text"
          placeholder="What's on your mind?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="flex-1 max-sm: h-8 text-md pl-4 rounded-xl max-md:text-sm bg-gray-600 text-gray-300 outline:none focus:outline-none focus:ring-2 focus:ring-[#00E5A8]"/>
       <button
         disabled={isCreatingPost}
         onClick={handlePostSubmit}
         className="bg-gradient-to-r from-[#1BF0FF] to-[#144DFB] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50"
       >
         {isCreatingPost ? "Posting..." : "POST"}
       </button>
      </div>
      <div className='flex items-center px-20 justify-start gap-6 mb-2'>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400 cursor-pointer hover:text-gray-300'/>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400 cursor-pointer hover:text-gray-300'/>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400 cursor-pointer hover:text-gray-300'/>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400 cursor-pointer hover:text-gray-300'/>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400 cursor-pointer hover:text-gray-300'/>
       <SlPicture className='h-8 w-8 rounded-lg text-gray-400 cursor-pointer hover:text-gray-300'/>
      
      </div>
    </div>
  )
}

export default CreatePost
