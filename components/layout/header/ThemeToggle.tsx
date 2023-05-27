"use client";

import { useTheme } from "next-themes";
import Sun from "@/components/icons/Sun";
import Moon from "@/components/icons/Moon";

type Props = {};

const ThemeButton = (props: Props) => {
  const { setTheme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme("dark")} className="dark:hidden">
        <Sun className="" />
      </button>
      <button
        onClick={() => setTheme("light")}
        className="hidden dark:inline-block"
      >
        <Moon className="" />
      </button>
    </>
  );
};

export default ThemeButton;
