import HeroSection from "@/components/HeroSection";
import SignupForm from "@/components/SignupForm";
import FeaturePillars from "@/components/FeaturePillars";
import SecondaryFeatures from "@/components/SecondaryFeatures";
import EarlyAdopterPerks from "@/components/EarlyAdopterPerks";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection>
          <SignupForm />
        </HeroSection>

        <FeaturePillars />

        <SecondaryFeatures />

        <EarlyAdopterPerks />
      </main>

      <Footer />
    </div>
  );
}
