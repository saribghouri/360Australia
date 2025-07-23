import Image from "next/image";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { gsap } from "gsap";

export default function PortfolioSlider({
  title,
  images,
  onImageSelect,
  reverseDirection = false,
}) {
  const numClones = 3; // Number of slides to clone from each end for seamless looping
  const displayImages = useMemo(() => {
    if (!images || images.length === 0) return [];
    const clonedStart = images.slice(-numClones);
    const clonedEnd = images.slice(0, numClones);
    return [...clonedStart, ...images, ...clonedEnd];
  }, [images, numClones]);

  // Start at the first original image's index in displayImages
  const [currentSlide, setCurrentSlide] = useState(numClones);
  const sliderRef = useRef(null);

  // Slide forward or backward based on reverseDirection
  const slide = useCallback(() => {
    setCurrentSlide((prev) => (reverseDirection ? prev - 1 : prev + 1));
  }, [reverseDirection]);

  // Infinite-loop animation
  useEffect(() => {
    const animateSlider = () => {
      if (!sliderRef.current || displayImages.length === 0) return;
      const slideItems = gsap.utils.toArray(sliderRef.current.children);
      const first = slideItems[0];
      const style = window.getComputedStyle(first);
      const slideWidth =
        first.offsetWidth +
        parseInt(style.marginLeft) +
        parseInt(style.marginRight);

      // Always translate negatively; direction is handled by currentSlide delta
      const xValue = -currentSlide * slideWidth;
      gsap.to(sliderRef.current, {
        x: xValue,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          // Loop boundaries
          if (currentSlide >= images.length + numClones) {
            setCurrentSlide(numClones);
            gsap.set(sliderRef.current, { x: -numClones * slideWidth });
          } else if (currentSlide < numClones) {
            const resetIndex = images.length + numClones - 1;
            setCurrentSlide(resetIndex);
            gsap.set(sliderRef.current, { x: -resetIndex * slideWidth });
          }
        },
      });

      // Scale & opacity animation
      slideItems.forEach((item, index) => {
        const isActive = index === currentSlide;
        const isNeighbor = Math.abs(index - currentSlide) <= 1;
        gsap.to(item, {
          scale: isActive ? 1.1 : 0.9,
          opacity: isActive || isNeighbor ? 1 : 0.5,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    };

    animateSlider();
    window.addEventListener("resize", animateSlider);
    return () => window.removeEventListener("resize", animateSlider);
  }, [currentSlide, displayImages, images.length, numClones]);

  // Auto-play, respecting direction
  useEffect(() => {
    const interval = setInterval(slide, 3000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">{title}</h2>
        <div className="relative flex items-center justify-center">
          <div className="overflow-hidden w-full max-w-8xl mx-auto">
            <div ref={sliderRef} className="flex">
              {displayImages.map((src, index) => {
                const originalIndex =
                  (index - numClones + images.length) % images.length;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
                  >
                    <div
                      className="relative group cursor-pointer"
                      onClick={() => onImageSelect(src, originalIndex)}
                    >
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`${title} Project ${originalIndex + 1}`}
                        width={400}
                        height={300}
                        className="rounded-2xl shadow-xl border-4 border-white/20 group-hover:border-teal-400/50 transition-all duration-300 object-cover w-full h-auto aspect-[4/3]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-semibold text-lg">
                          Project {originalIndex + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
