"use client"

import { useEffect } from "react"
import Image from "next/image"

export default function Designer() {
  useEffect(() => {
   
    const animateElements = () => {
      const elements = document.querySelectorAll(".animate-fade-in")
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add("opacity-100")
          element.classList.remove("opacity-0", "translate-y-4")
        }, 300 * index)
      })
    }


    const animateCards = () => {
      const cards = document.querySelectorAll(".tool-card")
      cards.forEach((card, index) => {
        setTimeout(
          () => {
            card.classList.add("opacity-100", "translate-y-0")
            card.classList.remove("opacity-0", "translate-y-8")
          },
          200 * (index + 3),
        )
      })
    }

    
    setTimeout(() => {
      animateElements()
      animateCards()
    }, 300)
  }, [])

  return (
    <main className="min-h-screen">
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
         
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/img01.jpg"
                alt="Person looking at a computer monitor"
                fill
                className="object-contain"
              />
            </div>

          
            <div className="space-y-8">
              <div className="flex items-center space-x-2 animate-fade-in opacity-0 translate-y-4 transition-all duration-700">
                <div className="h-2 w-2 rounded-full bg-[#10d4c4]"></div>
                <p className="uppercase tracking-wider text-sm">Toolbox of Expertise</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 animate-fade-in opacity-0 translate-y-4 transition-all duration-700">
                  EMPOWERING <span className="font-bold text-white">CREATIVITY</span>
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 animate-fade-in opacity-0 translate-y-4 transition-all duration-700">
                  WITH ADVANCED
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in opacity-0 translate-y-4 transition-all duration-700">
                  TECHNOLOGY
                </h2>
              </div>

              <p className="text-gray-300 max-w-lg animate-fade-in opacity-0 translate-y-4 transition-all duration-700">
                Driven by innovation, 360 Australia utilizes modern tools and softwares to achieve exceptional outcomes for every project
              </p>

      
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {[
                  { name: "Photoshop", icon: "/Adobe-Photoshop-CC-Rounded.png" },
                  { name: "Illustrator", icon: "/Adobe-Illustrator-CC-Old.png" },
                  { name: "InDesign", icon: "/Adobe-Indesign-CC.png" },
                  { name: "Canva", icon: "/canva.png" },
                  { name: "WordPress", icon: "/wordpress-logo-image-png-701751694773680sodsik7zlf-removebg-preview.png" },
                  { name: "Viddyoze", icon: "/1_6XgfDCVn81AYX68Xvd2I-g@2x.png" },
                ].map((tool, index) => (
                  <div
                    key={tool.name}
                    className="tool-card bg-zinc-900 p-6 rounded-lg flex flex-col items-center justify-center space-y-3 opacity-0 translate-y-8 transition-all duration-700 ease-out hover:bg-zinc-800 cursor-pointer"
                  >
                    <div className="relative h-12 w-12">
                      <Image src={tool.icon || "/placeholder.svg"} alt={tool.name} fill className="object-contain" />
                    </div>
                    <p className="text-center">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
