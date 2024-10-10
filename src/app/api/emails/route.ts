import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = 're_MSoYs1Tg_44Q7dvoiheUh27gWVcXtBcPM';
const from = 'no-reply <no-reply@thebinaryholdings.com>';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { to, body, subject } = data;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        html: body,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return NextResponse.json(data);
    } else {
      return NextResponse.error();
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
