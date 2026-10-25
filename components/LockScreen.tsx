"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SMOOTH = [0.22, 1, 0.36, 1] as const;
const SOFT_GRAD =
  "linear-gradient(135deg,#FF9DD1 0%,#E2B8EC 50%,#A6B0F0 100%)";
const RING_GRAD = "conic-gradient(from 0deg,#FF9DD1,#A6B0F0,#8FE3C4,#FF9DD1)";

// ---------- Clock (prerender-safe) ----------
function useClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date()); // only runs in the browser, after mount
    const id = setInterval(() => setNow(new Date()), 10_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const pad = (n: number) => String(n).padStart(2, "0");

  return {
    date: `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]}`,
    time: `${pad(now.getHours())}:${pad(now.getMinutes())}`,
  };
}

// ---------- Tiny icons ----------
function ArrowIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
function CheckIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>;
}

// ---------- Lock screen ----------
export default function LockScreen() {
  const clock = useClock();

  const [pw, setPw] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const unlock = () => {
    setUnlocked(true);
    setTimeout(
      () => document.getElementById("desktop")?.scrollIntoView({ behavior: "smooth" }),
      450,
    );
  };

  return (
    <section className="relative flex min-h-[74vh] flex-col items-center justify-center pb-10 pt-24 text-center">
      {/* date + time */}
      <motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: SMOOTH }}>
        <p className="text-sm font-medium tracking-wide text-ink/60 dark:text-fog/60">
          {clock?.date ?? "···"}
        </p>
        <p className="mt-1 text-7xl font-bold leading-none tracking-tighter tabular-nums md:text-8xl">
          {clock?.time ?? "--:--"}
        </p>
      </motion.div>

      {/* avatar with pulsing pastel ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: SMOOTH }}
        className="relative mt-9"
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-3 rounded-full blur-lg"
          style={{ background: RING_GRAD }}
        />
        <div className="relative h-24 w-24 overflow-hidden rounded-full border border-[#D9DCF5] bg-white/85 backdrop-blur-2xl dark:border-white/20 dark:bg-white/10">
          <Image
            src="/images/me.jpg"
            alt="Image of Chisom Jennifer Okoroafor"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </motion.div>

      {/* name + unlock pill */}
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.45, ease: SMOOTH }}>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Chisom Jennifer{" "}
          <span
            className="shimmer-text bg-clip-text bg-[length:220%_100%] text-transparent"
            style={{ backgroundImage: SOFT_GRAD }}
          >
            Okoroafor
          </span>
        </h1>
        <p className="mb-6 mt-1 text-sm font-light text-ink/60 dark:text-fog/60">
          Software engineering student · full-stack apps, Java systems, pastel interfaces
        </p>

        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#D9DCF5] bg-white/85 px-2 py-1.5 backdrop-blur-2xl dark:border-white/15 dark:bg-white/10">
          <input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && unlock()}
            disabled={unlocked}
            placeholder={unlocked ? "Welcome, Jenn" : "Enter Password"}
            aria-label="Password"
            className="w-44 bg-transparent text-center text-sm text-ink outline-none placeholder:text-ink/45 dark:text-fog dark:placeholder:text-fog/50"
            style={{ caretColor: "#FF79C6", letterSpacing: "0.15em" }}
          />
          <motion.button
            onClick={unlock}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white"
            style={{ background: unlocked ? "#5FD48A" : SOFT_GRAD }}
          >
            {unlocked ? <CheckIcon /> : <ArrowIcon />}
          </motion.button>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-5 text-[11px] text-ink/60 dark:text-fog/60"
      >
        type anything and press return — no wrong answers here
      </motion.p>
    </section>
  );
}