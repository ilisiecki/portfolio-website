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
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img width={114} src={`${baseUrl}/images/fox-email.png`} />
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hi {username} 🌹,</Text>
            <Text style={paragraph}>
              I appreciate you reaching out with me. This is just confirm
              messange and you don&apos;t have answer to it.
            </Text>
            <Text style={paragraph}>
              I will do my best to respond as soon as possible 🤗.
            </Text>
            <Text style={paragraph}>
              Message sended:{" "}
              <Text style={review}> &quot;{message}&quot; </Text>
              <Text style={paragraph}> at 🕓: {formattedDate}. </Text>
            </Text>

            <Text style={paragraph}>
              If you have any questions please send message on{" "}
              <Link href="igorlisiecki.pl/contact" style={link}>
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
    </Html>
  );
};

export default ThanksEmail;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

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

const container = {
  display: "flex",
  width: "580px",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 50px 10px 60px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  paddingTop: 30,
  marginBottom: 30,
  paddingLeft: 95,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
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
