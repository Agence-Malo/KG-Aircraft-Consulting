"use server";

import { Resend } from "resend";
import axios from "axios";

const resend = new Resend("re_2YyygLRB_7yjGNrNKknromyf1v5TrKVUv");

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
    text: `From: ${rawFormData.name} (${rawFormData.email})\nTel.: ${rawFormData.tel && typeof rawFormData.tel === "string" && rawFormData.tel.length > 0 ? dialCode + rawFormData.tel : "(No phone number provided)"}\n\nMessage:\n${rawFormData.message}`,
  });

  if (error) {
    console.error(error);
  }
};

export const getWeatherData = async (cities: string[]) => {
  const apiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  const responses = await Promise.all(
    cities.map((city) =>
      axios.get(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`),
    ),
  );
  console.log(responses);
  //@ts-ignore
  return responses.map(
    (res) => `${res.data.name} ${Math.round(res.data.main.temp)}°C`,
  );
};
