import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import PartnerSection from "@/components/PartnerSection";
import BusinessSection from "@/components/BusinessSection";
import ServiceSection from "@/components/ServiceSection";
import CommunicationSection from "@/components/CommunicationSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat font-light">
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <BusinessSection />
      <PartnerSection />
      {/* <ServiceSection />
      <CommunicationSection /> */}
    </main>
  );
}
