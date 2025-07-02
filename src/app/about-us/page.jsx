"use client"

import Image from "next/image"
import { CheckCircle, Users, Target, Award, Lightbulb, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "antd"
import Header from "../components/header"
import Footer from "../components/footer"

export default function AboutUsSections() {
  const [isVisible, setIsVisible] = useState({})
  const sectionRefs = useRef({})

  useEffect(() => {
    const observers = {}

    const createObserver = (key) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }))
          }
        },
        { threshold: 0.1, rootMargin: "50px" },
      )
    }

    // Create observers for each animated element
    const keys = ["header1", "content1", "stats1", "header2", "content2", "stats2"]
    keys.forEach((key) => {
      if (sectionRefs.current[key]) {
        observers[key] = createObserver(key)
        observers[key].observe(sectionRefs.current[key])
      }
    })

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <>
      <div className="mt-[140px]">
        <Header />
      </div>

      {/* First About Us Section - Website Design */}
      <section className="bg-black text-white py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[85%] mx-auto">
          {/* Animated Header */}
          <div
            ref={(el) => (sectionRefs.current.header1 = el)}
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible.header1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight animate-pulse-slow">
              WEBSITE DESIGN
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Investing in a professionally designed website is crucial for businesses seeking online success. It
              enhances credibility, user experience, and brand visibility driving growth and customer engagement.
            </p>
          </div>

          {/* Main Content Grid with Staggered Animation */}
          <div
            ref={(el) => (sectionRefs.current.content1 = el)}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 transition-all duration-1000 delay-300 ${
              isVisible.content1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Animated Image Section */}
            <div className="relative group">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-teal-500/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-400/30 rounded-full blur-lg animate-float-delayed"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-teal-500/20">
                <Image
                  src="/Screenshot 2025-06-30 072023.png"
                  alt="Screenshot 2025-06-30 072023"
                  width={600}
                  height={400}
                  quality={100}
                  priority
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Animated Content Section */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold  mb-6 text-teal-400 ">UNLOCKING SUCCESS:</h3>
              <div className="space-y-4">
                {[
                  "Elevates brand credibility and trust.",
                  "Enhances user experience and navigation.",
                  "Drives business growth through customer engagement.",
                ].map((text, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 transition-all duration-500 ${
                      isVisible.content1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0 animate-bounce-subtle" />
                    <p className="text-lg text-gray-300">{text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 transform transition-all duration-500 hover:bg-gray-900/70 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/10">
                <p className="text-gray-300 leading-relaxed mb-6">
                  A professionally designed website serves as a dynamic tool, propelling your business towards
                  unparalleled success in the digital landscape. Don't miss out on the transformative impact a
                  well-crafted online presence can bring to your brand.
                </p>
                <Button
                  size="lg"
                  className="!bg-teal-500 !hover:bg-teal-600 !text-black font-semibold px-8 py-3 rounded-lg !transition-all !duration-300 !transform !hover:scale-105 !hover:shadow-lg !hover:shadow-teal-500/30 !animate-pulse-button"
                >
                  START YOUR WEBSITE
                </Button>
              </div>
            </div>
          </div>

          {/* Animated Statistics Section */}
          <div
            ref={(el) => (sectionRefs.current.stats1 = el)}
            className={`grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-800 transition-all duration-1000 delay-600 ${
              isVisible.stats1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { number: "1000+", label: "WEBSITES CREATED" },
              { number: "750+", label: "COMPANIES HELPED" },
              { number: "60+", label: "YEARS COMBINED EXPERIENCE" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center group cursor-pointer transition-all duration-500 ${
                  isVisible.stats1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200 + 600}ms` }}
              >
                <p className="text-teal-400 text-sm font-semibold mb-2 tracking-wider">OVER</p>
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-teal-400 group-hover:scale-110 animate-counter">
                  {stat.number}
                </h4>
                <p className="text-gray-400 font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second About Us Section - Our Story */}
      <section className="bg-black text-white py-16 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[85%] mx-auto">
          {/* Animated Header */}
          <div
            ref={(el) => (sectionRefs.current.header2 = el)}
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.header2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              ABOUT <span className=" text-teal-400">US</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a passionate team of digital innovators, dedicated to transforming your vision into powerful online
              experiences that drive results and exceed expectations.
            </p>
          </div>

          {/* Animated Content Grid */}
          <div
            ref={(el) => (sectionRefs.current.content2 = el)}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 transition-all duration-1000 delay-300 ${
              isVisible.content2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Content Section */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold  mb-6 text-teal-400">OUR MISSION:</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
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
                      className={`flex items-start gap-4 group transition-all duration-500 hover:transform hover:translate-x-2 ${
                        isVisible.content2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                      }`}
                      style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                    >
                      <IconComponent className="w-8 h-8 text-teal-400 mt-1 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Animated Values Section */}
            <div className="space-y-8">
              <div className="bg-black/50 p-8 rounded-2xl border border-gray-800 transform transition-all duration-500 hover:bg-black/70 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/10 hover:scale-105">
                <h3 className="text-2xl font-bold  mb-6 text-teal-400">OUR VALUES</h3>
                <div className="space-y-4">
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
                        className={`flex items-center gap-3 group transition-all duration-300 hover:translate-x-2 ${
                          isVisible.content2 ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ transitionDelay: `${(index + 1) * 100 + 400}ms` }}
                      >
                        <IconComponent className="w-5 h-5 text-teal-400 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                        <span className="text-white font-medium group-hover:text-teal-400 transition-colors duration-300">
                          {value.text}
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "We believe that great design is not just about aesthetics—it's about creating meaningful
                    connections between brands and their audiences."
                  </p>
                  <p className="text-teal-400 font-semibold mt-3 animate-pulse-subtle">— Our Design Philosophy</p>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full !bg-teal-400 border-2 !border-teal-400 !text-black hover:bg-transparent hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-teal-400/30"
              >
                LEARN MORE ABOUT US
              </Button>
            </div>
          </div>

          {/* Animated Achievement Stats with Get Proposal Column */}
          <div
            ref={(el) => (sectionRefs.current.stats2 = el)}
            className={`grid md:grid-cols-4 gap-6 pt-12 border-t border-gray-800 transition-all duration-1000 delay-600 ${
              isVisible.stats2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { number: "98%", label: "CLIENT SATISFACTION" },
              { number: "24/7", label: "SUPPORT AVAILABLE" },
              { number: "15+", label: "INDUSTRIES SERVED" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center group cursor-pointer transition-all duration-500 hover:transform hover:scale-110 ${
                  isVisible.stats2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150 + 600}ms` }}
              >
                <h4 className="text-3xl md:text-4xl font-bold text-teal-400 mb-2 transition-all duration-300 group-hover:text-white animate-counter">
                  {stat.number}
                </h4>
                <p className="text-gray-400 font-medium group-hover:text-teal-400 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}

            {/* Get a Proposal Column */}
            <div
              className={`text-center group cursor-pointer transition-all duration-500 hover:transform hover:scale-110 ${
                isVisible.stats2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `600ms` }}
            >
              <div className="bg-teal-500/10 border-2 border-teal-500/30 rounded-2xl p-6 h-full flex flex-col justify-center items-center transition-all duration-300 hover:bg-teal-500/20 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/20">
                <h4 className="text-2xl font-bold text-teal-400 mb-3 transition-all duration-300 group-hover:text-white">
                  GET A PROPOSAL
                </h4>
                <p className="text-gray-400 font-medium mb-4 group-hover:text-teal-400 transition-colors duration-300 text-sm">
                  START YOUR PROJECT
                </p>
                <Button
                  size="sm"
                  className="!bg-teal-500 !hover:bg-teal-600 !text-black font-semibold px-6 py-2 rounded-lg !transition-all !duration-300 !transform !hover:scale-105 !hover:shadow-lg !hover:shadow-teal-500/30 flex items-center gap-2"
                >
                  Get Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
