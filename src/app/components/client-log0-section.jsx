"use client"

import { useState, useRef } from "react"

export default function ClientLogosSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [speed, setSpeed] = useState(1)
  const scrollRef = useRef(null)

  // All logos in one continuous array
  const allLogos = [
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
    { type: "australia-ventures", content: "360 Australia Ventures" },
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...allLogos, ...allLogos, ...allLogos]

  const renderLogo = (logo, index) => {
    const baseClasses = "flex-shrink-0 mx-8 transition-transform hover:scale-105"

    switch (logo.type) {
      case "australia-ventures":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex items-center justify-center  rounded-lg p-4 ">
              <img
                src="/MLEntp.png"
                alt="360 Australia Ventures Logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
        )

      case "andaaz":
        return (
          <div key={index} className={baseClasses}>
            <div className="bg-gray-800 rounded-full px-6 py-3">
              <span className="text-white font-bold text-xl italic">{logo.content}</span>
            </div>
          </div>
        )

      case "arabic":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
              </div>
              <div className="text-gray-600 text-lg font-medium">{logo.content}</div>
            </div>
          </div>
        )

      case "trust":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex flex-col items-center">
              <div className="text-blue-800 text-2xl font-bold italic">{`((${logo.content}))`}</div>
              <div className="text-blue-800 text-xs">{logo.subtitle}</div>
            </div>
          </div>
        )

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
        )

      case "udl":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex flex-col items-center">
              <div className="bg-gray-600 px-3 py-1 rounded">
                <span className="text-white font-bold text-lg">{logo.content}</span>
              </div>
              <div className="text-gray-700 text-xs mt-1">{logo.subtitle}</div>
            </div>
          </div>
        )

      case "abbott":
        return (
          <div key={index} className={baseClasses}>
            <div className="flex items-center space-x-2">
              <div className="text-blue-600 text-2xl font-bold">{logo.content}</div>
              <div className="text-blue-600 text-xs">{logo.subtitle}</div>
            </div>
          </div>
        )

      default:
        return (
          <div key={index} className={baseClasses}>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-900 px-4 py-2 rounded-lg">
                <span className="text-white font-bold text-lg">{logo.content}</span>
              </div>
              {logo.subtitle && <div className="text-gray-700 text-xs mt-1 text-center">{logo.subtitle}</div>}
            </div>
          </div>
        )
    }
  }

  const increaseSpeed = () => {
    setSpeed((prev) => Math.min(prev + 0.5, 3))
  }

  const decreaseSpeed = () => {
    setSpeed((prev) => Math.max(prev - 0.5, 0.5))
  }

  return (
    <section
      className="relative  w-full h-84 bg-transparent overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Diagonal Yellow Stripe */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-900"
        style={{
          clipPath: "polygon(0 40%, 100% 20%, 100% 80%, 0 100%)",
          transform: "skewY(-2deg)",
          transformOrigin: "top left",
        }}
      />

      {/* Infinite Scrolling Container */}
      <div className="relative  h-full -rotate-5 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center h-full"
          style={{
            animation: isPaused ? "none" : `scroll-left ${60 / speed}s linear infinite`,
            width: "max-content",
          }}
        >
          {duplicatedLogos.map((logo, index) => renderLogo(logo, index))}
        </div>
      </div>

      {/* Speed Control Buttons */}
      <button
        onClick={decreaseSpeed}
        className="absolute left-4 top-1/ hidden transform -translate-y-1/2  bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors group"
        title="Decrease Speed"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <div className="absolute -bottom-8  left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Faster
        </div>
      </button>

      {/* Speed Indicator */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-black/50 text-white text-xs px-3 py-1 rounded-full"></div>

      {/* Pause Indicator */}
      {isPaused && (
        <div className="absolute top-4 hidden right-4 z-20 bg-red-500/80 text-white text-xs px-3 py-1 rounded-full flex items-center space-x-1">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span>Paused</span>
        </div>
      )}

      {/* WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-30">
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors cursor-pointer">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </div>
      </div>

      {/* CSS Animation Styles */}
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
  )
}
