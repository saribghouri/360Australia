"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function ProjectCTASection() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-700/5 to-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative  container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center flex flex-col gap-[70px] justify-between lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold leading-tight mb-8">
                <span className="text-white ">360 <span className="text-[#10d4c4]">Australia</span>  blends innovation with modern technology to deliver impactful results on every project.
                </span>

              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto lg:mx-0 hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request A Proposal
                <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Right content - Workspace */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Laptop */}
              <div className="relative">
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-xl p-1 shadow-2xl"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Laptop screen */}
                  {/* Simulated code/interface */}
                  <div className="space-y-2">

                    <div className="space-y-2 mt-4">


                      <img src="/ffa3e9b8-8a6c-40a8-b650-d2cc6a2308a7_large.webp" alt="" />

                    </div>
                  </div>
                  {/* Laptop base */}
                </motion.div>

                {/* Keyboard reflection */}
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-8 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Notebook and pencil */}
              <motion.div
                className="absolute -bottom-16 -right-8 lg:-right-16"
                initial={{ opacity: 0, y: 50, rotate: -10 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Notebook */}
                  <div className="w-24 h-32 bg-gradient-to-br from-gray-400 to-gray-200 rounded-r-lg shadow-lg transform rotate-12">
                    <div className="w-full h-full bg-cyan rounded-r-lg p-2">
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-300 rounded w-full"></div>
                        <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                        <div className="h-1 bg-gray-300 rounded w-1/2"></div>
                      </div>
                    </div>
                    {/* Spiral binding */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-400 rounded-l-lg"></div>
                  </div>

                  {/* Pencil */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-1 h-16 bg-gradient-to-t from-teal-500 to-[#10d4c4] rounded-full transform rotate-45"
                    whileHover={{ rotate: 50 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute top-0 w-1 h-2 bg-pink-300 rounded-full"></div>
                    <div className="absolute bottom-0 w-1 h-2 bg-gray-800 rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-10 -left-10 w-2 h-2 bg-teal-500  rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute bottom-20 -left-5 w-1 h-1 bg-white rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
