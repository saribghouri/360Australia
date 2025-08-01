"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import "antd/dist/reset.css"
import { Breadcrumb, Select } from "antd"

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    borderBottom: "1px solid #1becdb",
    border: "none",
    borderRadius: 0,
    boxShadow: "none",
    color: "white",
    selector: {
      backgroundColor: "#1f2937",
      border: "none",
      color: "#ffffff",
      borderRadius: "0.5rem",
      padding: "0.75rem",
      height: "40px",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "black",
  }),
}

export default function ContactUs() {
  const { Option } = Select
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("idle")

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (submitStatus !== "idle") {
      setSubmitStatus("idle")
    }
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const fullFormData = {
        ...formData,
        phoneNumber: phone,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullFormData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
          service: "",
        })
        setPhone("")
      } else {
        throw new Error(result.message || "Submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
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
    <section className="min-h-screen bg-black text-white py-8 md:py-16 px-4 relative overflow-hidden myContactUsSection">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-yellow-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-[100%] lg:w-[90%] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mt-[110px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-1"
          >
            <div className="flex w-full sm:w-[80%] md:w-[60%] lg:w-[56%] items-start justify-items-start ml-[-100px] lg:ml-[-120px]  mt-8 sm:mt-12 md:mt-16 lg:mt-[70px] justify-center  px-4">
              <Breadcrumb
                items={[
                  {
                    title: (
                      <a
                        className="!text-white mb-6 sm:mb-8 md:mb-10 lg:mb-[50px] text-lg sm:text-xl md:text-2xl lg:text-[25px]"
                        href="/"
                      >
                        Home
                      </a>
                    ),
                  },

                  {
                    title: (
                      <a
                        className="!text-white mb-6 sm:mb-8 md:mb-10 lg:mb-[50px] text-lg sm:text-xl md:text-2xl lg:text-[25px]"
                        href=""
                      >
                    Contact Us
                      </a>
                    ),
                  },

                ]}
              />
            </div>
            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3"></div>
              <motion.h1
                variants={itemVariants}
                className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                {"LET'S"} <span className="text-white">CONNECT</span> AND
                <br />
                <span className="text-white">CREATE</span> <span className="text-teal-400">SOMETHING</span>
                <br />
                <span className="text-teal-400">AMAZING!</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-white text-base md:text-xl leading-relaxed max-w-md mx-auto lg:mx-0"
              >
                Reach out for collaborations, inquiries, or just to say hello.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border !w-[100%]   mt-[60px] border-gray-800 order-2 lg:order-2"
          >
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
              >
                ✅ Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
              >
                ❌ Failed to send message. Please try again.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6  ">
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
                    className="w-full px-3 md:px-4 py-2 md:py-3 focus:border-transparent border-b border-gray-700 bg-transparent outline-none transition-all duration-300 text-white placeholder-gray-500 text-sm md:text-base myFormInputFontSize"
                    required
                    disabled={isSubmitting}
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
                    className="w-full px-3 md:px-4 py-2 md:py-3 border-b border-gray-700 bg-transparent outline-none transition-all duration-300 text-white placeholder-gray-500 text-sm md:text-base myFormInputFontSize"
                    required
                    disabled={isSubmitting}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <label className="block text-sm font-medium mb-3">
                    Phone Number <span className="text-[#10d4c4]">*</span>
                  </label>
                  <PhoneInput
                    className="border-bottom-contact text-black"
                    country={"au"}
                    value={phone}
                    onChange={setPhone}
                    containerClass="w-full myFormInputFontSize"
                    inputClass="w-full myFormInputFontSize"
                    buttonClass=""
                    disabled={isSubmitting}
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <Select
                      id="service"
                      value={formData.service || undefined}
                      onChange={handleSelectChange}
                      placeholder={
                        <p className="text-gray-500 text-[17px] tracking-[-0.4px] !mb-[-1px]">Select A Service</p>
                      }
                      className="w-full !placeholder:text-[18px] border-bottom-contact custom-selects"
                      size="large"
                      required
                      disabled={isSubmitting}
                      styles={{
                        ...customStyles,
                        dropdown: {
                          backgroundColor: "#ffff",
                          border: "none",
                          borderRadius: "0.5rem",
                        },
                      }}
                      optionRender={(option) => (
                        <div className="text-black hover:bg-teal-700 hover:text-white px-3 py-2 rounded-md">
                          {option.label}
                        </div>
                      )}
                    >
                      <Option value="Website Development">Website Development</Option>
                      <Option value="Mobile App Development">Mobile App Development</Option>
                      <Option value="Graphic Design">Graphic Design</Option>
                      <Option value="Digital Marketing">Digital Marketing</Option>
                      <Option value="Video & Animation">Video & Animation</Option>
                    </Select>
                  </div>
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
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#10d4c4] focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 resize-none text-sm md:text-base myFormInputFontSize"
                  required
                  disabled={isSubmitting}
                ></textarea>              </motion.div>

              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.05, boxShadow: isSubmitting ? "none" : "0 5px 10px #939494" }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 md:py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base ${isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-[#0fa397] hover:bg-[#0fa397]"
                  } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      {" →"}
                    </motion.span>
                  </>
                )}
              </motion.button>            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
