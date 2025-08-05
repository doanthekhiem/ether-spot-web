export default function UseCasesSection() {
  const useCases = [
    {
      image: "/where1.png",
      title: "Hotels, Cafes & Events",
      description:
        "Let visitors connect, without complex passwords or vouchers. Earn per minute.",
    },
    {
      image: "/where2.png",
      title: "Home Providers",
      description:
        "Get rewarded just by leaving your router on. Make your internet work for you.",
    },
    {
      image: "/where3.png",
      title: "Travel & Tourism",
      description:
        "Access verified hotspots globally. Replace expensive roaming plans.",
    },
    {
      image: "/where4.png",
      title: "Communities & Smart Cities",
      description:
        "Build local mesh networks and decentralized digital infrastructure.",
    },
  ];

  return (
    <section id="use-cases" className="relative pt-[600px]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-3xl md:text-4xl font-mono text-white mb-6">
            Where <span className="text-primary">EtherSpot</span> Works?
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="group">
              <div className="bg-[#000000B2] backdrop-blur-sm border border-gray-700 rounded-xl py-7 px-4 h-full hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 group-hover:bg-gray-800/50">
                <div className="text-left space-y-4 relative">
                  <div className="text-lg absolute top-2 left-2 font-bold text-white group-hover:text-primary transition-colors">
                    {useCase.title}
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full h-auto">
                      <img src={useCase.image} alt={useCase.title} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {useCase.description}
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
