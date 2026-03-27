"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { beforeAfter } from "@/lib/content";

export function BeforeAfterSlider() {
  const [pct, setPct] = useState(55);
  const drag = useRef(false);

  const onMove = useCallback((clientX: number, rect: DOMRect) => {
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(100, Math.max(0, x)));
  }, []);

  return (
    <div className="mx-auto max-w-3xl">
      <h3 className="mb-6 text-center font-display text-2xl font-bold text-white">
        Before &amp; after
      </h3>
      <p className="mb-6 text-center text-sm text-zinc-500">{beforeAfter.caption}</p>
      <div
        className="relative aspect-[4/3] cursor-ew-resize select-none overflow-hidden rounded-2xl border border-white/10"
        onMouseDown={() => {
          drag.current = true;
        }}
        onMouseUp={() => {
          drag.current = false;
        }}
        onMouseLeave={() => {
          drag.current = false;
        }}
        onMouseMove={(e) => {
          if (!drag.current) return;
          onMove(e.clientX, e.currentTarget.getBoundingClientRect());
        }}
        onTouchMove={(e) => {
          const t = e.touches[0];
          onMove(t.clientX, e.currentTarget.getBoundingClientRect());
        }}
      >
        {/* New roof (after) — full bleed */}
        <Image
          src={beforeAfter.afterSrc}
          alt={beforeAfter.afterLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
          draggable={false}
          priority
        />
        {/* Old condition (before) — covers from the left; drag right to reveal “after” */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-brand-gold shadow-[4px_0_24px_rgba(0,0,0,0.45)]"
          style={{ width: `${100 - pct}%` }}
        >
          <Image
            src={beforeAfter.beforeSrc}
            alt={beforeAfter.beforeLabel}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            draggable={false}
          />
        </div>
        <span className="pointer-events-none absolute bottom-3 left-3 rounded bg-black/55 px-2 py-1 text-xs text-white">
          Drag to compare
        </span>
      </div>
      <div className="mt-4 px-1">
        <input
          type="range"
          min={0}
          max={100}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          className="slider-thumb h-2 w-full cursor-ew-resize appearance-none rounded-full bg-white/10"
          aria-label="Before and after comparison"
        />
      </div>
      <div className="mt-2 flex justify-between text-xs text-zinc-500">
        <span>{beforeAfter.beforeLabel}</span>
        <span>{beforeAfter.afterLabel}</span>
      </div>
    </div>
  );
}
