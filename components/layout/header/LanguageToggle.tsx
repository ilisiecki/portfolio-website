"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Language from "@/components/icons/Language";
import useSound from "use-sound";
import clickOnMenu from "@/sounds/clickOnMenu.mp3";
import LinkIntl from "next-intl/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import path from "path";

type Props = {};

const LanguageToggle = (props: Props) => {
  const [play, { stop }] = useSound(clickOnMenu, { volume: 0.5 });

  const [isHovering, setIsHovering] = useState(false);

  const pathname = usePathname().slice(0, 3);

  console.log(pathname);

  return (
    <HoverCard openDelay={0} closeDelay={100}>
      <HoverCardTrigger asChild>
        <button
          onMouseEnter={() => {
            setIsHovering(true);
            play();
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            stop();
          }}
        >
          <Language className="group fill-main-icon hover:fill-main-iconHoverDark dark:fill-main-iconDark dark:hover:fill-main-iconHoverDark" />
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="flex w-24 flex-col divide-y text-main-icon dark:divide-main-iconDark/20 dark:border-white/20 dark:bg-main-background dark:text-white">
        <div
          className={`${
            pathname === "/pl" ? "" : "font-black"
          } flex w-full justify-center`}
        >
          <LinkIntl href="/" locale="en">
            en
          </LinkIntl>
        </div>
        <div
          className={`${
            pathname === "/pl" ? "font-black" : ""
          } flex w-full justify-center`}
        >
          <LinkIntl href="/" locale="pl">
            pl
          </LinkIntl>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default LanguageToggle;
