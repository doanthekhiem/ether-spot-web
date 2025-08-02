import Header from "./Header";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseSection from "./WhyChooseSection";
import UseCasesSection from "./UseCasesSection";
import TokenUtilitySection from "./TokenUtilitySection";
import TokenDistributionSection from "./TokenDistributionSection";
import RoadmapSection from "./RoadmapSection";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyChooseSection />
        <UseCasesSection />
        <TokenUtilitySection />
        <TokenDistributionSection />
        <RoadmapSection />

        {/* Final CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary to-secondary">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-3xl md:text-4xl font-mono text-white mb-6">
              Ready to Turn Your WiFi Into Income?
            </div>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join the movement. Build the network. Earn SPOT.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
