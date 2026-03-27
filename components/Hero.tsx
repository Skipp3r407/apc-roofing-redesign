import Image from "next/image";
import { hero, site } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/footer-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/55" />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:py-28">
        <div className="max-w-xl flex-1">
          <p className="mb-3 inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            GAF certified · Licensed #{site.license}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white text-balance sm:text-5xl lg:text-[3.25rem]">
            {hero.h1}
          </h1>
          <p className="mt-5 text-lg text-zinc-300">{hero.sub}</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-400">
            <span className="rounded-md bg-white/5 px-2 py-1">Insured</span>
            <span className="rounded-md bg-white/5 px-2 py-1">Experienced crews</span>
            <span className="rounded-md bg-white/5 px-2 py-1">Residential &amp; commercial</span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={site.estimateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-8 py-3.5 text-center text-base font-bold text-brand-dark shadow-xl shadow-brand-gold/25 transition hover:bg-amber-300"
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${site.mainPhoneTel}`}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/25 px-8 py-3.5 text-center text-base font-bold text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              Call Now · {site.mainPhoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-sm font-medium text-brand-gold">{hero.badge}</p>
          <p className="text-sm text-zinc-400">{hero.trustLine}</p>
        </div>

        <div className="relative flex-1 lg:max-w-md">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
            <Image
              src="/images/hero-mobile.webp"
              alt="APC Roofing project in Clermont, Florida"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
