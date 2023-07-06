"use client";

import useSound from "use-sound";
import { useTheme } from "next-themes";
import Sun from "@/components/icons/Sun";
import Moon from "@/components/icons/Moon";
import themeToggleOn from "@/sounds/themeToggleOn.mp3";
import themeToggleOff from "@/sounds/themeToggleOff.mp3";
import { useStore } from "@/store/store";

type Props = {};

const ThemeToggle = (props: Props) => {
  const { setTheme } = useTheme();
  const { isSound } = useStore();

  const [playOn] = useSound(themeToggleOn, {
    volume: 1.5,
  });

  const [playOff] = useSound(themeToggleOff, {
    volume: 1.5,
  });

  return (
    <>
      <button
        onClick={() => {
          setTheme("dark"), isSound ? playOff() : "";
        }}
        className="hover:fill-main-iconHover dark:hidden"
      >
        <Sun className="h-5 w-6 fill-main-icon hover:fill-main-iconHover" />
      </button>
      <button
        onClick={() => {
          setTheme("light"), isSound ? playOn() : "";
        }}
        className="hidden dark:inline-block"
      >
        <Moon className="h-5 w-5 fill-main-iconDark hover:fill-main-iconHoverDark" />
      </button>
    </>
  );
};

export default ThemeToggle;
