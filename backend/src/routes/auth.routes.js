import express from "express";
import {
  register,
  login,
  logout,
  checkAuth,
} from "../controllers/auth.controllers.js";
import { protectRoute } from "../middlewares/auth.middlewares.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check", protectRoute, checkAuth);
router.post("/logout", logout);

export default router;
