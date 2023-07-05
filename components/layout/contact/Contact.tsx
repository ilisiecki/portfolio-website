"use client";

import ContactForm from "./ContactForm";
import ContactFormPL from "./ContactFormPL";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
};

const Contact = (props: Props) => {
  const pathname = usePathname().slice(0, 3);

  return (
    <section className="items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center px-0 xl:px-12">
        <div className="my-8">
          <h2 className="text-center text-4xl font-bold text-main-text dark:text-main-textDark">
            {props.title}
            <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-main-primary"></hr>
          </h2>
        </div>
        {pathname === "/pl" ? <ContactFormPL /> : <ContactForm />}
      </div>
    </section>
  );
};

export default Contact;
