"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Monitor, Volume2, Gift, Calendar } from "lucide-react"

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Monitor className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Website Design & Development",
      description:
        "At 360 Australia, we build visually stunning, high-performing websites that reflect your brand and connect with your audience. We focus on responsive design and intuitive user experiences, ensuring your online presence is both engaging and effective. Your website serves as the digital backbone of your brand.",
    },
    {
      icon: <Volume2 className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Graphics Design Services",
      description:
        "Bring your brand to life with 360 Australia's creative design expertise. We specialize in creating unique logo designs to complete visual branding and a wide array of marketing materials that perfectly represent your identity and message.",
    },
    {
      icon: <img src="/icon-03.png" className="w-12 h-12 sm:w-12 sm:h-12" />,
      title: "Mobile App Development",
      description:
        "Extend your reach with mobile applications from 360 Australia. We develop both high-performance native and versatile hybrid apps, designed to engage your audience and provide seamless functionality across all devices. Turn your ideas into real-world solutions that ensure your users enjoy a smooth mobile experience.",
    },
    {
      icon: <img src="/icon-04.png" className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Digital Marketing",
      description:
        "Simplify your online presence and reach your target audience with 360 Australia's comprehensive digital marketing strategies. We specialize in SEO, Social Media Marketing, and Google PPC, driving traffic, increasing engagement, and boosting your brand's visibility in the digital landscape.",
    },
  ]

  return (
    <section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent"></div>
      </div>

      <div className="absolute top-10 sm:top-16 md:top-20 right-4 sm:right-10 md:right-20 opacity-60 sm:opacity-80 hidden sm:block">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "rotate-0 scale-100" : "rotate-45 scale-0"}`}
        >
          <div className="w-8 sm:w-12 md:w-16 h-2 sm:h-3 md:h-4 bg-[#10d4c4] rounded-full mb-1 sm:mb-2 transform rotate-12"></div>
          <div className="w-6 sm:w-9 md:w-12 h-2 sm:h-3 md:h-4 bg-[#10d4c4] rounded-full transform rotate-12"></div>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto">
        <div
          className={`text-start mb-8 sm:mb-12 md:mb-16 transform transition-all duration-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center justify-start mb-3 sm:mb-4">
            <div className="w-3 sm:w-4 h-1.5 sm:h-2 bg-[#10d4c4] rounded-full mr-2 sm:mr-3"></div>
            <span className="text-[#10d4c4] text-xs sm:text-sm font-medium tracking-wider uppercase">
              Core Services
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="block">Get to Know </span>
            <span className="block text-gray-400">Our Expertise</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.9,
              }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 50,
                scale: isVisible ? 1 : 0.9,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`
                group relative overflow-hidden rounded-xl p-4 sm:p-6 md:p-8 cursor-pointer
               
                backdrop-blur-sm border border-gray-700/50
                hover:border-[#10d4c4]/50 transition-all duration-500
                hover:shadow-2xl hover:shadow-[#10d4c4]/20
              `}
            >
              {/* Animated background overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#10d4c4]/10 to-transparent 
                             translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"
              />

              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                             bg-gradient-to-r from-[#10d4c4]/5 via-[#10d4c4]/10 to-[#10d4c4]/5 blur-xl"
              />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
                  {/* Animated icon */}
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.15,
                      transition: { duration: 0.5 },
                    }}
                    className="flex-shrink-0"
                  >
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16  rounded-full flex items-center justify-center 
                                 group-hover:bg-[#10d4c4]/20 transition-all duration-300
                                 group-hover:shadow-lg group-hover:shadow-[#10d4c4]/25"
                    >
                      <div className="text-white group-hover:text-[#10d4c4] transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex-1">
                    {/* Animated title */}
                    <motion.h3
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                      className="text-lg sm:text-xl md:text-[22px] font-bold mb-2 sm:mb-3 md:mb-4 
                                 group-hover:text-[#10d4c4] transition-colors duration-300"
                    >
                      {service.title}
                    </motion.h3>

                    {/* Animated description */}
                    <motion.p
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2, delay: 0.1 },
                      }}
                      className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed 
                                 group-hover:text-white transition-colors duration-300"
                    >
                      {service.description}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#10d4c4] to-transparent 
                             w-0 group-hover:w-full transition-all duration-500 ease-out"
              />

              {/* Side glow */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#10d4c4] 
                             group-hover:h-1/3 transition-all duration-300 ease-out rounded-full"
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#10d4c4] to-transparent 
                             group-hover:w-1/3 transition-all duration-700 ease-out delay-200"
              />

              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#10d4c4] rounded-full 
                               animate-pulse delay-100"
                />
                <div
                  className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#10d4c4] rounded-full 
                               animate-pulse delay-300"
                />
                <div
                  className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[#10d4c4] rounded-full 
                               animate-pulse delay-500"
                />
              </div>

              {/* Radial gradient overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                             bg-radial-gradient from-[#10d4c4]/20 via-transparent to-transparent"
                style={{
                  background: `radial-gradient(circle at 50% 50%, rgba(16, 212, 196, 0.1) 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        <div
          className={`mt-8 sm:mt-12 md:mt-16 flex justify-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-gradient-to-r from-transparent via-[#10d4c4] to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
