import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { trustBlock, site } from "@/lib/content";

export function TrustBlockSection() {
  return (
    <AnimatedSection className="border-y border-white/5 bg-brand-slate/40 py-16 sm:py-20" slide="left">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/trust-section.jpg"
            alt="Quality roofing craftsmanship"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">
            {trustBlock.h2}
          </h2>
          <div className="mt-6 space-y-4 text-zinc-300">
            {trustBlock.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.estimateUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-gold px-6 py-3 font-semibold text-brand-dark hover:bg-amber-300"
            >
              Get an estimate
            </a>
            <a
              href={`tel:${site.secondaryPhoneTel}`}
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-brand-gold"
            >
              Call {site.secondaryPhoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
