export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,255,136,0.1)_0%,_transparent_70%)]"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,255,136,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">EARN FROM YOUR WIFI.</span>
              <br />
              <span className="text-white">POWER THE FUTURE OF</span>
              <br />
              <span className="text-primary">[DECENTRALIZED CONNECTIVITY]</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the revolution of decentralized WiFi sharing. Monetize your internet connection and earn SPOT tokens while building the future of connectivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-black transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* WiFi Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                  </svg>
                </div>
              </div>
              
              {/* Pulsing Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 border-2 border-primary/30 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-primary/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border-2 border-primary/10 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Waveform Effect */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-primary rounded-full animate-pulse"
                      style={{
                        height: `${20 + Math.random() * 40}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
} 