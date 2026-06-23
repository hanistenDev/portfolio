import emailjs from "@emailjs/nodejs";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const publicKey = process.env.EMAILJS_PUBLIC_KEY;
const privateKey = process.env.EMAILJS_PRIVATE_KEY;

export function isEmailJsConfigured() {
  return Boolean(serviceId && templateId && publicKey && privateKey);
}

export async function sendContactEmail(payload: ContactPayload) {
  if (!isEmailJsConfigured()) {
    throw new Error("MISSING_CONFIG");
  }

  const response = await emailjs.send(
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
    {
      publicKey: publicKey!,
      privateKey: privateKey!,
    }
  );

  if (response.status !== 200) {
    console.error("EmailJS error:", response.status, response.text);
    throw new Error(response.text || "EMAILJS_FAILED");
  }
}
