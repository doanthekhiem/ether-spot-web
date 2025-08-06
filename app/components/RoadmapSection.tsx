export default function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "MVP Testnet – First node cluster live",
      icon: "/roadmap1.svg",
    },
    {
      phase: "Phase 2",
      title: "Token Generation Event (TGE) + Connect-to-Earn rollout",
      icon: "/roadmap2.svg",
    },
    {
      phase: "Phase 3",
      title: "Mainnet launch + global node onboarding",
      icon: "/roadmap3.svg",
    },
    {
      phase: "Phase 4",
      title: "DAO activation + Smart City partnerships",
      icon: "/roadmap4.svg",
    },
  ];

  return (
    <section id="roadmap" className="relative py-20 bg-black">
      {/* Background Effects */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center pb-10">
          <div className="text-3xl md:text-4xl font-mono text-white mb-6">
            Roadmap to
            <br />
            Decentralized Connectivity
          </div>
          <div>
            <img
              src="/roadmap.svg"
              alt="Roadmap"
              className="w-auto h-[184px]"
            />
          </div>
        </div>
        {/* Roadmap Phases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {phases.map((phase, index) => (
            <div key={index} className="bg-[#110D13] px-10 py-8">
              {/* Phase Card */}
              <div>
                <div className="space-y-4">
                  {/* Phase Header */}
                  <div className="flex items-center space-x-5">
                    <div>
                      <img src={phase.icon} alt="Roadmap" />
                    </div>
                    <div className="text-white font-normal text-lg">
                      {phase.phase}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="text-sm font-normal text-[#716678]">
                      {phase.title}
                    </div>
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
