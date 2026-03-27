"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { googleReviews, site } from "@/lib/content";

export function GoogleReviewsSection() {
  return (
    <AnimatedSection id="reviews" className="scroll-mt-24 py-16 sm:py-24" slide="right">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-2 text-lg text-zinc-400">Google reviews</p>
          <p className="mt-2 text-sm uppercase tracking-widest text-zinc-500">Excellent</p>
          <div className="mt-2 flex justify-center gap-0.5 text-brand-gold" aria-hidden>
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-2xl">
                {s}
              </span>
            ))}
          </div>
          <p className="mt-2 text-zinc-400">
            Based on <strong className="text-white">{site.reviewCount}</strong> reviews
          </p>
          <div className="mt-4 flex justify-center">
            <Image
              src="/images/google-logo.jpg"
              alt="Google"
              width={149}
              height={45}
              className="opacity-90"
            />
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            Reviews summarized from publicly available Google feedback displayed on apcroofing.com.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex items-center gap-2 text-brand-gold" aria-hidden>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <span key={j}>★</span>
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">{r.text}</p>
              <p className="mt-4 text-sm font-semibold text-white">— {r.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
