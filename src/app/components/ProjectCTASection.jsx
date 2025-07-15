"use client"
import { motion } from "framer-motion"
import { ArrowRight, Users } from "lucide-react"

export default function ProjectCTASection() {
  return (
    <div className="flex w-full justify-center py-[150px]">

      <section className="relative max-w-[84%]    bg-black overflow-hidden  flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Existing blur effects */}
          <div className="absolute top-1/4 left-1/4 w-full h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-700/5 to-white/5 rounded-full blur-3xl" />

          {/* Sharper Glowing Lines */}
          <motion.div
            className="absolute top-10 left-1/4 w-64 h-0.5 bg-teal-400 rounded-full shadow-lg shadow-blue-400/50  "
            animate={{ x: [-50, 50, -50], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-48 h-0.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50   rotate-45"
            animate={{ y: [-30, 30, -30], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />

          <motion.div
            className="absolute top-1/4 right-1/4 w-48 h-0.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50   rotate-45"
            animate={{ y: [-30, 30, -30], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-0.5 bg-yellow-400 rounded-full shadow-lg shadow-purple-400/50   -rotate-12"
            animate={{ x: [0, 100, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-0.5 bg-yellow-400 rounded-full shadow-lg shadow-purple-400/50   -rotate-12"
            animate={{ x: [0, 100, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          />

          <motion.div
            className="absolute bottom-10 right-10 w-56 h-0.5 bg-teal-500 rounded-full shadow-lg shadow-blue-500/50   -rotate-45"
            animate={{ x: [0, -60, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
          />
          {/* Additional lines for more density */}
          <motion.div
            className="absolute top-1/4 left-10 w-32 h-0.5 bg-yellow-300 rounded-full shadow-lg shadow-purple-300/50  rotate-30"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
          />

          <motion.div
            className="absolute top-1/4 left-10 w-32 h-0.5 bg-yellow-300 rounded-full shadow-lg shadow-purple-300/50  rotate-30"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-24 h-0.5 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/50  -rotate-60"
            animate={{ x: [0, 30, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2.2 }}
          />
          <motion.div
            className="absolute top-1/2 right-20 w-72 h-0.5 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50  rotate-15"
            animate={{ x: [0, -40, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
          />
        </div>

        <div className="relative  rounded-2xl  border border-teal-500  z-10 max-w-9xl mx-auto   px-4">
          {/* Main CTA Container with Enhanced Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-[20px] overflow-hidden"
          >
            {/* Animated Border Frame */}
            <div className="absolute inset-0  p-[2px] rounded-[20px]">
              {/* This div acts as the outer border */}
            </div>
            {/* Glowing Border Animation */}
            <motion.div
              className="absolute inset-0 rounded-[20px]"

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
            <div className="relative z-10 p-8 lg:p-12 rounded-[20px]">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content - Heading and Button */}
                <div className="text-center lg:text-left space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">


                      <span className="text-white">
                        {" "}
                        Let's talk about the  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                          services
                        </span>  you need.                    </span>
                    </h2>
                  </motion.div>
                  {/* Enhanced CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-4 "
                  >
                    <motion.button
                      className="group relative border qr-code border-teal-500 bg-teal-500 text-white px-10 py-5 rounded-[20px] font-bold text-xl flex items-center gap-3 mx-auto lg:mx-0 overflow-hidden shadow-2xl "
                      whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(16, 212, 196, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Button Background Animation */}
                      <motion.div
                        className="absolute inset-0  bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10 ">Request A Proposal</span>
                      <motion.div className="group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>
                {/* Right Content - Laptop Image */}
                <div className="relative flex justify-center lg:justify-end">
                  <motion.div
                    initial={{ opacity: 0, x: 100, rotateY: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-xl"
                  >
                    {/* Laptop Image Container with Glowing Border */}
                    <div className="relative p-2 rounded-2xl bg-transparent">
                      <div className="absolute inset-0  pointer-events-none" />
                      <img
                        src="/Imagenes-3012-2025-02-18T132143.068-1200x1200-removebg-preview.png"
                        alt="360 Australia Project Showcase"
                        className="w-full h-auto rounded-xl"
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0  to-transparent rounded-xl" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Enhanced Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </section>
    </div>
  )
}
