"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { Button } from "antd"
import { ArrowRight } from "lucide-react"
export default function AnimatedSection() {
  const containerRef = useRef(null)
  const dot1Ref = useRef(null)
  const dot2Ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Existing card animations
    const cardsWrappers = gsap.utils.toArray(".card-wrapper")
    const cards = gsap.utils.toArray(".card")
    cardsWrappers.forEach((wrapper, i) => {
      const card = cards[i]
      let scale = 1
      let rotation = 0
      if (i !== cards.length - 1) scale = 0.9 + 0.025 * i
      rotation = -10

      gsap.to(card, {
        scale: scale,
        rotationX: rotation,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top " + (80 + 60 * i),
          end: "bottom 800",
          endTrigger: ".wrapper",
          scrub: true,
          pin: wrapper,
          pinSpacing: false,
          id: i + 1,
        },
      })
    })

    // SVG dot animations
    const circle1Props = { cx: 35, cy: 50, r: 30 }
    const circle2Props = { cx: 65, cy: 50, r: 30 }

    // Animate dot 1
    gsap.to(
      {},
      {
        angle: 360, // Animate a dummy 'angle' property
        duration: 5,
        repeat: -1,
        ease: "none",
        onUpdate: function () {
          const currentAngle = this.progress() * 2 * Math.PI // Convert progress (0-1) to radians (0-2PI)
          if (dot1Ref.current) {
            dot1Ref.current.setAttribute("cx", circle1Props.cx + circle1Props.r * Math.cos(currentAngle))
            dot1Ref.current.setAttribute("cy", circle1Props.cy + circle1Props.r * Math.sin(currentAngle))
          }
        },
      },
    )

    // Animate dot 2 in the opposite direction
    gsap.to(
      {},
      {
        angle: -360, // Animate a dummy 'angle' property
        duration: 5,
        repeat: -1,
        ease: "none",
        onUpdate: function () {
          const currentAngle = this.progress() * 2 * Math.PI // Convert progress (0-1) to radians (0-2PI)
          if (dot2Ref.current) {
            dot2Ref.current.setAttribute("cx", circle2Props.cx + circle2Props.r * Math.cos(-currentAngle)) // Negative angle for opposite direction
            dot2Ref.current.setAttribute("cy", circle2Props.cy + circle2Props.r * Math.sin(-currentAngle))
          }
        },
      },
    )

    // Cleanup function for ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen mt-[150px] flex flex-col items-center">
      {/* Animated SVG background element */}

      <div className="wrapper relative w-full max-w-screen-xl">
        <div className="cards w-full mx-auto">
          <div className="card-wrapper mb-[30px] flex justify-center"></div>
          {/* Card 2 */}
          <div className="card-wrapper mb-[30px] flex justify-center">
            <div className="card group w-[min(2000px,90vw)] h-[300px] relative rounded-3xl overflow-hidden border border-teal-400 bg-gradient-to-br from-black via-black to-black">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="relative z-10 p-8 h-full gap-[40px] flex flex-row justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#10d4c4] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#10d4c4] group-hover:h-1/3 transition-all duration-300 ease-out rounded-full" />
                <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#10d4c4] to-transparent group-hover:w-1/4 transition-all duration-700 ease-out delay-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#10d4c4] rounded-full animate-pulse delay-100" />
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#10d4c4] rounded-full animate-pulse delay-300" />
                  <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[#10d4c4] rounded-full animate-pulse delay-500" />
                </div>
                <div className="w-[50%]">
                  <h2 className="text-3xl font-bold text-white mb-4 transition-transform duration-300">
                    Web Design and Developement
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    Building a website is not just coding, but it’s a creative process to boost your digital presence.

                  </p>
                  <Button variant="link" className="group relative items-center justify-center gap-1 !px-10  !py-5 h-auto">
                    <span className="relative ">
                      <span className="text-[20px] font-medium ">learn more</span>
                     
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                  </Button>
                </div>

                {/* <div className="w-[50%] flex justify-center">
                  <img className="w-50 h-55" src="/vFHYRi.png" alt="AI Engineering" />
                </div> */}
              </div>
            </div>
          </div>



          <div className="card-wrapper mb-[30px] flex justify-center">
            <div className="card group w-[min(2000px,90vw)] h-[300px] relative rounded-3xl overflow-hidden border border-teal-400 bg-gradient-to-br from-teal-600 via-teal-600 to-teal-600">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="relative z-10 p-8 h-full gap-[40px] flex flex-row justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ffffff] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#ffffff] group-hover:h-1/3 transition-all duration-300 ease-out rounded-full" />
                <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#ffffff] to-transparent group-hover:w-1/4 transition-all duration-700 ease-out delay-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#ffffff] rounded-full animate-pulse delay-100" />
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#ffffff] rounded-full animate-pulse delay-300" />
                  <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[#ffffff] rounded-full animate-pulse delay-500" />
                </div>
                <div className="w-[50%]">
                  <h2 className="text-3xl font-bold text-white mb-4 transition-transform duration-300">
                    Graphics Design Services
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    360 Australia takes fresh ideas and turn them into unique ones that help your business grow.

                  </p>
                   <Button variant="link" className="group relative items-center justify-center gap-1 !px-10  !py-5 h-auto">
                    <span className="relative ">
                      <span className="text-[20px] font-medium ">learn more</span>
                     
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                  </Button>
                </div>
                {/* <div className="w-[50%] flex justify-center">
                  <img className="w-50 h-55" src="/Untitled-3-01.png" alt="AI Engineering" />
                </div> */}
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card-wrapper mb-[30px] flex justify-center">
            <div className="card group w-[min(2000px,90vw)] h-[300px] relative rounded-3xl overflow-hidden border border-teal-400 bg-gradient-to-br from-black via-black to-black">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="relative z-10 p-8 h-full gap-[40px] flex flex-row justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#10d4c4] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#10d4c4] group-hover:h-1/3 transition-all duration-300 ease-out rounded-full" />
                <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#10d4c4] to-transparent group-hover:w-1/4 transition-all duration-700 ease-out delay-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#10d4c4] rounded-full animate-pulse delay-100" />
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#10d4c4] rounded-full animate-pulse delay-300" />
                  <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[#10d4c4] rounded-full animate-pulse delay-500" />
                </div>
                <div className="w-[50%]">
                  <h2 className="text-3xl font-bold text-white mb-4 transition-transform duration-300">
                    Mobile App Development
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    Tap into growth with an app, we build easy-to-use native and hybrid apps that work smoothly on any device.

                  </p>
                   <Button variant="link" className="group relative items-center justify-center gap-1 !px-10  !py-5 h-auto">
                    <span className="relative ">
                      <span className="text-[20px] font-medium ">learn more</span>
                     
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                  </Button>
                </div>
                {/* <div className="w-[50%] flex justify-center">
                  <img className="w-50 h-55" src="/icon-03.png" alt="AI Engineering" />
                </div> */}
              </div>
            </div>
          </div>
          {/* Card 5 */}

          <div className="card-wrapper mb-[30px] flex justify-center">
            <div className="card group w-[min(2000px,90vw)] h-[300px] relative rounded-3xl overflow-hidden border border-teal-400 bg-gradient-to-br from-teal-600 via-teal-600 to-teal-600">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="relative z-10 p-8 h-full gap-[40px] flex flex-row justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ffffff] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#ffffff] group-hover:h-1/3 transition-all duration-300 ease-out rounded-full" />
                <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#ffffff] to-transparent group-hover:w-1/4 transition-all duration-700 ease-out delay-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#ffffff] rounded-full animate-pulse delay-100" />
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#ffffff] rounded-full animate-pulse delay-300" />
                  <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[#ffffff] rounded-full animate-pulse delay-500" />
                </div>
                <div className="w-[50%]">
                  <h2 className="text-3xl font-bold text-white mb-4 transition-transform duration-300">
                    Digital Marketing
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    360 Australia helps your brand get noticed, connect with more people, and make sure your business stands out where it counts.

                  </p>
                   <Button variant="link" className="group relative items-center justify-center gap-1 !px-10  !py-5 h-auto">
                    <span className="relative ">
                      <span className="text-[20px] font-medium ">learn more</span>
                     
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                  </Button>
                </div>
                {/* <div className="w-[50%] flex justify-center">
                  <img className="w-50 h-55" src="/icon-04.png" alt="AI Engineering" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="card-wrapper mb-[30px] flex justify-center">
            <div className="card group w-[min(2000px,90vw)] h-[300px] relative rounded-3xl overflow-hidden border border-teal-400 bg-gradient-to-br from-black via-black to-black">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="relative z-10 p-8 h-full gap-[40px] flex flex-row justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ffffff] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#ffffff] group-hover:h-1/3 transition-all duration-300 ease-out rounded-full" />
                <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#ffffff] to-transparent group-hover:w-1/4 transition-all duration-700 ease-out delay-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#ffffff] rounded-full animate-pulse delay-100" />
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#ffffff] rounded-full animate-pulse delay-300" />
                  <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[#ffffff] rounded-full animate-pulse delay-500" />
                </div>
                <div className="w-[50%]">
                  <h2 className="text-3xl font-bold text-white mb-4 transition-transform duration-300">
                    Videos & Animation

                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    We’re all about bringing your brand to life with creative videos and animations that speak louder than words.

                  </p>
                   <Button variant="link" className="group relative items-center justify-center gap-1 !px-10  !py-5 h-auto">
                    <span className="relative ">
                      <span className="text-[20px] font-medium ">learn more</span>
                     
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full group-focus-visible:w-full"></span>
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                  </Button>
                </div>
                {/* <div className="w-[50%] flex justify-center">
                  <img className="w-50 h-55" src="/icon-04.png" alt="AI Engineering" />
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
