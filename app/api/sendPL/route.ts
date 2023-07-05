import ThanksEmailPL from "@/app/emails/ThanksEmailPL";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { username, email, message } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "info@service-mail.igorlisiecki.pl",
      to: email,
      subject: `Cześć ${username} 🌹,`,
      react: ThanksEmailPL({ username, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
