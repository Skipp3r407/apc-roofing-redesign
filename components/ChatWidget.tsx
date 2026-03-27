"use client";

import { useEffect, useRef, useState } from "react";
import { CHATBOT_QA, matchChatAnswer } from "@/lib/chatbot-knowledge";
import { site } from "@/lib/content";

type Msg = { role: "user" | "bot"; text: string };

const WELCOME =
  "Hi — I’m the APC Roofing assistant. Ask me anything below, or tap a suggested question. I can answer 100 common questions about services, inspections, storm damage, gutters, solar, and service areas.";

/** Rotating sample of topics — indexes spread across the knowledge list */
const SUGGESTED_QS = [
  CHATBOT_QA[0].q,
  CHATBOT_QA[12].q,
  CHATBOT_QA[24].q,
  CHATBOT_QA[31].q,
  CHATBOT_QA[44].q,
  CHATBOT_QA[62].q,
];

function HouseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
    </svg>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: WELCOME }]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function send(text: string) {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", text: t }, { role: "bot", text: matchChatAnswer(t) }]);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-2">
      {open ? (
        <div className="flex w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl border border-white/15 bg-brand-slate shadow-2xl shadow-black/50">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="font-display text-sm font-semibold text-white">APC Roofing Assistant</p>
              <p className="text-[10px] text-zinc-500">100 answers · Not a substitute for an on-site estimate</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div
            ref={scrollRef}
            className="max-h-[min(52vh,340px)] space-y-3 overflow-y-auto px-4 py-3"
          >
            {messages.map((msg, i) => (
              <div
                key={`${i}-${msg.role}`}
                className={
                  msg.role === "user"
                    ? "ml-6 rounded-2xl rounded-br-sm bg-brand-gold/15 px-3 py-2 text-sm text-zinc-100"
                    : "mr-4 rounded-2xl rounded-bl-sm bg-white/5 px-3 py-2 text-sm leading-relaxed text-zinc-300"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 px-3 pb-2 pt-2">
            <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
              Suggested
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SUGGESTED_QS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="max-w-full rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-left text-[11px] text-zinc-400 transition hover:border-brand-gold/40 hover:text-zinc-200"
                >
                  {q.length > 42 ? `${q.slice(0, 40)}…` : q}
                </button>
              ))}
            </div>
          </div>

          <form
            className="flex gap-2 border-t border-white/10 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="min-w-0 flex-1 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-brand-gold/50"
              aria-label="Your question"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-brand-gold px-3 py-2 text-sm font-bold text-brand-dark hover:bg-amber-300"
            >
              Send
            </button>
          </form>

          <div className="flex flex-col gap-2 border-t border-white/10 px-3 py-3">
            <a
              href={site.estimateUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-brand-gold py-2.5 text-center text-sm font-bold text-brand-dark"
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${site.mainPhoneTel}`}
              className="rounded-lg border border-white/20 py-2.5 text-center text-sm font-semibold text-white"
            >
              Call {site.mainPhoneDisplay}
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/30 transition hover:scale-105 hover:bg-amber-300"
        aria-expanded={open}
        aria-label={open ? "Close assistant" : "Open roofing assistant"}
      >
        {open ? (
          <span className="text-2xl leading-none" aria-hidden>
            ×
          </span>
        ) : (
          <HouseIcon className="h-7 w-7" />
        )}
      </button>
    </div>
  );
}
