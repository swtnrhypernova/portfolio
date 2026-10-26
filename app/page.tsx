"use client";

import { useTheme } from "./theme-provider";
import { DynamicIsland } from "@/components/DynamicIsland";
import LockScreen from "@/components/LockScreen";
import MacWindow from "@/components/MacWindow";

const STACK = [
  { name: "Java", color: "#FF79C6" },
  { name: "JavaScript", color: "#FF9DD1" },
  { name: "TypeScript", color: "#A6B0F0" },
  { name: "Node.js", color: "#8FE3C4" },
  { name: "Vue", color: "#E2B8EC" },
  { name: "Next.js", color: "#8B93E8" },
  { name: "Express", color: "#FFD5A6" },
  { name: "SQL / SQLite", color: "#C9D3FF" },
  { name: "Python", color: "#F5C6E5" },
  { name: "Git & GitHub", color: "#B8E8D8" },
];

export default function Home() {
  return (
    <>
    <DynamicIsland />
    <main>
      {/* LockScreen here */}
      <LockScreen />
      <section id="desktop" className="mx-auto max-w-5xl scroll-mt-24 px-4 pb-16 md:px-6">
        {/* availability pill */}
        <div className="mb-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D9DCF5] bg-white/70 px-4 py-1.5 text-xs text-ink/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-fog/60">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5FD48A]" />
            Open to graduate software engineer roles · Manchester
          </span>
        </div>

        {/* 2-column desktop grid */}
        <div className="grid gap-5 md:grid-cols-2">
          <MacWindow title="stack.txt">
            <div className="flex flex-wrap gap-2.5">
              {STACK.map((t) => (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-2 rounded-full border border-[#D9DCF5] bg-white/70 px-3 py-1.5 text-xs font-medium text-ink dark:border-white/10 dark:bg-white/[0.06] dark:text-fog"
                >
                  <span
                    className="inline-block h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: t.color }}
                  />
                  {t.name}
                </span>
              ))}
            </div>
          </MacWindow>

          <MacWindow title="about.txt">
            <p className="text-sm leading-relaxed text-ink dark:text-fog">
              Hello! I&apos;m Jenn — final-year software engineering student at
              Manchester Met, building full-stack apps, Java systems, and pastel
              interfaces. Currently hunting graduate software engineer roles for
              2027.
            </p>
          </MacWindow>
        </div>
      </section>
    </main>
    </>
  );
}