"use client";

import React from "react";
import { LanguageProvider } from "@/components/language-context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

