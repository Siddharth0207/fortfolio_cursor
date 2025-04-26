"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  IconHome,
  IconCode,
  IconSchool,
  IconBriefcase,
  IconFileText,
} from "@tabler/icons-react";

const Sidebar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const scrollYSpring = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navItems = [
    {
      name: "About",
      href: "/",
      icon: <IconHome className="h-5 w-5" />,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: <IconCode className="h-5 w-5" />,
    },
    {
      name: "Education",
      href: "/education",
      icon: <IconSchool className="h-5 w-5" />,
    },
    {
      name: "Experience",
      href: "/experience",
      icon: <IconBriefcase className="h-5 w-5" />,
    },
    {
      name: "Resume",
      href: "/resume",
      icon: <IconFileText className="h-5 w-5" />,
    },
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        y: scrollYSpring,
      }}
      className="h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-6 border-r border-gray-700"
    >
      <div className="h-full flex flex-col">
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.h1>
        </div>
        <nav className="space-y-3 flex-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === item.href
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                )}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-auto pt-6 border-t border-gray-700"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <div>
              <p className="text-sm font-medium text-white">Your Name</p>
              <p className="text-xs text-gray-400">Software Engineer</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
