import express from "express";
import {
  register,
  login,
  logout,
  checkAuth,
  updateProfile,
  followUser,
  unfollowUser,
  getUserProfile,
  getAllUsers,
  searchUsers,
  changePassword,
  deleteAccount,
  getPendingUsers,
  approveUser,
  rejectUser,
} from "../controllers/auth.controllers.js";
import {
  protectRoute,
  requireSystemAdmin,
} from "../middlewares/auth.middlewares.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check", protectRoute, checkAuth);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);
router.put("/change-password", protectRoute, changePassword);
router.delete("/delete-account", protectRoute, deleteAccount);
router.post("/follow/:userId", protectRoute, followUser);
router.post("/unfollow/:userId", protectRoute, unfollowUser);
router.get("/search", searchUsers);
router.get("/profile/:userId", getUserProfile);
router.get("/users", getAllUsers);
router.get(
  "/admin/pending-users",
  protectRoute,
  requireSystemAdmin,
  getPendingUsers,
);
router.patch(
  "/admin/approve/:userId",
  protectRoute,
  requireSystemAdmin,
  approveUser,
);
router.patch(
  "/admin/reject/:userId",
  protectRoute,
  requireSystemAdmin,
  rejectUser,
);

export default router;
