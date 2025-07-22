"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

export default function AnimatedSection() {
  const containerRef = useRef(null);
  const dot1Ref = useRef(null); // Not used in the provided JSX, but kept for completeness if SVG dots were intended
  const dot2Ref = useRef(null); // Not used in the provided JSX, but kept for completeness if SVG dots were intended
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === undefined) return;

    gsap.registerPlugin(ScrollTrigger);

    // Create a GSAP context for this component to manage animations and ScrollTriggers
    const ctx = gsap.context(() => {
      const cardsWrappers = gsap.utils.toArray(".card-wrapper");
      const cards = gsap.utils.toArray(".card");

      cardsWrappers.forEach((wrapper, i) => {
        const card = cards[i];
        let scale = 1;
        let rotation = 0;
        if (i !== cards.length - 1) scale = 0.9 + 0.025 * i;
        rotation = -10;
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
            id: `card-animation-${i + 1}`, // Unique ID for each ScrollTrigger
          },
        });
      });

      // The dot animations are not scroll-triggered and run continuously.
      // They are included in the context for unified cleanup.
      const circle1Props = { cx: 35, cy: 50, r: 30 };
      const circle2Props = { cx: 65, cy: 50, r: 30 };

      gsap.to(
        {},
        {
          angle: 360,
          duration: 5,
          repeat: -1,
          ease: "none",
          onUpdate: function () {
            const currentAngle = this.progress() * 2 * Math.PI;
            if (dot1Ref.current) {
              dot1Ref.current.setAttribute(
                "cx",
                circle1Props.cx + circle1Props.r * Math.cos(currentAngle)
              );
              dot1Ref.current.setAttribute(
                "cy",
                circle1Props.cy + circle1Props.r * Math.sin(currentAngle)
              );
            }
          },
        }
      );

      gsap.to(
        {},
        {
          angle: -360,
          duration: 5,
          repeat: -1,
          ease: "none",
          onUpdate: function () {
            const currentAngle = this.progress() * 2 * Math.PI;
            if (dot2Ref.current) {
              dot2Ref.current.setAttribute(
                "cx",
                circle2Props.cx + circle2Props.r * Math.cos(-currentAngle)
              );
              dot2Ref.current.setAttribute(
                "cy",
                circle2Props.cy + circle2Props.r * Math.sin(-currentAngle)
              );
            }
          },
        }
      );

      // Important: Refresh ScrollTrigger after all animations are set up
      // This recalculates the start/end positions of all triggers based on the current DOM layout.
      ScrollTrigger.refresh();

      // Add a resize listener to refresh ScrollTrigger on window resize
      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);
    }, containerRef); // Scope the GSAP context to the containerRef element

    // Cleanup function: revert all animations and ScrollTriggers created in this context
    return () => {
      ctx.revert();
      window.removeEventListener("resize", () => ScrollTrigger.refresh());
    };
  }, [isClient]); // Add isClient as dependency

  // Don't render animations until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="min-h-screen mt-[150px] flex flex-col items-center bg-black">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center mb-4 sm:mb-6"></div>
          <div className="flex flex-row w-full gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-center">
            <div className="transform transition-all duration-1000 w-full text-center ">
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-white lg:text-6xl xl:text-5xl font-bold ">
                OUR
                <br />
                <span className="text-teal-400 lg:text-8xl">SERVICES</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="min-h-screen mt-[150px] flex flex-col items-center bg-black"
    >
      <div className="mb-8 sm:mb-10 md:mb-12">
        <div className="flex items-center mb-4 sm:mb-6"></div>
        <div className="flex flex-row w-full gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-center">
          <div className="transform transition-all duration-1000 w-full text-center ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white lg:text-6xl xl:text-5xl font-bold ">
              OUR
              <br />
              <span className="text-teal-400 lg:text-8xl">SERVICES</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="wrapper relative w-full max-w-screen-xl">
        <div className="cards w-full mx-auto">
          {/* Card 1: Added content for the first card, as it was an empty div */}
          <div className="card-wrapper mb-[30px] flex justify-center"></div>
          {/* Card 2 */}
          <div className="card-wrapper mb-[30px] flex justify-center">
            <div className="card group w-[min(2000px,90vw)] h-[300px] cursor-pointer relative rounded-3xl overflow-hidden border border-teal-400 bg-gradient-to-br from-black via-black to-black">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="relative z-10 p-8 h-full gap-[40px] flex flex-col lg:flex-row justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#10d4c4] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#10d4c4] group-hover:h-1/3 transition-all duration-300 ease-out rounded-full" />
                <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#10d4c4] to-transparent group-hover:w-1/4 transition-all duration-700 ease-out delay-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#10d4c4] rounded-full animate-pulse delay-100" />
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#10d4c4] rounded-full animate-pulse delay-300" />
                  <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[#10d4c4] rounded-full animate-pulse delay-500" />
                </div>
                <div className="w-full lg:w-[50%]">
                  <h2 className="text-3xl font-bold uppercase text-white mb-4 transition-transform duration-300">
                    Web Design and Developement
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    Building a website is not just coding, but it’s a creative
                    process to boost your digital presence.
                  </p>
                  <button className="flex items-center justify-between mt-[50px] cursor-pointer action-bg px-6 py-1 rounded-full bg-gradient-to-b from-white to-[#dfe9f3] shadow-inner border border-[#d3d3d3]">
                    <span className="text-gray-800 font-medium cursor-pointer tracking-wide bg-transparent text-xl">
                      LEARN MORE
                    </span>
                    <span className="ml-6 w-9 h-9 mr-[-8px] rounded-full action bg-gradient-to-br from-[#0ef5d6] to-[#21abb0] flex items-center justify-center shadow-md">
                      <Check className="w-6 h-6 text-white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper mb-[30px] flex justify-center">
            <div className="card group w-[min(2000px,90vw)] h-[300px] cursor-pointer relative rounded-3xl overflow-hidden border border-teal-400 bg-gradient-to-br from-teal-600 via-teal-600 to-teal-600">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="relative z-10 p-8 h-full gap-[40px] flex flex-col lg:flex-row justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ffffff] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#ffffff] group-hover:h-1/3 transition-all duration-300 ease-out rounded-full" />
                <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#ffffff] to-transparent group-hover:w-1/4 transition-all duration-700 ease-out delay-200" />
                <div className="w-full lg:w-[50%] ">
                  <h2 className="text-3xl font-bold uppercase text-white mb-4 transition-transform duration-300">
                    Graphics Design Services
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    360 Australia takes fresh ideas and turn them into unique
                    ones that help your business grow.
                  </p>

                  <button className="flex items-center  justify-between mt-[50px] cursor-pointer action-bg px-5 py-1 rounded-full bg-gradient-to-b from-white to-[#dfe9f3] shadow-inner border border-[#d3d3d3]">
                    <span className="text-gray-800 font-medium cursor-pointer tracking-wide bg-transparent text-xl">
                      LEARN MORE
                    </span>
                    <span className="ml-6 w-9 h-9 mr-[-8px] rounded-full action bg-gradient-to-br from-[#0ef5d6] to-[#21abb0] flex items-center justify-center shadow-md">
                      <Check className="w-6 h-6 text-white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card-wrapper mb-[30px] flex justify-center">
            <div className="card group w-[min(2000px,90vw)] h-[300px] cursor-pointer relative rounded-3xl overflow-hidden border border-teal-400 bg-gradient-to-br from-black via-black to-black">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="relative z-10 p-8 h-full gap-[40px] flex flex-col lg:flex-row justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#10d4c4] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#10d4c4] group-hover:h-1/3 transition-all duration-300 ease-out rounded-full" />
                <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#10d4c4] to-transparent group-hover:w-1/4 transition-all duration-700 ease-out delay-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#10d4c4] rounded-full animate-pulse delay-100" />
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#10d4c4] rounded-full animate-pulse delay-300" />
                  <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[#10d4c4] rounded-full animate-pulse delay-500" />
                </div>

                <div className="w-full lg:w-[50%] cursor-pointer">
                  <h2 className="text-3xl font-bold uppercase text-white mb-4 transition-transform duration-300">
                    Mobile App Development
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    Tap into growth with an app, we build easy-to-use hybrid
                    apps that work smoothly on any device.
                  </p>
                  <button className="flex items-center justify-between mt-[50px] !cursor-pointer action-bg px-5 py-1 rounded-full bg-gradient-to-b from-white to-[#dfe9f3] shadow-inner border border-[#d3d3d3]">
                    <span className="text-gray-800 font-medium cursor-pointer tracking-wide bg-transparent text-xl">
                      LEARN MORE
                    </span>
                    <span className="ml-6 mr-[-8px] w-9 h-9 rounded-full action bg-gradient-to-br from-[#0ef5d6] to-[#21abb0] flex items-center justify-center shadow-md">
                      <Check className="w-6 h-6 text-white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card-wrapper mb-[30px] flex justify-center">
            <div className="card group w-[min(2000px,90vw)] h-[300px]  cursor-pointer relative rounded-3xl overflow-hidden border border-teal-400 bg-gradient-to-br from-teal-600 via-teal-600 to-teal-600">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="relative z-10 p-8 h-full gap-[40px] flex flex-col lg:flex-row justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ffffff] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#ffffff] group-hover:h-1/3 transition-all duration-300 ease-out rounded-full" />
                <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#ffffff] to-transparent group-hover:w-1/4 transition-all duration-700 ease-out delay-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#ffffff] rounded-full animate-pulse delay-100" />
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#ffffff] rounded-full animate-pulse delay-300" />
                  <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[#ffffff] rounded-full animate-pulse delay-500" />
                </div>
                <div className="w-full lg:w-[50%] cursor-pointer">
                  <h2 className="text-3xl font-bold uppercase text-white mb-4 transition-transform duration-300">
                    Digital Marketing
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    360 Australia helps your brand get noticed, connect with
                    more people, and make sure your business stands out where it
                    counts.
                  </p>
                  <button className="flex items-center justify-between mt-[50px] cursor-pointer action-bg px-5 py-1 rounded-full bg-gradient-to-b from-white to-[#dfe9f3] shadow-inner border border-[#d3d3d3]">
                    <span className="text-gray-800 font-medium cursor-pointer tracking-wide bg-transparent text-xl">
                      LEARN MORE
                    </span>
                    <span className="ml-6 mr-[-8px] w-9 h-9 rounded-full action bg-gradient-to-br from-[#0ef5d6] to-[#21abb0] flex items-center justify-center shadow-md">
                      <Check className="w-6 h-6 text-white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card-wrapper mb-[30px] flex justify-center">
            <div className="card group w-[min(2000px,90vw)] h-[300px] cursor-pointer relative rounded-3xl overflow-hidden border border-teal-400 bg-gradient-to-br from-black via-black to-black">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
              <div className="relative z-10 p-8 h-full gap-[40px] flex flex-col lg:flex-row justify-between">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#10d4c4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#10d4c4] to-transparent w-0 group-hover:w-full transition-all duration-500 ease-out" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#10d4c4] group-hover:h-1/3 transition-all duration-300 ease-out rounded-full" />
                <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-l from-[#10d4c4] to-transparent group-hover:w-1/4 transition-all duration-700 ease-out delay-200" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#10d4c4] rounded-full animate-pulse delay-100" />
                  <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-[#10d4c4] rounded-full animate-pulse delay-300" />
                  <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-[#10d4c4] rounded-full animate-pulse delay-500" />
                </div>
                <div className="w-full lg:w-[50%] cursor-pointer">
                  <h2 className="text-3xl font-bold uppercase text-white mb-4 transition-transform duration-300">
                    Videos & Animation
                  </h2>
                  <p className="text-white/90 text-xl leading-relaxed mb-6">
                    We’re all about bringing your brand to life with creative
                    videos and animations that speak louder than words.
                  </p>
                  <button className="flex items-center justify-between mt-[50px] cursor-pointer action-bg px-5 py-1 rounded-full bg-gradient-to-b from-white to-[#dfe9f3] shadow-inner border border-[#d3d3d3]">
                    <span className="text-gray-800 font-medium cursor-pointer tracking-wide bg-transparent text-xl">
                      LEARN MORE
                    </span>
                    <span className="ml-6 w-9 h-9 mr-[-8px] rounded-full action bg-gradient-to-br from-[#0ef5d6] to-[#21abb0] flex items-center justify-center shadow-md">
                      <Check className="w-6 h-6 text-white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
