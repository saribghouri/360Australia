"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const router = useRouter()
  const dropdownRef = useRef(null)

  const handleContactClick = () => {
    router.push("/contactsection")
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications",
      href: "/web-developments",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description: "iOS and Android applications",
      href: "/services/mobile-development",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "User interface and experience design",
      href: "/services/ui-ux-design",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      description: "SEO, social media, and online marketing",
      href: "/services/digital-marketing",
      icon: "📈",
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores and payment systems",
      href: "/services/ecommerce",
      icon: "🛒",
    },
    {
      title: "Cloud Services",
      description: "Cloud hosting and infrastructure",
      href: "/services/cloud-services",
      icon: "☁️",
    },
  ]

  return (
    <nav className="bg-black py-4 px-6 md:px-12 flex w-full mt-[-140px] border border-b-cyan-200 z-50 fixed items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/MLEntp.png" alt="360 Austrailia Ventures Logo" className="h-16 w-34" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="/" className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium">
          HOME
        </Link>
        <Link href="/about-us" className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium">
          ABOUT US
        </Link>

        {/* Services Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            onMouseEnter={() => setIsServicesOpen(true)}
            className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium flex items-center space-x-1"
          >
            <span>SERVICES</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-full left-0 mt-2 w-80 bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-xl shadow-2xl transition-all duration-300 ${
              isServicesOpen
                ? "opacity-100 visible transform translate-y-0"
                : "opacity-0 invisible transform -translate-y-2"
            }`}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="p-4">
              <div className="grid grid-cols-1 gap-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-200 border border-transparent hover:border-cyan-500/20"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                      {service.icon}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-sm group-hover:text-[#10d4c4] transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-200">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <Link
                  href="/services"
                  className="block text-center text-[#10d4c4] hover:text-white font-medium text-sm py-2 px-4 rounded-lg border border-[#10d4c4] hover:bg-[#10d4c4] transition-all duration-200"
                  onClick={() => setIsServicesOpen(false)}
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="/portfolio" className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium">
          PORTFOLIO
        </Link>
        <Link href="/contact" className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium">
          CONTACT
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-teal-500 0 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black md:hidden transition-all duration-300 ease-in-out border-t border-cyan-500/30 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col py-4 space-y-2">
          <Link
            href="/"
            className="text-[#10d4c4] hover:text-white transition-colors duration-300 font-medium px-6 py-2"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/about-us"
            className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium px-6 py-2"
            onClick={() => setIsOpen(false)}
          >
            ABOUT US
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="px-6">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium flex items-center justify-between w-full py-2"
            >
              <span>SERVICES</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="pl-4 mt-2 space-y-2">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-[#44c5f8] transition-colors duration-200 py-2 text-sm"
                    onClick={() => {
                      setIsOpen(false)
                      setIsMobileServicesOpen(false)
                    }}
                  >
                    <span className="text-lg">{service.icon}</span>
                    <span>{service.title}</span>
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="block text-[#44c5f8] hover:text-white font-medium text-sm py-2 mt-2 border-t border-gray-700 pt-3"
                  onClick={() => {
                    setIsOpen(false)
                    setIsMobileServicesOpen(false)
                  }}
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/portfolio"
            className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium px-6 py-2"
            onClick={() => setIsOpen(false)}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium px-6 py-2"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/* Contact Button */}
      <button className="text-white bg-[#16c7b8] px-10 py-2 font-semibold rounded-2xl cursor-pointer hidden md:block" onClick={handleContactClick}>
        Contact Us
      </button>
    </nav>
  )
}

export default Header
