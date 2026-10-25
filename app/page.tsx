"use client";

import { useTheme } from "./theme-provider";
import { DynamicIsland } from "@/components/DynamicIsland";

export default function Home() {
  const { isDark, setMode, mode } = useTheme();

  return (
    <>
      <DynamicIsland />
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold tracking-tighter">jenn.dev</h1>
        <p className="text-pink">palette loaded - {isDark ? "dark" : "light"} mode </p>
        <button
          onClick={() => setMode(isDark ? "light" : "dark")}
          className="rounded-full px-5 py-2 bg-pink text-white hover:scale-105 transition-transform"
        >
          Toggle theme
        </button>
      </main>
    </>
  );
}
