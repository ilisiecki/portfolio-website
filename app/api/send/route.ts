import ThanksEmail from "@/app/emails/ThanksEmail";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { username, email, message } = await request.json();
  try {
    const data = await resend.emails.send({
      from: process.env.EMAIL_SEND_ADDRESS || "",
      to: email && process.env.EMAIL_TO_ADDRESS,
      subject: `Hi ${username} 🌹,`,
      react: ThanksEmail({ username, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
