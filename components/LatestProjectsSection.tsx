import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BrandLogo } from "@/components/BrandLogo";
import { galleryPageUrl, latestProjects } from "@/lib/latest-projects";

function ProjectLogoBadge() {
  return (
    <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-2xl bg-white/95 px-2 py-1.5 shadow-md ring-1 ring-black/10 backdrop-blur-[2px]">
      <BrandLogo heightClass="h-7" className="max-w-[5.5rem]" />
    </div>
  );
}

export function LatestProjectsSection() {
  return (
    <AnimatedSection
      id="projects"
      className="scroll-mt-24 border-y border-zinc-200 bg-white py-14 sm:py-16"
      slide="left"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl font-bold text-zinc-900 sm:text-4xl">
            Latest Projects
          </h2>
          <a
            href={galleryPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-none bg-zinc-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-zinc-800"
          >
            View All Projects
            <span aria-hidden>→</span>
          </a>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {latestProjects.map((project) => (
            <li key={project.portfolioUrl}>
              <Link
                href={project.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 shadow-sm"
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <ProjectLogoBadge />
                <span className="sr-only">{project.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  );
}
