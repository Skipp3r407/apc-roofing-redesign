"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

const MIN_VISIBLE_MS = 900;
const FADE_MS = 450;

export function SiteLoadOverlay() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const t0 = performance.now();

    const finish = () => {
      const elapsed = performance.now() - t0;
      const wait = Math.max(0, MIN_VISIBLE_MS - elapsed);
      window.setTimeout(() => {
        setPhase("out");
        window.setTimeout(() => setPhase("gone"), FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
      return;
    }

    window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-[450ms] ease-out",
        phase === "out" ? "pointer-events-none opacity-0" : "opacity-100",
      )}
      aria-live="polite"
      aria-busy={phase === "in"}
    >
      <BrandLogo
        heightClass="h-28 w-auto max-w-[min(85vw,20rem)] sm:h-36"
        className="max-h-[40vh]"
        priority
      />
      <span className="sr-only">{site.name} — loading</span>
    </div>
  );
}
