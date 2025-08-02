export default function HowItWorksSection() {
  const steps = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: "SETUP & CONNECT",
      description: "Install the EtherSpot app or use the SDK to register your WiFi source or mobile hotspot."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      ),
      title: "SHARE & CONTROL",
      description: "Define when, where, and how much bandwidth you want to share. Fully encrypted and private."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "EARN SPOT TOKENS",
      description: "Earn passive income as others connect through your traffic. Rewards scale with uptime, location, and network quality."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How EtherSpot Works?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started in three simple steps and begin earning from your WiFi connection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-black rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Step Card */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 h-full hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block relative mt-16">
          <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="absolute top-1/2 left-3/4 w-1/2 h-0.5 bg-gradient-to-r from-primary via-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
} 