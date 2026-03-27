"use client";

import { useState } from "react";
import { site } from "@/lib/content";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    const fd = new FormData(e.currentTarget);
    const body = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      city: String(fd.get("city") || ""),
      details: String(fd.get("details") || ""),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Request failed");
      setStatus("ok");
      setMessage("Thanks—we’ll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("err");
      setMessage("Something went wrong. Please call us or try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-400" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-brand-gold/40 placeholder:text-zinc-600 focus:ring-2"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-400" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-brand-gold/40 placeholder:text-zinc-600 focus:ring-2"
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-400" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-brand-gold/40 placeholder:text-zinc-600 focus:ring-2"
            placeholder={site.mainPhoneDisplay}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-400" htmlFor="city">
            City / area
          </label>
          <input
            id="city"
            name="city"
            className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-brand-gold/40 placeholder:text-zinc-600 focus:ring-2"
            placeholder="e.g. Clermont, FL"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-400" htmlFor="details">
          How can we help?
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          required
          className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white outline-none ring-brand-gold/40 placeholder:text-zinc-600 focus:ring-2"
          placeholder="Roof concern, storm date, insurance questions…"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-brand-gold py-3.5 text-sm font-bold text-brand-dark transition hover:bg-amber-300 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {message ? (
        <p
          className={
            status === "ok" ? "text-sm text-emerald-400" : "text-sm text-red-400"
          }
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
