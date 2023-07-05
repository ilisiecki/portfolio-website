import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  username: string;
  message: string;
  updatedDate?: Date;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ThanksEmailPL = ({
  username,
  message,
  updatedDate = new Date(),
}: WelcomeEmailProps) => {
  const formattedDate = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(updatedDate);

  return (
    <Html>
      <Head />
      <Preview> Dziękuję za kontakt... </Preview>
      <Tailwind>
        <Body className="mx-auto bg-neutral-200 font-sans">
          <Container className="rounded-lg bg-white text-center shadow-lg">
            <Img
              src={`${baseUrl}/images/fox-email.png`}
              className="mx-auto w-48 py-4"
            />
            <Section className="flex w-full">
              <Row>
                <Column style={sectionBorder} />
                <Column style={sectionCenter} />
                <Column style={sectionBorder} />
              </Row>
            </Section>
            <Section style={content}>
              <Text style={paragraph}>Cześć {username} 🌹,</Text>
              <Text style={paragraph}>
                Dziękuję za kontakt. Jest to tylko wiadomość potwierdzająca
                otrzymanie prze zemnie Twojej wiadomości. Nie musisz na nią
                odpowiadać.
              </Text>
              <Text style={paragraph}>
                Zrobię wszystko, aby odpowiedzieć najszybciej jak to możliwe 🤗.
              </Text>
              <Text style={paragraph}>
                Wysłana wiadomość:{" "}
                <Text style={review}> &quot;{message}&quot; </Text>
                <Text style={paragraph}>
                  {" "}
                  Data wysłania 🕓: {formattedDate}.{" "}
                </Text>
              </Text>

              <Text style={paragraph}>
                Jeżeli masz jeszcze jakieś pytania odezwij się proszę tutaj{" "}
                <Link
                  href="igorlisiecki.pl/contact/pl"
                  target="_blank"
                  style={link}
                >
                  Kontakt
                </Link>
                .
              </Text>
              <Text style={paragraph}>
                Dziękuję,
                <br />
                Igor Lisiecki
              </Text>
            </Section>
          </Container>

          <Section style={footer}>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © 2023 Igor Lisiecki, Wszelkie prawa zastrzeżone <br />
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ThanksEmailPL;

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const footer = {
  width: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 50px 10px 60px",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(255,153,0)",
  width: "102px",
};

const link = {
  textDecoration: "underline",
};
