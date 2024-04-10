"use server";
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import emailTemplate from "@/utils/emailTemplate";

export async function POST(req: NextRequest, res: NextResponse) {
  const json = await req.json();
  const { SMTP_EMAIL, SMTP_PASSWORD, SMTP_EMAIL_RECEIVE } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    secure: false, // use SSL
    port: 25, // port for secure SMTP
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to: SMTP_EMAIL_RECEIVE,
      subject: json.subject,
      html: emailTemplate(json.firstName, json.lastName, json.email, json.message),
    });
    console.log(sendResult);
  } catch (error) {
    return NextResponse.json({ status: "error", message: "Something wrong, please try again." });
  }

  return NextResponse.json({status: "success", message: "Email sending successfully!" });
}
