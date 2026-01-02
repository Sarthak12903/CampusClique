import React from "react";

const CreateProfileForm = () => {
  return (
    <div className=" bg-[#0f0f0f] my-4 rounded-2xl p-8 max-w-xl mx-auto border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
      <p className="text-center text-xl font-semibold text-blue-400 my-4">Create Your Profile</p>
      <form className="flex flex-col gap-6">
        
        {/* Full Name */}
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="userFullName"
            className="text-sm font-medium text-white"
          >
            Full Name
          </label>
          <input
            type="text"
            name="userFullName"
            id="userFullName"
            placeholder="Enter your full name"
            className="w-full px-3 py-2 rounded-md border border-white bg-transparent
                       placeholder-gray-400 text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                       required
          />
        </div>

        {/* College Name */}
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="userCollegeName"
            className="text-sm font-medium text-white"
          >
            College Name
          </label>
          <input
            type="text"
            name="userCollegeName"
            id="userCollegeName"
            placeholder="Enter your college name"
            className="w-full px-3 py-2 rounded-md border border-white bg-transparent
                       placeholder-gray-400 text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                       required
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="userBio"
            className="text-sm font-medium text-white"
          >
            Bio
          </label>
          <textarea
            name="userBio"
            id="userBio"
            placeholder="Write a short bio about yourself"
            rows={3}
            className="w-full px-3 py-2 rounded-md border border-white bg-transparent
                       placeholder-gray-400 text-white resize-none
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                       required
          />
        </div>

        {/* Location */}
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="userLocation"
            className="text-sm font-medium text-white"
          >
            Location
          </label>
          <input
            type="text"
            name="userLocation"
            id="userLocation"
            placeholder="City, State, Country"
            className="w-full px-3 py-2 rounded-md border border-white bg-transparent
                       placeholder-gray-400 text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                       required
          />
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="linkedInUrl"
            className="text-sm font-medium text-white"
          >
            LinkedIn URL
          </label>
          <input
            type="url"
            name="linkedInUrl"
            id="linkedInUrl"
            placeholder="https://linkedin.com/in/username"
            className="w-full px-3 py-2 rounded-md border border-white bg-transparent
                       placeholder-gray-400 text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                       required
          />
        </div>

        {/* GitHub */}
        <div className="flex flex-col w-full gap-1">
          <label
            htmlFor="gitHubUrl"
            className="text-sm font-medium text-white"
          >
            GitHub URL
          </label>
          <input
            type="url"
            name="gitHubUrl"
            id="gitHubUrl"
            placeholder="https://github.com/username"
            className="w-full px-3 py-2 rounded-md border border-white bg-transparent
                       placeholder-gray-400 text-white
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                       required
          />
        </div>

        {/* Profile Images */}
        <div className="flex justify-center items-center sm:flex-row gap-4 w-full">
          
          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="userProfilePic"
              className="text-sm font-medium text-white"
            >
              Profile Photo
            </label>
            <input
              type="file"
              id="userProfilePic"
              name="userProfilePic"
              className="w-full text-sm text-gray-400
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:bg-gray-200 file:text-gray-700
                         hover:file:bg-gray-300"
            />
          </div>

          <div className="flex flex-col w-full gap-1">
            <label
              htmlFor="profileCover"
              className="text-sm font-medium text-white"
            >
              Profile Background
            </label>
            <input
              type="file"
              id="profileCover"
              name="profileCover"
              className="w-full text-sm text-gray-400
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:bg-gray-200 file:text-gray-700
                         hover:file:bg-gray-300"
            />
          </div>

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full py-2 rounded-xl bg-blue-600 text-white
                     font-semibold hover:bg-blue-700 transition"
        >
          Create Profile
        </button>

      </form>
    </div>
  );
};

export default CreateProfileForm;
