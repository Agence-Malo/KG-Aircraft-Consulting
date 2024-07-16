import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ViewProvider } from "@/context/view";
import UIProvider from "@/context/UIProvider";

export const metadata: Metadata = {
  title: "Flite Watch",
  description: "Soar to new heights with every flight",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"scroll-smooth"}>
      <SpeedInsights />
      <Analytics />
      <UIProvider>
        <ViewProvider>
          <body className={"font-gothic"}>{children}</body>
        </ViewProvider>
      </UIProvider>
    </html>
  );
}
