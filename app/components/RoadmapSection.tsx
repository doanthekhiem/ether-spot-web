export default function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Mainnet Launch + ERC-20 node cluster live",
      description: "Core infrastructure deployment and initial node network establishment"
    },
    {
      phase: "Phase 2", 
      title: "Token Generation Event (TGE) + Connect-to-Earn rollout",
      description: "Token launch and implementation of the core earning mechanism"
    },
    {
      phase: "Phase 3",
      title: "Mainnet Expansion + global node onboarding",
      description: "Scaling the network globally and expanding node coverage"
    },
    {
      phase: "Phase 4",
      title: "DAO activation + Smart City partnerships",
      description: "Community governance and enterprise partnerships"
    }
  ];

  return (
    <section id="roadmap" className="relative py-20 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Roadmap to Decentralized Connectivity
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our strategic path to building the future of decentralized WiFi infrastructure
          </p>
        </div>

        {/* Network Diagram */}
        <div className="hidden lg:block mb-16">
          <div className="flex justify-center">
            <div className="relative w-96 h-32">
              {/* Network Nodes */}
              <div className="absolute top-1/2 left-0 w-8 h-8 bg-primary rounded-full transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-primary rounded-full transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-2/3 w-8 h-8 bg-primary rounded-full transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-8 h-8 bg-primary rounded-full transform -translate-y-1/2"></div>
              
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-8 w-1/3 h-0.5 bg-primary"></div>
              <div className="absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-primary"></div>
              <div className="absolute top-1/2 left-2/3 w-1/3 h-0.5 bg-primary"></div>
              
              {/* Secondary Connections */}
              <div className="absolute top-0 left-1/6 w-0.5 h-8 bg-primary/50"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-primary/50"></div>
              <div className="absolute top-0 left-5/6 w-0.5 h-8 bg-primary/50"></div>
              <div className="absolute bottom-0 left-1/6 w-0.5 h-8 bg-primary/50"></div>
              <div className="absolute bottom-0 left-1/2 w-0.5 h-8 bg-primary/50"></div>
              <div className="absolute bottom-0 left-5/6 w-0.5 h-8 bg-primary/50"></div>
            </div>
          </div>
        </div>

        {/* Roadmap Phases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="relative group">
              {/* Phase Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center font-bold text-lg z-10">
                {index + 1}
              </div>
              
              {/* Phase Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group-hover:bg-gray-800/50">
                <div className="space-y-4">
                  {/* Phase Header */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-primary font-bold text-lg">
                      {phase.phase}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-800/30 rounded-full px-6 py-3 border border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-gray-300 text-sm">Current Phase: 1</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="text-gray-400 text-sm">
              Estimated completion: Q2 2024
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Journey
            </h3>
            <p className="text-gray-300 mb-6">
              Be part of the revolution in decentralized connectivity. 
              Follow our progress and contribute to the future of WiFi sharing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105">
                Join Waitlist
              </button>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-black transition-all transform hover:scale-105">
                Read Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 