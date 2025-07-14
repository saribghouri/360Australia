"use client"

import { CheckCircle, Users, Target, Award, Lightbulb } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectCTASection from "../components/ProjectCTASection"
import { Button } from "antd"

export default function AboutUsSections() {
  const [isVisible, setIsVisible] = useState({})
  const [mainSectionVisible, setMainSectionVisible] = useState(false)

  // Create individual refs for each section
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const mainSectionRef = useRef(null)

  // Main section intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMainSectionVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (mainSectionRef.current) {
      observer.observe(mainSectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Multiple sections intersection observer
  useEffect(() => {
    const observers = []

    const createObserver = (key, element) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }))
          }
        },
        { threshold: 0.1, rootMargin: "50px" },
      )

      observer.observe(element)
      observers.push(observer)
    }

    // Observe header and content sections
    if (headerRef.current) {
      createObserver("header", headerRef.current)
    }
    if (contentRef.current) {
      createObserver("content", contentRef.current)
    }

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <>
      <div className="mt-[100px]">
        <Header />
      </div>

      <section className="bg-black text-white py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[90%] mx-auto">
          {/* Header Section */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.header ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              ABOUT <span className="text-teal-400">US</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a passionate team of digital innovators, dedicated to transforming your vision into powerful online
              experiences that drive results and exceed expectations.
            </p>
          </div>

          {/* Content Section */}
          <div
            ref={contentRef}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-22 items-center mb-16 transition-all duration-1000 delay-300 ${isVisible.content ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            {/* Mission Section */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-teal-400">OUR MISSION:</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Founded with a vision to bridge the gap between creativity and technology, we specialize in crafting
                bespoke digital solutions that not only look stunning but also deliver exceptional performance and user
                engagement.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Expert Team",
                    desc: "Our diverse team brings together years of experience in design, development, and digital strategy.",
                  },
                  {
                    icon: Target,
                    title: "Results-Driven",
                    desc: "We focus on delivering measurable results that align with your business objectives and growth goals.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation First",
                    desc: "We stay ahead of industry trends, implementing cutting-edge technologies and design principles.",
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-start gap-4 group transition-all duration-500 hover:transform hover:translate-x-2 ${isVisible.content ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        }`}
                      style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                    >
                      <IconComponent className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <div>
                        <h4 className="text-[22px] font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 text-[18px] group-hover:text-white transition-colors duration-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Values Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold mb-6 text-teal-400">OUR VALUES</h3>
                <div className="space-y-6">
                  {[
                    { icon: Award, text: "Excellence in Every Project" },
                    { icon: CheckCircle, text: "Client-Centric Approach" },
                    { icon: Target, text: "Transparent Communication" },
                    { icon: Lightbulb, text: "Continuous Innovation" },
                  ].map((value, index) => {
                    const IconComponent = value.icon
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-3 group transition-all duration-300 hover:translate-x-2 ${isVisible.content ? "opacity-100" : "opacity-0"
                          }`}
                        style={{ transitionDelay: `${(index + 1) * 100 + 400}ms` }}
                      >
                        <IconComponent className="w-5 h-5 text-teal-400 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                        <span className="text-white text-[22px] group-hover:text-teal-400 transition-colors duration-300">
                          {value.text}
                        </span>
                      </div>
                    )
                  })}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-gray-300 text-xl leading-relaxed">
                    "We believe that great design is not just about aesthetics—it's about creating meaningful
                    connections between brands and their audiences."
                  </p>
                  <p className="text-teal-400 font-semibold mt-3 text-[24px] animate-pulse-subtle">
                    — Our Design Philosophy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}


          <section className="bg-transparent text-white py-16 px-6 lg:px-8 relative overflow-hidden">
            {/* Background geometric pattern */}


            <div className="max-w-8xl mx-auto relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-px bg-white"></div>
                    <span className="text-sm font-medium tracking-wider uppercase">WHAT WE DO FOR YOU?</span>
                  </div>

                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">ABOUT <span className="text-teal-400">US</span></h2>

                  <p className="text-gray-300 text-xl leading-relaxed ">
                    360 Australia is your trusted digital partner, helping businesses grow, succeed, and stand out online.
                    For years, we’ve worked with startups, small businesses, and established brands, turning ideas into digital success. We build strong partnerships, craft tailored strategies, and help businesses overcome challenges to reach their goals.
                    From boosting your social presence to driving more engagement, we cover everything so your products and services reach the right audience.
                    With a client-first approach and a proven track record of success, we’re here to help your business expand in the digital world.
                  </p>

                  <Button
                    href="#contact"
                    className="inline-block !text-cyan-400 !hover:text-cyan-300 !font-bold text-center !px-[20px] !py-[20px] !text-xl border border-cyan-400 hover:border-cyan-300 transition-colors duration-300 pb-1 cursor-pointer"
                  >
                    START YOUR PROJECT NOW
                  </Button>
                </div>

                {/* Right Stats */}
                <div className="bg-transparent min-h-screen flex items-center justify-center p-8">
                  <div className="relative w-full max-w-2xl h-96">
                    {/* 990+ Completed Projects - Top Left */}
                    <div className="absolute top-70 left-20">
                      <div className="relative w-64 h-64 transform rotate-45 rounded-2xl bg-black border-2 border-teal-400/40 flex items-center justify-center overflow-hidden">
                        {/* Corner diagonal lines */}
                        <div className="absolute inset-0">
                          <div className="absolute top-0 left-0 w-16 h-16">
                            <div className="absolute top-4 left-4 w-8 h-px bg-teal-600 transform -rotate-45"></div>
                            <div className="absolute top-4 left-4 w-px h-8 bg-teal-600 transform rotate-45"></div>
                          </div>
                          <div className="absolute top-0 right-0 w-16 h-16">
                            <div className="absolute top-4 right-4 w-8 h-px bg-teal-600 transform rotate-45"></div>
                            <div className="absolute top-4 right-4 w-px h-8 bg-teal-600 transform -rotate-45"></div>
                          </div>
                          <div className="absolute bottom-0 left-0 w-16 h-16">
                            <div className="absolute bottom-4 left-4 w-8 h-px bg-teal-600 transform rotate-45"></div>
                            <div className="absolute bottom-4 left-4 w-px h-8 bg-teal-600 transform rotate-45"></div>
                          </div>
                          <div className="absolute bottom-0 right-0 w-16 h-16">
                            <div className="absolute bottom-4 right-4 w-8 h-px bg-teal-600 transform -rotate-45"></div>
                            <div className="absolute bottom-4 right-4 w-px h-8 bg-teal-600 transform -rotate-45"></div>
                          </div>
                        </div>

                        <div className="transform -rotate-45 text-center text-white">
                          <div className="text-7xl font-bold mb-2">
                            990<span className="text-5xl">+</span>
                          </div>
                          <div className="text-gray-300 text-lg font-medium">Completed Projects</div>
                        </div>
                      </div>
                    </div>

                    {/* 170+ Worldwide Clients - Bottom Left */}
                    <div className="absolute bottom-50 left-0">
                      <div className="relative w-64 h-64 rounded-2xl transform rotate-45 bg-black border-2 border-teal-400/40 flex items-center justify-center overflow-hidden">
                        {/* Corner diagonal lines */}
                        <div className="absolute inset-0">
                          <div className="absolute top-0 left-0 w-16 h-16">
                            <div className="absolute top-4 left-4 w-8 h-px bg-teal-600 transform -rotate-45"></div>
                            <div className="absolute top-4 left-4 w-px h-8 bg-teal-600 transform rotate-45"></div>
                          </div>
                          <div className="absolute top-0 right-0 w-16 h-16">
                            <div className="absolute top-4 right-4 w-8 h-px bg-teal-600 transform rotate-45"></div>
                            <div className="absolute top-4 right-4 w-px h-8 bg-teal-600 transform -rotate-45"></div>
                          </div>
                          <div className="absolute bottom-0 left-0 w-16 h-16">
                            <div className="absolute bottom-4 left-4 w-8 h-px bg-teal-600 transform rotate-45"></div>
                            <div className="absolute bottom-4 left-4 w-px h-8 bg-teal-600 transform rotate-45"></div>
                          </div>
                          <div className="absolute bottom-0 right-0 w-16 h-16">
                            <div className="absolute bottom-4 right-4 w-8 h-px bg-teal-600 transform -rotate-45"></div>
                            <div className="absolute bottom-4 right-4 w-px h-8 bg-teal-600 transform -rotate-45"></div>
                          </div>
                        </div>

                        <div className="transform -rotate-45 text-center text-white">
                          <div className="text-7xl font-bold mb-2">
                            170<span className="text-5xl">+</span>
                          </div>
                          <div className="text-gray-300 text-lg font-medium">Worldwide Clients</div>
                        </div>
                      </div>
                    </div>

                    {/* 45+ Team Members - Right Side */}
                    <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
                      <div className="relative w-64 h-64 transform rounded-2xl rotate-45 bg-black border-2 border-teal-400/40 flex items-center justify-center overflow-hidden">
                        {/* Corner diagonal lines */}
                        <div className="absolute inset-0">
                          <div className="absolute top-0 left-0 w-16 h-16">
                            <div className="absolute top-4 left-4 w-8 h-px bg-teal-600 transform -rotate-45"></div>
                            <div className="absolute top-4 left-4 w-px h-8 bg-teal-600 transform rotate-45"></div>
                          </div>
                          <div className="absolute top-0 right-0 w-16 h-16">
                            <div className="absolute top-4 right-4 w-8 h-px bg-teal-600 transform rotate-45"></div>
                            <div className="absolute top-4 right-4 w-px h-8 bg-teal-600 transform -rotate-45"></div>
                          </div>
                          <div className="absolute bottom-0 left-0 w-16 h-16">
                            <div className="absolute bottom-4 left-4 w-8 h-px bg-teal-600 transform rotate-45"></div>
                            <div className="absolute bottom-4 left-4 w-px h-8 bg-teal-600 transform rotate-45"></div>
                          </div>
                          <div className="absolute bottom-0 right-0 w-16 h-16">
                            <div className="absolute bottom-4 right-4 w-8 h-px bg-teal-600 transform -rotate-45"></div>
                            <div className="absolute bottom-4 right-4 w-px h-8 bg-teal-600 transform -rotate-45"></div>
                          </div>
                        </div>

                        <div className="transform -rotate-45 text-center text-white">
                          <div className="text-7xl font-bold mb-2">
                            45<span className="text-5xl">+</span>
                          </div>
                          <div className="text-gray-300 text-lg font-medium">Team Members</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <ProjectCTASection />
      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4; }
          50% { text-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse-button {
          0%, 100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4); }
          50% { box-shadow: 0 0 0 10px rgba(6, 182, 212, 0); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes counter {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-button {
          animation: pulse-button 2s infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s ease-in-out infinite;
        }
        
        .animate-counter {
          animation: counter 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
