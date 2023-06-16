import { useTranslations } from "next-intl";
import Board from "./Board";

const Work = () => {
  const t = useTranslations("Work");

  const skills = [
    { name: "Next.js" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Prisma" },
    { name: "TanStack Query" },
    { name: "Zustand" },
    { name: "Shadcn/ui" },
    { name: "Vercel" },
    { name: "Git" },
    { name: "MySQL" },
    { name: "SQL" },
    { name: "CSS" },
    { name: "HTML" },
    { name: "Photoshop" },
    { name: "Illustrator" },
  ];
  return (
    <section id="work" className="mt-8">
      <div>
        <h2 className="text-center text-4xl font-bold text-main-text dark:text-main-textDark">
          {t("title")}
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-main-primary" />
        </h2>
      </div>
      <Board
        title={t("title-board-1")}
        description={t("description-1")}
        tools={["A", "B", "C", "D"]}
      />
      <Board
        title={t("title-board-2")}
        description={t("description-2")}
        tools={["A", "B", "C", "D"]}
      />
      <Board
        title={t("title-board-3")}
        description={t("description-3")}
        tools={["Next.Js", "Tailwind", "Zustand", "Headless Ui"]}
      />
    </section>
  );
};

export default Work;
