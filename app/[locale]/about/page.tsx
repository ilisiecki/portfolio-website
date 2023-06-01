import { useTranslations } from "next-intl";
import Link from "next-intl/link";

type Props = {};

const About = (props: Props) => {
  const t = useTranslations("Index");
  return (
    <div>
      <div></div>
      <div>{t("title")}</div>
    </div>
  );
};

export default About;
