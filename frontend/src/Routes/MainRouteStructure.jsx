import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import MessagesPage from "../Pages/MessagesPage/MessagesPage";
import BookmarkPage from "../Pages/BookmarkPage/BookmarkPage";

export default function MainRouteStructure() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/bookmarks" element={<BookmarkPage />} />
    </Routes>
  );
}
