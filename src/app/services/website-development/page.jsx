"use client"

import { useEffect, useRef } from "react"
import Header from "../../components/header"
import { Code, ShoppingCart, Laptop, LayoutTemplate, Gauge, WorkflowIcon as Wordpress } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "antd"
import Footer from "../../components/footer"
import ProjectCTASection from "../../components/ProjectCTASection"

gsap.registerPlugin(ScrollTrigger)

export default function DigitalSolutionsSection() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  const services = [
    {
      icon: Code,
      title: "Custom Website Design",
      description: "We create unique websites that perfectly matches your vision.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: Wordpress, // Changed icon
      title: "WordPress Development",
      description: "We build easy-to-manage WordPress websites for flexible design and simple content updates.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: ShoppingCart, // Changed icon
      title: "eCommerce (Shopify/WooCommerce)",
      description: "Get a secure platform to sell your products effortlessly.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: Laptop, // Changed icon
      title: "Web App Development",
      description: "We build interactive web-based applications for specific business needs.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: LayoutTemplate, // Changed icon
      title: "Landing Pages",
      description: "We design single-page websites to convert visitors into leads or customers. ",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: Gauge, // Changed icon
      title: "Maintenance & Speed Optimisation",
      description: "We keep your website running smoothly for the best user experience.",
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
            <span className="text-teal-400">WEB</span> <span className="">DESIGN</span> <br></br>
            <span></span>AND<span className="text-teal-400"> DEVELOPMENT </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Building a website is not just coding, but it’s a creative process. Our team is full of sharp, imaginative
            minds who create unique designs for each brand. This not only helps your business stand out but also makes
            the development process smooth and efficient.
          </p>
        </div>
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el
              }}
              className="bg-[#000000] p-8 rounded-lg h-[400px] shadow-lg flex flex-col items-center text-center testomnial-shadows"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/360_F_243368800_iYenQw8k85GTsJ39VHFxanBkj3MQxzKW.jpg')`,
              }}
            >
              <div className={`p-[7px] border rounded-full h-[110px] testomnial-shadows ${service.borderColor1}`}>
                <div className={`p-[5px] border rounded-full h-[92px] ${service.borderColor2}`}>
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full mb-6 overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-radial p- from-white/10 to-transparent" />
                    <service.icon className="w-12 h-12 text-white z-10" />
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-3 mt-8">{service.title}</h3>
              <p className="text-white mb-8 text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
       <section className="w-full py-12 md:py-24 max-w-8xl flex justify-center lg:py-32 bg-black text-white">

      <div className="container    border rounded-3xl  py-12 border-gray-900 testomnial-shadows">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Web Design Portfolio</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of our most recent Web Design projects in the table below
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/Minimalist Website Launch Computer Mockup Instagram Post.png"
              alt="Web Design Project 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/Minimalist Website Launch Computer Mockup Instagram Post.png"
              alt="Web Design Project 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center mt-[-70px]">
          <Link href="#" passHref>
            <Button className="!rounded-full !px-6 !py-7 !text-xl !bg-black !text-white !hover:bg-gray-200 !hover:border-amber-200  !border-none !transition-colors !flex !items-center !gap-2">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
    {/* <div className="max-w-8xl py-16  flex justify-center">

    <section class="bg-black text-white w-[70%] py-16 border rounded-2xl border-gray-700">
  <div class="max-w-5xl mx-auto text-center">

    <h2 class="text-3xl md:text-4xl font-bold mb-4">Web Design Portfolio</h2>
    <p class="text-gray-400 mb-10">
      Check out some of our most recent Web Design projects in the table below
    </p>

 
    <div class="flex flex-col md:flex-row justify-center gap-6 mb-10">
      <img
        src="/Minimalist Website Launch Computer Mockup Instagram Post.png"
        alt="Portfolio Image 1"
        class="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
      />
      <img
        src="/Minimalist Website Launch Computer Mockup Instagram Post.png"
        alt="Portfolio Image 2"
        class="rounded-xl shadow-lg w-full md:w-1/2 object-cover"
      />
    </div>

  
    <a
      href="#"
      class="inline-flex items-center gap-2 text-white border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-full"
    >
      View All Projects
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>
</section>
    </div> */}
    <ProjectCTASection/>
    <Footer/>
    </>
  )
}
