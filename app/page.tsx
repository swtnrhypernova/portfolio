"use client";

import { DynamicIsland } from "@/components/DynamicIsland";
import LockScreen from "@/components/LockScreen";
import MacWindow from "@/components/MacWindow";
import Wallpaper from "@/components/Wallpaper";
import Dock from "@/components/Dock";

function Dot({ color, size = 8 }: { color: string; size?: number }) {
  return (
    <span
      className="inline-block shrink-0 rounded-full"
      style={{ width: size, height: size, backgroundColor: color }}
    />
  );
}

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

const MODULES = [
  { name: "Object-Oriented Programming", score: 95 },
  { name: "Web Technologies", score: 94 },
  { name: "Software Design & Architecture", score: 92 },
  { name: "Data Structures & Algorithms", score: 85 },
];

const SOFT_GRAD = "linear-gradient(135deg,#FF9DD1 0%,#E2B8EC 50%,#A6B0F0 100%)";

export default function Home() {
  return (
    <>
      <DynamicIsland />
      <Wallpaper />
      <main>
        <LockScreen />

        <section id="desktop" className="mx-auto max-w-5xl scroll-mt-24 px-4 pb-16 md:px-6">
          {/* availability pill */}
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9DCF5] bg-white/70 px-4 py-1.5 text-xs text-ink/60 dark:border-white/10 dark:bg-white/[0.06] dark:text-fog/60">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5FD48A]" />
              Open to graduate software engineer roles · Manchester
            </span>
          </div>

          {/* row 1 — stack + about */}
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

          {/* row 2 — projects bento + results + contact */}
          <div id="projects" className="mt-4 grid scroll-mt-24 gap-4 md:grid-cols-12">
            {/* left: bento projects */}
            <div className="md:col-span-8">
              <MacWindow title="projects — bento.grid">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-6">
                  {/* Auctionary */}
                  <a
                    href="https://github.com/swtnrhypernova/auctionary-showcase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block overflow-hidden rounded-2xl border border-[#E2E4FF] bg-[#FBFBFF] p-5 sm:col-span-4 sm:row-span-2 dark:border-white/[0.08] dark:bg-white/[0.04]"
                  >
                    <div className="relative">
                      <div className="mb-4 flex gap-1.5">
                        {["#8FE3C4", "#A8E8C4", "#A8E8C4", "#D2C4EE"].map((c, j) => <Dot key={j} color={c} />)}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight">Auctionary</h3>
                      <p className="mt-0.5 mb-3 text-[11px] text-ink/60 dark:text-fog/60">Full-stack auction platform</p>
                      <p className="max-w-sm text-xs leading-relaxed text-ink/60 dark:text-fog/60">
                        Database-driven auction app with user accounts, listings, category browsing and bidding.
                        Salted password hashing and server-side validation throughout.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {["Vue.js", "Node.js", "Express.js", "SQLite"].map((s) => (
                          <span key={s} className="rounded-full bg-[#EFF0FF] px-2.5 py-0.5 text-[10px] dark:bg-white/10">
                            {s}
                          </span>
                        ))}
                      </div>
                      <p className="mt-3 text-xs font-medium text-[#D6549A] dark:text-pink">Read the case study →</p>
                    </div>
                  </a>

                  {/* TechCord */}
                  <a
                    href="https://techcord-website.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-[#E2E4FF] bg-[#FBFBFF] p-5 sm:col-span-2 dark:border-white/[0.08] dark:bg-white/[0.04]"
                  >
                    <div className="mb-3 flex gap-1.5">
                      {["#8B93E8", "#C4CBF4", "#A8E8C4", "#FF79C6"].map((c, j) => <Dot key={j} color={c} size={7} />)}
                    </div>
                    <h3 className="text-base font-semibold tracking-tight">TechCord</h3>
                    <p className="mt-0.5 mb-2 text-[11px] text-ink/60 dark:text-fog/60">Team project · News platform + Discord bot</p>
                    <p className="text-xs leading-relaxed text-ink/60 dark:text-fog/60">
                      Team-built news platform and Discord bot with external API integration.
                    </p>
                    <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-[#D6549A] dark:text-pink">
                      Live on Vercel
                    </p>
                  </a>

                  {/* content creation stat */}
                  <div className="flex flex-col justify-between rounded-2xl border border-[#E2E4FF] bg-[#FBFBFF] p-5 sm:col-span-2 dark:border-white/[0.08] dark:bg-white/[0.04]">
                    <p className="mb-3 text-xs uppercase tracking-[0.18em] text-ink/60 dark:text-fog/60">Beyond code</p>
                    <div>
                      <p className="text-3xl font-bold tracking-tight">298k</p>
                      <p className="mt-1 text-xs text-ink/60 dark:text-fog/60">
                        views on a video I edited — from 1,500 followers I grew myself.
                      </p>
                    </div>
                  </div>

                  {/* Board Game Simulation */}
                  <a
                    href="https://github.com/swtnrhypernova/board-game-simulation-showcase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-[#E2E4FF] bg-[#FBFBFF] p-5 sm:col-span-3 dark:border-white/[0.08] dark:bg-white/[0.04]"
                  >
                    <div className="mb-3 flex gap-1.5">
                      {["#F2CFB8", "#BFEAC9", "#F5E9B8"].map((c, j) => <Dot key={j} color={c} size={7} />)}
                    </div>
                    <h3 className="text-base font-semibold tracking-tight">Board Game Simulation</h3>
                    <p className="mt-0.5 mb-2 text-[11px] text-ink/60 dark:text-fog/60">Java 21 · Clean Architecture</p>
                    <p className="text-xs leading-relaxed text-ink/60 dark:text-fog/60">
                      Console game for 2–4 players, five variations, replay support. Strategy, Observer and Decorator patterns.
                    </p>
                    <p className="mt-3 text-[10px] font-medium uppercase tracking-wide text-[#D6549A] dark:text-pink">
                      85% · Software Design & Architecture
                    </p>
                  </a>

                  {/* next project placeholder */}
                  <div className="relative overflow-hidden rounded-2xl border-[1.5px] border-dashed border-[#C4C9EF] bg-[#FDFDFF] p-5 sm:col-span-3 dark:border-white/15 dark:bg-white/[0.02]">
                    <div className="relative">
                      <div className="mb-3 flex gap-1.5">
                        {["#C4CBF4", "#8B93E8"].map((c, j) => <Dot key={j} color={c} size={7} />)}
                      </div>
                      <h3 className="text-base font-semibold tracking-tight">Next project — in the works</h3>
                      <p className="mt-1 text-xs leading-relaxed text-ink/60 dark:text-fog/60">
                        A new build is coming for this tile. Watch this space — or check GitHub for the first commits.
                      </p>
                    </div>
                  </div>
                </div>
              </MacWindow>
            </div>

            {/* right column */}
            <div className="grid gap-4 md:col-span-4">
              {/* results.zip */}
              <MacWindow title="results.zip">
                <p className="mb-4 text-xs uppercase tracking-[0.18em] text-ink/60 dark:text-fog/60">Modules & results</p>
                <div className="space-y-3.5">
                  {MODULES.map((m) => (
                    <div key={m.name}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>{m.name}</span>
                        <span className="text-[#D6549A] dark:text-pink">{m.score}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-[#E2E4FF] dark:bg-white/10">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${m.score}%`, background: SOFT_GRAD }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </MacWindow>

              {/* Messages contact */}
              <div id="contact" className="scroll-mt-24">
                <MacWindow title="Jenn — Messages">
                  <div className="space-y-2.5">
                    <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-[#EFF0FF] px-4 py-2.5 text-sm text-ink/85 dark:bg-white/10 dark:text-fog/85">
                      Hi Jenn — are you open to graduate software engineer roles?
                    </div>
                    <div
                      className="ml-auto max-w-[85%] rounded-2xl rounded-br-md px-4 py-2.5 text-sm text-white"
                      style={{ background: SOFT_GRAD }}
                    >
                      Absolutely — let&apos;s build something together.
                    </div>
                    <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-[#EFF0FF] px-4 py-2.5 text-sm text-ink/85 dark:bg-white/10 dark:text-fog/85">
                      Great — how do I reach you?
                    </div>
                    <a
                      href="mailto:jennifer.okoroaforx@gmail.com"
                      className="ml-auto block max-w-[85%] rounded-2xl rounded-br-md px-4 py-2.5 text-center text-sm text-white transition hover:opacity-90"
                      style={{ background: SOFT_GRAD }}
                    >
                      jennifer.okoroaforx@gmail.com
                    </a>
                    <div className="ml-auto flex max-w-[85%] gap-2">
                      <a
                        href="https://github.com/swtnrhypernova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-2xl bg-[#EFF0FF] px-4 py-2.5 text-center text-sm dark:bg-white/10"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://www.linkedin.com/in/swtnrhypernova"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-2xl bg-[#EFF0FF] px-4 py-2.5 text-center text-sm dark:bg-white/10"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </MacWindow>
              </div>
            </div>
          </div>
        </section>

        {/* footer — outside the section now */}
        <footer className="px-4 pb-32 pt-2">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 rounded-[1.4rem] border border-[#D9DCF5] bg-white/80 px-6 py-5 backdrop-blur-xl md:flex-row dark:border-white/10 dark:bg-[#1c1d3a]/80">
            <span className="text-sm font-semibold tracking-tight">
              jenn<span className="text-[#D6549A] dark:text-pink">.</span>dev
            </span>
            <span className="text-xs text-ink/60 dark:text-fog/60">
              © 2026 Chisom Jennifer Okoroafor · Manchester, UK · Sayonani × Apple
            </span>
            <a
              href="mailto:jennifer.okoroaforx@gmail.com"
              className="text-xs text-[#D6549A] hover:underline dark:text-pink"
            >
              jennifer.okoroaforx@gmail.com
            </a>
          </div>
        </footer>
      </main>
      <Dock />
    </>
  );
}