export default function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: "twitter", url: "#" },
    { name: "Telegram", icon: "telegram", url: "#" },
    { name: "Discord", icon: "discord", url: "#" },
    { name: "Medium", icon: "medium", url: "#" },
  ];

  const navigationLinks = [
    { name: "Home", url: "#home" },
    { name: "How It Works", url: "#how-it-works" },
    { name: "Token Utility", url: "#token-utility" },
    { name: "Use Cases", url: "#use-cases" },
    { name: "Roadmap", url: "#roadmap" },
    { name: "Whitepaper", url: "#whitepaper" },
  ];

  const legalLinks = [
    { name: "Terms of Services", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Report Abuse", url: "#" },
  ];

  return (
    <footer className="bg-black">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto  py-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="/logo.svg"
                alt="ETHERSPOT Logo"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-2">
            <div className="flex items-center flex-wrap justify-between gap-4">
              {navigationLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 max-w-7xl mx-auto">
        <div className="max-w-7xl mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center justify-between gap-4">
              {legalLinks.map((link) => (
                <div key={link.name}>
                  <a href={link.url} className="text-gray-400 text-sm">
                    {link.name}
                  </a>
                </div>
              ))}
              <div className="text-gray-400 text-sm">
                © 2023 ETHERSPOT. All rights reserved.
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <div key={link.name}>
                  <a href={link.url} className="text-gray-400 text-sm">
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
