import { useTranslations } from "next-intl";

type Props = {};

const skills = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Tailwind CSS" },
  { name: "TanStack Query" },
  { name: "Zustand" },
  { name: "Shadcn/ui" },
  { name: "Prisma" },
  { name: "Git" },
  { name: "Vercel" },
  { name: "SQL" },
  { name: "MySQL" },
  { name: "CSS" },
  { name: "HTML" },
];

const About = (props: Props) => {
  const t = useTranslations("About");
  return (
    <section id="about" className="mt-12 lg:mt-48">
      <div>
        <h2 className="text-center text-4xl font-bold text-main-text dark:text-main-textDark">
          {t("title")}
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-main-primary"></hr>
        </h2>
      </div>
      <div className="flex flex-col justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
        <div className="md:w-1/2">
          <h3 className="mb-6 justify-center text-center text-2xl font-semibold text-main-text dark:text-main-textDark lg:text-left">
            {t("subtitle")}
          </h3>
          <p className="px-4 text-center md:px-0 lg:text-left">{t("text-1")}</p>
          <br />
          <p className="px-4 text-center md:px-0 lg:text-left">{t("text-2")}</p>
          <br />
          <p className="px-4 text-center md:px-0 lg:text-left">{t("text-3")}</p>
          <br />
          <p className="px-4 text-center md:px-0 lg:text-left">{t("text-4")}</p>
        </div>
        <div className="md:w-1/2">
          <h3 className="mb-6 justify-center text-center text-2xl font-semibold text-main-text dark:text-main-textDark lg:text-right">
            {t("subtitle-2")}
          </h3>
          <div className="z-10 flex flex-row flex-wrap justify-center gap-2 md:justify-end">
            {skills.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="mt-2 cursor-default rounded bg-main-secondary/70 px-4 py-2 font-semibold text-main-text hover:bg-main-primary/80 dark:text-main-textDark"
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
