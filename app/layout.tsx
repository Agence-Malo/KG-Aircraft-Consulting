import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ViewProvider } from "@/context/view";
import NextUIProvider from "@/context/nextui";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

export const metadata: Metadata = {
  title: "KG Aircraft Consulting",
  description: "Soar to new heights with every flight",
  authors: [
    { name: "Agence Malo", url: "https://agencemalo.com" },
    { name: "Gregory Buffard", url: "https://www.gregory-buffard.com" },
  ],
  keywords: ["aircraft", "consulting", "services", "flight", "pilot"],
};

export const viewport: Viewport = {
  themeColor: "#D6D0C3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${montserrat.className} bg-vitsippa-300`}
    >
      <NextUIProvider>
        <ViewProvider>
          <body>{children}</body>
        </ViewProvider>
      </NextUIProvider>
    </html>
  );
}
