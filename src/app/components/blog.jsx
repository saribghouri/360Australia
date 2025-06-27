"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: "/td-what-is-graphic-design-illustration-01-500x250.webp",
      title: "GRAPHIC DESIGN",
      description: "What is Graphic Design? Graphic design is a craft where professionals create visual content",
    },
    {
      id: 2,
      image: "/9-Top-Marketing-Trends-of-2024-500x250.avif",
      title: "9 TOP MARKETING TRENDS OF 2024",
      description:
        "Discover the marketing landscape of 2024 with insights on AI integration, short-form video popularity,",
    },
    {
      id: 3,
      image: "/AI_engineering-500x250.avif",
      title: "WHAT IS AI?: A HUMAN GUIDE TO ARTIFICIAL INTELLIGENCE",
      description: "Artificial Intelligence (AI) is the hottest buzzword at the moment, and almost every major",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#10d4c4] rounded-full"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#10d4c4] rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-[#10d4c4] rounded-full"></div>
      </div>

      <div className="max-w-[80%] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              className="w-2 h-2 bg-[#10d4c4] rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            ></motion.div>
            <span className="text-[#10d4c4] text-sm font-medium tracking-wider">BLOG & ARTICLE</span>
          </div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            EXPLORE BLOG &<br />
            <span className="text-gray-500">ARTICLE</span>
          </motion.h2>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 md:p-8 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                  {/* Image */}
                  <motion.div
                    className="flex-shrink-0 w-full lg:w-80 h-48 lg:h-40 relative overflow-hidden rounded-lg bg-gray-800"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <motion.h3
                      className="text-xl md:text-2xl font-bold text-white group-hover:text-[#10d4c4] transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {post.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 text-base md:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    >
                      {post.description}
                    </motion.p>

                    {/* Read more indicator */}
                    <motion.div
                      className="flex items-center gap-2 text-[#10d4c4] opacity-0 group-hover:opacity-100 transition-all duration-300"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm font-medium">Read More</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        →
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#10d4c4] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
