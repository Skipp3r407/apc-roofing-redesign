import { AnimatedSection } from "@/components/AnimatedSection";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";

export function BeforeAfterSection() {
  return (
    <AnimatedSection className="border-y border-white/5 bg-brand-slate/30 py-16 sm:py-20" slide="right">
      <BeforeAfterSlider />
    </AnimatedSection>
  );
}
