import ThemeToggle from "./ThemeToggle";
import SpeakerToggle from "./SpeakerToggle";
import Github from "@/components/icons/Github";

const Header = () => {
  return (
    <header className="px-4 sm:px-8 md:px-9">
      <div className="mx-auto flex max-w-screen-lg justify-between py-4 md:py-14">
        <div className="flex gap-12">
          Igor Lisiecki - logo
          <div className="hidden gap-12 md:flex">
            <div>Strona1</div>
            <div>Strona2</div>
            <div>Strona3</div>
          </div>
        </div>
        <div className="flex items-center gap-12">
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
