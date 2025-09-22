"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "es";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "vterra-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLang] = useState<Language>("en");

  // Initialize from localStorage
  useEffect(() => {
    try {
      const saved = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Language | null;
      if (saved === "en" || saved === "es") {
        setLang(saved);
        if (typeof document !== "undefined") document.documentElement.lang = saved;
      } else {
        if (typeof document !== "undefined") document.documentElement.lang = "en";
      }
    } catch {}
  }, []);

  const setLanguage = (lang: Language) => {
    setLang(lang);
    try {
      if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  };

  const toggleLanguage = () => setLanguage(language === "en" ? "es" : "en");

  const value = useMemo(() => ({ language, setLanguage, toggleLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

