import { NextResponse } from "next/server";
import { createTransport, getTestMessageUrl } from "nodemailer";

// Create a transporter for SMTP
const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface requestinput {
  name: String;
  gmail: String;
  number: Number;
  message: String;
}

export async function POST(req: Request) {
  const body: requestinput = await req.json();
  const htmlContent = `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
    <h2 style="color: #333;">📬 New Contact Request</h2>
    <div style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.gmail}</p>
      <p><strong>Phone:</strong> ${body.number}</p>
      <p><strong>Message:</strong></p>
      <p style="background:#f1f1f1; padding: 10px; border-radius: 6px;">${body.message}</p>
    </div>
    <p style="margin-top: 20px; font-size: 0.85rem; color: #888;">Sent from your website contact form</p>
  </div>
`;

  try {
    const info = await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: `${process.env.EMAIL_USER}`,
      subject: `Contact request From   ${body.name}`,
      text: `${body.message}`,
      html: htmlContent,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", getTestMessageUrl(info));

    return NextResponse.json({
      success: true,
      message: "success in sending ",
    });
  } catch (err) {
    console.error("Error while sending mail", err);
    return NextResponse.json({ success: false, message: "fail in sending " });
  }
}
