"use client"

import { useState, useEffect } from "react"
import {
  DesktopOutlined,
  SoundOutlined,
  GiftOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  BulbOutlined,
} from "@ant-design/icons"

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <DesktopOutlined className="text-2xl" />,
      title: "DESIGNING",
      description:
        "We create stunning visual designs that capture your brand's essence. From logos to website layouts, our designs are tailored to engage and inspire.",
    },
    {
      icon: <SoundOutlined className="text-2xl" />,
      title: "CORPORATE COMMUNICATIONS",
      description:
        "Our team specializes in crafting clear, impactful corporate communications. Whether it's internal messaging or public relations, we ensure your voice is heard and understood.",
    },
    {
      icon: <GiftOutlined className="text-2xl" />,
      title: "GIVEAWAYS",
      description:
        "Boost engagement and attract new customers with our creative giveaway campaigns. We design and execute strategies that create buzz and excitement around your brand.",
    },
    {
      icon: <CalendarOutlined className="text-2xl" />,
      title: "EVENT MANAGEMENT",
      description:
        "From concept to execution, we handle all aspects of event planning. Our team ensures that your events are memorable and aligned with your brand identity.",
    },
    {
      icon: <ShareAltOutlined className="text-2xl" />,
      title: "SOCIAL MEDIA MARKETING",
      description:
        "We develop dynamic social media strategies that build community and foster engagement. Our content is crafted to resonate with your audience across all platforms.",
    },
    {
      icon: <BulbOutlined className="text-2xl" />,
      title: "STRATEGIC PLANNING",
      description:
        "Our strategic planning services help you define your goals and create a roadmap to achieve them. We analyze market trends and audience insights to ensure your marketing efforts are effective and targeted.",
    },
  ]

  return (
    <section className=" bg-black text-white py-16 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent"></div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-20 right-20 opacity-80">
        <div
          className={`transform transition-all duration-1000 ${isVisible ? "rotate-0 scale-100" : "rotate-45 scale-0"}`}
        >
          <div className="w-16 h-4 bg-[#10d4c4] rounded-full mb-2 transform rotate-12"></div>
          <div className="w-12 h-4 bg-[#10d4c4] rounded-full transform rotate-12"></div>
        </div>
      </div>

      <div className="max-w-[90%] mx-auto">
        {/* Header */}
        <div
          className={`text-start mb-16 max-w-[80%] transform transition-all duration-800 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="flex w-full items-center max-w-[80%] justify-start mb-4 text-start">
            <div className="w-4 h-2 bg-[#10d4c4] rounded-full mr-3"></div>
            <span className="text-[#10d4c4] text-sm text-start font-medium tracking-wider uppercase">Core Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="block">DISCOVER OUR</span>
            <span className="block text-gray-400">CAPABILITIES</span>
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[100%] mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 backdrop-blur-sm p-8 hover:bg-gray-800/70 transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Golden Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                      <div className="text-white group-hover:text-[#10d4c4] transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-[22px] font-bold mb-4 group-hover:text-[#10d4c4] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-[20px] leading-relaxed group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#10d4c4] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div
          className={`mt-16 flex justify-center transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#10d4c4] to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
