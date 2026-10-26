"use client";

import { useTheme } from "./theme-provider";
import { DynamicIsland } from "@/components/DynamicIsland";
import LockScreen from "@/components/LockScreen";
import MacWindow from "@/components/MacWindow";

export default function Home() {
  const { isDark, setMode, mode } = useTheme();

  return (
    <>
      <DynamicIsland />
      <main id="top">
        <LockScreen />

        <section id="desktop" className="mx-auto max-w-5xl scroll-mt-24 px-4 pb-16 md:px-6">
          <MacWindow title="about.txt">
            <p className="text-sm leading-relaxed text-ink dark:text-fog">
              Hello! I&apos;m Jenn — final-year software engineering student at Manchester Met, 
              building full-stack apps and pastel interfaces.
            </p>
          </MacWindow>
        </section>
      </main>
    </>
  );
}
