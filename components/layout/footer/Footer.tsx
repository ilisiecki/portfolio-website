import Github from "@/components/icons/Github";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Header");

  const NAV_ITEMS: Array<string> = [
    t("home"),
    t("work"),
    t("about"),
    t("contact"),
  ];

  return (
    <footer className="mx-auto max-w-3xl px-4 pt-4 sm:px-6 md:max-w-5xl ">
      <hr className="mx-auto mt-8 h-px w-full rounded-full border-0 bg-main-icon/20 dark:bg-main-iconDark/20" />
      <div className="mx-auto flex flex-col p-2 py-4 text-center text-neutral-900 sm:p-4 md:flex-row md:justify-between">
        <div className="mb-2 flex flex-row items-center justify-center text-sm text-main-text/60 dark:text-main-textDark/40 md:mb-0">
          © 2023 Igor Lisiecki All Rights Reserved.
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="text-sm text-main-text/60 dark:text-main-textDark/40">
            <span className="mx-2 text-main-text/70 dark:text-main-textDark/70">
              Links:
            </span>
            <Link
              href="/"
              className="mx-2 py-3 underline-offset-4 hover:underline"
            >
              {NAV_ITEMS[0]}
            </Link>
            <Link
              href="/about"
              className="mx-2	py-3 underline-offset-4 hover:underline"
            >
              {NAV_ITEMS[2]}
            </Link>
            <Link
              href="/work"
              className="mx-2 py-3 underline-offset-4 hover:underline"
            >
              {NAV_ITEMS[1]}
            </Link>
            <Link
              href="/contact"
              className="mx-2 py-3 underline-offset-4 hover:underline"
            >
              {NAV_ITEMS[3]}
            </Link>
          </div>
          <a href="https://github.com/ilisiecki" target="_blank">
            <Github className="group h-5 w-5 cursor-pointer fill-main-icon hover:fill-main-iconHover dark:fill-main-iconDark dark:hover:fill-main-iconHoverDark" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
