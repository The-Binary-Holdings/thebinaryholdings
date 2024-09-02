import HeroSection from "@/components/homePage/HeroSection";
import AboutSection from "@/components/homePage/AboutSection";
import VisionSection from "@/components/homePage/VisionSection";
import PartnerSection from "@/components/homePage/PartnerSection";
import CommunitySection from "@/components/homePage/CommunitySection";
import BlogSection from "@/components/homePage/BlogSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat font-light">
      <HeroSection />
      <PartnerSection />
      <AboutSection />
      <VisionSection />
      <CommunitySection />
      <BlogSection />
    </main>
  );
}
