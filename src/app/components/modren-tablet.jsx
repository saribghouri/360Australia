"use client"

import { useState, useEffect, useRef } from "react"

export default function ModernTablet() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const togglePlay = async () => {
    const video = videoRef.current
    if (!video) return

    try {
      if (video.paused) {
        await video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    } catch (error) {
      console.log("Video play/pause error:", error)
    }
  }

  const handleVideoLoad = () => {
    setIsLoading(false)
  }

  const handleVideoError = () => {
    setIsLoading(false)
    console.log("Video failed to load")
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className={`relative mt-[100px] transition-all duration-1000 hover:scale-105 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        style={{ transitionDelay: "1.2s" }}
      >
        {/* Modern Tablet Frame */}
        <div className="relative  border border-teal-500  rounded-[3rem] h-[80vh] p-6 shadow-2xl max-w-7xl">
          {/* Top Bezel with Camera and Sensors */}
          <div className="flex justify-center items-center mb-4 space-x-4">
            <div className="w-1 h-1 bg-teal-500 rounded-full"></div>
            <div className="w-16 h-3 bg-teal-500 rounded-full"></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          </div>

         <video
                ref={videoRef}
                className="w-full h-[70vh] object-cover rounded-[2rem]"
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={handleVideoLoad}
                onError={handleVideoError}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  type="video/mp4"
                />
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
              </video>

          <div className="bg-black rounded-[1rem] overflow-hidden relative shadow-inner">
            {/* Video Player */}
          
          </div>

          {/* Bottom Bezel */}
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-teal-500 rounded-full"></div>
          </div>

          {/* Side Elements */}
          <div className="absolute left-0 top-24 w-1 h-16 bg-teal-500 rounded-r-full"></div>
          <div className="absolute left-0 top-44 w-1 h-12 bg-teal-5000 rounded-r-full"></div>
          <div className="absolute right-0 top-32 w-1 h-20 bg-teal-500 rounded-l-full"></div>
        </div>

        {/* Realistic Shadow and Reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black rounded-[3rem] blur-2xl opacity-20 scale-95 translate-y-8 -z-10"></div>

        {/* Subtle Reflection */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-cyan-400 to-transparent opacity-10 blur-xl rounded-[50%] mt-4"></div>
      </div>
    </div>
  )
}
