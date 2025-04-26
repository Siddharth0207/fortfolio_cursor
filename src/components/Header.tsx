"use client";

import { motion, useScroll } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();

  return (
    <motion.header
      className="fixed top-0 left-64 right-0 z-50 bg-black/80 backdrop-blur-sm"
      style={{
        height: scrollY.get() > 50 ? 0 : 60,
        opacity: scrollY.get() > 50 ? 0 : 1,
      }}
    >
      <div className="h-full flex items-center justify-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
      </div>
    </motion.header>
  );
}
