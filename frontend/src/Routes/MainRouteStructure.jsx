import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import MessagesPage from "../Pages/MessagesPage/MessagesPage";
import BookmarkPage from "../Pages/BookmarkPage/BookmarkPage";
import ExplorePage from "../Pages/ExplorePage/ExplorePage";
import SettingsPage from "../Pages/SettingsPage/SettingsPage";
import CommunityPage from "../Pages/CommunityPage/CommunityPage";
import AdminDashboardPage from "../Pages/AdminDashboardPage/AdminDashboardPage";

export default function MainRouteStructure() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/student-dashboard" element={<HomePage />} />
      <Route path="/mentor-dashboard" element={<HomePage />} />
      <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/bookmarks" element={<BookmarkPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/admin" element={<AdminDashboardPage />} />
    </Routes>
  );
}
