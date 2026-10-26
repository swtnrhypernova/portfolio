"use client";

import { motion } from "framer-motion";

export default function Wallpaper() {
  const blob = (
    className: string,
    drift: { x: number[]; y: number[] },
    duration: number,
  ) => (
    <motion.div
      animate={{ x: drift.x, y: drift.y }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* periwinkle orb — top left */}
      {blob("dark:opacity-50 -left-24 -top-40 h-[440px] w-[440px] opacity-50 bg-[radial-gradient(circle,#E2E4FF,transparent_65%)] dark:bg-[radial-gradient(circle,#8B93E838,transparent_65%)]", { x: [0, 40, 0], y: [0, 30, 0] }, 24)}
      {/* pink orb — right */}
      {blob("dark:opacity-35 -right-40 top-1/2 h-[500px] w-[500px] opacity-35 bg-[radial-gradient(circle,#FFD5EB,transparent_65%)] dark:bg-[radial-gradient(circle,#FF79C62a,transparent_65%)]", { x: [0, -45, 0], y: [0, -25, 0] }, 30)}
      {/* mint orb — bottom */}
      {blob("dark:opacity-35 bottom-0 left-1/4 h-[400px] w-[400px] opacity-35 bg-[radial-gradient(circle,#D8F5E9,transparent_65%)] dark:bg-[radial-gradient(circle,#8FE3C42a,transparent_65%)]", { x: [0, 30, 0], y: [0, -20, 0] }, 34)}
    </div>
  );
}