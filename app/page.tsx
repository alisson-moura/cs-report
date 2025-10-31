import { Header } from "@/components/landing/header";
import HeroSection from "@/components/landing/hero-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { SolutionSection } from "@/components/landing/solution-section";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center overflow-x-hidden">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <PricingSection />
        <HowItWorksSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
