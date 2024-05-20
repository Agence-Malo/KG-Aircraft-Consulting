"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const submit = async ({
  formData,
  dialCode,
}: {
  formData: FormData;
  dialCode: string;
}) => {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  if (
    !rawFormData.message ||
    typeof rawFormData.message !== "string" ||
    !rawFormData.email ||
    typeof rawFormData.email !== "string"
  ) {
    return { error: "Invalid message" };
  }

  await resend.emails.send({
    from: "Contact Form JetHouse <onboarding@resend.dev>",
    to: "gregory442005@gmail.com",
    reply_to: rawFormData.email,
    subject: "Contact Request",
    text: rawFormData.message,
  });
};
