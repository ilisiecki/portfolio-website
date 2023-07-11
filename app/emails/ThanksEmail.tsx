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

export const ThanksEmail = ({
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
      <Preview> I appreciate you reaching out... </Preview>
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
              <Text style={paragraph}>Hi {username} 🌹,</Text>
              <Text style={paragraph}>
                I appreciate you reaching out to me. This is just a confirmation
                message and you don&apos;t have an answer to it.
              </Text>
              <Text style={paragraph}>
                I will do my best to respond as soon as possible 🤗.
              </Text>
              <Text style={paragraph}>
                Message sent:{" "}
                <Text style={review}> &quot;{message}&quot; </Text>
                <Text style={paragraph}> at 🕓: {formattedDate}. </Text>
              </Text>

              <Text style={paragraph}>
                If you have any questions please send a message on{" "}
                <Link
                  href="igorlisiecki.pl/contact"
                  target="_blank"
                  style={link}
                >
                  Contact
                </Link>
                .
              </Text>
              <Text style={paragraph}>
                Thanks,
                <br />
                Igor Lisiecki
              </Text>
            </Section>
          </Container>

          <Section style={footer}>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              © 2023 Igor Lisiecki, All Rights Reserved <br />
            </Text>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ThanksEmail;

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
