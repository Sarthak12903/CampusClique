import React, { useState } from "react";
import { SlPicture } from "react-icons/sl";
import { FaVideo, FaTag } from "react-icons/fa";
import PrimaryGradientButton from "../PrimaryGradientButton/PrimaryGradientButton";
import ProfilePic from "../../assets/GradientIcons/ProfilePic.png";

const categories = [
  "Opportunity",
  "Event",
  "Internship",
  "Hackathon",
  "Workshop",
  "Placement",
  "General",
];

const CreatePost = () => {
  const [postData, setPostData] = useState({
    description: "",
    category: "",
    image: null,
    video: null,
  });

  const postSubmitHandler = (e) => {
    e.preventDefault();
     setPostData({
      description: "",
      category: "",   
      image: null,
      video: null,
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  }

  return (
    <div className="bg-[#1e1e1e] border-2 border-[#34D399] p-3 rounded-xl">
      <form onSubmit={postSubmitHandler}>
        {/* Top Section */}
        <div className="flex items-start py-2 gap-3">
          <img
            src={ProfilePic}
            alt="PP"
            className="h-8 w-8 rounded-full mt-1"
          />

          {/* TEXTAREA */}
          <textarea
            rows={2}
            maxLength={150}
            value={postData.description}
            name="description"
            onChange={handleInputChange}
            placeholder="What's on your mind?"
            className="
              flex-1 resize-none overflow-y-auto hide-scrollbar
              text-md p-3 rounded-xl bg-gray-600 text-gray-200
              focus:outline-none focus:ring-1 focus:ring-[#00E5A8]
            "
          />

          <PrimaryGradientButton
            buttonName="POST"
            type="submit"
          />
        </div>

        {/* Bottom Action Buttons */}
        <div className="flex items-center px-8 gap-6 my-2 text-sm justify-between">
          {/* Category */}
          <div className="flex items-center gap-2 text-gray-300 hover:text-[#34D399] transition">
            <FaTag className="text-lg" />
            <select
              value={postData.category}
              name="category"
              onChange={(e) =>
                setPostData({ ...postData, category: e.target.value })
              }
              className="bg-transparent outline-none cursor-pointer"
            >
              <option value="">Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-black">
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <label
            htmlFor="imageInput"
            className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-[#34D399]"
          >
            <SlPicture className="text-lg" />
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="imageInput"
            hidden
            name="image"
            onChange={(e) =>
              setPostData({ ...postData, image: e.target.files[0] })
            }
          />

          {/* Video Upload */}
          <label
            htmlFor="videoInput"
            className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-[#34D399]"
          >
            <FaVideo className="text-lg" />
            Video
          </label>
          <input
            type="file"
            accept="video/*"
            id="videoInput"
            hidden
            name="video"
            onChange={(e) =>
              setPostData({ ...postData, video: e.target.files[0] })
            }
          />
        </div>

        {/* Character Counter */}
        <div className="text-right text-xs text-gray-400 pr-3">
          {postData.description.length}/150
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
