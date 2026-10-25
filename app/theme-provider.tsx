"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Mode = "system" | "light" | "dark";

const ThemeContext = createContext({
  mode: "system" as Mode,
  isDark: true,
  setMode: (_m: Mode) => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("system");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Mode | null;
    if (saved) setMode(saved);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const dark = mode === "system" ? media.matches : mode === "dark";
      setIsDark(dark);
      document.documentElement.classList.toggle("dark", dark);
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [mode]);

  const change = (m: Mode) => {
    setMode(m);
    localStorage.setItem("theme", m);
  };

  return (
    <ThemeContext.Provider value={{ mode, isDark, setMode: change }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);