import Post from "../models/post.models.js";
import User from "../models/user.models.js";

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { description, image, video, category } = req.body;
    const userId = req.userId;

    if (!description || description.trim().length === 0) {
      return res.status(400).json({ message: "Post description is required" });
    }

    const post = await Post.create({
      user: userId,
      description,
      image,
      video,
      category: category || "general"
    });

    // Populate user details
    await post.populate("user", "-password");

    res.status(201).json({
      message: "Post created successfully",
      post
    });
  } catch (error) {
    console.error("Create post error:", error);
    res.status(500).json({ message: "Server error while creating post" });
  }
};

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "-password")
      .populate("comments.user", "-password")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    console.error("Get all posts error:", error);
    res.status(500).json({ message: "Server error while fetching posts" });
  }
};

// Get user's posts
export const getUserPosts = async (req, res) => {
  try {
    const userId = req.userId;
    
    const posts = await Post.find({ user: userId })
      .populate("user", "-password")
      .populate("comments.user", "-password")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    console.error("Get user posts error:", error);
    res.status(500).json({ message: "Server error while fetching user posts" });
  }
};

// Get single post
export const getPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findById(postId)
      .populate("user", "-password")
      .populate("comments.user", "-password");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error("Get post error:", error);
    res.status(500).json({ message: "Server error while fetching post" });
  }
};

// Update post
export const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { description, image, video, category } = req.body;
    const userId = req.userId;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Not authorized to update this post" });
    }

    if (description) post.description = description;
    if (image) post.image = image;
    if (video) post.video = video;
    if (category) post.category = category;

    await post.save();
    await post.populate("user", "-password");

    res.status(200).json({
      message: "Post updated successfully",
      post
    });
  } catch (error) {
    console.error("Update post error:", error);
    res.status(500).json({ message: "Server error while updating post" });
  }
};

// Delete post
export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.userId;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this post" });
    }

    await Post.findByIdAndDelete(postId);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Delete post error:", error);
    res.status(500).json({ message: "Server error while deleting post" });
  }
};

// Like post
export const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.userId;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if already liked
    if (post.likes.includes(userId)) {
      // Unlike the post
      post.likes = post.likes.filter(id => id.toString() !== userId.toString());
    } else {
      // Like the post
      post.likes.push(userId);
    }

    await post.save();
    await post.populate("user", "-password");

    res.status(200).json({
      message: post.likes.includes(userId) ? "Post liked" : "Post unliked",
      post
    });
  } catch (error) {
    console.error("Like post error:", error);
    res.status(500).json({ message: "Server error while liking post" });
  }
};

// Add comment
export const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { text } = req.body;
    const userId = req.userId;

    if (!text || text.trim().length === 0) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    post.comments.push({
      user: userId,
      text: text.trim()
    });

    await post.save();
    await post.populate("user", "-password");
    await post.populate("comments.user", "-password");

    res.status(201).json({
      message: "Comment added successfully",
      post
    });
  } catch (error) {
    console.error("Add comment error:", error);
    res.status(500).json({ message: "Server error while adding comment" });
  }
};

// Delete comment
export const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const userId = req.userId;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const comment = post.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this comment" });
    }

    post.comments.id(commentId).remove();
    await post.save();
    await post.populate("user", "-password");
    await post.populate("comments.user", "-password");

    res.status(200).json({
      message: "Comment deleted successfully",
      post
    });
  } catch (error) {
    console.error("Delete comment error:", error);
    res.status(500).json({ message: "Server error while deleting comment" });
  }
};
