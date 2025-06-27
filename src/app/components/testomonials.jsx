"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Waseem Saqgaar",
        position: "Head of Commercials",
        company: "Attock Cement",
        image: "/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg",
        rating: 5,
        text: "360 Austrailia is different from the rest of contenders in the market. Why different? The guy who leads is not only educated but sensible also to cater the needs of customer.",
    },
    {
        id: 2,
        name: "Ghulam Hussain",
        position: "VP Finance",
        company: "Reliance Insurance",
        image: "/photo-1535713875002-d1d0cf377fde.jfif",
        rating: 5,
        text: "The team at 360 Austrailia has been exceptional throughout our collaboration, delivering reliability and expertise. They truly understand our vision and execute it with professionalism. Their commitment to excellence consistently exceeds our expectations.",
    },
    {
        id: 3,
        name: "Sarah Johnson",
        position: "Marketing Director",
        company: "Tech Solutions Inc",
        image: "/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
        rating: 5,
        text: "Working with this team has been transformative for our business. Their innovative approach and attention to detail have helped us achieve remarkable results that we never thought possible.",
    },
]

const GoogleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2))
        }, 5000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2))
        setIsAutoPlaying(false)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2))
        setIsAutoPlaying(false)
    }

    const getCurrentTestimonials = () => {
        const startIndex = currentIndex * 2
        return testimonials.slice(startIndex, startIndex + 2)
    }

    return (
        <section className="relative  min-h-screen bg-black overflow-hidden pt-20 md:pt-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: "20px 20px",
                    }}
                />
            </div>

            <div className="w-[90%]  mx-auto px-4 py-8 lg:py-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex relative items-center justify-center gap-2 mb-4 ">
                        <div className="w-2 h-2 bg-[#10d4c4] rounded-full"></div>
                        <span className="text-[#10d4c4]  text-sm font-medium tracking-wider uppercase">Testimonial</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">HAPPY CLIENT</h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400">FEEDBACK</h3>
                </motion.div>

                {/* Testimonials Container */}
                <div className="relative max-w-[100%] mx-auto">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2  w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"          >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2  w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"          >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Testimonials Grid */}
                    <div className="px-16">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="grid md:grid-cols-2 py-[20px] px-[20px] gap-8 z-10 overflow-hidden"
                            >
                                {getCurrentTestimonials().map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        whileHover={{ y: -10, scale: 1.02 }}
                                        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-teal-400/30 transition-all duration-300"
                                    >
                                        {/* Profile Section */}
                                        <div className="flex flex-col items-center mb-6">
                                            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className="relative mb-4">
                                                <div className="w-24 h-24 rounded-full border-4 border-[#10d4c4] p-1">
                                                    <img
                                                        src={testimonial.image || "/placeholder.svg"}
                                                        alt={testimonial.name}
                                                        className="w-full h-full rounded-full object-cover grayscale"
                                                    />
                                                </div>
                                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#10d4c4] rounded-full flex items-center justify-center">
                                                    <span className="text-white text-xs font-bold">✓</span>
                                                </div>
                                            </motion.div>

                                            <h4 className="text-white text-xl font-semibold mb-1">{testimonial.name}</h4>
                                            <p className="text-gray-400 text-sm mb-2">{testimonial.position}</p>
                                        </div>

                                        {/* Company */}
                                        <div className="text-center mb-6">
                                            <h5 className="text-[#10d4c4] font-semibold text-lg">{testimonial.company}</h5>
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="text-gray-300 text-center leading-relaxed mb-6 min-h-[120px] flex items-center">
                                            {testimonial.text}
                                        </p>

                                        {/* Rating */}
                                        <div className="flex justify-center mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3, delay: i * 0.1 }}
                                                >
                                                    <Star className="w-5 h-5 text-[#10d4c4] fill-current" />
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Google Logo */}
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

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-12 gap-2">
                        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCurrentIndex(index)
                                    setIsAutoPlaying(false)
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-[#10d4c4]" : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
