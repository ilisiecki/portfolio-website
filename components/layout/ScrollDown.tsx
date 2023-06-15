"use client";
import { Link } from "react-scroll";
import ScrollDownIcon from "@/components/icons/ScrollDownIcon";

type Props = {
  scrollTo: string;
};

const ScrollDown = (props: Props) => {
  return (
    <Link
      to={props.scrollTo}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <div className="hidden cursor-pointer stroke-main-icon pt-48 hover:stroke-main-iconHover dark:stroke-main-iconDark dark:hover:stroke-main-iconHoverDark lg:flex">
        <ScrollDownIcon className="h-16 w-16 fill-none" />
      </div>
    </Link>
  );
};

export default ScrollDown;
