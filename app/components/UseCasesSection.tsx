export default function UseCasesSection() {
  const useCases = [
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Hotels, Cafes & Events",
      description:
        "Let visitors connect, without complex passwords or vouchers. Earn per minute.",
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "Home Providers",
      description:
        "Get rewarded just by leaving your router on. Make your internet work for you.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Travel & Tourism",
      description:
        "Access verified hotspots globally. Replace expensive roaming plans.",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Communities & Smart Cities",
      description:
        "Build local mesh networks and decentralized digital infrastructure.",
    },
  ];

  return (
    <section
      id="use-cases"
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(0,255,136,0.1)_0%,_transparent_50%)]"></div>

      {/* Network Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,255,136,0.1) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(0,255,136,0.1) 2px, transparent 2px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-3xl md:text-4xl font-mono text-white mb-6">
            Where <span className="text-primary">EtherSpot</span> Works?
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group-hover:bg-gray-800/50">
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
                      {useCase.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-8 border border-primary/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Earning?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of users already earning from their WiFi
              connections. Start your journey with EtherSpot today.
            </p>
            <button className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
