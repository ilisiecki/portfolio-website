"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Providers(props: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {props.children}
    </ThemeProvider>
  );
}
