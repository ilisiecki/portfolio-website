import ThemeToggle from "./ThemeToggle";
import SpeakerToggle from "./SpeakerToggle";
import Github from "@/components/icons/Github";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 sm:px-8 md:px-9">
      <div className="mx-auto flex max-w-screen-lg justify-between py-4 md:py-16">
        <div className="flex gap-12 font-medium text-main-icon dark:text-main-iconDark">
          <Link href="/">Igor Lisiecki - logo</Link>
          <div className="hidden gap-12 md:flex">
            <Link
              href="/work"
              className="hover:text-main-iconHover dark:hover:text-main-iconHoverDark"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="dark:hover:text-main-iconHoverDa hover:text-main-iconHover"
            >
              About me
            </Link>
            <Link
              href="/contact"
              className="dark:hover:text-main-iconHoverDa hover:text-main-iconHover"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-9">
          <ThemeToggle />
          <SpeakerToggle />
          <a href="https://github.com/ilisiecki" target="_blank">
            <Github className="group h-5 w-5 cursor-pointer fill-main-icon hover:fill-main-iconHover dark:fill-main-iconDark dark:hover:fill-main-iconHoverDark" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
