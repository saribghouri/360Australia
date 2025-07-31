"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // Added ChevronLeft, ChevronRight
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Header from "../components/header";
import ProjectCTASection from "../components/ProjectCTASection";
import Footer from "../components/footer";
import PortfolioSlider from "../components/portfolio-slider";
import { Breadcrumb, Button } from "antd";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0);
  const [activeModalImages, setActiveModalImages] = useState([]); // Stores images of the current section
  const [currentImageIndex, setCurrentImageIndexs] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // Categorized images
  const websiteImages = [
    "/1 organic food copy.jpg", // dark textured background
    "/2 Lewis Nathenlel copy.jpg", // green e-commerce
    "/3 tea copy.jpg", // yellow e-commerce
    "/5 fenty beauty.jpg", // denim jacket e-commerce
    "/4 blaster sound copy.jpg",
  ];
  const mobileAppImages = [
    "/1 copy.jpg", // dark textured background
    "/2 copy.jpg", // green e-commerce
    "/5 copy.jpg", // denim jacket e-commerce
    "/3 copy (1).jpg", // yellow e-commerce
    "/4 copy.jpg",
  ];
  const graphicsDesignImages = [
    "/baab.jpg", // dark textured background
    "/logo 05.png", // green e-commerce
    "/cocolea.jpg", // yellow e-commerce
    "/taxis plus logo copy.jpg", // denim jacket e-commerce
    "/voyo logo copy.jpg",
  ];

  const images = [
    "/baab.jpg", // dark textured background
    "/taxis plus logo copy.jpg", // denim jacket e-commerce
    "/3 copy (1).jpg", // green e-commerce
    "/2 copy.jpg", // yellow e-commerce
    "/4 blaster sound copy.jpg",
    "/3 tea copy.jpg",
  ];
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndexs((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => { }, []);

  const handleImageClick = (imageSrc, imageIndex, sectionImages) => {
    setActiveModalImages(sectionImages);
    setCurrentModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveModalImages([]);
    setCurrentModalImageIndex(0);
  };

  const navigateModal = (direction) => {
    setCurrentModalImageIndex((prevIndex) => {
      const newIndex =
        (prevIndex + direction + activeModalImages.length) %
        activeModalImages.length;
      return newIndex;
    });
  };

  return (
    <>
      <div className="">
        {/* <Header /> */}
      <section className="bg-black relative overflow-hidden min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-4 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 md:bottom-20 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-80 md:h-80 bg-teal-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10 mt-[70px]">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-140px)]">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
                <div className="flex w-full sm:w-[80%] md:w-[60%] lg:w-[56%] items-start justify-items-start ml-[-100px]  mt-8 sm:mt-12 md:mt-16 lg:mt-[-170px] justify-center  px-4">
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
                        Portfolio
                      </a>
                    ),
                  },

                ]}
              />
            </div>
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight uppercase">
                <span className="inline-block delay-100 text-white">Welcome to </span>
                <br className="sm:hidden" />
                <span className="inline-block delay-1000 text-gradient bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
                  our Portfolio
                </span>
              </h1>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover amazing projects, creative designs, and innovative solutions crafted with passion and
                expertise.
              </p>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
           
            </div>
          </div>

          {/* Images Section - Responsive */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mt-8 lg:mt-0">
            <div className="absolute inset-0 flex items-center justify-center">
              {images.map((src, index) => {
                // Responsive radius calculation
                const getRadius = () => {
                  if (typeof window !== "undefined") {
                    if (window.innerWidth < 640) return 120 // mobile
                    if (window.innerWidth < 768) return 150 // sm
                    if (window.innerWidth < 1024) return 180 // md
                    return 200 // lg and above
                  }
                  return 200
                }

                const angle = index * 60 - currentImageIndex * 60
                const radius = getRadius()
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius

                // Responsive scale
                const scale = index === currentImageIndex ? 1.1 : 0.7
                const mobileScale = index === currentImageIndex ? 1 : 0.6
                const finalScale = typeof window !== "undefined" && window.innerWidth < 640 ? mobileScale : scale

                const opacity = Math.abs(index - currentImageIndex) <= 1 ? 1 : 0.3

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-1000 ease-in-out"
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${finalScale})`,
                      opacity: opacity,
                      zIndex: index === currentImageIndex ? 10 : 1,
                    }}
                  >
                    <div className="relative group">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Portfolio ${index + 1}`}
                        width={160}
                        height={120}
                        className="w-32 h-24 sm:w-40 sm:h-30 md:w-48 md:h-36 lg:w-52 lg:h-40 rounded-xl md:rounded-2xl shadow-2xl border-2 md:border-4 border-white/20 group-hover:border-teal-400/50 transition-all duration-300 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Decorative Elements - Responsive */}
            <div className="absolute top-5 right-5 md:top-10 md:right-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute bottom-10 left-5 md:bottom-20 md:left-10 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-teal-300 to-teal-400 rounded-full opacity-25 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-teal-500/20 to-teal-400/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>

        {/* Image Navigation Dots - Mobile Friendly */}
       
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-gray-900/50">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
        {/* Website Development Section */}
        <PortfolioSlider
          title={
            <p className=" uppercase">
              Website<span className="text-teal-400"> Development</span>{" "}
            </p>
          }
          images={websiteImages}
          onImageSelect={(src, index) =>
            handleImageClick(src, index, websiteImages)
          }
        />
        {/* Mobile App Development Section */}
        <PortfolioSlider
          title={
            <p className=" uppercase">
              Mobile App<span className="text-teal-400"> Development</span>{" "}
            </p>
          }
          images={mobileAppImages}
          onImageSelect={(src, index) =>
            handleImageClick(src, index, mobileAppImages)
          }
          reverseDirection
        />
        {/* Graphics Design Section */}
        <PortfolioSlider
          title={
            <p className=" uppercase text-4xl sm:text-4xl lg:text-5xl  xl:text-5xl  ">
              Graphics<span className="text-teal-400 uppercase text-6xl sm:text-4xl lg:text-5xl  xl:text-5xl"> Design</span>{" "}
            </p>
          }
          images={graphicsDesignImages}
          onImageSelect={(src, index) =>
            handleImageClick(src, index, graphicsDesignImages)
          }
        />
      </div>

      {isModalOpen && activeModalImages.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="fixed top-[40px] right-[250px]">
            <button
              className="absolute top-6 right-6 bg-teal-500 text-white rounded-full p-2 z-50 hover:bg-white hover:text-black transition-colors"
              onClick={handleCloseModal}
              aria-label="Close image"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="relative max-w-screen-lg max-h-screen-lg  w-full h-full flex items-center justify-center">
            {/* Close Button - now fixed to the viewport */}

            {/* Previous Button for Modal */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute sm:right-13 right-[-40px] !h-11 z-10 !sm:p-2 !p-2 !rounded-[30px] !border-none !bg-teal-500 hover:bg-white/40 transition-colors !text-white"
              onClick={() => navigateModal(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <Image
              src={
                activeModalImages[currentModalImageIndex] ||
                "/placeholder.svg?height=800&width=1200&query=default image"
              }
              alt={`Full screen image ${currentModalImageIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full !sm:ml-[-40px]"
            />
            {/* Next Button for Modal */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute sm:left-13  left-[-40px] !h-11 z-10 !sm:p-2  !p-2 !rounded-[30px] !border-none !bg-teal-500 hover:bg-white/40 transition-colors !text-white"
              onClick={() => navigateModal(1)}
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </div>
        </div>
      )}
      <ProjectCTASection />
    </>
  );
}
