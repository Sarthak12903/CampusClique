import toast from "react-hot-toast";
import { create } from "zustand";

import { axiosInstance } from "../lib/axios";
export const useAuthStore = create((set, get) => ({
  authUser: null,
  isRegistering: false,
  isLoggingIn: false,
  isInitializing: true,

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
}));
