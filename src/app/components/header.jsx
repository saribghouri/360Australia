"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [expandedMobileService, setExpandedMobileService] = useState(null)
  const router = useRouter()
  const dropdownRef = useRef(null)

  const handleContactClick = () => {
    router.push("/contactsection")
  }

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
      title: "Website Development",
      href: "/services/website-development",
      subcategories: [
        { title: "Custom Website Design", href: "/services/custom-website-design" },
        { title: "WordPress Development", href: "/services/wordpress-development" },
        { title: "eCommerce (Shopify/WooCommerce)", href: "/services/ecommerce" },
        { title: "Web App Development", href: "/services/web-app-development" },
        { title: "Landing Pages", href: "/services/landing-pages" },
        { title: "Maintenance & Speed Optimisation", href: "/services/maintenance-optimization" },
      ],
    },
    {
      title: "Mobile App Development",
      href: "/services/mobile-app-development",
      subcategories: [
        { title: "iOS & Android Development", href: "/services/ios-android-development" },
        { title: "Flutter & React Native Apps", href: "/services/flutter-react-native" },
        { title: "UI/UX Design for Apps", href: "/services/app-ui-ux-design" },
        { title: "App Store Deployment", href: "/services/app-store-deployment" },
        { title: "API & Backend Integration", href: "/services/api-backend-integration" },
      ],
    },
    {
      title: "Digital Marketing",
      href: "/services/digital-marketing",
      subcategories: [
        { title: "SEO (Local & National)", href: "/services/seo" },
        { title: "Google Ads (PPC)", href: "/services/google-ads" },
        { title: "Social Media Marketing", href: "/services/social-media-marketing" },
        { title: "Email & Content Marketing", href: "/services/email-content-marketing" },
        { title: "Lead Generation Campaigns", href: "/services/lead-generation" },
      ],
    },
    {
      title: "Graphic Design",
      href: "/services/graphic-design",
      subcategories: [
        { title: "Logo & Branding", href: "/services/logo-branding" },
        { title: "Brochures & Stationery", href: "/services/brochures-stationery" },
        { title: "Social Media Creatives", href: "/services/social-media-creatives" },
        { title: "Infographics", href: "/services/infographics" },
        { title: "Presentation Design", href: "/services/presentation-design" },
      ],
    },
    {
      title: "Video & Animation",
      href: "/services/video-animation",
      subcategories: [
        { title: "Explainer Videos", href: "/services/explainer-videos" },
        { title: "2D/3D Animation", href: "/services/2d-3d-animation" },
        { title: "Logo Animation", href: "/services/logo-animation" },
        { title: "Product & Promo Videos", href: "/services/product-promo-videos" },
        { title: "Video Editing", href: "/services/video-editing" },
      ],
    },
  ]

  const toggleMobileService = (index) => {
    setExpandedMobileService(expandedMobileService === index ? null : index)
  }

  return (
    <>
      <nav className="bg-black py-4 px-6 md:px-12 flex w-full mt-[-110px] border-bottom z-50 fixed items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/BxxHdh.png" alt="360 Australia Ventures Logo" className="h-19 w-24 lg:h-[76px] lg:w-[144px]" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-white hover:text-[#10d4c4] font-family transition-colors duration-300 font-medium">
            HOME
          </Link>
          <Link href="/about-us" className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium">
            ABOUT US
          </Link>

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
          </div>

          <Link
            href="/portfolio"
            className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium"
          >
            PORTFOLIO
          </Link>
          <Link href="/pricing" className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium">
            PRICING
          </Link>
          <Link href="/faqs" className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium">
            FAQS
          </Link>
          <Link href="/blog" className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium">
            BLOG
          </Link>
        
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-teal-500 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>

        <div
          className={`absolute top-full left-0 w-full bg-black md:hidden transition-all duration-300 ease-in-out border-t border-teal-500/30 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col py-4 space-y-2 max-h-96 overflow-y-auto">
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
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <div key={index}>
                      <button
                        onClick={() => toggleMobileService(index)}
                        className="flex items-center justify-between w-full text-gray-300 hover:text-[#10d4c4] transition-colors duration-200 py-2 text-sm font-medium"
                      >
                        <span>{service.title}</span>
                        <ChevronRight
                          className={`w-3 h-3 transition-transform duration-200 ${
                            expandedMobileService === index ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedMobileService === index ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-4 space-y-1">
                          {service.subcategories.map((sub, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sub.href}
                              className="block text-gray-400 hover:text-[#10d4c4] transition-colors duration-200 py-1 text-xs"
                              onClick={() => {
                                setIsOpen(false)
                                setIsMobileServicesOpen(false)
                                setExpandedMobileService(null)
                              }}
                            >
                              • {sub.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
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
              href="/pricing"
              className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium px-6 py-2"
              onClick={() => setIsOpen(false)}
            >
              PRICING
            </Link>
            <Link
              href="/faqs"
              className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium px-6 py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQS
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium px-6 py-2"
              onClick={() => setIsOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/contactsection"
              className="text-white hover:text-[#10d4c4] transition-colors duration-300 font-medium px-6 py-2"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>

        <button
          className="text-white bg-[#0ea89b] px-10 py-2 font-bold text-[19px] rounded-[10px] cursor-pointer hidden md:block"
          onClick={handleContactClick}
        >
          Contact Us
        </button>
      </nav>

      {/* Mega Menu - Full Width */}
      <div
        className={`fixed left-0 w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-teal-500/30 shadow-2xl transition-all duration-300 ease-in-out z-40 ${
          isServicesOpen
            ? "opacity-100 visible transform translate-y-0"
            : "opacity-0 invisible transform -translate-y-4"
        }`}
        onMouseEnter={() => setIsServicesOpen(true)}
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        <div className="container mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Link
                  href={service.href}
                  className="block mb-4 pb-2 border-b border-teal-500/20"
                  onClick={() => setIsServicesOpen(false)}
                >
                  <h3 className="text-white font-bold text-lg group-hover:text-[#10d4c4] transition-colors duration-200 flex items-center">
                    {service.title}
                    <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </h3>
                </Link>

                <div className="space-y-2">
                  {service.subcategories.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.href}
                      className="block text-gray-300 hover:text-[#10d4c4] text-sm py-1 transition-colors duration-200 hover:translate-x-1 transform"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      • {sub.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
        
        </div>
      </div>
    </>
  )
}

export default Header
