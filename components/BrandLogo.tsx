import Image from "next/image";
import { site } from "@/lib/content";
import { cn } from "@/lib/utils";

export const BRAND_LOGO_PATH = "/images/logo-full.png";

type BrandLogoProps = {
  className?: string;
  /** Tailwind height class; width follows aspect ratio. */
  heightClass?: string;
  priority?: boolean;
};

export function BrandLogo({
  className,
  heightClass = "h-10",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={BRAND_LOGO_PATH}
      alt={`${site.name} — Solar & Gutters`}
      width={320}
      height={120}
      className={cn("w-auto object-contain object-left", heightClass, className)}
      priority={priority}
      sizes="(max-width: 640px) 240px, 320px"
    />
  );
}
