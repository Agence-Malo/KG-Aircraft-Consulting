"use server";

import { Resend } from "resend";

export const submit = async ({
  formData,
  dialCode,
}: {
  formData: FormData;
  dialCode: string;
}) => {
  const resend = new Resend(process.env.RESEND_API_KEY),
    rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      tel: formData.get("tel"),
    };

  if (
    !rawFormData.message ||
    typeof rawFormData.message !== "string" ||
    !rawFormData.email ||
    typeof rawFormData.email !== "string" ||
    !rawFormData.name ||
    typeof rawFormData.name !== "string"
  ) {
    return { error: "Invalid message" };
  }

  const { data, error } = await resend.emails.send({
    from: `${rawFormData.name} <onboarding@resend.dev>`,
    to: `${process.env.MAIL_TO}`,
    reply_to: rawFormData.email,
    subject: "Website Contact Request",
    text: `From: ${rawFormData.name} (${rawFormData.email})${rawFormData.tel && typeof rawFormData.tel === "string" && rawFormData.tel.length > 0 && `\n${dialCode + rawFormData.tel}`}\n\n\nMessage:\n\n${rawFormData.message}`,
  });

  if (error) {
    console.error(error);
  }
};
