"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SMOOTH = [0.22, 1, 0.36, 1] as const;

// ---------- Icons ----------
function BracesIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 3H7a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1M16 3h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-1" /></svg>;
}
function PersonIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>;
}
function FolderIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" /></svg>;
}
function ChartIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>;
}
function ChatIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z" /></svg>;
}
function MailIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 7l9 6 9-6" /></svg>;
}
function DownloadIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>;
}

const ITEMS = [
  { label: "Stack", href: "#desktop", Icon: BracesIcon, bg: "linear-gradient(180deg,#AAB4F2,#8B93E8)" },
  { label: "About", href: "#desktop", Icon: PersonIcon, bg: "linear-gradient(180deg,#FFA5D6,#FF85C2)" },
  { label: "Projects", href: "#projects", Icon: FolderIcon, bg: "linear-gradient(180deg,#ADF0DC,#8FE3C4)" },
  { label: "Results", href: "#desktop", Icon: ChartIcon, bg: "linear-gradient(180deg,#D2BCF0,#C4A8E8)" },
  { label: "Messages", href: "#contact", Icon: ChatIcon, bg: "linear-gradient(180deg,#E8EAFB,#D8DCF6)" },
  { label: "Email", href: "mailto:jennifer.okoroaforx@gmail.com", Icon: MailIcon, bg: "linear-gradient(180deg,#8A92E0,#737CC9)" },
];

export default function Dock() {
  const [hovered, setHovered] = useState<number | null>(null);
  const dockItems = [
    ...ITEMS.map((it, i) => ({ ...it, i })),
    { divider: true },
    { label: "Download CV", href: "/cv.pdf", Icon: DownloadIcon, bg: "linear-gradient(180deg,#3E4380,#2B2D53)", cv: true, i: ITEMS.length },
  ];

  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.35, ease: SMOOTH }}
      className="pointer-events-none fixed bottom-3 left-0 right-0 z-40 flex justify-center"
    >
      <div
        className="pointer-events-auto flex items-end gap-3 rounded-[1.35rem] border border-white/70 bg-white/50 px-3.5 pb-2.5 pt-2.5 backdrop-blur-2xl dark:border-white/[0.14] dark:bg-[#1c1d3a]/55"
        style={{ boxShadow: "0 14px 44px rgba(43,45,83,0.22)" }}
        onMouseLeave={() => setHovered(null)}
      >
        {dockItems.map((item, idx) =>
          "divider" in item ? (
            <span key={`div-${idx}`} className="mx-1.5 h-10 w-[1.5px] self-center bg-ink/20 dark:bg-white/15" />
          ) : (
            <motion.a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHovered(item.i)}
              animate={{
                scale:
                  hovered === null ? 1
                  : hovered === item.i ? 1.45
                  : Math.abs(hovered - item.i) === 1 ? 1.15
                  : 1,
                y:
                  hovered === null ? 0
                  : hovered === item.i ? -16
                  : Math.abs(hovered - item.i) === 1 ? -6
                  : 0,
                x:
                  hovered === null ? 0
                  : (item.i < hovered ? -1 : 1) *
                    (Math.abs(hovered - item.i) === 1 ? 10 : Math.abs(hovered - item.i) === 2 ? 4 : 0),
              }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              className="relative flex flex-col items-center"
            >
              {/* macOS-style name tooltip */}
              {hovered === item.i && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.16, ease: SMOOTH }}
                  className="absolute -top-11 whitespace-nowrap rounded-lg border border-[#D9DCF5] bg-white px-3 py-1.5 text-[11px] font-medium text-ink dark:border-white/15 dark:bg-[#1c1d3a] dark:text-white"
                  style={{ boxShadow: "0 6px 20px rgba(43,45,83,0.25)" }}
                >
                  {item.label}
                </motion.div>
              )}
              <span
                className="flex h-[46px] w-[46px] items-center justify-center rounded-[0.95rem] text-white"
                style={{
                  background: item.bg,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 12px rgba(43,45,83,0.18)",
                }}
              >
                <item.Icon />
              </span>
            </motion.a>
          )
        )}
      </div>
    </motion.div>
  );
}