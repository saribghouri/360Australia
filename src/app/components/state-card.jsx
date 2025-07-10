"use client"

import { useState, useEffect } from "react"

export default function StateCard() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    awards: 0,
  })

  const stats = [
    { key: "projects", value: 150, suffix: "+", label: "PROJECTS COMPLETED" },
    { key: "clients", value: 98, suffix: "%", label: "CLIENT SATISFACTION" },
    { key: "experience", value: 5, suffix: "+", label: "YEARS EXPERIENCE" },
    { key: "awards", value: 12, suffix: "", label: "AWARDS WON" },
  ]

  useEffect(() => {
    setIsVisible(true)
    // Animate counters
    stats.forEach((stat) => {
      let start = 0
      const end = stat.value
      const duration = 2000
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCounters((prev) => ({ ...prev, [stat.key]: end }))
          clearInterval(timer)
        } else {
          setCounters((prev) => ({ ...prev, [stat.key]: Math.floor(start) }))
        }
      }, 16)
    })
  }, [])

  return (
    <div className="w-full max-w-6xl">
      <div className="flex justify-center">
        <div
          className={`relative bg-gradient-to-br from-black via-gray-900 to-black border-2 border-[#10d4c4] rounded-2xl p-6 sm:p-8 w-full max-w-2xl transition-all duration-1000 hover:shadow-2xl hover:shadow-[#10d4c4]/30 hover:border-[#10d4c4]/80 hover:scale-105 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10d4c4]/5 via-transparent to-[#10d4c4]/5 rounded-2xl"></div>

          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-[#10d4c4] rounded-tl-lg"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-[#10d4c4] rounded-tr-lg"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-[#10d4c4] rounded-bl-lg"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-[#10d4c4] rounded-br-lg"></div>

          <div className="relative z-10 space-y-4 sm:space-y-6 w-full">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110">
                  <div className="relative">
                    <h3 className="text-[#10d4c4] text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 transition-all duration-500 group-hover:text-white  relative z-10">
                      {counters[stat.key]}
                      {stat.suffix}
                    </h3>
                    {/* Glowing number effect */}
                    <div className="absolute inset-0 text-[#10d4c4] text-4xl sm:text-5xl lg:text-6xl font-bold opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-500">
                      {counters[stat.key]}
                      {stat.suffix}
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold tracking-[0.2em] group-hover:text-[#10d4c4] transition-all duration-500 group-hover:tracking-[0.3em] group-hover:drop-shadow-[0_0_10px_#10d4c4]">
                    {stat.label}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <div className="relative mt-4 sm:mt-5">
                    <div className="border-b border-gray-700 transition-all duration-500 hover:border-[#10d4c4] hover:shadow-[0_1px_10px_#10d4c4]/30"></div>
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#10d4c4] rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-[#10d4c4]/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
