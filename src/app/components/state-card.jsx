"use client"
import { useState } from "react"


export default function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [service, setService] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission process
    setTimeout(() => {
      setIsLoading(false)
      console.log("Form submitted with:", { name, phone, email, service })
      // You might want to clear the form or show a success message here
      setName("")
      setPhone("")
      setEmail("")
      setService("")
    }, 2000)
  }

  return (
    <div className="flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image */}

      {/* Contact Form Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className=" bg-black/10 border border-white/60 rounded-2xl p-8 shadow-amber-50">
          {/* Form Title */}
          <h1 className="text- text-3xl text-white font-bold text-center font-mo mb-8 tracking-wider">NEED A SERVICE</h1>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div className="relative">
              {/* <label className="text-white"> Name</label> */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                className="w-full px-2 py-4   form-border  text-white placeholder-gray-300 focus:outline-none   transition-all duration-300"
                required
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <input
                type="tel" // Use tel for phone numbers
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Your Phone Number"
                className="w-full px-2 py-4   form-border  text-white placeholder-gray-300 focus:outline-none  transition-all duration-300"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full px-2 py-4   form-border  text-white placeholder-gray-300 focus:outline-none   transition-all duration-300"
                required
              />
            </div>

            {/* Service Dropdown */}
            <div className="relative">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-2 py-4 form-border    text-white placeholder-gray-300 focus:outline-none   transition-all duration-300 appearance-none"
                required
              >
                <option value="" disabled hidden className="bg-gray-800 text-gray-400">
                  Select a Service
                </option>
                <option value="web-development" className="bg-gray-800 text-white">
                  Web Development
                </option>
                <option value="ui-ux-design" className="bg-gray-800 text-white">
                  UI/UX Design
                </option>
                <option value="software-application" className="bg-gray-800 text-white">
                  Software Application
                </option>
                <option value="consulting" className="bg-gray-800 text-white">
                  Consulting
                </option>
                <option value="other" className="bg-gray-800 text-white">
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
              className="w-[70%] py-2 bg-teal-600 cursor-pointer  backdrop-blur-sm border border-cyan-500/30 rounded-2xl text-white font-semibold text-[22px] tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2  disabled:opacity-50 disabled:cursor-not-allowed"
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
