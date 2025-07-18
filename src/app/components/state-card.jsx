"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Flex, Select } from 'antd';
// Simplified list of country codes for demonstration
// In a production application, you might fetch this from an API or use a more comprehensive library.
const countryCodes = [
  { code: "US", dial_code: "+1", name: "United States" },
  { code: "CA", dial_code: "+1", name: "Canada" },
  { code: "GB", dial_code: "+44", name: "United Kingdom" },
  { code: "AU", dial_code: "+61", name: "Australia" },
  { code: "DE", dial_code: "+49", name: "Germany" },
  { code: "FR", dial_code: "+33", name: "France" },
  { code: "IN", dial_code: "+91", name: "India" },
  { code: "JP", dial_code: "+81", name: "Japan" },
  { code: "BR", dial_code: "+55", name: "Brazil" },
  { code: "MX", dial_code: "+52", name: "Mexico" },
  { code: "ZA", dial_code: "+27", name: "South Africa" },
  { code: "CN", dial_code: "+86", name: "China" },
  { code: "ES", dial_code: "+34", name: "Spain" },
  { code: "IT", dial_code: "+39", name: "Italy" },
  { code: "NL", dial_code: "+31", name: "Netherlands" },
  { code: "SE", dial_code: "+46", name: "Sweden" },
  { code: "CH", dial_code: "+41", name: "Switzerland" },
  { code: "AE", dial_code: "+971", name: "United Arab Emirates" },
  { code: "SG", dial_code: "+65", name: "Singapore" },
  { code: "NZ", dial_code: "+64", name: "New Zealand" },
]

export default function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [countryCode, setCountryCode] = useState("+1") // New state for country code, initialized to +1
  const [email, setEmail] = useState("")
  const [service, setService] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // State to track if a field is "active" (focused or has value)
  const [isNameActive, setIsNameActive] = useState(false)
  // isPhoneActive now covers both the country code select and the phone input
  const [isPhoneActive, setIsPhoneActive] = useState(false)
  const [isEmailActive, setIsEmailActive] = useState(false)
  const [isServiceActive, setIsServiceActive] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default form submission behavior [^1]
    setIsLoading(true)

    // Simulate form submission process
    setTimeout(() => {
      setIsLoading(false)
      // Combine country code and phone number for submission
      console.log("Form submitted with:", { name, fullPhoneNumber: countryCode + phone, email, service })
      // Clear the form and reset active states
      setName("")
      setPhone("")
      setCountryCode("+1") // Reset country code to default
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
                  ${shouldShowLabel(name, isNameActive)
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
            {/* Phone Input with Country Code */}
            <div className="relative">

              <div className="flex items-center form-border">
                {" "}
                {/* Wrapper for combined input styling */}
                <select
                  id="country-code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  onFocus={() => setIsPhoneActive(true)} // Set active when select is focused
                  onBlur={() => setIsPhoneActive(false)} // Set inactive when select loses focus
                  className="bg-transparent text-white py-4 pl-2 pr-1  focus:outline-none rounded-l-md"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.dial_code} className="bg-black text-white">
                      {country.dial_code} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  id="phone"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onFocus={() => setIsPhoneActive(true)}
                  onBlur={() => setIsPhoneActive(false)}
                  placeholder=""
                  className="flex-1 px-2 py-4 bg-transparent text-white focus:outline-none rounded-r-md"
                  required
                />
              </div>
            </div>
            {/* Email Input */}
            <div className="relative">
              <label
                htmlFor="email"
                className={`
                  absolute left-2 text-white transition-all duration-300 z-20
                  ${shouldShowLabel(email, isEmailActive)
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
        <div className="relative w-full max-w-lg">
      <label htmlFor="service" className="sr-only">
        Select Service
      </label>
      {/* <select
        id="service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        onFocus={() => setIsServiceActive(true)}
        onBlur={() => setIsServiceActive(false)}
        className="w-full px-2 py-2 pr-8
                   bg-transparent text-white form-border
                   focus:outline-none  focus:border-transparent
                   appearance-none cursor-pointer"
        required
      >
   
        <div>
          
        </div>
        <option value="Web Development" className="text-black bg-white">
          Web Development
        </option>
        <option value="Mobile App Development" className="text-black bg-white">
          Mobile App Development
        </option>
        <option value="UI/UX Design" className="text-black bg-white">
          UI/UX Design
        </option>
        <option value="Digital Marketing" className="text-black bg-white">
          Digital Marketing
        </option>
        <option value="Cloud Solutions" className="text-black bg-white">
          Cloud Solutions
        </option>
        <option value="Data Analytics" className="text-black bg-white">
          Data Analytics
        </option>
      </select> */}
       <Flex gap={8}>
      <Select
        placeholder="Underlined"
        variant="underlined"
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          borderBottom: '1px solid #1becdb',
          color: 'white',
        }}
        dropdownStyle={{
          backgroundColor: 'black',
        }}
        popupMatchSelectWidth={false}
        dropdownRender={(menu) => (
          <div style={{ backgroundColor: 'black' }}>{menu}</div>
        )}
        options={[
          { value: 'website developement', label: 'website developement' },
          { value: 'mobile app developement', label: 'mobile app developement' },
          { value: 'digital marketing', label: 'digital marketing' },
          { value: 'graphic design', label: 'graphic design' },
          { value: 'video animation', label: 'video animation' },
        ]}
        dropdownClassName="custom-select-dropdown bg-transparent"
      />
    </Flex>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <ChevronDown className="h-4 w-4" />
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
