export default function WhyChooseSection() {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "You Own the Network",
      description:
        "No central provider. You control access, pricing, and uptime.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      ),
      title: "Connect to Earn",
      description: "Monetize your idle internet like never before.",
    },
  ];

  return (
    <section className="relative py-20 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(139,92,246,0.15)_0%,_transparent_50%)]"></div>

      {/* Digital Landscape Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64">
          <div className="flex justify-center space-x-2">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-white rounded-full animate-pulse"
                style={{
                  height: `${Math.random() * 100 + 50}px`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-3xl md:text-4xl font-mono text-white mb-6">
            Why Choose <span className="text-primary">EtherSpot</span>?
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group-hover:bg-gray-800/50">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
