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
} from "../controllers/auth.controllers.js";
import { protectRoute } from "../middlewares/auth.middlewares.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check", protectRoute, checkAuth);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);
router.post("/follow/:userId", protectRoute, followUser);
router.post("/unfollow/:userId", protectRoute, unfollowUser);
router.get("/profile/:userId", getUserProfile);

export default router;
