export default function TokenUtilitySection() {
  const utilities = [
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
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      ),
      title: "WiFi Access",
      description: "Pay for WiFi access on EtherSpot hotspots.",
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
      title: "Provider Rewards",
      description: "Earn rewards by acting as a WiFi provider.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Node Validation",
      description: "Stake SPOT to validate network nodes and earn.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Governance Participation",
      description: "Participate in governance through the EtherSpot DAO.",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "KYC Compliance",
      description: "Enable KYC-compliant zones, essential for enterprises.",
    },
  ];

  return (
    <section id="token-utility" className="relative py-20 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(0,255,136,0.1)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(0,255,136,0.1)_0%,_transparent_50%)]"></div>

      {/* Vertical Light Beams */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-3xl md:text-4xl font-mono text-white mb-6">
            The <span className="text-primary">$SPOT</span> Token
          </div>
        </div>

        {/* Token Utilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {utilities.map((utility, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group-hover:bg-gray-800/50">
                <div className="text-center space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
                      {utility.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {utility.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {utility.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Token Information */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Token Supply Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Fixed Supply:</span>
                  <span className="text-primary font-bold">
                    300,000,000 SPOT
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Token Type:</span>
                  <span className="text-primary font-bold">ERC-20</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Economic Model:</span>
                  <span className="text-primary font-bold">Deflationary</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                High utility = long term value. The SPOT token is designed to
                increase in value as the network grows and adoption expands.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    SPOT
                  </div>
                  <div className="text-gray-300 text-sm">Token</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
