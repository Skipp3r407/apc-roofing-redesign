/**
 * Pulled from https://apcroofing.com/videos/ (Presto Player block titles + YouTube IDs).
 * Re-order or replace IDs here if APC updates their page.
 */

export const videosPageUrl = "https://apcroofing.com/videos/";

export type LatestVideo = {
  youtubeId: string;
  title: string;
};

/** Featured grid (6) — matches primary embeds on the official Videos page. */
export const latestVideos: LatestVideo[] = [
  { youtubeId: "XpatpAeu_1s", title: "APC Roofing Testimonials" },
  { youtubeId: "a7pazBHPXcM", title: "Is your roof leaking?" },
  { youtubeId: "FD-Dnqrym28", title: "How does permitting for roofs work?" },
  { youtubeId: "8PMveNHIypA", title: "Ocala Metal Roof Installation" },
  { youtubeId: "2LFKt1c97co", title: "We put down tarps!" },
  { youtubeId: "O_EQQ0-nWhg", title: "The problem with peel and stick" },
];

export function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function youtubeThumbnailUrl(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
