import { useTranslations } from "next-intl";
import ScrollDown from "../ScrollDown";
import ImageParallax from "./ImageParallax";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section id="hero" className="flex flex-col items-center">
      <div className="flex w-full flex-col items-center justify-center sm:flex-row">
        <div className="flex flex-col items-center justify-center py-4 sm:py-0">
          <h1 className="text-center text-5xl font-bold text-main-text dark:text-main-textDark sm:text-left md:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="w-full px-3 pt-4 text-center text-lg font-semibold text-main-text dark:text-main-textDark sm:w-[17rem] sm:px-0 sm:pt-2 sm:text-left md:w-[20rem] lg:w-[24rem]">
            {t("text-1")}{" "}
            <span className="text-main-primary">{t("text-1-1")}</span>{" "}
            {t("text-1-2")}{" "}
            <span className="text-main-secondary">{t("text-1-3")}</span>{" "}
            {t("text-1-4")} <br /> {t("text-1-5")}.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <ImageParallax />
          <div className="gradient-for-logo absolute -z-10 h-72 w-72 rounded-full blur-[80px] md:h-[25rem] md:w-[25rem] lg:h-[35rem] lg:w-[35rem]"></div>
        </div>
      </div>
      <ScrollDown scrollTo="about" />
    </section>
  );
};

export default Hero;
