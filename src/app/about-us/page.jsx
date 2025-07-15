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
  const [activeStep, setActiveStep] = useState("growth")

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
  const stepsData = [
    {
      id: "growth",
      title: "Trust",
      description: "We stand by our clients every step of the way.",

    },
    {
      id: "respect",
      title: "Transparency",
      description: "We value and respect every individual.",

    },
    {
      id: "innovation",
      title: "Innovation",
      description: "Driving forward with innovative solutions.",

    },
    {
      id: "passion",
      title: "Passion",
      description: "Passionate about achieving excellence.",

    },
  ]

  return (
    <>
      <div className="mt-[100px]">
        <Header />
      </div>

      <section className="bg-black text-white px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[90%] mx-auto">


          <section className="bg-transparent text-white py-16 px-6 lg:px-8 relative ">
            {/* Background geometric pattern */}


            <div className="max-w-8xl mx-auto relative z-10 mt-[80px]">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 ">
                {/* Left Content */}
                <div className="space-y-6">


                  <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">ABOUT <span className="text-teal-400">US</span></h2>

                  <p className="text-gray-300 text-xl leading-relaxed ">
                    360 Australia is your trusted digital partner, helping businesses grow, succeed, and stand out online.
                    For years, we’ve worked with startups, small businesses, and established brands, turning ideas into digital success. We build strong partnerships, craft tailored strategies, and help businesses overcome challenges to reach their goals.
                    From boosting your social presence to driving more engagement, we cover everything so your products and services reach the right audience.
                    With a client-first approach and a proven track record of success, we’re here to help your business expand in the digital world.
                  </p>

                  <Button
                    href="#contact"
                    className="inline-block !bg-teal-500 !text-white  !hover:text-cyan-300 !font-bold text-center !px-[40px] !py-[20px] !text-xl border border-cyan-400 hover:border-cyan-300 transition-colors duration-300 pb-1 cursor-pointer"
                  >
                    START YOUR PROJECT NOW
                  </Button>
                </div>

                {/* Right Stats */}
                <div className="bg-transparent min-h-auto flex items-center justify-center p-8">
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
          <section className="bg-transparent mt-[100px] text-white py-13 px-6 lg:px-8 relative overflow-hidden">
            {/* Background geometric pattern */}
            <div className="space-y-6">


              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">Our   <span className="text-teal-400">commitment</span></h2>




            </div>

            <div className="max-w-9xl mx-auto relative z-10 py-12 md:py-24 lg:py-32">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Our Vision Section (Left) */}
                <div
                  className="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-8 border border-teal-400 testomnial-shadows text-white shadow-lg"
                  style={{ backgroundImage: `url('/navy-blue-futuristic-technology-linkedin-260nw-2358315107.jpg')` }}
                >
                  <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
                  <div className="relative z-10  py-[30px] ">
                    <h2 className="text-4xl font-bold mb-4">Our Vision:</h2>
                    <p className="text-lg">
                      Our vision is to become the most trusted name for digital services. We aim to create strategies that turn
                      ideas into success stories by staying ahead of trends and embracing innovation. We’re here to set new
                      standards and be remembered for results that truly matter.
                    </p>
                  </div>
                </div>

                {/* Mission Section (Right) */}
                <div
                  className="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-8  border border-teal-400 testomnial-shadows text-white shadow-lg"
                  style={{ backgroundImage: `url('/navy-blue-futuristic-technology-linkedin-260nw-2358315107.jpg')` }}
                >
                  <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
                  <div className="relative z-10 py-[30px] ">
                    <h2 className="text-4xl font-bold mb-4">Mission:</h2>
                    <p className="text-lg">
                      Our mission is to promote all kinds of businesses to stand out in the digital World. We create smart
                      solutions to help them grow, build their brand, and connect with customers. We’re all about great service,
                      unique ideas, smart technology, and a results-oriented plan to get results.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div
              className="relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat p-8 border border-teal-400 testomnial-shadows text-white shadow-lg"
              style={{ backgroundImage: `url('/navy-blue-futuristic-technology-linkedin-260nw-2358315107.jpg')` }}
            >
              <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
              <div className="flex flex-col justify-center items-center py-8 px-4 bg-none relative z-10">
                <h2 className="text-5xl font-bold text-white mb-16 text-center">Our <span className="text-teal-400">Values</span></h2>
                <div className="flex w-full max-w-7xl relative">
                  {stepsData.map((step, index) => (
                    <div
                      key={step.id}
                      className="relative flex-1 flex flex-col items-center cursor-pointer group px-4"
                      onMouseEnter={() => setActiveStep(step.id)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      <h3
                        className={`text-[30px] font-semibold flex items-start text-white transition-all mb-[20px] duration-300 ease-in-out mt-4 ${activeStep === step.id ? "-translate-y-10 text-blue-800" : ""
                          }`}
                      >
                        {step.title}
                      </h3>
                      {/* Stepper line and dot container */}
                      <div className="relative z-10 flex items-center justify-center w-full">
                        {/* Line before the dot (except for the first one) */}
                        {index > 0 && <div className="h-px bg-gray-300 flex-1 -mr-2" />}
                        {/* Dot and concentric circles */}
                        <div className="relative w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center shrink-0">
                          {activeStep === step.id && (
                            <>
                              <div className="absolute w-8 h-8 rounded-full border border-yellow-300 opacity-75" />
                              <div className="absolute w-12 h-12 rounded-full border border-teal-200 opacity-50" />
                              <div className="absolute w-16 h-16 rounded-full border border-teal-100 opacity-25" />
                            </>
                          )}
                        </div>
                        {/* Line after the dot (except for the last one) */}
                        {index < stepsData.length - 1 && <div className="h-px bg-gray-300 flex-1 -ml-2" />}
                      </div>
                      {/* Description - positioned below dot, appears on hover */}
                      <p
                        className={`text-lg text-white transition-all duration-300 ease-in-out mt-[40px] overflow-hidden ${activeStep === step.id ? "opacity-100 max-h-20 mt-2" : "opacity-0 max-h-0"
                          }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  ))}
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
