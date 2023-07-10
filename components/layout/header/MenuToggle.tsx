"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
} from "@/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";
import SpeakerToggle from "./SpeakerToggle";
import Github from "@/components/icons/Github";
import LanguageToggle from "./LanguageToggle";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import Hamburger from "@/components/icons/Hamburger";

type Props = {
  NAV_ITEMS: Array<string>;
};

const MenuToggle = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 767px)");

  useEffect(() => {
    if (isAboveMediumScreen) {
      setIsOpen(false);
    }
  }, [isAboveMediumScreen, setIsOpen]);

  return (
    <div className="flex">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="text-8xl">
          <Hamburger />
        </SheetTrigger>

        <SheetContent
          position="top"
          size="full"
          className="flex justify-center bg-white/60 dark:bg-main-background/80"
        >
          <div className="flex flex-col divide-y pt-8 dark:divide-main-iconDark/20">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="w-60 py-3 capitalize text-main-text dark:text-main-textDark sm:w-96"
            >
              {props.NAV_ITEMS[0]}
            </Link>
            <Link
              href="/work"
              onClick={() => setIsOpen(false)}
              className="w-60 py-3 capitalize text-main-text dark:text-main-textDark sm:w-96"
            >
              {props.NAV_ITEMS[1]}
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="w-60 py-3 capitalize text-main-text dark:text-main-textDark sm:w-96"
            >
              {props.NAV_ITEMS[2]}
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-60 py-3 capitalize text-main-text dark:text-main-textDark sm:w-96"
            >
              {props.NAV_ITEMS[3]}
            </Link>

            <div className="flex justify-center">
              <div className="flex items-center gap-4 pt-8">
                <LanguageToggle />
                <ThemeToggle />
                <SpeakerToggle />
                <a
                  href="https://github.com/ilisiecki"
                  target="_blank"
                  className="flex"
                >
                  <Github className="group flex h-5 w-5 cursor-pointer fill-main-icon hover:fill-main-iconHover dark:fill-main-iconDark dark:hover:fill-main-iconHoverDark" />
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuToggle;
