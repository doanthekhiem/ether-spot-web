export default function HowItWorksSection() {
  const steps = [
    {
      icon: <img src="/how1.svg" alt="Step 1" className="w-8 h-8" />,
      step: "Step 1",
      title: "SETUP & CONNECT",
      description:
        "Install the EtherSpot app or use our SDK to register your WiFi router or mobile hotspot.",
    },
    {
      icon: <img src="/how2.svg" alt="Step 2" className="w-8 h-8" />,
      step: "Step 2",
      title: "SHARE & CONTROL",
      description:
        "Define when, where, and how much bandwidth you want to share – fully encrypted and private",
    },
    {
      icon: <img src="/how3.svg" alt="Step 3" className="w-8 h-8" />,
      step: "Step 3",
      title: "EARN SPOT TOKENS",
      description:
        "Earn passive income as others connect through your node. Rewards scale with uptime, location, and network quality.",
    },
  ];

  return (
    <section id="how-it-works" className="relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0F100F] py-10">
        {/* Header */}
        <div className="text-center lg:mb-16">
          <div className="inline-block bg-black rounded-full px-6 py-2 mb-8">
            <div className="text-white font-mono text-lg uppercase tracking-wide">
              HOW ETHERSPOT WORKS
            </div>
          </div>
        </div>
        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-left px-10 space-y-2 relative">
              {/* Vát góc trên bên trái */}
              <div className="absolute hidden lg:block top-[-176px] left-[-28px] w-20 h-20 bg-[#0F100F] transform -translate-x-1 -translate-y-1">
                <div className="w-full h-full bg-black clip-diagonal"></div>
              </div>

              {/* Icon */}
              <div className="flex justify-start">
                <div className="text-green-400">{step.icon}</div>
              </div>

              {/* Step Number */}
              <div className="text-white text-sm font-normal">{step.step}</div>

              {/* Title */}
              <h3 className="text-white text-xl font-medium uppercase tracking-wide">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white text-sm leading-relaxed max-w-xs pt-2 font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
