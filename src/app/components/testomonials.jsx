
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        id: 1,
        name: "Mark T.",
        position: "Marketing Director at ",
        company: "Apex Solutions Group",
        image: "/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
        rating: 5,
        text: "Hiring 360 Australia for our digital growth was the best decision. Their comprehensive approach, deep industry understanding, and transparent communication truly set them apart. Our brand visibility and lead generation have never been stronger, and the results demonstrate their impact.",
    },
    {
        id: 2,
        name: "Emily R",
        position: "Founder of ",
        company: "GreenLeaf Organics",
        image: "/photo-1535713875002-d1d0cf377fde.jfif",
        rating: 5,
        text: "As a growing start-up, we needed a digital agency that could establish our online presence. 360 Australia's team impressed us with their professionalism, innovative strategies, and strong focus on results. They have a deep understanding of the local market, making them a valuable asset to our journey.",
    },
    {
        id: 3,
        name: "Sarah Johnson",
        position: "CEO of TrendSetters Boutique",
        company: "Tech Solutions Inc",
        image: "/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
        rating: 5,
        text: "Working with 360 Australia has completely transformed our digital presence. Their team truly lives up to their reputation as the leading digital agency in Australia. From the initial strategy session to the execution of our campaigns, we've seen a prominent increase in our online engagement and a direct boost in sales. Highly recommend!",
    },
    {
        id: 4,
        name: "David L.",
        position: "Owner of ",
        company: "Coastline Auto Repairs",
        image: "/photo-1535713875002-d1d0cf377fde.jfif",
        rating: 5,
        text: "If you want a digital agency that delivers, look no further than 360 Australia. They exceeded our expectations, transforming our online presence and driving impressive local customer growth. Their team's sharp insights and responsiveness, combined with their ability to simplify complex digital strategies, truly set them apart as Australia's leading digital agency.",
    },
]
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-6 sm:h-6">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
)

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const itemsPerSlide = isMobile ? 1 : 2
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlaying(false)
  }

  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * itemsPerSlide
    return testimonials.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-12 sm:pt-16 md:pt-20 lg:pt-24">
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "15px 15px",
          }}
        />
      </div>

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#10d4c4] rounded-full"></div>
            <span className="text-[#10d4c4] text-xs sm:text-sm font-medium tracking-wider uppercase">Testimonial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-1 sm:mb-2">
            HAPPY CLIENT
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-400">FEEDBACK</h3>
        </motion.div>

        <div className="relative max-w-full mx-auto">
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </button>

          <div className="px-2 sm:px-8 md:px-12 lg:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 z-10 overflow-hidden`}
              >
                {getCurrentTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/50 hover:border-teal-400/30 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center mb-4 sm:mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative mb-3 sm:mb-4"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 sm:border-4 border-[#10d4c4] p-0.5 sm:p-1">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={96}
                            height={96}
                            className="w-full h-full rounded-full object-cover grayscale"
                            sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                          />
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-4 h-4 sm:w-6 sm:h-6 bg-[#10d4c4] rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      </motion.div>

                      <h4 className="text-white text-lg sm:text-xl font-semibold mb-1 text-center">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2 text-center">
                        {testimonial.position}
                      </p>
                    </div>

                    <div className="text-center mb-4 sm:mb-6">
                      <h5 className="text-[#10d4c4] font-semibold text-base sm:text-lg">{testimonial.company}</h5>
                    </div>

                    <p className="text-gray-300 text-center leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base min-h-[80px] sm:min-h-[120px] flex items-center">
                      {testimonial.text}
                    </p>

                    <div className="flex justify-center mb-3 sm:mb-4 gap-0.5 sm:gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#10d4c4] fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                        <GoogleIcon />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 sm:mt-12 gap-1.5 sm:gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#10d4c4] scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

