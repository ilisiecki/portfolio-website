import ContactComponent from "@/components/layout/contact/Contact";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 md:max-w-7xl">
      <ContactComponent title={t("title")} />
    </div>
  );
};

export default Contact;
