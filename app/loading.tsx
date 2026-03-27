import { BrandLogo } from "@/components/BrandLogo";

/** Shown during route transitions (e.g. future subpages). */
export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-white py-24">
      <BrandLogo heightClass="h-24 sm:h-28" className="max-w-[min(85vw,20rem)]" priority />
    </div>
  );
}
