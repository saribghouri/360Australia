"use client";

import { useEffect, useRef } from "react";

import {
  Code,
  ShoppingCart,
  Laptop,
  LayoutTemplate,
  Gauge,
  WorkflowIcon as Wordpress,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "antd";
import Header from "../../components/header";
import ProjectCTASection from "../../components/ProjectCTASection";
import Footer from "../../components/footer";

import WebDesignPortfolio from "../../components/web-portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function DigitalSolutionsSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const services = [
    {
      icon: Code,
      title: "Explainer Videos",
      description:
        "We create animated explainer videos that simplify complex ideas or products.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: Wordpress,
      title: "2D/3D Animation",
      description:
        "360 Australia brings concepts to life through smooth and engaging 2D or 3D animation.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: ShoppingCart,
      title: "Logo Animation",
      description:
        "Your brand identity gets a visual boost with clean, creative logo animations.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: Laptop,
      title: "Product & Promo Videos",
      description:
        "Engaging visuals that highlight your products and help drive customer interest and sales.",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
    {
      icon: LayoutTemplate,
      title: "Video Editing",
      description:
        "Turning raw footage into smooth, professional videos that leave a strong impression. ",
      borderColor1: "border-white",
      borderColor2: "border-teal-300",
    },
  ];

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
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* <div className="mt-[110px]">
        <Header />
      </div> */}
      <section
        ref={sectionRef}
        className="w-full py-12 md:py-24 lg:py-32 bg-[#000] text-white"
        style={{
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container px-4 md:px-6 text-start max-w-9xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="">Videos & </span> <br></br>
            <span className="text-teal-400"> Animation </span>
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            We’re all about bringing your brand to life with creative videos and
            animations that speak louder than words. Whether it’s a punchy
            promo, a simple explainer, or something to build awareness, we’ll
            make sure your message hits the mark and gets noticed.
          </p>
        </div>
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-8xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="bg-[#000000] px-8 pt-[40px] rounded-lg h-[400px] shadow-lg flex flex-col items-center text-center testomnial-shadows"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/360_F_243368800_iYenQw8k85GTsJ39VHFxanBkj3MQxzKW.jpg')`,
              }}
            >
              <div
                className={`p-[7px] border-3 rounded-full h-[115px] testomnial-shadows ${service.borderColor1}`}
              >
                <div
                  className={`p-[5px] border-3 rounded-full h-[94px] ${service.borderColor2}`}
                >
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full mb-6 overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-radial p- from-white/10 to-transparent" />
                    <service.icon className="w-12 h-12 text-white z-10" />
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold !mb-3 !mt-8">
                {service.title}
              </h3>
              <p className="text-white mb-8 text-xl leading-relaxed mt-8">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* <WebDesignPortfolio/> */}
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
      <ProjectCTASection />
    </>
  );
}
