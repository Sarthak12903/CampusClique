import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import MessagesPage from "../Pages/MessagesPage/MessagesPage";
import BookmarkPage from "../Pages/BookmarkPage/BookmarkPage";
import { useAuthStore } from "../store/useAuthStore";

export default function MainRouteStructure() {
  const { authUser } = useAuthStore();

  // If user is not logged in, redirect to login
  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/bookmarks" element={<BookmarkPage />} />
    </Routes>
  );
}
