import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { services } from "@/lib/content";

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="scroll-mt-24 py-16 sm:py-24" slide="right">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-4xl font-bold text-white sm:text-5xl">
          Our roofing services
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-400">
          Full-service roofing, gutters, and solar—installed by crews who know Florida weather and
          Midwest storm patterns.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-brand-gold/25"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-display text-2xl font-bold text-white">
                  {s.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-zinc-400">{s.description}</p>
                <a
                  href={`https://apcroofing.com/${s.slug}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-brand-gold hover:underline"
                >
                  View service
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
