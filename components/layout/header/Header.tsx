import ThemeButton from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex">
      <div className="flex justify-between">
        <div>Igor Lisiecki - logo</div>
        <div>
          <ThemeButton />A
        </div>
      </div>
    </header>
  );
};

export default Header;
