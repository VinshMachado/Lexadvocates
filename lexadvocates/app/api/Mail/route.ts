const nodemailer = require("nodemailer");
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, number } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Bot" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New User Info",
    text: `Name: ${name}\nNumber: ${number}`,
  });

  return NextResponse.json({ success: true });
}
