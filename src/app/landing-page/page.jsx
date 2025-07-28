"use client"
import { useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ArrowRightLeft, ChevronLeft, ChevronRight, DollarSign, Gauge, Monitor, Settings, shopping, Smartphone, UserCog } from "lucide-react"
import { Button, Input } from "antd"

export default function ShopifySection() {
  const carouselRef = useRef(null)
  const animationFrameId = useRef(null)

  // Define your slider items
  const sliderItems = [
    {
      id: 1,
      image: "/1 organic food copy.jpg",
      alt: "Two men in traditional Indian attire website screenshot",
    },
    {
      id: 2,
      image: "/baab.jpg",
      alt: "Website screenshot of a gift box company 'Packed with Purpose'",
    },
    {
      id: 3,
      image: "/3 tea copy.jpg",
      alt: "Website screenshot of a wine company 'E.J. McDougall' with people in a vineyard",
    },
    {
      id: 4,
      image: "/5 fenty beauty.jpg",
      alt: "Website screenshot of a health product company 'PROLIVE' with tinctures and syrups",
    },
    {
      id: 5, // Changed duplicate ID from 4 to 5 for unique keys
      image: "/taxis plus logo copy.jpg",
      alt: "Website screenshot of a health product company 'PROLIVE' with tinctures and syrups",
    },
  ]

    const services = [
    {
      icon: Smartphone,
      title: "Shopify Store Development",
      description:
        "We do comprehensive research into your industry, audience, and competitors to design a site optimized for user experience and conversions. From payment gateways to shipping integrations and more, we ensure every feature works seamlessly to support your operations.",
    },
    {
      icon: Smartphone,
      title: "Shopify App Development",
      description:
        "We specialize in custom Shopify app development to extend the functionality of your store and meet your unique business requirements – it's a private app for internal workflows or a public app for the Shopify marketplace, our team builds scalable, secure, and user-friendly solutions tailored to your goals.",
    },
    {
      icon: ArrowRightLeft,
      title: "Shopify Migration",
      description:
        "Migration from an existing platform can lead to enormous downtime. However, our Shopify migration services will assist them with low downtime. Our professional developers migrate websites to Shopify from other platforms with ease.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "We optimize your Shopify store for speed, responsiveness, and smooth performance across all devices. From code enhancements to image compression and advanced caching, we ensure faster load times and improved user experience.",
    },
    {
      icon: Monitor,
      title: "Shopify Theme Development",
      description:
        "We craft intelligent and engaging shopfronts that intrigue users at first visit. Our themes are designed for ease of navigation and seamless store performance.",
    },
    {
      icon: Settings,
      title: "Shopify Third-Party Integration",
      description:
        "We seamlessly integrate your Shopify store with third-party tools like CRMs, ERPs, payment gateways, and shipping providers. This ensures smoother operations, real-time data sync, and a unified ecommerce ecosystem.",
    },
    {
      icon: UserCog,
      title: "Dedicated Shopify Developer",
      description:
        "Engage our experienced Shopify developers to complement your in-house team or get a solution designed from scratch. Our developers ensure timely and affordable project delivery taking full advantage of Shopify features and capabilities.",
    },
    {
      icon: Settings, // Reusing Settings icon as it matches the gear in the image
      title: "Shopify Update and Support",
      description:
        "Our experienced technical team offers periodic updates and support solutions for your Shopify store.",
    },
    {
      icon: DollarSign,
      title: "Shopify Conversion Rate Optimization",
      description:
        "We help our clients by reviewing their existing store and analyze existing store setup, performing A/B testing, Funnel analysis, Checkout flow optimization, Data-driven tweaks using analytics tools, user behavior analysis.",
    },
  ]
  // Duplicate items to create a seamless looping effect for the carousel.
  const displayItems = [...sliderItems, ...sliderItems]

  // Increased scrollSpeed for better visibility during testing.
  // You can reduce this back to 0.1 or 0.2 for a very slow movement.
  const scrollSpeed = 0.5 // Adjust this value for slower/faster auto-scrolling

  // Callback for auto-scrolling the carousel
  const autoScroll = useCallback(() => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const originalContentWidth = carousel.scrollWidth / 2
      carousel.scrollLeft += scrollSpeed
      // Debugging: Log scrollLeft to see if it's changing
      // console.log("Current scrollLeft:", carousel.scrollLeft);
      // Reset scroll position to the beginning of the original content when it reaches the end of the first set
      if (carousel.scrollLeft >= originalContentWidth) {
        carousel.scrollLeft = 0
      }
    }
    animationFrameId.current = requestAnimationFrame(autoScroll)
  }, [scrollSpeed])

  // Effect to manage auto-scrolling and event listeners
  useEffect(() => {
    // Start auto-scrolling animation
    animationFrameId.current = requestAnimationFrame(autoScroll)
    const carouselElement = carouselRef.current
    if (carouselElement) {
      // Pause auto-scroll on mouse enter
      const handleMouseEnter = () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current)
          animationFrameId.current = null
        }
      }
      // Resume auto-scroll on mouse leave
      const handleMouseLeave = () => {
        if (!animationFrameId.current) {
          animationFrameId.current = requestAnimationFrame(autoScroll)
        }
      }
      // Add event listeners
      carouselElement.addEventListener("mouseenter", handleMouseEnter)
      carouselElement.addEventListener("mouseleave", handleMouseLeave)
      // Cleanup function: cancel animation frame and remove event listeners
      return () => {
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current)
        }
        carouselElement.removeEventListener("mouseenter", handleMouseEnter)
        carouselElement.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [autoScroll])

  const scrollAmount = 300 // Pixels to scroll per click for manual navigation

  // Function to scroll carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const originalContentWidth = carousel.scrollWidth / 2
      carousel.scrollLeft -= scrollAmount
      // Wrap around if scrolling past the beginning of the first set
      if (carousel.scrollLeft < 0) {
        carousel.scrollLeft = originalContentWidth + carousel.scrollLeft
      }
    }
  }

  // Function to scroll carousel right
  const scrollRight = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current
      const originalContentWidth = carousel.scrollWidth / 2
      carousel.scrollLeft += scrollAmount
      // Wrap around if scrolling past the end of the first set
      if (carousel.scrollLeft >= originalContentWidth) {
        carousel.scrollLeft = carousel.scrollLeft - originalContentWidth
      }
    }
  }

  return (
    <div>
      <section className="w-full">
        {/* Top Section */}
        <div className="bg-[#000000] text-white py-16 md:py-24 lg:py-32 mb-[120px] relative z-0">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-[30px] mt-[40px]">
              <Image
                src="/IMG-20250710-WA0015-removebg-preview.png"
                alt="360 Australia Ventures Logo"
                width={154} // Added width for Next.js Image component
                height={110} // Added height for Next.js Image component
                className="h-30 w-34 lg:h-[110px] lg:w-[154px]"
              />
              <h1 className="text-white text-2xl font-bold !mt-[28px] !mb-[-4px]">AUSTRALIA</h1>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 max-w-7xl mx-auto">
              SHOPIFY STORE DESIGN & DEVELOPMENT AND DIGITAL MARKETING AGENCY IN INDIA
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-[40px]">
              <Button
                variant="outline"
                className="border-white !text-teal-400 !hover:bg-white !hover:text-[#1a202c] !px-8 !py-6 !text-lg rounded-md !bg-transparent bg-transparent"
              >
                GET A CALL BACK
              </Button>
              <Button
                variant="outline"
                className="border-white !text-teal-400 hover:bg-white !hover:text-[#1a202c] !px-8 !py-6 !text-lg !rounded-md !bg-transparent bg-transparent"
              >
                CALL US
              </Button>
            </div>
          </div>
        </div>
        {/* Bottom Section - Slider */}
        <div className="relative bg-white pt-16 md:pt-24 lg:pt-32 pb-16 md:pb-24 lg:pb-32 md:-mt-20 z-10 rounded-tl-[80px] rounded-tr-[80px] md:rounded-tl-[120px] md:rounded-tr-[120px] lg:rounded-tl-[150px] lg:rounded-tr-[150px]">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start mt-[-260px] gap-8">
            <div className="lg:w-1/3 text-center lg:text-left mt-22 lg:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-[#ffffff] leading-snug">EMPOWERING BRANDS WITH</h2>
              <h2 className="text-2xl md:text-2xl font-bold text-teal-400 leading-snug">
                TRANSFORMATIONAL ECOMMERCE STRATEGIES
              </h2>
            </div>
            <div className="lg:w-2/3 relative">
              <div
                ref={carouselRef}
                className="flex gap-6 p-4 -m-4 overflow-x-auto scrollbar-hide"
                style={{
                  scrollbarWidth: "none", // Hide scrollbar for Firefox
                  msOverflowStyle: "none", // Hide scrollbar for IE/Edge
                }}
              >
                {/* Slider Items */}
                {displayItems.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`} // Use a unique key for duplicated items
                    // Adjusted width for mobile to be responsive, then reverts to original sizes
                    className="flex-shrink-0 w-[calc(100vw-64px)] sm:w-[300px] md:w-[400px] lg:w-[350px] shadow-lg rounded-lg overflow-hidden bg-white"
                  >
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="!absolute !left-0 !top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hidden lg:flex"
                aria-label="Previous slide"
                onClick={scrollLeft}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="!absolute !right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hidden lg:flex"
                aria-label="Next slide"
                onClick={scrollRight}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
             <section className="w-full py-12 flex justify-center md:py-24 lg:py-32 bg-white">
      <div className="container grid gap-12 px-4 md:grid-cols-2 md:px-6 lg:gap-24">
        {/* Left Column: Image, Heading, and Description */}
        <div className="flex flex-col items-start space-y-6">
          <div className="w-full max-w-[600px] mx-auto md:mx-0">
            <Image
              src="/shopify-theme-work-r64dy3vsqtpz2it942b0q7kcy1ap6xn65ykaslqz52 (1).webp"
              width={600}
              height={400}
              alt="Ecommerce Solution Screenshot"
              className="aspect-[3/2] object-contain w-full"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl">
              One Stop Ecommerce Solution Provider – Design, Development, Integration, Support & Digital Marketing
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto md:mx-0">
              We offer end-to-end ecommerce services under one roof - from stunning storefront design and robust
              platform development to seamless third-party integrations, ongoing technical support, and
              performance-driven digital marketing. Our tailored solutions help brands launch, grow, and scale their
              online presence efficiently.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col items-center justify-center   bg-white shadow-lg rounded-lg">
          <div className="w-full max-w-[80%] space-y-6">
            <div className="text-center md:text-center">
              <h2 className="text-5xl mt-[-40px] font-bold tracking-tight">Connect with us</h2>
              <p className="text-muted-foreground mt-6">
                Contact us Today for Expert Shopify Support and Hassle-Free Store Management!
              </p>
            </div>
            <form className="grid gap-8">
              <Input
                type="text"
                placeholder="Name*"
                className="w-full px-2 py-3 h-[50px] rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <Input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3  h-[50px] rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <Input
                type="tel"
                placeholder="Phone*"
                className="w-full px-4 py-3 text-[20px]  h-[50px] rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
              />
            
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 h-[50px] rounded-md bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary resize-y"
              />
              <Button
                type="submit"
                className="w-full !bg-teal-500 !text-white !py-5 rounded-md !text-[22px] font-bold !hover:bg-orange-600 transition-colors"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Shopify Development Services</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl items-stretch gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-gray-800 h-full"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900">
                <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
