import { AnimatedSection } from "@/components/AnimatedSection";
import { roofingTypes } from "@/lib/content";

export function RoofingTypesSection() {
  return (
    <AnimatedSection id="roofing-types" className="scroll-mt-24 py-16 sm:py-20" slide="left">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Roofing types</h2>
          <p className="mt-3 text-zinc-400">
            Shingle, metal, tile, flat, storm restoration, and seamless gutters—matched to your
            property and climate.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roofingTypes.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent px-5 py-4"
            >
              <h3 className="font-display text-lg font-semibold text-brand-gold">{t.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{t.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
