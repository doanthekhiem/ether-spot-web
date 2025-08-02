export default function HowItWorksSection() {
  const steps = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Desktop monitor */}
          <rect x="2" y="3" width="8" height="6" rx="1" strokeWidth="2" />
          <line x1="4" y1="7" x2="8" y2="7" strokeWidth="2" />
          {/* Smartphone */}
          <rect x="14" y="4" width="4" height="8" rx="1" strokeWidth="2" />
          <line x1="15" y1="6" x2="17" y2="6" strokeWidth="2" />
          <line x1="15" y1="8" x2="17" y2="8" strokeWidth="2" />
          {/* Connection arrows */}
          <path d="M10 6 L14 6" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 8 L14 8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      step: "Step 1",
      title: "SETUP & CONNECT",
      description:
        "Install the EtherSpot app or use our SDK to register your WiFi router or mobile hotspot.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Share symbol - three circles connected */}
          <circle cx="12" cy="8" r="2" strokeWidth="2" />
          <circle cx="6" cy="16" r="2" strokeWidth="2" />
          <circle cx="18" cy="16" r="2" strokeWidth="2" />
          <line x1="12" y1="10" x2="6" y2="14" strokeWidth="2" />
          <line x1="12" y1="10" x2="18" y2="14" strokeWidth="2" />
        </svg>
      ),
      step: "Step 2",
      title: "SHARE & CONTROL",
      description:
        "Define when, where, and how much bandwidth you want to share – fully encrypted and private",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Circle with E */}
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fill="currentColor"
            fontSize="14"
            fontWeight="bold"
          >
            E
          </text>
        </svg>
      ),
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
        <div className="text-center mb-16">
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
              <div className="absolute top-[-176px] left-[-28px] w-20 h-20 bg-[#0F100F] transform -translate-x-1 -translate-y-1">
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
