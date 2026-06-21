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
  return Boolean(serviceId && templateId && publicKey);
}

export async function sendContactEmail(payload: ContactPayload) {
  if (!isEmailJsConfigured()) {
    throw new Error("EmailJS is not configured on the server.");
  }

  const body: Record<string, unknown> = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      time: new Date().toLocaleString("de-CH", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    },
  };

  if (privateKey) {
    body.accessToken = privateKey;
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("EmailJS error:", response.status, detail);
    throw new Error(detail || "Failed to send message.");
  }
}
