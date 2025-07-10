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
          

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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
        

                {/* Enhanced CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-4 "
                >
                  <motion.button
                    className="group  relative border border-teal-500  bg-white text-black px-10 py-5 rounded-[20px] font-bold text-lg flex items-center gap-3 mx-auto lg:mx-0 overflow-hidden shadow-2xl "
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
                      className=" rounded-2xl p-2 shadow-2xl border border-white/10"
                      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src="/macbook-pro-2K-wallpaper.jpg"
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
