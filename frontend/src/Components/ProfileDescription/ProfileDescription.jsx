import React from "react";
import { MdOutlinePlace, MdLink } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useAuthStore } from "../../store/useAuthStore";

const ProfileDescription = () => {
  const { authUser } = useAuthStore();

  return (
    <div className="text-white p-4">
      {/* Bio */}
      {authUser?.bio && (
        <p className="text-sm text-gray-200 mb-4 leading-relaxed">
          {authUser.bio}
        </p>
      )}

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        {/* Location */}
        {(authUser?.location?.city ||
          authUser?.location?.state ||
          authUser?.location?.country) && (
          <div className="flex items-center gap-2 text-gray-300">
            <MdOutlinePlace className="flex-shrink-0 w-4 h-4 text-cyan-400" />
            <p className="truncate">
              {authUser?.location?.city || ""}
              {authUser?.location?.city && authUser?.location?.state ? ", " : ""}
              {authUser?.location?.state || ""}
              {(authUser?.location?.city || authUser?.location?.state) &&
              authUser?.location?.country
                ? ", "
                : ""}
              {authUser?.location?.country || ""}
            </p>
          </div>
        )}

        {/* Date Joined */}
        <div className="flex items-center gap-2 text-gray-300">
          <MdLink className="flex-shrink-0 w-4 h-4 text-cyan-400" />
          <p className="truncate">
            Joined{" "}
            {authUser?.createdAt
              ? new Date(authUser.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })
              : "Recently"}
          </p>
        </div>

        {/* LinkedIn */}
        {authUser?.linkedinUrl && (
          <a
            href={authUser.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition truncate"
          >
            <FaLinkedinIn className="flex-shrink-0 w-4 h-4" />
            <span className="truncate">LinkedIn</span>
          </a>
        )}

        {/* GitHub */}
        {authUser?.githubUrl && (
          <a
            href={authUser.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition truncate"
          >
            <FaGithub className="flex-shrink-0 w-4 h-4" />
            <span className="truncate">GitHub</span>
          </a>
        )}
      </div>

      {/* Mobile Followers/Following Count - Single line */}
      <div className="sm:hidden mt-4 flex items-center justify-center gap-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-3 py-2 rounded-lg border border-cyan-500/30">
        <p className="text-cyan-400 font-semibold text-sm">
          {authUser?.followers?.length || 0} followers
        </p>
        <p className="text-cyan-400 font-semibold text-sm">
          {authUser?.following?.length || 0} following
        </p>
      </div>
    </div>
  );
};

export default ProfileDescription;
