"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";

export default function ProjectCard({ src, alt, title, description, href }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const rotateX = (centerY - clientY) / 20; // Adjust divisor for sensitivity
    const rotateY = (clientX - centerX) / 20; // Adjust divisor for sensitivity

    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.03, // Slight scale on hover
      ease: "power2.out",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: "power2.out",
      duration: 0.5,
    });
  };

  return (
    <div
      ref={cardRef}
      className="relative group overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl"
      style={{ transformStyle: "preserve-3d" }} // Crucial for 3D transforms
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={900}
        height={600}
        className="object-contain w-full 
        !rounded-2xl 
        1h-[310px] sm:h-[390px] lg:h-[411px] aspect-video transition-transform duration-300 group-hover:scale-105"
        style={{ transform: "translateZ(20px)" }} // Push image slightly forward in 3D space
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
        style={{ transform: "translateZ(10px)" }} // Push overlay slightly forward
      >
        <div className="text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
