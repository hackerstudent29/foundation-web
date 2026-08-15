"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.body.classList.remove("light-theme");
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.body.classList.add("light-theme");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const body = document.body;
    const switchTheme = () => {
      if (isDark) {
        body.classList.add("light-theme");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDark(false);
      } else {
        body.classList.remove("light-theme");
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDark(true);
      }
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.style.setProperty("--transition-x", `${x}px`);
    document.documentElement.style.setProperty("--transition-y", `${y}px`);
    document.documentElement.style.setProperty("--transition-r", `${endRadius}px`);

    document.startViewTransition(switchTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={cn("theme-toggle-btn", className)}
      aria-label="Toggle Light/Dark Theme"
      style={{ border: "none" }} // Keeps the requested borderless look
    >
      <svg className="theme-toggle-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" strokeLinecap="round" viewBox="0 0 32 32">
        <mask id="moon-mask">
          <rect x="0" y="0" width="32" height="32" fill="white" />
          <circle className="clip-mask" cx="24" cy="8" r="7" fill="black" />
        </mask>
        <circle className="theme-center-circle" cx="16" cy="16" r="8" mask="url(#moon-mask)" />
        <g className="theme-rays" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 5.5v-4" />
          <path d="M16 30.5v-4" />
          <path d="M1.5 16h4" />
          <path d="M26.5 16h4" />
          <path d="m23.4 8.6 2.8-2.8" />
          <path d="m5.7 26.3 2.9-2.9" />
          <path d="m5.8 5.8 2.8 2.8" />
          <path d="m23.4 23.4 2.9 2.9" />
        </g>
      </svg>
    </button>
  );
}
