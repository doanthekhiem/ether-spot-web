export default function TokenDistributionSection() {
  const allocations = [
    {
      name: "Community Incentives",
      percentage: 33,
      color: "#00d4ff",
      description: "Rewards, airdrops, referrals",
    },
    {
      name: "Ecosystem Development",
      percentage: 25,
      color: "#ff6b35",
      description: "Platform development, partnerships",
    },
    {
      name: "Team & Advisors",
      percentage: 15,
      color: "#8b5cf6",
      description: "Core team, advisors, consultants",
    },
    {
      name: "Strategic Investors",
      percentage: 12,
      color: "#ec4899",
      description: "Early investors, strategic partners",
    },
    {
      name: "Initial Liquidity",
      percentage: 10,
      color: "#1e40af",
      description: "DEX liquidity, market making",
    },
    {
      name: "Compliance Incentives",
      percentage: 5,
      color: "#00ff88",
      description: "KYC, regulatory compliance",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,255,136,0.1)_0%,_transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-3xl md:text-4xl font-mono text-white mb-6">
            Token Distribution Allocation
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Pie Chart Visualization */}
              <div className="w-full h-full rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      E
                    </div>
                    <div className="text-gray-300 text-sm">ETHERSPOT</div>
                  </div>
                </div>

                {/* Pie Slices */}
                <div className="absolute inset-0">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    {allocations.map((allocation, index) => {
                      const totalPercentage = allocations
                        .slice(0, index)
                        .reduce((sum, item) => sum + item.percentage, 0);
                      const startAngle = (totalPercentage / 100) * 360;
                      const endAngle =
                        ((totalPercentage + allocation.percentage) / 100) * 360;
                      const largeArcFlag = allocation.percentage > 50 ? 1 : 0;

                      const x1 =
                        50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                      const y1 =
                        50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                      const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                      const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);

                      return (
                        <path
                          key={index}
                          d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                          fill={allocation.color}
                          opacity="0.8"
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Allocation Details */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {allocations.map((allocation, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: allocation.color }}
                    ></div>
                    <div>
                      <div className="font-semibold text-white">
                        {allocation.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {allocation.description}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">
                      {allocation.percentage}%
                    </div>
                    <div className="text-sm text-gray-400">
                      {Math.round(
                        (allocation.percentage / 100) * 300000000
                      ).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Supply */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  Total Supply: 300,000,000 SPOT
                </div>
                <p className="text-gray-300 text-sm">
                  Fixed supply with deflationary mechanics through utility and
                  staking
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
