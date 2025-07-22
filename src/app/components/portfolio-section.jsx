"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Debounce utility function to limit how often a function can run
const debounce = (func, delay) => {
  let timeout
  return function (...args) {
    
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef(null)
  const animationFrameId = useRef(null)
  const router = useRouter()
  const [currentDotIndex, setCurrentDotIndex] = useState(0)

  // Ref to hold the latest currentDotIndex value.
  // This allows the debounced scroll handler to access the most recent state
  // without being a dependency for its useCallback, thus keeping the handler stable.
  const currentDotIndexRef = useRef(currentDotIndex)
  useEffect(() => {
    currentDotIndexRef.current = currentDotIndex
  }, [currentDotIndex])

  // Set isVisible to true on component mount for animation
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const portfolioItems = [
    { id: 1, image: "/1 organic food copy.jpg", hasOverlay: true, title: "Organic Food" },
    { id: 2, image: "/2 Lewis Nathenlel copy.jpg", hasOverlay: true, title: "Lewis Nathenlel" },
    { id: 3, image: "/3 tea copy.jpg", hasOverlay: true, title: "Tea" },
    { id: 4, image: "/5 fenty beauty.jpg", hasOverlay: true, title: "Fenty Beauty" },
    { id: 5, image: "/4 blaster sound copy.jpg", hasOverlay: true, title: "Blaster Sound" },
  ]

  // Duplicate items to create a seamless looping effect for the carousel.
  const displayItems = [...portfolioItems, ...portfolioItems]

  const scrollSpeed = 0.5 // Adjust this value for slower/faster auto-scrolling

  // Callback for auto-scrolling the carousel
  const autoScroll = useCallback(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const originalContentWidth = carousel.scrollWidth / 2 // Half the total width (original items + duplicated items)
      carousel.scrollLeft += scrollSpeed
      // Reset scroll position to the beginning of the original content when it reaches the end of the first set
      if (carousel.scrollLeft >= originalContentWidth) {
        carousel.scrollLeft = 0
      }
    }
    animationFrameId.current = requestAnimationFrame(autoScroll)
  }, [scrollSpeed]) // `scrollSpeed` is a constant, so `autoScroll` remains stable.

  // Debounced scroll handler for updating the dot index based on scroll position
  const debouncedHandleScroll = useCallback(
    debounce(() => {
      if (carouselRef.current) {
        const carousel = carouselRef.current
        const originalContentWidth = carousel.scrollWidth / 2
        // Normalize scrollLeft to be within the bounds of the original content
        const normalizedScrollLeft = carousel.scrollLeft % originalContentWidth
        // Estimate average item width to determine which dot should be active
        const itemFullWidthAverage = originalContentWidth / portfolioItems.length
        const newIndex = Math.floor(normalizedScrollLeft / itemFullWidthAverage)

        // Only update state if the index actually changed, using the ref for comparison
        if (newIndex !== currentDotIndexRef.current) {
          setCurrentDotIndex(newIndex)
        }
      }
    }, 100), // Debounce by 100ms to prevent excessive state updates
    [portfolioItems.length], // Dependencies for debouncedHandleScroll: only stable ones
  )

  // Effect to manage auto-scrolling and event listeners
  useEffect(() => {
    // Start auto-scrolling animation
    animationFrameId.current = requestAnimationFrame(autoScroll)

    const carouselElement = carouselRef.current
    if (carouselElement) {
      // Pause auto-scroll on mouse enter
      const handleMouseEnter = () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current)
          animationFrameId.current = null
        }
      }
      // Resume auto-scroll on mouse leave
      const handleMouseLeave = () => {
        if (!animationFrameId.current) {
          animationFrameId.current = requestAnimationFrame(autoScroll)
        }
      }

      // Add event listeners
      carouselElement.addEventListener("mouseenter", handleMouseEnter)
      carouselElement.addEventListener("mouseleave", handleMouseLeave)
      carouselElement.addEventListener("scroll", debouncedHandleScroll) // Use the stable debounced handler

      // Cleanup function: cancel animation frame and remove event listeners
      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current)
        }
        carouselElement.removeEventListener("mouseenter", handleMouseEnter)
        carouselElement.removeEventListener("mouseleave", handleMouseLeave)
        carouselElement.removeEventListener("scroll", debouncedHandleScroll)
      }
    }
  }, [autoScroll, debouncedHandleScroll]) // Dependencies: `autoScroll` and `debouncedHandleScroll` are stable callbacks

  const scrollAmount = 300 // Pixels to scroll per click for manual navigation

  // Function to scroll carousel left
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

  // Function to scroll carousel right
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

  // Handle navigation to portfolio detail page
  const handleViewMore = (item) => {
    router.push(`/portfolio?category=${encodeURIComponent(item.category || "all")}&id=${item.id}`)
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
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              msOverflowStyle: "none", // Hide scrollbar for IE/Edge
            }}
          >
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`} // Unique key for duplicated items
                onClick={() => handleViewMore(item)}
                className={`group relative overflow-hidden rounded-lg bg-gray-900 flex-shrink-0 w-74 h-58 sm:w-82 sm:h-76 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                } animate-fade-in-up`}
                style={{
                  animationDelay: `${(index % portfolioItems.length) * 200}ms`, // Staggered animation delay
                }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 356px, 388px" // Image optimization sizes
                />
                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#10d4c4] transition-colors duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
          {/* Left Arrow Button */}
          <button
            // `variant="ghost"` and `size="icon"` are likely props from a UI library
            // and won't directly apply styles to a native button without a component wrapper.
            className="absolute -left-20 top-1/2 -translate-y-1/2 hidden lg:flex bg-teal-500 cursor-pointer text-center justify-center items-center hover:bg-teal-500 text-white rounded-full w-10 h-10 z-10"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          {/* Right Arrow Button */}
          <button
            className="absolute -right-20 top-1/2 -translate-y-1/2 cursor-pointer bg-teal-500 text-center justify-center hidden lg:flex items-center hover:bg-teal-500 text-white rounded-full w-10 h-10 z-10"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        {/* Dot indicators for carousel position */}
        <div className="flex justify-center mt-8 gap-2">
          {portfolioItems.map((_, index) => (
            <span
              key={index}
              className={`block w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentDotIndex ? "bg-teal-400" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* View More button */}
        <div className=" w-full flex justify-center mt-[40px]">
          <button
            onClick={() => router.push("/portfolio")}
            className="bg-teal-500 text-black px-[28px] py-[10px] !text-[24px] font-bold cursor-pointer rounded-[7px]"
          >
            View More
          </button>
        </div>
        {/* Decorative divider */}
        <div className="mt-12 sm:mt-16 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>
    </section>
  )
}
