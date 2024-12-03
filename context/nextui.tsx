"use client";

import { NextUIProvider as UIProvider } from "@nextui-org/react";

const NextUIProvider = ({ children }: { children: React.ReactNode }) => (
  <UIProvider>{children}</UIProvider>
);

export default NextUIProvider;
