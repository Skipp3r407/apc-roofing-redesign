import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { locations, site } from "@/lib/content";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="scroll-mt-24 py-16 sm:py-24" slide="left">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Contact</h2>
          <p className="mt-3 text-zinc-400">
            Request a call back or ask a question. Prefer the phone? We’re one tap away.
          </p>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <ContactForm />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-brand-gold">Office locations</h3>
            <ul className="mt-6 space-y-6">
              {locations.map((loc) => (
                <li key={loc.title + loc.lines[0]} className="border-b border-white/10 pb-6 last:border-0">
                  <p className="font-medium text-white">{loc.title}</p>
                  {loc.lines.map((line) => (
                    <p key={line} className="text-sm text-zinc-400">
                      {line}
                    </p>
                  ))}
                  <a
                    href={`tel:${loc.phoneTel}`}
                    className="mt-2 inline-block text-sm font-semibold text-brand-gold hover:underline"
                  >
                    {loc.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-white/10 bg-brand-slate/50 p-4 text-sm text-zinc-400">
              <p>
                License #{site.license}. Solar installation in partnership with Solar Life (
                {site.solarPartner}).
              </p>
              <a
                href={site.estimateUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex font-semibold text-brand-gold hover:underline"
              >
                Free online estimate (official site)
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
