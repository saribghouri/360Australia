"use client";
import { useState, useRef } from "react";
import Image from "next/image"; // Import Image component

export default function ClientLogosSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1);
  const scrollRef = useRef(null);
  const allLogos = [
    {
      type: "australia-ventures",
      image: "/logos/cocolea-removebg-preview.png",
    },
    {
      type: "australia-ventures",
      image: "/logos/logo_05-removebg-preview.png",
    },
    {
      type: "australia-ventures",
      image: "/logos/slams-logo-min-1-removebg-preview.png",
    },
    {
      type: "australia-ventures",
      image: "/logos/taxis_plus_logo_copy-removebg-preview.png",
    },
    {
      type: "australia-ventures",
      image: "/logos/voyo_logo_copy-removebg-preview.png",
    },
    {
      type: "australia-ventures",
      image: "/logos/Anumi_Master_Logo_black_n_white-01-removebg-preview.png",
    },

    // You can add more logo types here if needed, following the original structure
  ];

  const duplicatedLogos = [...allLogos, ...allLogos, ...allLogos];
  const renderLogo = (logo, index) => {
    const baseClasses =
      "flex-shrink-0 mx-8 transition-transform hover:scale-105";
    switch (logo.type) {
      case "australia-ventures":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex items-center justify-center rounded-lg p-4 ">
              <img
                src={logo.image || "/placeholder.svg"} // Mapped image source
                width={
                  logo.image === "/logos/slams-logo-min-1-removebg-preview.png"
                    ? 100
                    : 220
                }
                height={
                  logo.image === "/logos/slams-logo-min-1-removebg-preview.png"
                    ? 40
                    : 60
                }
              />
            </div>
          </div>
        );
      case "andaaz":
        return (
          <div key={index} className={baseClasses}>
            <div className="bg-gray-800 rounded-full px-6 py-3">
              <span className="text-white font-bold text-xl italic">
                {logo.content}
              </span>
            </div>
          </div>
        );
      case "arabic":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              </div>
              <div className="text-gray-600 text-lg font-medium">
                {logo.content}
              </div>
            </div>
          </div>
        );
      case "trust":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex flex-col items-center">
              <div className="text-blue-800 text-2xl font-bold italic">{`((${logo.content}))`}</div>
              <div className="text-blue-800 text-xs">{logo.subtitle}</div>
            </div>
          </div>
        );
      case "century":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mb-1">
                <div className="text-white text-xs font-bold">👑</div>
              </div>
              <div className="text-gray-700 text-sm font-semibold text-center">
                <div>{logo.content}</div>
                <div className="text-xs text-gray-500">{logo.subtitle}</div>
              </div>
            </div>
          </div>
        );
      case "udl":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex flex-col items-center">
              <div className="bg-gray-600 px-3 py-1 rounded">
                <span className="text-white font-bold text-lg">
                  {logo.content}
                </span>
              </div>
              <div className="text-gray-700 text-xs mt-1">{logo.subtitle}</div>
            </div>
          </div>
        );
      case "abbott":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex items-center space-x-2">
              <div className="text-blue-600 text-2xl font-bold">
                {logo.content}
              </div>
              <div className="text-blue-600 text-xs">{logo.subtitle}</div>
            </div>
          </div>
        );
      default:
        return (
          <div key={index} className={baseClasses}>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-900 px-4 py-2 rounded-lg">
                <span className="text-white font-bold text-lg">
                  {logo.content}
                </span>
              </div>
              {logo.subtitle && (
                <div className="text-gray-700 text-xs mt-1 text-center">
                  {logo.subtitle}
                </div>
              )}
            </div>
          </div>
        );
    }
  };
  const increaseSpeed = () => {
    setSpeed((prev) => Math.min(prev + 0.5, 3));
  };
  const decreaseSpeed = () => {
    setSpeed((prev) => Math.max(prev - 0.5, 0.5));
  };
  return (
    <section
      className="relative w-full h-34 bg-transparent mt-[40px]   lg:h-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="absolute inset-0 logo-section-gradient "
     
      />

      <div className="relative h-full  overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center h-full"
          style={{
            animation: isPaused
              ? "none"
              : `scroll-left ${60 / speed}s linear infinite`,
            width: "max-content",
          }}
        >
          {duplicatedLogos.map((logo, index) => renderLogo(logo, index))}
        </div>
      </div>

      <button
        onClick={decreaseSpeed}
        className="absolute left-4 top-1/ hidden transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors group"
        title="Decrease Speed"
      >
        <svg
          className="w-6 h-6 text-white"
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
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Slower
        </div>
      </button>
      <button
        onClick={increaseSpeed}
        className="absolute right-4 hidden top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors group"
        title="Increase Speed"
      >
        <svg
          className="w-6 h-6 text-white"
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
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Faster
        </div>
      </button>


      {isPaused && (
        <div className="absolute top-4 hidden right-4 z-20 bg-red-500/80 text-white text-xs px-3 py-1 rounded-full flex items-center space-x-1">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span>Paused</span>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
}
