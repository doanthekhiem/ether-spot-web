export default function TokenSupplySection() {
  return (
    <div
      className="h-[100px] w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(/banner7.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg md:text-lg font-mono text-white">
            Fixed supply: 300,000,000 SPOT tokens.
          </div>
          <div className="text-gray-300 leading-relaxed text-[16px]">
            Deflationary + high utility = sustainable long-term value.
          </div>
        </div>
      </div>
    </div>
  );
}
