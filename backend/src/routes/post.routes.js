import express from "express";
import {
  createPost,
  getAllPosts,
  getUserPosts,
  getPost,
  updatePost,
  deletePost,
  likePost,
  addComment,
  deleteComment
} from "../controllers/post.controllers.js";
import { protectRoute } from "../middlewares/auth.middlewares.js";

const router = express.Router();

// Create post
router.post("/", protectRoute, createPost);

// Get all posts
router.get("/", getAllPosts);

// Get user's posts
router.get("/user/posts", protectRoute, getUserPosts);

// Get single post
router.get("/:postId", getPost);

// Update post
router.put("/:postId", protectRoute, updatePost);

// Delete post
router.delete("/:postId", protectRoute, deletePost);

// Like/Unlike post
router.post("/:postId/like", protectRoute, likePost);

// Add comment
router.post("/:postId/comment", protectRoute, addComment);

// Delete comment
router.delete("/:postId/comment/:commentId", protectRoute, deleteComment);

export default router;
