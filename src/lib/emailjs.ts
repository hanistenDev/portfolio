import emailjs from "@emailjs/browser";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export function isEmailJsConfigured() {
  return Boolean(serviceId && templateId && publicKey);
}

export async function sendContactEmail(payload: ContactPayload) {
  if (!isEmailJsConfigured()) {
    throw new Error(
      "EmailJS is not configured. Add your keys to .env.local — see .env.example."
    );
  }

  return emailjs.send(
    serviceId!,
    templateId!,
    {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      time: new Date().toLocaleString("de-CH", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    },
    publicKey
  );
}
