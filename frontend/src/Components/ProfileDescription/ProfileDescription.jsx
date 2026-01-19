import React from "react";
import { MdOutlinePlace } from "react-icons/md";
import { useAuthStore } from "../../store/useAuthStore";
const ProfileDescription = () => {
  const { authUser } = useAuthStore();
  return (
    <div className="text-white p-4">
      <p className="text-sm text-gray-300 mb-4">
        {authUser?.bio || "No bio added yet"}
      </p>
      <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        {/* Row 1 - Column 1 */}
        <div className="flex items-center gap-2">
          <MdOutlinePlace className="flex-shrink-0" />
          <p className="truncate">
            {authUser?.location?.city || "City"},{" "}
            {authUser?.location?.state || "State"}
          </p>
        </div>

        {/* Row 1 - Column 2 */}
        <div className="flex items-center gap-2">
          <MdOutlinePlace className="flex-shrink-0" />
          <p>Joined</p>
        </div>

        {/* Row 2 - Column 1 */}
        <div className="flex items-center gap-2">
          <MdOutlinePlace className="flex-shrink-0" />
          <a
            href={authUser?.linkedinUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="truncate text-cyan-400 hover:underline"
          >
            {authUser?.linkedinUrl ? "LinkedIn" : "No LinkedIn"}
          </a>
        </div>

        {/* Row 2 - Column 2 */}
        <div className="flex items-center gap-2">
          <MdOutlinePlace className="flex-shrink-0" />
          <a
            href={authUser?.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="truncate text-cyan-400 hover:underline"
          >
            {authUser?.githubUrl ? "GitHub" : "No GitHub"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileDescription;
