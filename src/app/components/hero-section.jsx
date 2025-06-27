// import { Typography } from "antd"
// import { UserOutlined, CheckSquareOutlined, CalendarOutlined, AimOutlined } from "@ant-design/icons"

// const { Title, Text, Paragraph } = Typography

// export default function MarketingSection() {
//   const stats = [
//     { number: "15+", label: "YEARS OF EXPERIENCE" },
//     { number: "90", label: "PROJECTS COMPLETED" },
//     { number: "80%", label: "CLIENT SATISFACTION" },
//   ]

//   const processSteps = [
//     {
//       title: "MEETING",
//       description: "Understanding the client's needs and setting objectives.",
//       icon: <UserOutlined className="text-xl" />,
//       isYellow: true,
//     },
//     {
//       title: "EVALUATING",
//       description: "Analyzing the project's scope, challenges, and resources.",
//       icon: <CheckSquareOutlined className="text-xl" />,
//       isYellow: false,
//     },
//     {
//       title: "PLANNING",
//       description: "Strategizing and outlining the steps for successful execution.",
//       icon: <CalendarOutlined className="text-xl" />,
//       isYellow: true,
//     },
//     {
//       title: "EXECUTION",
//       description: "Implementing the plan and delivering results.",
//       icon: <AimOutlined className="text-xl" />,
//       isYellow: false,
//     },
//   ]

//   return (
//     <div className="bg-black text-white mt-[140px] w-full p-8 lg:p-12">
//       <div className="max-w-[90%] mx-auto ">
//         <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
//           {/* Left Content - 7 columns */}
//           <div className="lg:col-span-7 space-y-8">
//             {/* Header Section */}
//             <div className="space-y-6">
//               <div className="flex items-center ">
//                 <div className=" h-2 bg-y[ellow-400 ]rounded-full"></div>
//                 <h1 className="text-[#44c5f8] text-[22px] font-medium tracking-widest uppercase">
//                   YOUR ONE-STOP SOLUTION FOR ALL YOUR
//                 </h1>
//               </div>

//               <div className="flex items-start gap-8">
//                 <div className="flex-1">
//                   <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
//                     MARKETING,
//                     <br />
//                     BRANDING &<br />
//                     DIGITAL NEEDS
//                   </h1>
//                 </div>
//                 {/* Custom Exclamation Mark */}
//                 <div className="flex flex-col relative items-center gap-2 mt-4 mr-[100px] ">
//                   <img className="w-42 h-42 -rotate-30" src="/QanWLr.png" alt="" />
//                 </div>
//               </div>
//             </div>

//             {/* Navigation Tabs */}
//             <div className="flex gap-12 pt-8">
//               <button className="text-white font-medium text-lg tracking-wide pb-3 border-b-2 border-[#44c5f8] uppercase">
//                 HIRE US
//               </button>
//               <button className="text-gray-500 font-medium text-lg tracking-wide pb-3 hover:text-white transition-colors uppercase">
//                 WHAT IS 360 Austrailia?
//               </button>
//             </div>

//             {/* Description */}
//             <div className="pt-4">
//               <p className="text-gray-300 text-[25px] leading-relaxed">
//                 Welcome to <span className="text-white font-semibold">360 Austrailia Ventures</span> - a marketing agency
//                 specializing in creating captivating logos, professional corporate communications, dynamic social media
//                 content, eye-catching flyers, and comprehensive solutions for all your branding, marketing, and digital
//                 needs.
//               </p>
//             </div>

