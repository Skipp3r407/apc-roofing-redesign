/**
 * Pulled from live APC Roofing blog posts (og:title / og:image).
 * Blog index: https://apcroofing.com/blog/
 */

export const blogIndexUrl = "https://apcroofing.com/blog/";

export type NewsPost = {
  title: string;
  href: string;
  imageUrl: string;
};

export const latestNewsPosts: NewsPost[] = [
  {
    title: "Why Metal Roofing Performs So Well in Florida's Climate!",
    href: "https://apcroofing.com/why-metal-roofing-performs-so-well-in-floridas-climate/",
    imageUrl:
      "https://apcroofing.com/wp-content/uploads/2026/03/639080253972501105_9a96b228.jpg",
  },
  {
    title: "Tips for Extending the Life of Your Metal Roof in Daytona Beach!",
    href: "https://apcroofing.com/tips-for-extending-the-life-of-your-metal-roof-in-daytona-beach/",
    imageUrl:
      "https://apcroofing.com/wp-content/uploads/2026/03/639080182619946117_bae7d7e4.jpg",
  },
  {
    title: "How to Ensure Your Orlando Metal Roofing Lasts Longer!",
    href: "https://apcroofing.com/how-to-ensure-your-orlando-metal-roofing-lasts-longer/",
    imageUrl:
      "https://apcroofing.com/wp-content/uploads/2026/03/639080168773203048_9ec6648a.jpg",
  },
];
