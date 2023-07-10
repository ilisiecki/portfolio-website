import { useTranslations } from "next-intl";
import Board from "./Board";

const Work = () => {
  const t = useTranslations("Work");

  return (
    <section id="work" className="mt-12">
      <div>
        <h2 className="text-center text-4xl font-bold text-main-text dark:text-main-textDark">
          {t("title")}
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-main-primary" />
        </h2>
      </div>
      <Board
        title={t("title-board-1")}
        description={t("description-1")}
        tools={["Next.Js", "Tailwind", "Zustand", "Framer", "Shadcn/ui"]}
        readMore={t("read-more")}
        liveLink="https://www.igorlisiecki.pl/pl"
        gitHubLink="https://github.com/ilisiecki/portfolio-website"
      />
      <Board
        title={t("title-board-2")}
        description={t("description-2")}
        tools={[
          "Next.Js",
          "tRCP",
          "Prisma",
          "NextAuth",
          "Tailwind",
          "Headless Ui",
        ]}
        readMore={t("read-more")}
        liveLink="https://t3-easydict-fullstack.vercel.app/"
        gitHubLink="https://github.com/ilisiecki/t3-easydict-fullstack"
      />
      <Board
        title={t("title-board-3")}
        description={t("description-3")}
        tools={["Next.Js", "Tailwind", "Zustand", "Headless Ui"]}
        readMore={t("read-more")}
        liveLink="https://nextjs13-2-youtubue-ui.vercel.app/"
        gitHubLink="https://github.com/ilisiecki/nextjs13.2-youtubue-ui"
      />
    </section>
  );
};

export default Work;
