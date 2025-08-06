"use client";

import { useState } from "react";

export default function WhatIsEtherSpotEnabled() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      number: "01",
      image: "/what1.svg",
      title: "Tokenized Access to Connectivity",
      points: [
        "Turn any WiFi hotspot into a monetizable digital zone",
        "Enable pay-per-use Internet access through SPOT token and smart contracts",
        "Use NFT-based hotspot identities to track performance and assign rewards",
      ],
    },
    {
      number: "02",
      image: "/what2.svg",
      title: "Connect-to-Earn Incentives",
      points: [
        "Earn SPOT tokens for securely sharing unused bandwidth",
        "Rewards adapt to uptime, location, and connection quality",
        "Stake SPOT to become a trusted, high-ranking node in the network",
      ],
    },
    {
      number: "03",
      image: "/what3.svg",
      title: "Smart & Compliant Infrastructure",
      points: [
        "Set custom access policies: time-based, bandwidth-based, or subscription",
        "Built on Ethereum: EVM-compatible smart contracts, DePIN ready",
        "Optional compliance layer for enterprise zones (KYC, geo-restricted)",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="use-cases" className="relative py-20">
      <div
        className="relative z-10 max-w-7xl  lg:bg-contain  mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(/banner3.png)`,
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center lg:mb-16">
          <div className="text-3xl md:text-4xl font-mono text-white mb-2">
            What EtherSpot Enables
          </div>
          <div className="text-[#716678] leading-relaxed text-sm mb-4">
            Empowering connectivity through tokenization, incentives, and smart
            infrastructure.
          </div>
        </div>

        {/* Slide Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:top-1/2 top-1/3 transform -translate-y-1/2 z-10  backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:bg-gray-800/50"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 lg:top-1/2 top-1/3 transform -translate-y-1/2 z-10 bg-[#000000B2] backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:bg-gray-800/50"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide Content */}
          <div className=" backdrop-blur-sm py-12 px-8 min-h-[400px] flex flex-col justify-center items-center rounded-xl">
            <div className="text-center space-y-6 max-w-[400px] ">
              {/* Slide Number */}
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-auto lg:h-[228px] h-[150px] mx-auto"
              />

              {/* Title */}
              <div className="flex items-center justify-start lg:gap-4 gap-1">
                <div className="lg:text-[16px] text-[14px] font-medium text-primary lg:h-12 lg:w-12 h-10 w-10 flex items-center justify-center bg-[#071C03] rounded-full">
                  {slides[currentSlide].number}
                </div>
                <div className="lg:text-[16px] text-[14px] font-normal text-white">
                  {slides[currentSlide].title}
                </div>
              </div>

              {/* Points */}
              <ul className="space-y-4 max-w-[600px] mx-auto list-disc list-inside pl-4">
                {slides[currentSlide].points.map((point, index) => (
                  <li
                    key={index}
                    className="text-white font-medium leading-relaxed text-left lg:text-sm text-[14px] pl-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:h-[300px] h-[200px]"></div>
      </div>
    </section>
  );
}
