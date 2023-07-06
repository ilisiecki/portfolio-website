import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Store = {
  isSound: boolean;
  setIsSound: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      isSound: true,
      setIsSound: () => set((state) => ({ isSound: !state.isSound })),
    }),
    { name: "sound-storage", storage: createJSONStorage(() => sessionStorage) }
  )
);
