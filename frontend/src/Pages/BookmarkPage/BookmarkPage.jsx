import { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";

export default function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Fetch bookmarks from localStorage or API
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="sticky top-16 z-10 bg-[#1e1e1e] border-b border-gray-700 p-4 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <FaBookmark className="text-cyan-400 text-2xl" />
          <div>
            <h2 className="text-white font-bold text-xl">Bookmarks</h2>
            <p className="text-gray-500 text-sm">Save posts for later</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {bookmarks && bookmarks.length > 0 ? (
          <div className="space-y-4">
            {bookmarks.map((bookmark) => (
              <div
                key={bookmark.id}
                className="bg-[#1e1e1e] border-b border-gray-700 p-4 rounded-lg hover:bg-[#262626] transition"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={bookmark.userImage}
                    alt="user"
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-white text-sm">
                        {bookmark.userName}
                      </p>
                      <p className="text-gray-500 text-sm">
                        @{bookmark.userHandle}
                      </p>
                    </div>
                    <p className="text-white text-sm mt-2">
                      {bookmark.content}
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                      {bookmark.date}
                    </p>
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition">
                    <FaBookmark className="text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <FaBookmark className="text-gray-600 text-6xl mb-4" />
            <p className="text-gray-400 text-lg">No bookmarks yet</p>
            <p className="text-gray-500 text-sm mt-2">
              Save posts to view them later
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
