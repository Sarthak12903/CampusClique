import toast from "react-hot-toast";
import { create } from "zustand";

import { axiosInstance } from "../lib/axios";
export const useAuthStore = create((set, get) => ({
  authUser: null,
  isRegistering: false,
  isLoggingIn: false,

  register: async (data) => {
    set({ isRegistering: true });
    try {
      const res = await axiosInstance.post("/auth/register", data);
      if (res) {
        toast.success("Registered successfully!!");
        set({ authUser: res.data });
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
}));
