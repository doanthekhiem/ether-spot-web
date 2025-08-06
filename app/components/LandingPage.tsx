import Header from "./Header";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import WhyChooseSection from "./WhyChooseSection";
import UseCasesSection from "./UseCasesSection";
import TokenUtilitySection from "./TokenUtilitySection";
import TokenDistributionSection from "./TokenDistributionSection";
import RoadmapSection from "./RoadmapSection";
import Footer from "./Footer";
import WhatIsEtherSpotEnabled from "./WhatIsEtherSpotEnabledSection";
import TokenSupplySection from "./TokenSupplySection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <WhyChooseSection />
        <WhatIsEtherSpotEnabled />
        <TokenUtilitySection />
        <TokenSupplySection />
        <TokenDistributionSection />
        <RoadmapSection />

        {/* Final CTA Section */}
        <section className="relative py-10 bg-black lg:h-[50vh]">
          <div className="absolute hidden lg:block inset-0 bg-black/20">
            <img src="/banner9.svg" alt="CTA" className="w-full h-full" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">
            <div className="text-3xl md:text-4xl font-mono text-white mb-4">
              Ready to Turn Your WiFi Into Income?
            </div>
            <p className="text-lg text-[#D8D4DE] mb-8 max-w-3xl mx-auto">
              Join the movement. Build the network. Earn SPOT.
            </p>
            <button
              className="px-6 py-2 rounded-full font-mono font-semibold text-white transition-all duration-200 hover:scale-105 backdrop-blur-[18%]"
              style={{
                background:
                  "radial-gradient(circle, rgba(95, 213, 46, 0.1) 0%, rgba(95, 213, 46, 0.8) 100%)",
                border: "1px solid #5FD52E",
                boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.1)",
              }}
            >
              Join Waitlist
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
