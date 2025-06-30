"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Facebook, Linkedin } from "lucide-react"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  }

  return (
    <section className="min-h-screen bg-black text-white py-8 md:py-16 px-4 relative overflow-hidden">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-yellow-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-[90%] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
      
            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-3 h-3 bg-[#10d4c4] rounded-full"
                ></motion.div>
                <span className="text-[#10d4c4] font-medium tracking-wider text-sm md:text-base">GET IN TOUCH</span>
              </div>

              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                {"LET'S"} <span className="text-white">CONNECT</span> AND
                <br />
                <span className="text-white">CREATE</span> <span className="text-gray-400">SOMETHING</span>
                <br />
                <span className="text-gray-400">AMAZING!</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
              >
                Reach out for collaborations, inquiries, or just to say hello.
              </motion.p>
            </motion.div>

          
            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start justify-center lg:justify-start gap-4"
              >
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#10d4c4] mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm md:text-base lg:text-lg text-center lg:text-left">
                    Plot no C-18-F, burj-ul-minal Floor 304
                    <br />
                    munawar chowrangi no.4, johor,
                    <br />
                    Karachi-75500, Pakistan.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start justify-center lg:justify-start gap-4"
              >
                <div className="mt-1">
                  <Mail className="w-5 h-5 text-[#10d4c4]" />
                </div>
                <div className="text-gray-300 text-sm md:text-base lg:text-lg">
                  <div>360Australia@gmail.com</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-start justify-center lg:justify-start gap-4"
              >
                <div className="mt-1">
                  <Phone className="w-5 h-5 text-[#10d4c4]" />
                </div>
                <div className="text-gray-300 text-sm md:text-base lg:text-lg">+92 323 3372009</div>
              </motion.div>
            </motion.div>

         
            <motion.div variants={itemVariants} className="space-y-4 text-center lg:text-left">
              <h3 className="text-lg md:text-xl font-semibold">FOLLOW ME</h3>
              <div className="flex gap-4 justify-center lg:justify-start">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#10d4c4] transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#10d4c4] transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

         
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-800 order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <label className="block text-sm font-medium mb-2">
                    Full Name <span className="text-[#10d4c4]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#10d4c4] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 text-sm md:text-base"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <label className="block text-sm font-medium mb-2">
                    Email Address <span className="text-[#10d4c4]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="youremail@domain.com"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#10d4c4] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 text-sm md:text-base"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number <span className="text-[#10d4c4]">*</span>
                  </label>
                  <div className="flex">
                    <select className="px-2 md:px-3 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white border-r-0 focus:ring-2 focus:ring-[#10d4c4] focus:border-transparent text-sm md:text-base">
                      <option>🇵🇰 +92</option>
                      <option>🇺🇸 +1</option>
                      <option>🇬🇧 +44</option>
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="204-123-4567"
                      className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-r-lg focus:ring-2 focus:ring-[#10d4c4] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 text-sm md:text-base"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <label className="block text-sm font-medium mb-2">
                    Subject <span className="text-[#10d4c4]">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What services are you looking for?"
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#10d4c4] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 text-sm md:text-base"
                    required
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                <label className="block text-sm font-medium mb-2">
                  Message <span className="text-[#10d4c4]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write message"
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#10d4c4] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 resize-none text-sm md:text-base"
                  required
                ></textarea>
              </motion.div>

           
              <div className="flex items-center justify-center p-3 md:p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-gray-600 rounded"></div>
                  <span className="text-xs md:text-sm text-gray-400">{"I'm not a robot"}</span>
                  <div className="ml-auto">
                    <div className="text-xs text-gray-500">
                      <div>reCAPTCHA</div>
                      <div className="flex gap-1 text-xs">
                        <span>Privacy</span>
                        <span>-</span>
                        <span>Terms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 5px 10px #939494" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#0fa397] hover:bg-[#0fa397] text-white font-semibold py-3 md:py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Send Message
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

    
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      >
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/923233372009"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  )
}
