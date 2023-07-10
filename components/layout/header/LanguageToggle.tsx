"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Language from "@/components/icons/Language";
import useSound from "use-sound";
import clickOnMenu from "@/sounds/clickOnMenu.mp3";
import LinkIntl from "next-intl/link";
import { useSoundStore } from "@/store/useSoundStore";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const LanguageToggle = () => {
  const [play, { stop }] = useSound(clickOnMenu, { volume: 1 });
  const [isHovering, setIsHovering] = useState(false);
  const internationalizationPathname = usePathname().slice(0, 3);
  const { isSound } = useSoundStore();

  const CreateRedirectPath = (internationalizationPathname: string) => {
    let currentPathname = usePathname();
    if (internationalizationPathname === "/pl" && currentPathname.length > 3) {
      return (currentPathname = currentPathname.slice(3));
    } else if (currentPathname.length > 3) {
      return currentPathname;
    } else {
      return (currentPathname = "/");
    }
  };

  const createdReditectPath = CreateRedirectPath(internationalizationPathname);

  return (
    <>
      <Popover open={isHovering} onOpenChange={setIsHovering}>
        <PopoverTrigger
          onClick={() => {
            setIsHovering(true);
            isSound ? play() : "";
          }}
          onMouseEnter={() => {
            setIsHovering(true);
            isSound ? play() : "";
          }}
          onMouseLeave={() => {
            setIsHovering(false);
            stop();
          }}
          className="outline-none"
        >
          <Language className="group fill-main-icon hover:fill-main-iconHoverDark dark:fill-main-iconDark dark:hover:fill-main-iconHoverDark" />
        </PopoverTrigger>
        <PopoverContent
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="-mt-1 flex w-24 flex-col divide-y text-main-icon dark:divide-main-iconDark/20 dark:border-white/20 dark:bg-main-background dark:text-white"
        >
          <div
            className={`${
              internationalizationPathname === "/pl" ? "" : "font-black"
            } flex w-full justify-center`}
          >
            <LinkIntl href={createdReditectPath} locale="en">
              en
            </LinkIntl>
          </div>
          <div
            className={`${
              internationalizationPathname === "/pl" ? "font-black" : ""
            } flex w-full justify-center`}
          >
            <LinkIntl href={createdReditectPath} locale="pl">
              pl
            </LinkIntl>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default LanguageToggle;