//             {/* Work Process Section */}
//             <div className="space-y-6 pt-8">
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-2 bg-[#44c5f8] rounded-full"></div>
//                 <h1 className="text-[#44c5f8] text-xs font-medium tracking-widest uppercase">4 STEPS</h1>
//               </div>

//               <div>
//                 <h2 className="text-white text-2xl font-bold leading-tight">
//                   OUR SIMPLE
//                   <br />
//                   <span className="text-gray-500">WORK PROCESS</span>
//                 </h2>
//               </div>

//               {/* Process Steps Grid */}
//               <div className="grid grid-cols-2 gap-4 pt-4">
//                 {processSteps.map((step, index) => (
//                   <div key={index} className={`${step.isYellow ? "bg-[#2188b1]" : "bg-gray-800"} p-4 rounded-lg`}>
//                     <div className="flex items-start gap-3">
//                       <div className={`${step.isYellow ? "text-white" : "text-white"} mt-1`}>{step.icon}</div>
//                       <div>
//                         <h3
//                           className={`${step.isYellow ? "text-white" : "text-white"} text-lg font-bold mb-2 tracking-wide`}
//                         >
//                           {step.title}
//                         </h3>
//                         <p className={`${step.isYellow ? "text-white" : "text-gray-300"} text-lg leading-relaxed`}>
//                           {step.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Content - 5 columns */}
//           <div className="lg:col-span-5 space-y-6">
//             {/* Stats Card */}
//             <div className="bg-black border border-[#44c5f8] rounded-lg p-6">
//               <div className="space-y-8">
//                 {stats.map((stat, index) => (
//                   <div key={index}>
//                     <div className="text-center">
//                       <h3 className="text-[#44c5f8] text-3xl font-bold mb-1">{stat.number}</h3>
//                       <p className="text-white text-xs font-medium tracking-widest">{stat.label}</p>
//                     </div>
//                     {index < stats.length - 1 && <div className="border-b border-gray-700 mt-6"></div>}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Marketing Journey Image */}
//             <div className="relative">
//               <img
//                 src="/rIvVEM.jpg"
//                 alt="Let's start your marketing journey together"
//                 className="w-full h-auto rounded-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }










































































































"use client"

import { useState, useEffect, useRef } from "react"
import { User, CheckSquare, Calendar, Target } from "lucide-react"
import ModernTablet from "./modren-tablet"

export default function AnimatedMarketingSection() {
  const [activeTab, setActiveTab] = useState("hire")
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ experience: 0, projects: 0, satisfaction: 0 })
  const sectionRef = useRef(null)

  const stats = [
    { key: "experience", number: 15, suffix: "+", label: "YEARS OF EXPERIENCE" },
    { key: "projects", number: 90, suffix: "", label: "PROJECTS COMPLETED" },
    { key: "satisfaction", number: 80, suffix: "%", label: "CLIENT SATISFACTION" },
  ]

  const processSteps = [
    {
      title: "MEETING",
      description: "Understanding the client's needs and setting objectives.",
      icon: <User className="text-xl" />,
      isHighlight: true,
    },
    {
      title: "EVALUATING",
      description: "Analyzing the project's scope, challenges, and resources.",
      icon: <CheckSquare className="text-xl" />,
      isHighlight: false,
    },

    {
      title: "PLANNING",
      description: "Strategizing and outlining the steps for successful execution.",
      icon: <Calendar className="text-xl" />,
      isHighlight: true,
    },
    {
      title: "EXECUTION",
      description: "Implementing the plan and delivering results.",
      icon: <Target className="text-xl" />,
      isHighlight: false,
    },
  ]

  // Intersection Observer for triggering animations
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

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat) => {
        let start = 0
        const end = stat.number
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          setCounters((prev) => ({
            ...prev,
            [stat.key]: Math.floor(start),
          }))
        }, 16)
      })
    }
  }, [isVisible])

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-r from-[#000000] via-[#000000] to-[#000000] text-white mt-[140px] w-full p-8 lg:p-12 overflow-hidden"
    >
      <div className="max-w-[90%] mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            {/* Header Section */}
            <div className="space-y-6">
              <div
                className={`flex items-center transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="w-8 h-2 bg-[#10d4c4]  rounded-full animate-pulse"></div>
                <h1 className="text-[#10d4c4] text-[22px] font-medium tracking-widest uppercase ml-3">
                  YOUR ONE-STOP SOLUTION FOR ALL YOUR
                </h1>
              </div>

              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <h1
                    className={`text-white text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-1000 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: "0.4s" }}
                  >
                    <span className="inline-block hover:text-[#10d4c4] transition-colors duration-300">MARKETING,</span>
                    <br />
                    <span className="inline-block hover:text-[#10d4c4] transition-colors duration-300">BRANDING &</span>
                    <br />
                    <span className="inline-block hover:text-[#10d4c4] transition-colors duration-300">
                      DIGITAL NEEDS
                    </span>
                  </h1>
                </div>
                {/* Animated Exclamation Mark */}
              </div>
            </div>

            {/* Navigation Tabs */}
            <div
              className={`flex gap-12 pt-8 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <button
                onClick={() => setActiveTab("hire")}
                className={`font-medium text-lg tracking-wide pb-3 border-b-2 transition-all duration-300 uppercase transform hover:scale-105 ${
                  activeTab === "hire"
                    ? "text-white border-[#10d4c4]"
                    : "text-gray-500 border-transparent hover:text-white hover:border-gray-500"
                }`}
              >
                HIRE US
              </button>
              <button
                onClick={() => setActiveTab("about")}
                className={`font-medium text-lg tracking-wide pb-3 border-b-2 transition-all duration-300 uppercase transform hover:scale-105 ${
                  activeTab === "about"
                    ? "text-white border-[#10d4c4]"
                    : "text-gray-500 border-transparent hover:text-white hover:border-gray-500"
                }`}
              >
                WHAT IS 360 Austrailia?
              </button>
            </div>

            {/* Description */}
            <div
              className={`pt-4 transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <p className="text-gray-300 text-[25px] leading-relaxed">
                Welcome to{" "}
                <span className="text-white font-semibold hover:text-[#10d4c4] transition-colors duration-300 cursor-pointer">
                  360 Austrailia Ventures
                </span>{" "}
                - a marketing agency specializing in creating captivating logos, professional corporate communications,
                dynamic social media content, eye-catching flyers, and comprehensive solutions for all your branding,
                marketing, and digital needs.
              </p>
            </div>

            {/* Work Process Section */}
            <div className="space-y-6 pt-8">
              <div
                className={`flex items-center gap-3 transition-all duration-1000 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                }`}
                style={{ transitionDelay: "1.2s" }}
              >
                <div className="w-2 h-2 bg-[#10d4c4] rounded-full animate-pulse"></div>
                <h1 className="text-[#10d4c4] text-lg font-medium tracking-widest uppercase">4 STEPS</h1>
              </div>

              <div
                className={`transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: "1.4s" }}
              >
                <h2 className="text-white text-2xl font-bold leading-tight">
                  OUR SIMPLE
                  <br />
                  <span className="text-gray-500">WORK PROCESS</span>
                </h2>
              </div>

              {/* Process Steps Grid */}
              <div className="grid grid-cols-2 gap-8 pt-4 mt-[40px]">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`${
                      step.isHighlight ? "card-gredient" : "card-gredient"
                    } p-4  transition-all duration-400 hover:scale-105 hover:shadow-lg cursor-pointer group ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-3 ">
                      <div
                        className={`${
                          step.isHighlight ? "text-[#000000]" : "text-[#000000]"
                        } mt-1 transition-transform duration-300 text-xl group-hover:scale-110`}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <h3
                          className={`${
                            step.isHighlight ? "text-white" : "text-white"
                          } text-lg font-bold mb-2 tracking-wide group-hover:text-white transition-colors duration-300`}
                        >
                          {step.title}
                        </h3>
                        <p className={`${step.isHighlight ? "text-white" : "text-white"} text-[22px] leading-relaxed`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5 ">
            {/* Stats Card */}
            <div className=" flex  w-[100%] justify-between ">
              <div
                className={`flex flex-col relative items-center gap-2 mt-16 mr-[100px] transition-all duration-1000 ${
                  isVisible ? "rotate-0 scale-100 opacity-100" : "rotate-45 scale-0 opacity-0"
                }`}
                style={{ transitionDelay: "0.6s" }}
              >
                {/* <div className="w-42 h-42  animate-bounce flex items-center justify-start">
                  <img className="w-42 h-42 -rotate-30" src="/QanWLr.png" alt="" />
                </div> */}
              </div>
              <div
                className={`bg-black border w-[60%] border-[#10d4c4] rounded-lg p-6 flex justify-center transition-all duration-1000 hover:shadow-2xl hover:shadow-[#00d4ff]/20 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: "1s" }}
              >
                <div className="space-y-8">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="text-center group cursor-pointer">
                        <h3 className="text-[#10d4c4] text-3xl font-bold mb-1 transition-all duration-300 group-hover:scale-110">
                          {counters[stat.key]}
                          {stat.suffix}
                        </h3>
                        <p className="text-white text-xs font-medium tracking-widest group-hover:text-[#10d4c4] transition-colors duration-300">
                          {stat.label}
                        </p>
                      </div>
                      {index < stats.length - 1 && (
                        <div className="border-b border-gray-700 mt-6 transition-all duration-300 hover:border-[#10d4c4]"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Marketing Journey Image */}
            <div
              className={`relative overflow-hidden rounded-lg transition-all duration-1000 hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "1.2s" }}
            ></div>
            {/* <div className={` overflow-hidden rounded-lg  relative mt-[100px] transition-all duration-1000 hover:scale-105 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "1.2s" }}>
              <img
                src="/rIvVEM.jpg"
                alt="Let's start your marketing journey together"
                className="w-full max-h-screen rounded-lg"
              />
            </div> */}
            <ModernTablet />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

