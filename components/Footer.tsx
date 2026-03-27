import { FooterLogoMark } from "@/components/FooterLogoMark";
import { SocialLinks } from "@/components/SocialLinks";
import {
  footerResources,
  footerServiceLinks,
  locations,
  site,
} from "@/lib/content";

function MapEmbed({ query, title }: { query: string; title: string }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`;
  return (
    <iframe
      title={`Map: ${title}`}
      src={src}
      className="aspect-square w-full max-w-[200px] rounded border border-zinc-200 bg-zinc-100 sm:max-w-none"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export function Footer() {
  return (
    <footer className="bg-white text-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-zinc-900">Resources</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-zinc-700">
              {footerResources.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#3f6f3c] hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.hiringUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded bg-red-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-red-700"
            >
              <span aria-hidden>→</span>
              We&apos;re Hiring!
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-zinc-900">Services</h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-zinc-700">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#3f6f3c] hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand + CTA */}
          <div className="flex flex-col items-center md:items-end">
            <FooterLogoMark />
            <p className="mt-4 text-center font-bold text-zinc-900 sm:text-right">
              {site.footerTagline}
            </p>
            <a
              href={site.estimateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full max-w-xs justify-center rounded bg-red-600 px-6 py-3 text-center text-base font-bold text-white shadow-md transition hover:bg-red-700 sm:w-auto"
            >
              Get an Estimate
            </a>
            <p className="mt-4 text-center text-xs text-zinc-600 sm:text-right">
              License #{site.license}
            </p>
            <p className="mt-2 max-w-xs text-center text-xs leading-relaxed text-zinc-600 sm:text-right">
              Solar installation provided in partnership with Solar Life (CVC57293).
            </p>
          </div>
        </div>
      </div>

      {/* Divider + Locations */}
      <div className="border-t-4 border-[#74a46d] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-zinc-900 md:text-3xl">
            Locations
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <div key={loc.title} className="flex flex-col items-center text-center">
                <MapEmbed query={loc.mapQuery} title={loc.title} />
                <h3 className="mt-4 text-lg font-bold text-zinc-900">{loc.title}</h3>
                {loc.lines.map((line) => (
                  <p key={line} className="text-sm text-zinc-600">
                    {line}
                  </p>
                ))}
                <a
                  href={`tel:${loc.phoneTel}`}
                  className="mt-2 text-sm font-semibold text-[#3f6f3c] hover:underline"
                >
                  {loc.phoneDisplay}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SocialLinks />

      <div className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://apcroofing.com/sitemap/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#3f6f3c] hover:underline"
            >
              Sitemap
            </a>
            <a
              href="https://elevatedigitalstudios.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-900"
            >
              Website Design by Elevate Digital Studio
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
