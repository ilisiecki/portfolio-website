const Hamburger = () => {
  return (
    <div className="group flex cursor-pointer flex-col items-end gap-[5px] pt-0">
      <div className="h-0.5 w-[24px] rounded-full bg-main-icon dark:bg-main-iconDark"></div>
      <div className="h-0.5 w-[12px] rounded-full bg-main-icon transition-all duration-100 ease-in-out group-hover:w-[24px]	dark:bg-main-iconDark"></div>
      <div className="h-0.5 w-[18px] rounded-full bg-main-icon transition-all duration-100 ease-in-out group-hover:w-[24px]	dark:bg-main-iconDark"></div>
    </div>
  );
};

export default Hamburger;
