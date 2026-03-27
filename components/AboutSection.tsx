import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { about, site } from "@/lib/content";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="scroll-mt-24 py-16 sm:py-24" slide="right">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/team.jpg"
            alt="APC Roofing staff 2025"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">
            {about.h2}
          </h2>
          <div className="mt-6 space-y-4 text-zinc-300">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium text-brand-gold">{about.bullets}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.estimateUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-gold px-6 py-3 font-semibold text-brand-dark hover:bg-amber-300"
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${site.mainPhoneTel}`}
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-brand-gold"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
