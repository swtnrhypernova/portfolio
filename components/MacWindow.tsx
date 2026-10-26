"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const SMOOTH = [0.22, 1, 0.36, 1] as const;

function TrafficLights() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
      <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
      <span className="h-3 w-3 rounded-full bg-[#28C840]" />
    </div>
  );
}

export default function MacWindow({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: SMOOTH }}
      className={`overflow-hidden rounded-xl border border-[#D9DCF5] bg-white/85 shadow-[0_10px_40px_rgba(43,45,83,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#1A1B38]/70 dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)] ${className}`}
    >
      {/* title bar */}
      <div className="flex h-10 items-center gap-3 border-b border-[#D9DCF5]/70 px-4 dark:border-white/10">
        <TrafficLights />
        <span className="text-xs font-medium text-ink/60 dark:text-fog/60">{title}</span>
      </div>
      {/* body */}
      <div className="p-5 md:p-6">{children}</div>
    </motion.div>
  );
}