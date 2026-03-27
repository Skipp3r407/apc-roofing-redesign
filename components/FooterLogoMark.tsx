import { BrandLogo } from "@/components/BrandLogo";

/** Full APC Roofing lockup (houses, sun, wordmark, Solar & Gutters). */
export function FooterLogoMark() {
  return (
    <div className="flex flex-col items-center sm:items-end">
      <BrandLogo
        heightClass="h-[4.5rem] sm:h-[5rem]"
        className="max-w-[260px]"
      />
    </div>
  );
}
