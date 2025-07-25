import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { RequestProposalModal } from "../components/proposal-modal";

const ProjectCTASection = React.forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div ref={ref} className="flex w-full justify-center py-24 lg:py-[150px]">
      <section className="relative max-w-[84%] bg-black overflow-hidden flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Existing blur effects */}
          {/* Sharper Glowing Lines */}
          <motion.div
            className="absolute top-10 left-1/4 w-64 h-0.5 bg-teal-400 rounded-full shadow-lg shadow-blue-400/50 hidden lg:block"
            animate={{ x: [-50, 50, -50], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-48 h-0.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 rotate-45 hidden lg:block"
            animate={{ y: [-30, 30, -30], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/4 right-1/4 w-48 h-0.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 rotate-45 hidden lg:block"
            animate={{ y: [-30, 30, -30], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-0.5 bg-yellow-400 rounded-full shadow-lg shadow-purple-400/50 -rotate-12 hidden lg:block"
            animate={{ x: [0, 100, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-80 h-0.5 bg-yellow-400 rounded-full shadow-lg shadow-purple-400/50 -rotate-12 hidden lg:block"
            animate={{ x: [0, 100, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-56 h-0.5 bg-teal-500 rounded-full shadow-lg shadow-blue-500/50 -rotate-45 hidden lg:block"
            animate={{ x: [0, -60, 0], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 6.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          {/* Additional lines for more density */}
          <motion.div
            className="absolute top-1/4 left-10 w-32 h-0.5 bg-yellow-300 rounded-full shadow-lg shadow-purple-300/50 rotate-30 hidden lg:block"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 5.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          <motion.div
            className="absolute top-1/4 left-10 w-32 h-0.5 bg-yellow-300 rounded-full shadow-lg shadow-purple-300/50 rotate-30 hidden lg:block"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{
              duration: 5.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-24 h-0.5 bg-cyan-300 rounded-full shadow-lg shadow-cyan-300/50 -rotate-60 hidden lg:block"
            animate={{ x: [0, 30, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{
              duration: 4.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2.2,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-20 w-72 h-0.5 bg-blue-300 rounded-full shadow-lg shadow-blue-300/50 rotate-15 hidden lg:block"
            animate={{ x: [0, -40, 0], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 5.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
        </div>
        <div className="relative rounded-2xl inner-shadow border border-teal-500 z-10 max-w-[100%] mx-auto px-0 sm:px-2">
          {/* Main CTA Container with Enhanced Border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-[20px] overflow-hidden"
          >
            {/* Animated Border Frame */}
            <div className="absolute inset-0 p-[2px] rounded-[20px]">
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
            <div className="relative z-10 px-12 rounded-[20px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-12 items-center">
                {/* Left Content - Heading and Button */}
                <div className="text-center lg:text-left py-[40px]">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl !font-bold mb-4 sm:mb-6">
                      <span className="text-white">
                        {" "}
                        Let's talk about the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                          {" "}
                          services{" "}
                        </span>{" "}
                        you need.
                      </span>
                    </h2>
                  </motion.div>
                  {/* Enhanced CTA Button */}
                  <motion.div
                 className="flex justify-center sm:justify-start"
                  >
                    <motion.button
                      className="group relative border qr-code cursor-pointer border-teal-500 bg-teal-500 text-white px-4 py-2 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-[20px] font-bold text-base sm:text-lg lg:text-xl flex items-center gap-2 sm:gap-3 mx-auto lg:mx-0 overflow-hidden shadow-2xl"
                 
               whileTap={{ scale: 0.95 }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      {/* Button Background Animation */}
                      <motion.div
                        className="absolute inset-0 "
                    
                      />
                      <span className="relative z-10 text-white text-lg sm:text-[24px] uppercase whitespace-nowrap">
                        Request A Proposal
                      </span>
                      <motion.div className="group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                        <ArrowRight className="h-6 w-6 text-white" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>
                {/* Right Content - Laptop Image */}
                {/* Added 'hidden lg:block' to hide on mobile and show on large screens */}
                <div className="relative hidden lg:block flex justify-center lg:justify-end">
                  <motion.div
                    initial={{ opacity: 0, x: 100, rotateY: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-xl"
                  >
                    {/* Laptop Image Container with Glowing Border */}
                    <img
                      src="/OUTSIDE_GLOW_with_border_copy-removebg-preview.png"
                      alt="360 Australia Project Showcase"
                      className="w-full h-auto rounded-xl"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Enhanced Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </section>
      <RequestProposalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
});

ProjectCTASection.displayName = "ProjectCTASection";

export default ProjectCTASection;
