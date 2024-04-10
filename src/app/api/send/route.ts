import { NextRequest, NextResponse } from "next/server";
import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";
import React from "react";

const resend = new Resend("re_eA9AANR3_AE7Vi9wryCgWC7wRk977wdr1");

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const data = await resend.emails.send({
                from: "heu@gmail.com",
                to: "gruhaha9@gmail.com",
                subject: "Hello",
                react: React.createElement(EmailTemplate, {firstName: "John", lastName: "Doe", message: "Hello, I'm John Doe"}),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
