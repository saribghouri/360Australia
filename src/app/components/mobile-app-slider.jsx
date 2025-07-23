"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "antd"
import { gsap } from "gsap" // Import gsap

export default function MobileAppSlider({ title, images, onImageSelect }) {
  // We'll use a "virtual" index for display and a "real" index for the actual image
  const [currentVirtualIndex, setCurrentVirtualIndex] = useState(1) // Start at the first real image (index 1 in displayImages)
  const [isHovered, setIsHovered] = useState(false)
  const sliderRef = useRef(null)
  const isAnimating = useRef(false) // To prevent rapid clicks during animation

  // Create a new array for display that includes the last image at the beginning
  // and the first image at the end for seamless looping.
  const displayImages = [images[images.length - 1], ...images, images[0]]

  const itemWidth = 300 + 16 // Image width + gap-4 (16px)

  const scrollToImage = (index, animate = true) => {
    if (sliderRef.current) {
      const scrollPosition = index * itemWidth
      if (animate) {
        isAnimating.current = true
        gsap.to(sliderRef.current, {
          scrollLeft: scrollPosition,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            isAnimating.current = false
            // Handle seamless loop jump after animation
            if (index === displayImages.length - 1) {
              // If we reached the duplicated first image, jump to the real first image
              sliderRef.current.scrollLeft = itemWidth // Instantly jump to the real first image
              setCurrentVirtualIndex(1)
            } else if (index === 0) {
              // If we reached the duplicated last image, jump to the real last image
              sliderRef.current.scrollLeft = images.length * itemWidth // Instantly jump to the real last image
              setCurrentVirtualIndex(images.length)
            }
          },
        })
      } else {
        sliderRef.current.scrollLeft = scrollPosition
      }
    }
  }

  const handlePrev = () => {
    if (isAnimating.current) return
    setCurrentVirtualIndex((prevIndex) => prevIndex - 1)
  }

  const handleNext = () => {
    if (isAnimating.current) return
    setCurrentVirtualIndex((prevIndex) => prevIndex + 1)
  }

  // Effect to scroll to the current image
  useEffect(() => {
    scrollToImage(currentVirtualIndex)
  }, [currentVirtualIndex])

  // Auto-play effect
  useEffect(() => {
    let intervalId

    const startAutoPlay = () => {
      intervalId = setInterval(() => {
        setCurrentVirtualIndex((prevIndex) => prevIndex + 1)
      }, 3000) // Change image every 3 seconds
    }

    if (!isHovered) {
      startAutoPlay()
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isHovered])

  // Initialize scroll position to the first real image without animation
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = itemWidth
    }
  }, [])

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div ref={sliderRef} className="flex overflow-x-hidden scrollbar-hide space-x-4 p-4">
            {displayImages.map((src, index) => (
              <div
                key={index} // Use index from displayImages for key
                className="flex-shrink-0 w-[300px] h-[400px] relative cursor-pointer group"
                onClick={() =>
                  onImageSelect(
                    src,
                    index === 0 ? images.length - 1 : index === displayImages.length - 1 ? 0 : index - 1,
                  )
                }
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Mobile App ${index + 1}`}
                  width={300}
                  height={400}
                  className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <span className="text-white text-lg font-semibold">View Project</span>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </section>
  )
}
