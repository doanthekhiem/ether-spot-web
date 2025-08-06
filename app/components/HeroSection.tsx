export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[60vh] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage: `url(/bannerHero.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 hidden lg:block">
            <div
              className="text-3xl md:text-2xl lg:text-3xl text-left font-normal leading-tight"
              style={{
                letterSpacing: "10%",
              }}
            >
              <span className="text-white">EARN FROM YOUR WIFI.</span>
              <br />
              <span className="text-white">
                POWER THE FUTURE OF DECENTRALIZED
              </span>
              <br />
              <span className="text-primary font-mono">[CONNECTIVITY]</span>
            </div>
          </div>

          {/* Visual Element */}

          {/* WiFi Icon */}
          <div className="flex items-center justify-center pt-20 lg:pt-0">
            <div className="flex items-center justify-center">
              <img
                src="/banner.svg"
                alt="ETHERSPOT Logo"
                className="w-[445px] h-auto"
              />
            </div>
          </div>
          <div className="space-y-8  lg:hidden flex flex-col items-left justify-center">
            <div
              className="text-3xl md:text-2xl lg:text-3xl text-left font-normal leading-tight"
              style={{
                letterSpacing: "10%",
              }}
            >
              <span className="text-white">EARN FROM YOUR WIFI.</span>
              <br />
              <span className="text-white">
                POWER THE FUTURE OF DECENTRALIZED
              </span>
              <br />
              <span className="text-primary font-mono">[CONNECTIVITY]</span>
            </div>
            <button
              className="px-6 py-2 rounded-full font-mono font-semibold text-white transition-all duration-200 hover:scale-105 backdrop-blur-[18%]"
              style={{
                background:
                  "radial-gradient(circle, rgba(95, 213, 46, 0.1) 0%, rgba(95, 213, 46, 0.8) 100%)",
                border: "1px solid #5FD52E",
                boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.1)",
              }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
