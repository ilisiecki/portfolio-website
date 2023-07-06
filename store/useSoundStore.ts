import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type SoundStore = {
  isSound: boolean;
  setIsSound: () => void;
};

export const useSoundStore = create<SoundStore>()(
  persist(
    (set) => ({
      isSound: true,
      setIsSound: () => set((state) => ({ isSound: !state.isSound })),
    }),
    { name: "sound-storage", storage: createJSONStorage(() => localStorage) }
  )
);
