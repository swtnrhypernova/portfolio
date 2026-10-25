"use client";

import { useTheme } from "./theme-provider";
import { DynamicIsland } from "@/components/DynamicIsland";
import LockScreen from "@/components/LockScreen";

export default function Home() {
  const { isDark, setMode, mode } = useTheme();

  return (
    <>
      <DynamicIsland />
      <main id="top">
        <LockScreen />

        {/* placeholder for the rest of the page content */}
        <section id="desktop" className="h-screen flex items-center justify-center text-ink/50 dark:text-fog/50">
        desktop goes here
        </section>
      </main>
    </>
  );
}
