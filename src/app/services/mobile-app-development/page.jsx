"use client"

import { useEffect, useRef } from "react"

import { Code, Braces, Palette, CloudUpload, Server } from "lucide-react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "antd"
import Header from "../../components/header"
import ProjectCTASection from "../../components/ProjectCTASection"
import Footer from "../../components/footer"
import WebDesignPortfolio from "../../components/web-portfolio"


gsap.registerPlugin(ScrollTrigger)

export default function DigitalSolutionsSection() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const services = [
    {
      icon: Code,
      title: "iOS & Android Development",
      description: "We build custom mobile applications that work perfectly on both iPhones (iOS) and Android phones.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: Braces, // Changed icon from Wordpress
      title: "Flutter & React Native Apps",
      description: "We use modern tools through which your app can work on multiple devices from one code base.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: Palette, // Changed icon from ShoppingCart
      title: "UI/UX Design for Application",
      description: "Our apps are designed to ensure a great user experience and smooth navigation",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: CloudUpload, // Changed icon from Laptop
      title: "App Store Deployment",
      description:
        "We handle all the technical steps to get your finished app listed on the Apple App Store and Google Play Store.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: Server, // Changed icon from LayoutTemplate
      title: "API & Backend Integration",
      description: " We connect your app to online systems that store data and manage features. ",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="mt-[110px]">
        <Header />
      </div>
      <section
        ref={sectionRef}
        className="w-full py-12 md:py-24 lg:py-32 bg-[#000] text-white"
        style={{
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container px-4 md:px-6 text-start max-w-9xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="">MOBILE  APP  </span> <br></br>
            <h1 className="mt-[10px]">

              <span className="text-teal-400 mt-[10px]"> DEVELOPMENT </span>
            </h1>
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            Tap into growth with an app. At 360 Australia, we build easy-to-use native and hybrid apps that work smoothly on any device. Whether it’s booking, browsing, or buying, we turn your ideas into smart, real-world solutions that your customers will love.

          </p>
        </div>
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-8xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el
              }}
              className="bg-[#000000] px-8 pt-[40px] rounded-lg h-[400px] shadow-lg flex flex-col items-center text-center testomnial-shadows"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/360_F_243368800_iYenQw8k85GTsJ39VHFxanBkj3MQxzKW.jpg')`,
              }}
            >
              <div className={`p-[7px] border-3 rounded-full h-[115px] testomnial-shadows ${service.borderColor1}`}>
                <div className={`p-[5px] border-3 rounded-full h-[94px] ${service.borderColor2}`}>
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full mb-6 overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-radial p- from-white/10 to-transparent" />
                    <service.icon className="w-12 h-12 text-white z-10" />
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-3 mt-8">{service.title}</h3>
              <p className="text-white mb-8 text-xl leading-relaxed mt-6">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <WebDesignPortfolio />

      <ProjectCTASection />
      <Footer />
    </>
  )
}
