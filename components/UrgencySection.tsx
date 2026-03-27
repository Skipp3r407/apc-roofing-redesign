import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { urgency, site } from "@/lib/content";

export function UrgencySection() {
  return (
    <AnimatedSection className="border-y border-white/5 bg-brand-slate/80 py-16 sm:py-20" slide="right">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">
            {urgency.h2}
          </h2>
          <div className="mt-6 space-y-4 text-zinc-300">
            {urgency.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <a
            href={site.estimateUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-brand-gold px-6 py-3 font-semibold text-brand-dark transition hover:bg-amber-300"
          >
            Get an estimate
          </a>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/section-dji.jpg"
            alt="Aerial view of roofing work"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
