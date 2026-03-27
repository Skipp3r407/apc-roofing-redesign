import { AnimatedSection } from "@/components/AnimatedSection";
import { processPillars, site } from "@/lib/content";

export function ProcessPillars() {
  return (
    <AnimatedSection className="py-16 sm:py-20" slide="left">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Roofing done right—with a process you can trust
          </h2>
          <p className="mt-3 text-zinc-400">
            From your first inspection to final cleanup, APC Roofing delivers a seamless experience
            backed by expert craftsmanship and clear communication.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processPillars.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-gold/30"
            >
              <h3 className="font-display text-lg font-semibold text-brand-gold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-zinc-400">
          A better roofing experience starts with a team that puts your needs first.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
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
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-brand-gold hover:text-brand-gold"
          >
            Call {site.secondaryPhoneDisplay}
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
