import HeroSection from "@/components/digitalFinancePage/HeroSection";
import ButHowSection from "@/components/digitalFinancePage/ButHowSection";
import ElevateSection from "@/components/digitalFinancePage/ElevateSection";
import IntroSection from "@/components/digitalFinancePage/IntroSection";
import CardSection from "@/components/digitalFinancePage/CardSection";
import KeyFeaturesSection from "@/components/digitalFinancePage/KeyFeaturesSection";

export default function FinancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-no-repeat font-light">
      <HeroSection />
      <IntroSection />
      <ButHowSection />
      <ElevateSection />
      <CardSection />
      <KeyFeaturesSection />
    </main>
  );
}
