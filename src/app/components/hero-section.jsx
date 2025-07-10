"use client"
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { User, CheckSquare, Calendar, Target } from "lucide-react"
import ModernTablet from "./modren-tablet"
import StateCard from "./state-card"

export default function AnimatedMarketingSection() {
  const [activeTab, setActiveTab] = useState("hire")
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ experience: 0, projects: 0, satisfaction: 0 })
  const sectionRef = useRef(null)

  const stats = [
    { key: "projects", value: 150, suffix: "+", label: "PROJECTS COMPLETED" },
    { key: "clients", value: 98, suffix: "%", label: "CLIENT SATISFACTION" },
    { key: "experience", value: 5, suffix: "+", label: "YEARS EXPERIENCE" },
    { key: "awards", value: 12, suffix: "", label: "AWARDS WON" },
  ]

  const testimonials = [
    {
      name: "MEETING",
      company: "TechStart Inc",
      rating: 5,
      icon: <User className="!text-[35px]" />,
      text: "We begin by thoroughly understanding your needs and establishing clear project objectives.",
    },
    {
      icon: <CheckSquare className="!text-[35px]" />,
      name: "EVALUATING",
      company: "GrowthCorp",
      rating: 5,
      text: "Next, we assess the project's scope, identify potential challenges, and determine the necessary resources.",
    },
    {
      icon: <Calendar className="!text-[35px]" />,
      name: "PLANNING",
      company: "InnovateLab",
      rating: 5,
      text: "Then, we meticulously strategize and outline the precise steps for successful execution.",
    },
    {
      icon: <Target className="!text-[35px]" />,
      name: "EXECUTION",
      company: "InnovateLab",
      rating: 5,
      text: "Finally, we implement the plan efficiently to deliver outstanding results.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])


  useEffect(() => {
    setIsVisible(true)
  
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
    <div className="w-full  ">
   
      <section className="relative min-h-screen mt-[130px] overflow-hidden bg-black w-full">
   
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop playsInline className="w-full h-[90vh] object-cover">
            <source src="/WhatsApp Video 2025-07-10 at 4.58.26 AM.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

     
        <div className="relative z-10 flex flex-col justify-center mt-[80px] px-6 sm:px-8 lg:px-12">
          <div className="max-w-[90%] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
         
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <div
                    className={`flex items-center transition-all duration-1000 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <div className="w-6 sm:w-8 h-1.5 sm:h-2 bg-[#10d4c4] rounded-full animate-pulse"></div>
                    <h1 className="text-[#10d4c4] text-sm sm:text-base lg:text-[22px] font-medium tracking-wider capitalize sm:tracking-widest uppercase ml-2 sm:ml-3 leading-tight">
                      Stay ahead with 360° expertise in
                    </h1>
                  </div>
                  <div className="flex items-start gap-4 sm:gap-8">
                    <div className="flex-1">
                      <h1
                        className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight transition-all duration-1000 ${
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                        style={{ transitionDelay: "0.4s" }}
                      >
                        <span className="inline-block hover:text-[#10d4c4] transition-colors duration-300">
                          Branding,
                        </span>
                        <br />
                        <span className="inline-block hover:text-[#10d4c4] transition-colors duration-300">
                          Marketing &
                        </span>
                        <br />
                        <span className="inline-block hover:text-[#10d4c4] transition-colors duration-300">
                          Digital Growth.
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="mt-8 sm:mt-12">
                  <div className="max-w-4xl">
                    <div
                      className={`flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-12 pt-4 sm:pt-8 transition-all duration-1000 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                      }`}
                      style={{ transitionDelay: "0.8s" }}
                    >
                      <button
                        onClick={() => setActiveTab("hire")}
                        className={`font-medium text-base sm:text-xl tracking-wide pb-2 sm:pb-3 border-b-2 transition-all duration-300 uppercase transform hover:scale-105 text-left sm:text-center ${
                          activeTab === "hire"
                            ? "text-white border-[#10d4c4]"
                            : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"
                        }`}
                      >
                        HIRE US
                      </button>
                      <button
                        onClick={() => setActiveTab("about")}
                        className={`font-medium text-base sm:text-xl tracking-wide pb-2 sm:pb-3 border-b-2 transition-all duration-300 uppercase transform hover:scale-105 text-left sm:text-center ${
                          activeTab === "about"
                            ? "text-white border-[#10d4c4]"
                            : "text-gray-300 border-transparent hover:text-white hover:border-gray-500"
                        }`}
                      >
                        Why 360 Australia?
                      </button>
                    </div>
                    <div
                      className={`mt-8 sm:mt-12 transition-all duration-500 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                      }`}
                      style={{ transitionDelay: "1.2s" }}
                    >
                      {activeTab === "hire" && (
                        <div className="text-gray-300 leading-relaxed">
                          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Hire Us</h2>
                          <p className="text-base sm:text-xl">
                            360 Australia is your creative engine, digital partner, and leading choice for transforming
                            visions into value. We work hand-in-glove with you to fine-tune every aspect of your digital
                            footprint, hitting that perfect sweet spot where your SEO, CRO, Social Media, and PPC
                            efforts resonate perfectly with your target audience.
                          </p>
                        </div>
                      )}
                      {activeTab === "about" && (
                        <div className="text-gray-300 leading-relaxed">
                          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Why 360 Australia?</h2>
                          <p className="text-base sm:text-lg">
                            At 360 Australia, we develop custom strategies for each client, whether you're a startup or
                            an established business looking for a stronger social presence. We start by deeply
                            understanding your unique requirements, then execute plans that are aligned with your
                            business goals. Our ultimate mission is to craft and execute powerful digital marketing
                            strategies, helping businesses of all sizes break through limitations, boost their
                            potential, and increase turnover while minimizing risk.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

    
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="w-full max-w-md">
                  <StateCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <div className="max-w-[90%] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
   
          <div className="lg:col-span-7">
            <section
              ref={sectionRef}
              className="bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
            >
              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8">
                <div
                  className={`flex items-center gap-2 sm:gap-3 transition-all duration-1000 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "1.2s" }}
                >
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#10d4c4] rounded-full animate-pulse"></div>
                  <h1 className="text-[#10d4c4] text-base sm:text-lg font-medium tracking-wider sm:tracking-widest uppercase">
                    How We Make It Simple?
                  </h1>
                </div>
                <div
                  className={`transition-all duration-1000 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: "1.4s" }}
                >
                  <h2 className="text-white text-xl capitalize sm:text-2xl font-bold">
                    The Process
                    <br />
                    <span className="text-gray-500 capitalize">Behind Your Growth</span>
                  </h2>
                </div>

             
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      whileHover={{
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }}
                      className={`
                        relative overflow-hidden rounded-lg py-3 px-4 sm:px-6 cursor-pointer group
                        bg-gradient-to-r from-[#10d4c4]/10 to-transparent
                        border border-[#10d4c4]/20 backdrop-blur-sm
                        hover:border-[#10d4c4]/50 transition-all duration-500
                        hover:shadow-2xl hover:shadow-[#10d4c4]/25
                      `}
                    >
                    
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#10d4c4]/15 to-transparent
                                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"
                      />
                    
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                   bg-gradient-to-r from-[#10d4c4]/5 via-[#10d4c4]/10 to-[#10d4c4]/5 blur-xl"
                      />
                      <div className="relative z-10">
                        <div className="flex items-start gap-3 sm:gap-4 mb-4">
                    
                          <motion.div
                            whileHover={{
                              rotate: [0, -10, 10, -10, 0],
                              scale: 1.15,
                              transition: { duration: 0.5 },
                            }}
                            className={`
                              flex-shrink-0 text-[#10d4c4] p-2 rounded-lg transition-all duration-300
                              group-hover:bg-[#10d4c4]/10 group-hover:shadow-lg group-hover:shadow-[#10d4c4]/25
                            `}
                          >
                            <div className="!text-[35px] flex items-center justify-center">{testimonial.icon}</div>
                          </motion.div>
                          <div className="flex-1 min-w-0">
                 
                            <motion.h3
                              whileHover={{
                                x: 3,
                                transition: { duration: 0.2 },
                              }}
                              className="text-[#10d4c4] font-bold text-lg sm:text-xl mb-1 transition-all duration-300
                                         group-hover:text-[#10d4c4] group-hover:drop-shadow-sm"
                            >
                              {testimonial.name}
                            </motion.h3>
                          </div>
                        </div>
                     
                        <motion.p
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2, delay: 0.15 },
                          }}
                          className="text-white text-base sm:text-lg lg:text-[20px] leading-relaxed transition-all duration-300
                                     group-hover:text-white/95 group-hover:drop-shadow-sm pl-2"
                        >
                          {testimonial.text}
                        </motion.p>
                      </div>
     
                      <div
                        className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
      
                      <div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#10d4c4] to-transparent
                                   w-0 group-hover:w-full transition-all duration-500 ease-out"
                      />
          
                      <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#10d4c4]
                                   group-hover:h-1/3 transition-all duration-300 ease-out rounded-full"
                      />
          
                      <div
                        className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#10d4c4] to-transparent
                                   group-hover:w-1/4 transition-all duration-700 ease-out delay-200"
                      />
              
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
                  
                      <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                        <svg className="w-6 h-6 text-[#10d4c4]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                      </div>
                 
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, rgba(16, 212, 196, 0.2) 0%, transparent 70%)`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </div>

       
          <div className="lg:col-span-5">
            <div
              className={`relative overflow-hidden rounded-lg mt-8 transition-all duration-1000 hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              <ModernTablet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
