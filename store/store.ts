import { create } from "zustand";

type Store = {
  isSound: boolean;
  setIsSound: (isSound: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  isSound: true,
  setIsSound: (isSound: boolean) => set({ isSound }),
}));
