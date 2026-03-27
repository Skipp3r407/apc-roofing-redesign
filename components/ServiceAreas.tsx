import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { serviceAreas } from "@/lib/content";

export function ServiceAreas() {
  return (
    <AnimatedSection className="border-y border-white/5 bg-brand-slate/50 py-16 sm:py-20" slide="left">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">
            {serviceAreas.h2}
          </h2>
          <p className="mt-4 text-zinc-300">{serviceAreas.intro}</p>
          <div className="mt-8 space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                Florida service areas
              </p>
              <p className="mt-1 text-zinc-200">{serviceAreas.florida}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                Midwest (storm response &amp; growth)
              </p>
              <p className="mt-1 text-zinc-200">{serviceAreas.midwest}</p>
            </div>
            <p className="text-sm italic text-zinc-500">{serviceAreas.note}</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/images/map.png"
            alt="APC Roofing service area map"
            width={800}
            height={518}
            className="h-auto w-full"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
