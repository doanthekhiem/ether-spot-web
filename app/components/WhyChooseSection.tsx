import UseCasesSection from "./UseCasesSection";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <img src="/choose1.svg" alt="Why 1" className="w-14 h-14" />,
      title: "You Own the Network",
      description:
        "No central provider. You control access, pricing, and uptime.",
    },
    {
      icon: <img src="/choose2.svg" alt="Why 2" className="w-14 h-14" />,
      title: "Connect to Earn",
      description: "Monetize your idle internet like never before.",
    },
  ];

  return (
    <section
      className="relative min-h-svw lg:bg-cover flex flex-col py-10 "
      style={{
        backgroundImage: `url(/bannerHero.png)`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Effects */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-3xl md:text-4xl font-mono text-white py-20">
            Why Choose <span className="text-primary">EtherSpot</span>?
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-[#110D13] backdrop-blur-sm p-8 h-full ">
                <div className="text-left flex flex-col gap-5">
                  {/* Icon */}
                  <div className="flex justify-start items-center gap-5">
                    <div className="w-14 h-14  rounded-full flex items-center justify-center ">
                      {feature.icon}
                    </div>
                    <div className="text-xl font-normal text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <p className="text-[#716678] leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <UseCasesSection />
    </section>
  );
}
