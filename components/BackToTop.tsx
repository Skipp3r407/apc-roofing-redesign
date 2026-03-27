"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-5 z-[55] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-brand-dark/90 text-lg text-brand-gold shadow-lg backdrop-blur transition hover:border-brand-gold"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
