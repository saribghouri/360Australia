"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef(null)
  const animationFrameId = useRef(null)
  const router = useRouter()
  const [currentDotIndex, setCurrentDotIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const portfolioItems = [
    { id: 1, category: "WEB APPLICATION", image: "/ecommerce (2).PNG", title: "WEB APPLICATION", hasOverlay: true },
    { id: 2, category: "MOBILE APPLICATION", image: "/app2.jpg", title: "MOBILE APPLICATION", hasOverlay: true },
    { id: 3, category: "LOGO DESIGN", image: "/logo 5.jpg", title: "LOGO DESIGN", hasOverlay: true },
    { id: 4, category: "SHOPIFY", image: "/shopify 10.jpg", title: "SHOPIFY", hasOverlay: true },
    { id: 5, category: "ECOMMERCE", image: "/ecommerce.PNG", title: "ECOMMERCE", hasOverlay: true },
    {
      id: 6,
      category: "SOCIAL MEDIA MARKETING",
      image: "/hand-holding-smartphone-social-media-concept.jpg",
      title: "Social Media",
      hasOverlay: true,
    },
  ]

  // Duplicate items to create a seamless looping effect.
  const displayItems = [...portfolioItems, ...portfolioItems]
  const scrollSpeed = 0.5 // Adjust this value for slower/faster scrolling

  const autoScroll = useCallback(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const originalContentWidth = carousel.scrollWidth / 2
      carousel.scrollLeft += scrollSpeed
      if (carousel.scrollLeft >= originalContentWidth) {
        carousel.scrollLeft = 0
      }
    }
    animationFrameId.current = requestAnimationFrame(autoScroll)
  }, [scrollSpeed])

  const handleScroll = useCallback(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const originalContentWidth = carousel.scrollWidth / 2
      const normalizedScrollLeft = carousel.scrollLeft % originalContentWidth

      // Estimate average item width including gap for dot calculation
      // This assumes items are roughly equally spaced.
      const itemFullWidthAverage = originalContentWidth / portfolioItems.length
      const newIndex = Math.floor(normalizedScrollLeft / itemFullWidthAverage)

      if (newIndex !== currentDotIndex) {
        setCurrentDotIndex(newIndex)
      }
    }
  }, [currentDotIndex, portfolioItems.length])

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(autoScroll)
    const carouselElement = carouselRef.current
    if (carouselElement) {
      const handleMouseEnter = () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current)
          animationFrameId.current = null
        }
      }
      const handleMouseLeave = () => {
        if (!animationFrameId.current) {
          animationFrameId.current = requestAnimationFrame(autoScroll)
        }
      }
      carouselElement.addEventListener("mouseenter", handleMouseEnter)
      carouselElement.addEventListener("mouseleave", handleMouseLeave)
      // Add scroll event listener
      carouselElement.addEventListener("scroll", handleScroll)
      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current)
        }
        carouselElement.removeEventListener("mouseenter", handleMouseEnter)
        carouselElement.removeEventListener("mouseleave", handleMouseLeave)
        // Remove scroll event listener
        carouselElement.removeEventListener("scroll", handleScroll)
      }
    }
  }, [autoScroll, handleScroll])

  const scrollAmount = 300 // Pixels to scroll per click

  const scrollLeft = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const originalContentWidth = carousel.scrollWidth / 2
      carousel.scrollLeft -= scrollAmount
      // Wrap around if scrolling past the beginning of the first set
      if (carousel.scrollLeft < 0) {
        carousel.scrollLeft = originalContentWidth + carousel.scrollLeft
      }
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const originalContentWidth = carousel.scrollWidth / 2
      carousel.scrollLeft += scrollAmount
      // Wrap around if scrolling past the end of the first set
      if (carousel.scrollLeft >= originalContentWidth) {
        carousel.scrollLeft = carousel.scrollLeft - originalContentWidth
      }
    }
  }

  const handleViewMore = (item) => {
    router.push(`/portfolio?category=${encodeURIComponent(item.category)}&id=${item.id}`)
  }

  return (
    <section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-[90%] mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center mb-4 sm:mb-6"></div>
          <div className="flex flex-row w-full gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-center">
            <div
              className={`transform transition-all duration-1000 w-full text-center ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold ">
                DISCOVER OUR
                <br />
                <span className="text-teal-400 lg:text-8xl">PORTFOLIO</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto py-[30px] scrollbar-hide px-8"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                onClick={() => handleViewMore(item)}
                className={`group relative overflow-hidden rounded-lg bg-gray-900 flex-shrink-0 w-74 h-58 sm:w-82 sm:h-76 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                } animate-fade-in-up`}
                style={{
                  animationDelay: `${(index % portfolioItems.length) * 200}ms`,
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
          {/* Left Arrow Button */}
          <button
            variant="ghost"
            size="icon"
            className="absolute -left-20 top-1/2 -translate-y-1/2 bg-teal-500 cursor-pointer text-center  justify-center flex items-center hover:bg-teal-500 text-white rounded-full w-10 h-10 z-10"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          {/* Right Arrow Button */}
          <button
            variant="ghost"
            size="icon"
            className="absolute -right-20 top-1/2 -translate-y-1/2 cursor-pointer bg-teal-500 text-center justify-center flex items-center hover:bg-teal-500 text-white rounded-full w-10 h-10 z-10"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {portfolioItems.map((_, index) => (
            <span
            
              key={index}
              className={`block w-3 h-3 rounded-full transition-colors duration-300  ${
                index === currentDotIndex ? "bg-teal-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
        <div className="mt-12 sm:mt-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>
    </section>
  )
}
