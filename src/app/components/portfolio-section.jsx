"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("SEE ALL")
  const [isVisible, setIsVisible] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [carouselElement, setCarouselElement] = useState(null)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    checkScrollButtons()
  }, [activeFilter])

  const checkScrollButtons = () => {
    if (carouselElement) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselElement
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollLeft = () => {
    if (carouselElement) {
      carouselElement.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselElement) {
      carouselElement.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const handleViewMore = (item) => {
    router.push(`/portfolio?category=${encodeURIComponent(item.category)}&id=${item.id}`)
  }

  const filterItems = [
    "SEE ALL",
    "WEB APPLICATION",
    "MOBILE APPLICATION",
    "LOGO DESIGN",
    "SHOPIFY",
    "ECOMMERCE",
    "SOCIAL MEDIA MARKETING",
  ]

  const portfolioItems = [
    {
      id: 1,
      category: "WEB APPLICATION",
      image: "/ecommerce (2).PNG",
      title: "WEB APPLICATION",
      hasOverlay: true,
    },
    {
      id: 2,
      category: "MOBILE APPLICATION",
      image: "/app2.jpg",
      title: "MOBILE APPLICATION",
      hasOverlay: true,
    },
    {
      id: 3,
      category: "LOGO DESIGN",
      image: "/logo 5.jpg",
      title: "LOGO DESIGN",
      hasOverlay: true,
    },
    {
      id: 4,
      category: "SHOPIFY",
      image: "/shopify 10.jpg",
      title: "SHOPIFY",
      hasOverlay: true,
    },
    {
      id: 5,
      category: "ECOMMERCE",
      image: "/ecommerce.PNG",
      title: "ECOMMERCE",
      hasOverlay: true,
    },
    {
      id: 6,
      category: "SOCIAL MEDIA MARKETING",
      image: "/hand-holding-smartphone-social-media-concept.jpg",
      title: "Social Media",
      hasOverlay: true,
    },
  ]

  const filteredItems =
    activeFilter === "SEE ALL" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-[90%] mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-[#10d4c4] rounded-full mr-3"></div>
            <span className="text-sm sm:text-base lg:text-lg font-medium tracking-wider text-gray-300">
              CORE PROJECTS
            </span>
          </div>
          <div className="flex flex-row w-full gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-center">
            <div
              className={`transform transition-all duration-1000 w-full text-center ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ">
                DISCOVER OUR
                <br />
                <span className="text-teal-400">PORTFOLIO</span>
              </h2>
            </div>
          
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#10d4c4] hover:bg-[#0bc4b4] text-black p-2 rounded-full transition-all duration-300 ${
              !canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#10d4c4] hover:bg-[#0bc4b4] text-black p-2 rounded-full transition-all duration-300 ${
              !canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel */}
          <div
            ref={(el) => setCarouselElement(el)}
            onScroll={checkScrollButtons}
            className="flex gap-4 sm:gap-6 overflow-x-auto py-[30px] scrollbar-hide scroll-smooth px-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleViewMore(item)}
                className={`group relative overflow-hidden rounded-lg bg-gray-900 flex-shrink-0 w-74 h-58 sm:w-82 sm:h-76 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{
                  animationDelay: `${(index + 1) * 200}ms`,
                }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 356px, 388px"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-300">{item.category}</p>
                    </div>
                  </div>
                </div>
              
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#10d4c4] transition-colors duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
