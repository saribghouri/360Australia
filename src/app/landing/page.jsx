"use client"
import { useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ArrowRightLeft, ChevronLeft, ChevronRight, DollarSign, Gauge, Monitor, Settings, shopping, Smartphone, UserCog, MapPin, Mail, Twitter, Linkedin, Instagram, Phone, Link, } from "lucide-react"
import { Button, Card, Input } from "antd"

export default function Page() {
  // const carouselRef = useRef(null)
  // const animationFrameId = useRef(null)

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
  const testimonials = [
    {
      quote: "Our ecommerce migration to Shopify was a great success. Thanks to everyone at CloudConverge",
      company: "HELM",
      logo: "/clients-logo1.png",
    },
    {
      quote: "Their Shopify team was very experienced and knew exactly how to drive our project from start to finish",
      company: "TARUN TAHILIANI",

      logo: "/tarun_tahiliani.png",
    },
    {
      quote: "Very impressed with CloudConverge's commitment and their support throughout the development stages",
      company: "verve",

      logo: "/clients-logo6.png",

    },
  ]
  // Duplicate items to create a seamless looping effect for the carousel.
  const displayItems = [...sliderItems, ...sliderItems]

  // Increased scrollSpeed for better visibility during testing.
  // You can reduce this back to 0.1 or 0.2 for a very slow movement.
  const scrollSpeed = 0.5 // Adjust this value for slower/faster auto-scrolling

  // Callback for auto-scrolling the carousel
  // const autoScroll = useCallback(() => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current
  //     const originalContentWidth = carousel.scrollWidth / 2
  //     carousel.scrollLeft += scrollSpeed
  //     // Debugging: Log scrollLeft to see if it's changing
  //     // console.log("Current scrollLeft:", carousel.scrollLeft);
  //     // Reset scroll position to the beginning of the original content when it reaches the end of the first set
  //     if (carousel.scrollLeft >= originalContentWidth) {
  //       carousel.scrollLeft = 0
  //     }
  //   }
  //   animationFrameId.current = requestAnimationFrame(autoScroll)
  // }, [scrollSpeed])

  // Effect to manage auto-scrolling and event listeners
  // useEffect(() => {
  //   // Start auto-scrolling animation
  //   animationFrameId.current = requestAnimationFrame(autoScroll)
  //   const carouselElement = carouselRef.current
  //   if (carouselElement) {
  //     // Pause auto-scroll on mouse enter
  //     const handleMouseEnter = () => {
  //       if (animationFrameId.current) {
  //         cancelAnimationFrame(animationFrameId.current)
  //         animationFrameId.current = null
  //       }
  //     }
  //     // Resume auto-scroll on mouse leave
  //     const handleMouseLeave = () => {
  //       if (!animationFrameId.current) {
  //         animationFrameId.current = requestAnimationFrame(autoScroll)
  //       }
  //     }
  //     // Add event listeners
  //     carouselElement.addEventListener("mouseenter", handleMouseEnter)
  //     carouselElement.addEventListener("mouseleave", handleMouseLeave)
  //     // Cleanup function: cancel animation frame and remove event listeners
  //     return () => {
  //       if (animationFrameId.current) {
  //         cancelAnimationFrame(animationFrameId.current)
  //       }
  //       carouselElement.removeEventListener("mouseenter", handleMouseEnter)
  //       carouselElement.removeEventListener("mouseleave", handleMouseLeave)
  //     }
  //   }
  // }, [autoScroll])

  const scrollAmount = 300 // Pixels to scroll per click for manual navigation

  // Function to scroll carousel left
  // const scrollLeft = () => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current
  //     const originalContentWidth = carousel.scrollWidth / 2
  //     carousel.scrollLeft -= scrollAmount
  //     // Wrap around if scrolling past the beginning of the first set
  //     if (carousel.scrollLeft < 0) {
  //       carousel.scrollLeft = originalContentWidth + carousel.scrollLeft
  //     }
  //   }
  // }

  // Function to scroll carousel right
  // const scrollRight = () => {
  //   if (carouselRef.current) {
  //     const carousel = carouselRef.current
  //     const originalContentWidth = carousel.scrollWidth / 2
  //     carousel.scrollLeft += scrollAmount
  //     // Wrap around if scrolling past the end of the first set
  //     if (carousel.scrollLeft >= originalContentWidth) {
  //       carousel.scrollLeft = carousel.scrollLeft - originalContentWidth
  //     }
  //   }
  // }
  const features = [
    {
      title: "Shopify Experts with over 10+ years of experience",
      description:
        "With years of experience on Shopify platform, our team is well versed with the platform - from design and development to integrations and app tweaks.",
    },
    {
      title: "Speed & Performance Optimization",
      description:
        "We make sure your store loads quickly, runs smoothly, and provides a seamless experience on all devices - helping to lower bounce rates and improve your SEO.",
    },
    {
      title: "End-to-End Support",
      description:
        "From setting up your store to ongoing maintenance and updates, we provide continuous support to keep your store current and secure.",
    },
    {
      title: "High Conversion-Focused Design",
      description:
        "We don't just create stunning stores - we craft experiences that drive sales. Every detail is designed to enhance usability and boost conversions.",
    },
    {
      title: "Transparent Pricing & Timelines",
      description:
        "No hidden fees. We offer clear project scopes, timelines, and pricing so you can plan with confidence.",
    },
  ]

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
            {/* <div className="lg:w-2/3 relative">
              <div
                ref={carouselRef}
                className="flex gap-6 p-4 -m-4 overflow-x-auto scrollbar-hide"
                style={{
                  scrollbarWidth: "none", 
                  msOverflowStyle: "none", 
                }}
              >
             
                {displayItems.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`} 
                 
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
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-sm">
                <div className="p-8 text-center">
                  <blockquote className="text-black text-lg leading-relaxed mb-8">{testimonial.quote}</blockquote>
                  <div className="mt-auto">
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={`${testimonial.company} logo`}
                      className={`mx-auto object-contain  ${index === 1 ? "h-6" : "h-10"}`}
                    />
                  </div>
                </div>
              </Card>
            ))}
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
      <div className="relative w-full h-[500px] bg-[#f0efea] flex items-center justify-start overflow-hidden">
        <div className=" z-10 bg-[#f5fcff] h-[500px] w-[50%]  flex justify-center items-center flex-col rounded-tr-full ">
          <h1 className="text-4xl font-bold max-w-xl text-gray-800">We Are One Of The Shopify Development Services</h1>
          <p className="mt-4 text-[18px] text-black max-w-xl">
            From creating a new Shopify store to building a feature-rich website, Cloud Converge provides end-to-end Shopify development services. Our services provide a recognized e-commerce presence that aligns with your brand identity.
          </p>
        </div>
        <div className="absolute right-0 top-0 h-full w-[50%]  flex items-center justify-end space-x-4 z-0">
          <video
            className="w-[1000px] h-full object-cover"
            autoPlay
            loop
            muted
            src="/shopify-video.mp4"
          />
        </div>
      </div>
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
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 bg-white border-2 border-amber-200 action   items-center">
            {/* Left side - Video */}
            <div className="relative ">
              <video
                className="w-[1200px] h-full object-cover"
                autoPlay
                loop
                muted
                src="/shopify-video-final.mp4"
              />

            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">Why Cloud Converge?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Shopify Global Partner offering expert eCommerce solutions, store development, app integration, and
                marketing services to help businesses grow and succeed worldwide on Shopify.
              </p>

              {/* Optional: Add some feature points */}

            </div>
          </div>
          <section className="py-16 bg ">
            <div className="max-w-7xl">
              <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                {/* Left Column - First 3 features */}
                <div className="space-y-12">
                  {features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-8">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Right Column - Last 2 features */}
                <div className="space-y-12">
                  {features.slice(3).map((feature, index) => (
                    <div key={index + 3} className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-8">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="py-16 px-4  h-screen relative overflow-hidden">
        {/* Background image and pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0  "
            style={{
              backgroundImage: `url('/hm1-form-bg-3.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          {/* Navy blue backdrop with shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/50 to-slate-900/95"></div>
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
          {/* Additional shadow effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact Information */}
            <div className="text-white space-y-8">
              <h2 className="text-4xl font-bold mb-12">Contact Us</h2>

              {/* USA Location */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">USA</h3>
                  <p className="text-gray-300 leading-relaxed">565, Plandome RD, Unit 107, Manhasset New York — 11030</p>
                </div>
              </div>

              {/* India Location */}
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">INDIA</h3>
                  <p className="text-gray-300 leading-relaxed">
                    E 44/2, Pocket B, Okhla Phase II, Okhla Industrial Estate, New Delhi — 110020
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <a href="tel:+917827902509" className="text-gray-300 hover:text-white transition-colors underline">
                    +91 7827902509
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <a
                    href="mailto:info@cloudconverge.io"
                    className="text-gray-300 hover:text-white transition-colors underline"
                  >
                    info@cloudconverge.io
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-2xl border border-gray-100 backdrop-blur-sm">
              <div className="mb-6">
                <p className="text-blue-600 font-medium mb-2">Free Consultation</p>
                <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-gray-700 font-medium">
                    Name*
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="mt-1 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-gray-700 font-medium">
                    Email*
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="mt-1 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone*
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="mt-1 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-gray-700 font-medium">
                    Message*
                  </label>
                  <txtarea
                    id="message"
                    required
                    rows={4}
                    className="mt-1 bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    placeholder="Your message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-50 !bg-blue-600 !hover:bg-blue-700 !text-white !font-bold !text-lg !py-6 1px-6 !rounded-md transition-colors"
                >
                  Submit Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#122763] text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info & Certifications */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full relative">
                      <div className="absolute inset-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Cloud</h3>
                    <h3 className="text-xl font-semibold">Converge</h3>
                  </div>
                </div>
                <p className="text-lg text-white leading-relaxed mb-6">
                  Helping Businesses to attract, differentiate, optimize and grown in their crowded niche through
                  scalable, innovative and stable digital solutions for web & mobile, cloud migration, application
                  modernization.
                </p>
              </div>
<hr></hr>
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-4 mt-[20px]">ISO Certificate & Our Partners</h4>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className=" p-4 py-8 rounded flex items-center justify-center">
             <img src="pic-logo-1.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">

                     <img src="pic-logo-2.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                     <img src="pic-logo-7.png" alt="" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className=" p-2 rounded flex items-center justify-center">
                     <img src="pic-logo-4.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                     <img src="pic-logo-6.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                  <img src="pic-logo-5.png" alt="" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className=" p-2 rounded flex items-center justify-center">
                  <img src="pic-logo-8.png" alt="" />
                    
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                  <img src="pic-logo-9.png" alt="" />
                  </div>
                  <div className=" p-2 rounded flex items-center justify-center">
                                  <img src="pic-logo-3.png" alt="" />

                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6 mt-[]">Services</h4>

              <div className="mb-6">
                <h5 className="text-lg font-medium mb-2 ">Product Engineering & Solution Development</h5>
                 <hr ></hr>
                <ul className="space-y-2 text-sm text-gray-300 mt-[10px]">
                  <li className="hover:text-white transition-colors">

                    ▷ Web Application Development

                  </li>
                  <li className="hover:text-white transition-colors">

                    ▷ Custom Web Development

                  </li>
                  <li className="hover:text-white transition-colors">

                    ▷ Mobile App Development

                  </li>
                  <li className="hover:text-white transition-colors">

                    ▷ iPhone / iOS App Development

                  </li>
                  <li className="hover:text-white transition-colors">

                    ▷ Umbraco Implementation Services

                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-medium mb-2 ">Ecommerce Solutions</h5>
                <hr ></hr>
                <ul className="space-y-2 text-sm text-gray-300 mt-[10px]">
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Ecommerce Web & App Development

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Shopify Development Services

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Shopify Integration Services

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Shopify Support & Maintenance Services

                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-medium mb-2 ">Cloud Engineering Services</h5>
                <hr ></hr>
                <ul className="space-y-2 text-sm text-gray-300 mt-[10px]">
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Cloud Engineering Services

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Infrastructure Management & Monitoring

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ DevOps Consulting & Implementation

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ AWS Consulting Services

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Google Cloud Consulting Services

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ M365 Consulting & Implementation Services

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Microsoft Azure Consulting

                  </li>
                </ul>
              </div>
            </div>

            {/* Products & Company */}
            <div className="lg:col-span-1 mt-[52px]">
              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-2">Business Intelligence & AI / ML</h4>
                <hr></hr>
                <ul className="space-y-2 text-sm text-gray-300 mt-[10px]">
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Business Intelligence Implementation

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ AI / ML Product Development

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ ChatGPT Integration

                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ MarketPlace App

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ CRM & Project Management Software

                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Home

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Portfolio

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ About Us

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Work Culture

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Careers

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Blog

                  </li>
                  <li className="hover:text-white transition-colors text-lg">

                    ▷ Contact

                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>

              <div className="mb-6">
                <h5 className="text-lg font-medium mb-3">USA Address</h5>
                <p className="text-sm text-gray-300 leading-relaxed">
                  565, Plandome RD, Unit 107, Manhasset New York – 11030
                </p>
              </div>

              <div className="mb-6">
                <h5 className="text-lg font-medium mb-3">INDIA Address</h5>
                <p className="text-sm text-gray-300 leading-relaxed">
                  E 44/2, Pocket B, Okhla Phase II, Okhla Industrial Estate, New Delhi – 110020
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">Phone : +91 7827902509</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">Email : info@cloudconverge.io</span>
                </div>
              </div>

              <div>
                <h5 className="text-lg font-medium mb-4">Follow Us</h5>
                <div className="flex space-x-3">
                  <Link
                    href="#"
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="#"
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
// SMTP Server 
// server.360-australia.com.au

// SMTP Port
// 587

// Email
// web@360-australia.com.au

// Password
// Australia@123