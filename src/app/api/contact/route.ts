import { NextResponse } from "next/server";
import { isEmailJsConfigured, sendContactEmail } from "@/lib/emailjs-server";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  if (!isEmailJsConfigured()) {
    console.error("Contact form: missing EmailJS environment variables.");
    return NextResponse.json(
      { error: "Contact form is not configured on the server." },
      { status: 503 }
    );
  }

  let body: ContactBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  try {
    await sendContactEmail({ name, email, message });
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "EMAILJS_FAILED";
    console.error("Contact form error:", message);

    if (message.includes("non-browser")) {
      return NextResponse.json(
        {
          error:
            "Email service blocked server requests. Enable non-browser API access in EmailJS.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 502 }
    );
  }
}
