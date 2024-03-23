import { create } from "zustand";

export const useUserDetailsFillter = create((set) => ({
  userDetails: [],
  setUserDetails: (date) => {
    set({ userDetails: date });
  },
}));
