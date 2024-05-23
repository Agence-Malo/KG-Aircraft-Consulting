"use server";

import { Resend } from "resend";
import axios from "axios";

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
    from: "${rawFormData.name} <onboarding@resend.dev>",
    to: "gregory442005@gmail.com",
    reply_to: rawFormData.email,
    subject: "Contact Request",
    text: rawFormData.message,
  });
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
