import toast from "react-hot-toast";
import { create } from "zustand";

import { axiosInstance } from "../lib/axios";
export const useAuthStore = create((set, get) => ({
  authUser: null,
  isRegistering: false,
  isLoggingIn: false,
  isInitializing: true,
  isUpdatingProfile: false,

  checkAuth: async () => {
    try {
      console.log("Checking is under progress");
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data, isInitializing: false });
    } catch (error) {
      console.log("error in useAuthStore");
      set({ authUser: null, isInitializing: false });
      console.log("Error in checkAuth useAuthStore ", error);
    }
  },

  register: async (data) => {
    set({ isRegistering: true });
    try {
      const res = await axiosInstance.post("/auth/register", data);
      if (res) {
        toast.success("Registered successfully!!");
        set({ authUser: res.data });
        // Verify the session is properly established
        await get().checkAuth();
        // Clear browser history to prevent back button going to auth pages
        window.history.replaceState(null, "", "/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(
        `Error authStore Registration : ${error.response?.data?.message || "Registration Failed"}`,
      );
    } finally {
      set({ isRegistering: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      if (res) {
        toast.success("Login successful!!");
        set({ authUser: res.data });
        // Verify the session is properly established
        await get().checkAuth();
        // Clear browser history to prevent back button going to auth pages
        window.history.replaceState(null, "", "/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(
        `Error authStore Login : ${error.response?.data?.message || "Login Failed"}`,
      );
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      toast.success("Logged out successfully!!");
      set({ authUser: null });
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(
        `Error authStore Logout : ${error.response?.data?.message || "Logout Failed"}`,
      );
    }
  },

  updateProfile: async (profileData) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", profileData);
      if (res && res.data) {
        set({ authUser: res.data });
        toast.success("Profile updated successfully!!");
        return true; // Return success flag
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile");
      console.log(
        `Error updating profile : ${error.response?.data?.message || "Update Failed"}`,
      );
      return false; // Return failure flag
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  followUser: async (userId) => {
    try {
      const res = await axiosInstance.post(`/auth/follow/${userId}`);
      if (res) {
        toast.success("Followed successfully!!");
        set({ authUser: res.data.user || res.data });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to follow user");
      console.log(
        `Error following user : ${error.response?.data?.message || "Follow Failed"}`,
      );
    }
  },

  unfollowUser: async (userId) => {
    try {
      const res = await axiosInstance.post(`/auth/unfollow/${userId}`);
      if (res) {
        toast.success("Unfollowed successfully!!");
        set({ authUser: res.data.user || res.data });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to unfollow user");
      console.log(
        `Error unfollowing user : ${error.response?.data?.message || "Unfollow Failed"}`,
      );
    }
  },
}));
