"use client"
import { useState } from "react"



export default function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [service, setService] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // State to track if a field is "active" (focused or has value)
  const [isNameActive, setIsNameActive] = useState(false)
  const [isPhoneActive, setIsPhoneActive] = useState(false)
  const [isEmailActive, setIsEmailActive] = useState(false)
  const [isServiceActive, setIsServiceActive] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default form submission behavior [^1]
    setIsLoading(true)

    // Simulate form submission process
    setTimeout(() => {
      setIsLoading(false)
      console.log("Form submitted with:", { name, phone, email, service })
      // Clear the form and reset active states
      setName("")
      setPhone("")
      setEmail("")
      setService("")
      setIsNameActive(false)
      setIsPhoneActive(false)
      setIsEmailActive(false)
      setIsServiceActive(false)
    }, 2000)
  }

  // Helper function to determine if a field should show its label in the "active" state
  const shouldShowLabel = (value, isActive) => value.length > 0 || isActive

  return (
    <div className="flex items-center justify-center p-4 relative overflow-hidden">
      {/* Contact Form Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-black/10 border border-white/60 rounded-2xl p-8 shadow-lg">
          {/* Form Title */}
          <h1 className="text-3xl text-white font-bold text-center mb-8 tracking-wider">NEED A SERVICE</h1>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              <label
                htmlFor="name"
                className={`
                  absolute left-2 text-white transition-all duration-300 z-20
                  ${
                    shouldShowLabel(name, isNameActive)
                      ? "-top-3 text-xs opacity-100 bg-black/10 px-1 rounded-md"
                      : "top-1/2 -translate-y-1/2 text-base opacity-50 pointer-events-none"
                  }
                `}
              >
                Enter Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setIsNameActive(true)}
                onBlur={() => setIsNameActive(false)}
                placeholder=""
                className="w-full px-2 py-4 form-border text-white focus:outline-none transition-all duration-300"
                required
              />
            </div>
            {/* Phone Input */}
            <div className="relative">
              <label
                htmlFor="phone"
                className={`
                  absolute left-2 text-white transition-all duration-300 z-20
                  ${
                    shouldShowLabel(phone, isPhoneActive)
                      ? "-top-3 text-xs opacity-100 bg-black/10 px-1 rounded-md"
                      : "top-1/2 -translate-y-1/2 text-base opacity-50 pointer-events-none"
                  }
                `}
              >
                Enter Your Phone Number
              </label>
              <input
                id="phone"
                type="tel" // Use tel for phone numbers
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onFocus={() => setIsPhoneActive(true)}
                onBlur={() => setIsPhoneActive(false)}
                placeholder=""
                className="w-full px-2 py-4 form-border text-white focus:outline-none transition-all duration-300"
                required
              />
            </div>
            {/* Email Input */}
            <div className="relative">
              <label
                htmlFor="email"
                className={`
                  absolute left-2 text-white transition-all duration-300 z-20
                  ${
                    shouldShowLabel(email, isEmailActive)
                      ? "-top-3 text-xs opacity-100 bg-black/10 px-1 rounded-md"
                      : "top-1/2 -translate-y-1/2 text-base opacity-50 pointer-events-none"
                  }
                `}
              >
                Enter Your Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsEmailActive(true)}
                onBlur={() => setIsEmailActive(false)}
                placeholder=""
                className="w-full px-2 py-4 form-border text-white focus:outline-none transition-all duration-300"
                required
              />
            </div>
            {/* Service Dropdown */}
            <div className="relative">
              <label
                htmlFor="service"
                className={`
                  absolute left-2 text-white transition-all duration-300 z-20
                  ${
                    shouldShowLabel(service, isServiceActive)
                      ? "-top-3 text-xs opacity-100 bg-black/10 px-1 rounded-md"
                      : "top-1/2 -translate-y-1/2 text-base opacity-50 pointer-events-none"
                  }
                `}
              >
                Select a Service
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                onFocus={() => setIsServiceActive(true)}
                onBlur={() => setIsServiceActive(false)}
                className="w-full px-2 py-4 form-border text-white focus:outline-none round transition-all duration-300 appearance-none"
                required
              >
                <option value="" disabled hidden className="bg-black rounded-2xl text-gray-400">
                  Select a Service
                </option>
                <option value="web-development" className="bg-black rounded-2xl text-white">
                  Web Development
                </option>
                <option value="ui-ux-design" className="bg-black rounded-2xl text-white">
                  UI/UX Design
                </option>
                <option value="software-application" className="bg-black rounded-2xl text-white">
                  Software Application
                </option>
                <option value="consulting" className="bg-black  rounded-2xl text-white">
                  Consulting
                </option>
                <option value="other" className="bg-black  rounded-2xl text-white">
                  Other
                </option>
              </select>
              {/* Custom dropdown arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="w-[70%] py-2 bg-teal-600 cursor-pointer backdrop-blur-sm border border-cyan-500/30 rounded-2xl text-white font-semibold text-[22px] tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>SUBMITTING...</span>
                  </div>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
