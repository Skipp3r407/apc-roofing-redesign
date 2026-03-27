import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BrandLogo } from "@/components/BrandLogo";
import { blogIndexUrl, latestNewsPosts } from "@/lib/latest-news";
import { site } from "@/lib/content";

function CardBadge() {
  return (
    <div className="absolute left-0 top-0 z-10 flex items-start">
      <div className="rounded-br-2xl bg-white px-2 py-1.5 pr-3 shadow-md ring-1 ring-zinc-200">
        <BrandLogo heightClass="h-5" className="max-w-[4.5rem]" />
      </div>
    </div>
  );
}

export function LatestNewsSection() {
  return (
    <AnimatedSection
      id="news"
      className="scroll-mt-24 border-y border-zinc-200 bg-white py-14 sm:py-16"
      slide="right"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl font-bold text-zinc-900 sm:text-4xl">
            Latest News
          </h2>
          <a
            href={blogIndexUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-zinc-800"
          >
            Read All Articles
            <span aria-hidden>→</span>
          </a>
        </div>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestNewsPosts.map((post) => (
            <li key={post.href}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
                <div className="relative aspect-[500/383] w-full bg-zinc-100">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <CardBadge />
                  <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-10 text-center text-sm font-bold leading-snug text-sky-300 sm:text-base">
                    {post.title}
                  </p>
                </div>
                <div className="flex flex-1 flex-col items-center px-4 pb-6 pt-5 text-center">
                  <h3 className="text-base font-bold leading-snug text-zinc-900">{post.title}</h3>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-zinc-800"
                  >
                    Continue reading
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href={site.estimateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded bg-red-600 px-10 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-red-700"
          >
            Get an Estimate
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
