import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat space-y-60">
      <HeroSection />
      <AboutSection />
      <VisionSection />
    </main>
  );
}
