/**
 * Featured portfolio items — aligned with apcroofing.com/our-gallery/ (first three projects).
 * Images are local copies of APC project photography; links open the official portfolio pages.
 */

export const galleryPageUrl = "https://apcroofing.com/our-gallery/";

export type FeaturedProject = {
  title: string;
  imageSrc: string;
  portfolioUrl: string;
};

export const latestProjects: FeaturedProject[] = [
  {
    title: "Roof replacement, Clermont, Florida",
    imageSrc: "/images/gallery-1.jpg",
    portfolioUrl: "https://apcroofing.com/portfolio-items/roof-replacement-clermont-florida-3/",
  },
  {
    title: "Roof replacement, Clermont, Florida",
    imageSrc: "/images/gallery-2.jpg",
    portfolioUrl: "https://apcroofing.com/portfolio-items/roof-replacement-clermont-florida-2/",
  },
  {
    title: "Residential roof replacement, Clermont, Florida",
    imageSrc: "/images/gallery-3.jpg",
    portfolioUrl:
      "https://apcroofing.com/portfolio-items/residential-roof-replacement-clermont-florida-2/",
  },
];
