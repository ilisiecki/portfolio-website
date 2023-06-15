import ThemeToggle from "./ThemeToggle";
import SpeakerToggle from "./SpeakerToggle";
import Github from "@/components/icons/Github";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageToggle from "./LanguageToggle";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const t = useTranslations("Header");

  const NAV_ITEMS: Array<string> = [
    t("home"),
    t("work"),
    t("about"),
    t("contact"),
  ];

  return (
    <header className="px-4 sm:px-8">
      <div className="mx-auto flex max-w-screen-lg justify-between py-4 md:pt-16">
        <div className="flex gap-12 font-medium text-main-icon dark:text-main-iconDark">
          <Link href="/">Igor Lisiecki - logo</Link>
          <div className="hidden gap-12 md:flex">
            <Link
              href="/work"
              className="hover:text-main-iconHover dark:hover:text-main-iconHoverDark"
            >
              {t("work")}
            </Link>
            <Link
              href="/about"
              className="dark:hover:text-main-iconHoverDa hover:text-main-iconHover"
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="dark:hover:text-main-iconHoverDa hover:text-main-iconHover"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
        <div className="hidden items-center gap-9 sm:flex">
          <LanguageToggle />
          <ThemeToggle />
          <SpeakerToggle />
          <a href="https://github.com/ilisiecki" target="_blank">
            <Github className="group h-5 w-5 cursor-pointer fill-main-icon hover:fill-main-iconHover dark:fill-main-iconDark dark:hover:fill-main-iconHoverDark" />
          </a>
          <div className="flex md:hidden">
            <MenuToggle NAV_ITEMS={NAV_ITEMS} />
          </div>
        </div>
        <div className="flex sm:hidden">
          <MenuToggle NAV_ITEMS={NAV_ITEMS} />
        </div>
      </div>
    </header>
  );
};

export default Header;
