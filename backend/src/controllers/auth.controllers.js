import bcrypt from "bcryptjs";
import User from "../models/user.models.js";

import { generateToken } from "../lib/utils.js";
export const register = async (req, res) => {
  try {
    const { fullname, collegeName, email, password, rePassword } = req.body;

    if (!fullname || !collegeName || !email || !password || !rePassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== rePassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      collegeName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      collegeName: user.collegeName,
      email: user.email,
      bio: user.bio,
      profilePhoto: user.profilePhoto,
      profileBackground: user.profileBackground,
      location: user.location,
      linkedinUrl: user.linkedinUrl,
      githubUrl: user.githubUrl,
      followers: user.followers || [],
      following: user.following || [],
      createdAt: user.createdAt,
      token,
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("checkAuth error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      collegeName: user.collegeName,
      email: user.email,
      bio: user.bio,
      profilePhoto: user.profilePhoto,
      profileBackground: user.profileBackground,
      location: user.location,
      linkedinUrl: user.linkedinUrl,
      githubUrl: user.githubUrl,
      followers: user.followers || [],
      following: user.following || [],
      createdAt: user.createdAt,
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Server error during logout" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const {
      collegeName,
      bio,
      location,
      linkedinUrl,
      githubUrl,
      profilePhoto,
      profileBackground,
    } = req.body;

    const updateData = {};
    if (collegeName !== undefined) updateData.collegeName = collegeName;
    if (bio !== undefined) updateData.bio = bio;
    if (location !== undefined) updateData.location = location;
    if (linkedinUrl !== undefined) updateData.linkedinUrl = linkedinUrl;
    if (githubUrl !== undefined) updateData.githubUrl = githubUrl;
    if (profilePhoto !== undefined) updateData.profilePhoto = profilePhoto;
    if (profileBackground !== undefined)
      updateData.profileBackground = profileBackground;

    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    }).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ message: "Server error during profile update" });
  }
};

export const followUser = async (req, res) => {
  try {
    const followerId = req.userId; // Current user
    const { userId: followingId } = req.params; // User to follow

    if (followerId === followingId) {
      return res.status(400).json({ message: "Cannot follow yourself" });
    }

    const currentUser = await User.findById(followerId);
    const userToFollow = await User.findById(followingId);

    if (!currentUser || !userToFollow) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if already following
    if (currentUser.following.includes(followingId)) {
      return res.status(400).json({ message: "Already following this user" });
    }

    // Add to following list
    currentUser.following.push(followingId);
    // Add to followers list
    userToFollow.followers.push(followerId);

    await currentUser.save();
    await userToFollow.save();

    const updatedUser = await User.findById(followerId).select("-password");
    res.status(200).json({
      message: "Followed successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Follow user error:", error);
    res.status(500).json({ message: "Server error during follow" });
  }
};

export const unfollowUser = async (req, res) => {
  try {
    const followerId = req.userId; // Current user
    const { userId: followingId } = req.params; // User to unfollow

    const currentUser = await User.findById(followerId);
    const userToUnfollow = await User.findById(followingId);

    if (!currentUser || !userToUnfollow) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if following
    if (!currentUser.following.includes(followingId)) {
      return res.status(400).json({ message: "Not following this user" });
    }

    // Remove from following list
    currentUser.following = currentUser.following.filter(
      (id) => id.toString() !== followingId,
    );
    // Remove from followers list
    userToUnfollow.followers = userToUnfollow.followers.filter(
      (id) => id.toString() !== followerId,
    );

    await currentUser.save();
    await userToUnfollow.save();

    const updatedUser = await User.findById(followerId).select("-password");
    res.status(200).json({
      message: "Unfollowed successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Unfollow user error:", error);
    res.status(500).json({ message: "Server error during unfollow" });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId)
      .select("-password")
      .populate("followers", "-password")
      .populate("following", "-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Get user profile error:", error);
    res.status(500).json({ message: "Server error fetching profile" });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password").limit(50);

    res.status(200).json(users);
  } catch (error) {
    console.error("Get all users error:", error);
    res.status(500).json({ message: "Server error fetching users" });
  }
};

// Search users by name or college
export const searchUsers = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q || q.trim().length === 0) {
      return res.status(200).json([]);
    }

    const users = await User.find({
      $or: [
        { fullname: { $regex: q, $options: "i" } },
        { collegeName: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
      ],
    })
      .select("-password")
      .limit(10);

    res.status(200).json(users);
  } catch (error) {
    console.error("Search users error:", error);
    res.status(500).json({ message: "Server error searching users" });
  }
};

// Change password
export const changePassword = async (req, res) => {
  try {
    const userId = req.userId;
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "New password must be at least 6 characters" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(
      currentPassword,
      user.password,
    );
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Change password error:", error);
    res.status(500).json({ message: "Server error changing password" });
  }
};

// Delete account
export const deleteAccount = async (req, res) => {
  try {
    const userId = req.userId;

    // Import models needed for cleanup
    const Post = (await import("../models/post.models.js")).default;
    const Bookmark = (await import("../models/bookmark.models.js")).default;
    const Message = (await import("../models/message.models.js")).default;
    const Conversation = (await import("../models/conversation.models.js"))
      .default;

    // Delete user's posts
    await Post.deleteMany({ user: userId });

    // Delete user's bookmarks
    await Bookmark.deleteMany({ user: userId });

    // Delete user's messages
    await Message.deleteMany({ sender: userId });

    // Delete conversations where user is a participant
    await Conversation.deleteMany({ participants: userId });

    // Remove user from followers/following lists of other users
    await User.updateMany(
      { followers: userId },
      { $pull: { followers: userId } },
    );
    await User.updateMany(
      { following: userId },
      { $pull: { following: userId } },
    );

    // Remove user's comments from posts
    await Post.updateMany(
      { "comments.user": userId },
      { $pull: { comments: { user: userId } } },
    );

    // Remove user's likes from posts
    await Post.updateMany({ likes: userId }, { $pull: { likes: userId } });

    // Delete the user
    await User.findByIdAndDelete(userId);

    // Clear auth cookie
    res.clearCookie("token");

    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Delete account error:", error);
    res.status(500).json({ message: "Server error deleting account" });
  }
};
