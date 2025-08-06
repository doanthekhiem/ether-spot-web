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
          <div className="space-y-8">
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
          <div className="relative">
            <div className="relative  mx-auto">
              {/* WiFi Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <img
                    src="/banner.svg"
                    alt="ETHERSPOT Logo"
                    className="w-[445px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
