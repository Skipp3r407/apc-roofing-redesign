import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { processSteps, site } from "@/lib/content";

export function ProcessStepsSection() {
  return (
    <AnimatedSection className="py-16 sm:py-24" slide="right">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            {processSteps.h2}
          </h2>
          <p className="mt-3 text-zinc-400">{processSteps.intro}</p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {processSteps.steps.map((s) => (
            <div
              key={s.n}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-dark">
                  {s.n}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-zinc-400">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-12 text-center font-display text-2xl font-semibold text-brand-gold">
          {processSteps.cta}
        </h3>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href={site.estimateUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-gold px-6 py-3 font-semibold text-brand-dark hover:bg-amber-300"
          >
            Get a Free Quote
          </a>
          <a
            href={`tel:${site.secondaryPhoneTel}`}
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-brand-gold"
          >
            Call {site.secondaryPhoneDisplay}
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
