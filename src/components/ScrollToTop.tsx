"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // On every fresh page load/refresh, scroll to the very top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
