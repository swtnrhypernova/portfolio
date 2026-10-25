"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "@/app/theme-provider";

export function DynamicIsland() {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, setMode } = useTheme();

  // a live value that tracks how far the page has been scrolled
  const { scrollY } = useScroll();

  // react to scroll position changes (scrollY itself is a MotionValue,
  // not a plain number, so we listen instead of read)
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        animate={{ width: scrolled ? 360 : 620 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="flex items-center justify-between rounded-full border border-white/10 bg-ink/90 px-4 h-11 text-white overflow-hidden backdrop-blur-2xl"
        style={{ boxShadow: "0 10px 40px rgba(43,45,83,0.4)" }}
      >
        <a href="#top" className="text-xs font-semibold tracking-tight shrink-0">
          jenn<span className="text-pink">.</span>dev
        </a>

        {/* links collapse away when scrolled — like an island closing */}
        <div className={`items-center gap-5 text-xs ${scrolled ? "hidden" : "flex"}`}>
          <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="/cv.pdf"
            className="flex items-center gap-1.5 rounded-full bg-pink px-2.5 py-1 text-[11px] hover:scale-105 transition-transform"
          >
            {!scrolled && "CV"}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
          <button
            onClick={() => setMode(isDark ? "light" : "dark")}
            className="rounded-full p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition"
            aria-label="Toggle colour mode"
          >
            {isDark ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            )}
          </button>
        </div>
      </motion.nav>
    </div>
  );
}