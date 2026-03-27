import { AboutSection } from "@/components/AboutSection";
import { BackToTop } from "@/components/BackToTop";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { ChatWidget } from "@/components/ChatWidget";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { LatestProjectsSection } from "@/components/LatestProjectsSection";
import { LatestNewsSection } from "@/components/LatestNewsSection";
import { LatestVideosSection } from "@/components/LatestVideosSection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProcessPillars } from "@/components/ProcessPillars";
import { ProcessStepsSection } from "@/components/ProcessStepsSection";
import { RoofingTypesSection } from "@/components/RoofingTypesSection";
import { ServiceAreas } from "@/components/ServiceAreas";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustBlockSection } from "@/components/TrustBlockSection";
import { UrgencySection } from "@/components/UrgencySection";

export default function HomePage() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <UrgencySection />
        <ProcessPillars />
        <AboutSection />
        <ServiceAreas />
        <ProcessStepsSection />
        <TrustBlockSection />
        <GoogleReviewsSection />
        <ServicesSection />
        <RoofingTypesSection />
        <LatestProjectsSection />
        <GallerySection />
        <LatestVideosSection />
        <LatestNewsSection />
        <BeforeAfterSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
      <BackToTop />
    </div>
  );
}
