"use client"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Flex, Select } from 'antd';
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import 'antd/dist/reset.css';
// Simplified list of country codes for demonstration
// In a production application, you might fetch this from an API or use a more comprehensive library.
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    borderBottom: '1px solid #1becdb',
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    color: 'white',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'white',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'black',
  }),
};

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

                <PhoneInput
                  country={"au"}
                  value={phone}
                  onChange={setPhone}
                  containerClass="w-full"
                  inputClass="w-full"
                  buttonClass=""
                />

              </div>
            </div>
            {/* Email Input */}
            <div className="relative mb-[35px]">
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
            <div className="relative w-full max-w-lg mt-[10px]">
              <label htmlFor="service" className="sr-only ">
                Select Service
              </label>

              <Flex gap={8}>
                <Select className="custom-select "
                  styles={customStyles}

                  placeholder="Select Service"
                  variant="underlined"
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    borderBottom: '1px solid #1becdb',
                    color: '#fff',
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
                    { value: 'video animation', label: 'video & animation' },
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
                className="w-[70%] py-2 bg-teal-600 cursor-pointer backdrop-blur-sm border border-cyan-500/30 rounded-2xl !text-white font-semibold text-[22px] tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
