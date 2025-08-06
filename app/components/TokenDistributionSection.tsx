export default function TokenDistributionSection() {
  const allocations = [
    {
      name: "COMMUNITY INCENTIVES",
      percentage: 33,
      color: "#00d4ff",
      description: "Rewards, airdrops, referrals",
    },
    {
      name: "COMMUECOSYSTEM DEVELOPMENTNITY INCENTIVES",
      percentage: 25,
      color: "#ff6b35",
      description: "Grants, integrations, hardware partners",
    },
    {
      name: "TEAM & ADVISORS",
      percentage: 15,
      color: "#8b5cf6",
      description: "Long-term vested",
    },
    {
      name: "STRATEGIC INVESTORS",
      percentage: 12,
      color: "#ec4899",
      description: "Early-stage supporters",
    },
    {
      name: "INITIAL LIQUIDITY",
      percentage: 10,
      color: "#1e40af",
      description: "Exchange provisioning",
    },
    {
      name: "COMPLIANCE INCENTIVES",
      percentage: 5,
      color: "#00ff88",
      description: "KYC zones, legal audits",
    },
  ];

  return (
    <section className="relative py-20 ">
      {/* Background Effects */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(/banner8.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <div className="text-3xl md:text-4xl font-mono text-white mb-6">
            Token Distribution
            <br />
            Allocation
          </div>
        </div>

        <div className="max-w-4xl mx-auto gap-12 items-center">
          <div className="pb-15">
            <img src="/allo.svg" alt="Token" className="w-full h-auto" />
          </div>
          {/* Allocation Details */}
          <div className=" max-w-xl mx-auto">
            <div className="grid">
              {allocations.map((allocation, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 border-b border-[#212121] py-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="font-normal text-sm text-primary max-w-50">
                      {allocation.name}
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-normal text-sm text-white">
                      {allocation.description}
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center bg-black p-6">
                <div className="text-lg font-normal text-white">
                  Total Supply: <b>300,000,000 SPOT</b>
                </div>
                <button className="text-white font-normal text-sm bg-[#110D13] px-3 py-2 flex items-center gap-2">
                  <img src="/btnleanmore.svg" alt="Arrow" className="w-4 h-4" />
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
