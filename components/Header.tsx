"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/#top" className="flex min-w-0 shrink items-center gap-2">
          <BrandLogo heightClass="h-9 sm:h-10" className="max-w-[200px] sm:max-w-[240px]" priority />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-300 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-brand-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={site.estimateUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-gold px-4 py-2 text-sm font-semibold text-brand-dark shadow-lg shadow-brand-gold/20 transition hover:bg-amber-300"
          >
            Get a Free Quote
          </a>
          <a
            href={`tel:${site.mainPhoneTel}`}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
          >
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-brand-dark px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-1 text-zinc-200"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={site.estimateUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-full bg-brand-gold py-3 text-center font-semibold text-brand-dark"
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${site.mainPhoneTel}`}
              className="rounded-full border border-white/20 py-3 text-center font-semibold"
            >
              Call Now {site.mainPhoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
