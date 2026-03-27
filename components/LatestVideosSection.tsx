import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  latestVideos,
  videosPageUrl,
  youtubeThumbnailUrl,
  youtubeWatchUrl,
} from "@/lib/latest-videos";

function PlayIcon() {
  return (
    <span
      className="flex h-14 w-14 items-center justify-center rounded-full bg-black/55 text-white shadow-lg ring-2 ring-white/30 backdrop-blur-sm"
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

export function LatestVideosSection() {
  return (
    <AnimatedSection
      id="videos"
      className="scroll-mt-24 border-y border-white/10 bg-brand-slate/60 py-16 sm:py-20"
      slide="left"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Latest Videos</h2>
          <a
            href={videosPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-red-700"
          >
            View All Videos
            <span aria-hidden>→</span>
          </a>
        </div>

        <p className="mt-2 text-sm text-zinc-500">
          Clips sourced from the official APC Roofing video gallery on YouTube.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latestVideos.map((v) => (
            <li key={v.youtubeId}>
              <a
                href={youtubeWatchUrl(v.youtubeId)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-lg"
              >
                <Image
                  src={youtubeThumbnailUrl(v.youtubeId)}
                  alt={v.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-90"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/35 transition group-hover:bg-black/45">
                  <PlayIcon />
                </span>
                <span className="sr-only">
                  Play on YouTube: {v.title}
                </span>
              </a>
              <p className="mt-2 line-clamp-2 text-sm font-medium text-zinc-300">{v.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
