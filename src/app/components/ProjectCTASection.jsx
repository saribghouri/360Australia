"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Award, Users } from "lucide-react"

export default function ProjectCTASection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-700/5 to-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        {/* Main CTA Container with Enhanced Border */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Animated Border Frame */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-500/20 via-white/10 to-teal-500/20 p-[2px]">
            <div className="w-full h-full bg-black/80 backdrop-blur-sm rounded-3xl" />
          </div>

          {/* Glowing Border Animation */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(45deg, transparent, rgba(16, 212, 196, 0.3), transparent, rgba(255, 255, 255, 0.1), transparent)",
              backgroundSize: "400% 400%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 p-8 lg:p-12">
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-white/10 backdrop-blur-sm border border-teal-500/30 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-medium text-white">Premium Solutions</span>
                <Award className="w-4 h-4 text-teal-400" />
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    <span className="text-white">360 </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                      Australia
                    </span>
                    <span className="text-white">
                      {" "}
                      blends innovation with modern technology to deliver impactful results on every project.
                    </span>
                  </h2>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex justify-center lg:justify-start gap-8 mb-8"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">500+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">98%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </motion.div>

                {/* Enhanced CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <motion.button
                    className="group relative bg-gradient-to-r from-teal-500 to-teal-400 text-black px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 mx-auto lg:mx-0 overflow-hidden shadow-2xl shadow-teal-500/25"
                    whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(16, 212, 196, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    <Users className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Request A Proposal</span>
                    <motion.div className="group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                      <ArrowRight size={20} />
                    </motion.div>
                  </motion.button>

                  <p className="text-sm text-gray-400 text-center lg:text-left">
                    Free consultation • No commitment required
                  </p>
                </motion.div>
              </div>

              {/* Right Content - Enhanced */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 100, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Enhanced Image Container */}
                  <div className="relative">
                    <motion.div
                      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-2 shadow-2xl border border-white/10"
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src="/ffa3e9b8-8a6c-40a8-b650-d2cc6a2308a7_large.webp"
                          alt="360 Australia Project Showcase"
                          className="w-full h-auto"
                        />
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </motion.div>

                    {/* Enhanced Shadow */}
                    <motion.div
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full h-12 bg-gradient-to-b from-teal-500/20 to-transparent rounded-full blur-xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <motion.div
                    className="absolute -bottom-16 -right-8 lg:-right-16"
                    initial={{ opacity: 0, y: 50, rotate: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <div className="w-28 h-36 bg-gradient-to-br from-gray-300 to-gray-100 rounded-r-xl shadow-xl transform rotate-12 border border-white/20">
                        <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-500 rounded-r-xl p-3">
                          <div className="space-y-2">
                            <div className="h-2 bg-white/80 rounded w-full"></div>
                            <div className="h-2 bg-white/60 rounded w-3/4"></div>
                            <div className="h-2 bg-white/40 rounded w-1/2"></div>
                          </div>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gray-400 rounded-l-xl"></div>
                      </div>

                      <motion.div
                        className="absolute -top-3 -right-3 w-2 h-20 bg-gradient-to-t from-teal-500 to-teal-300 rounded-full transform rotate-45 shadow-lg"
                        whileHover={{ rotate: 50, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute top-0 w-2 h-3 bg-pink-300 rounded-full"></div>
                        <div className="absolute bottom-0 w-2 h-3 bg-gray-800 rounded-full"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Enhanced Floating Elements */}
                <motion.div
                  className="absolute top-10 -left-10 w-3 h-3 bg-teal-400 rounded-full shadow-lg shadow-teal-400/50"
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-20 -left-5 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.9, 0.3],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 -right-8 w-1 h-1 bg-teal-300 rounded-full"
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </section>
  )
}
