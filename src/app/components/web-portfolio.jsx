"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ProjectCard from "../components/project-cards"; // Corrected import path
import { usePathname, useRouter } from "next/navigation"; // Import usePathname for dynamic image loading
import { Button } from "antd";

export default function WebDesignPortfolio() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const handleContactClick = () => {
    router.push("/portfolio");
  };

  // Define image and project data mappings based on pathname segments
  // Replace these placeholder URLs with your actual image paths
  const projectDataMap = {
    "graphics-designing": [
      {
        src: "/baab.jpg",
        alt: "Web Design Project 1: E-commerce Redesign",
        title: "E-commerce Redesign",
        description: "Modernizing an online retail experience.",
      },
      {
        src: "/logo 05.png",
        alt: "Web Design Project 2: SaaS Dashboard",
        title: "SaaS Dashboard",
        description: "Intuitive analytics and user management.",
      },
    ],
    "mobile-app-development": [
      {
        src: "/1 copy.jpg",
        alt: "Mobile App Project 1: Fitness Tracker",
        title: "Fitness Tracker App",
        description: "Track your workouts and progress.",
      },
      {
        src: "/3 copy (1).jpg",
        alt: "Mobile App Project 2: Recipe Finder",
        title: "Recipe Finder App",
        description: "Discover new recipes on the go.",
      },
    ],
    "video-animation": [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Video Animation Project 1: Explainer Video",
        title: "Explainer Video",
        description: "Simplifying complex concepts.",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Video Animation Project 2: Product Demo",
        title: "Product Demo Animation",
        description: "Showcasing product features.",
      },
    ],
    "digital-marketing": [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Video Animation Project 1: Explainer Video",
        title: "Explainer Video",
        description: "Simplifying complex concepts.",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Video Animation Project 2: Product Demo",
        title: "Product Demo Animation",
        description: "Showcasing product features.",
      },
    ],
    "website-development": [
      {
        src: "/1 organic food copy.jpg",
        alt: "Video Animation Project 1: Explainer Video",
        title: "Explainer Video",
        description: "Simplifying complex concepts.",
      },
      {
        src: "/2 Lewis Nathenlel copy.jpg",
        alt: "Video Animation Project 2: Product Demo",
        title: "Product Demo Animation",
        description: "Showcasing product features.",
      },
    ],
    // Default projects if no specific path matches
  };

  // Determine the current project type from the pathname
  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const projectsToDisplay =
    projectDataMap[lastSegment] || projectDataMap["default"];

  useEffect(() => {
    // Initial animation for title, description, and button
    gsap.fromTo(
      [titleRef.current, descriptionRef.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.2,
      }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1 }
    );
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center ">
        <h2
          ref={titleRef}
          className="text-3xl font-bold uppercase text-white tracking-tighter sm:text-5xl lg:text-7xl"
        >
          Portfolio
        </h2>
      </div>
      <section
        ref={sectionRef}
        className="w-full py-12 md:py-24 lg:py-32 bg-black text-white flex justify-center px-4 sm:px-8"
      >
        <div
          className="container border rounded-3xl py-12 testomnial-shadows px-4 md:px-6 border-gray-900 shadow-testimonial-shadows relative overflow-hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='100' x2='100' y2='0' stroke='%23222' strokeWidth='1' /%3E%3Cline x1='0' y1='50' x2='50' y2='0' stroke='%23222' strokeWidth='1' /%3E%3Cline x1='50' y1='100' x2='100' y2='50' stroke='%23222' strokeWidth='1' /%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        >
       
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-gray-900/30 to-transparent rounded-full filter blur-3xl opacity-50 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gray-900/30 to-transparent rounded-full filter blur-3xl opacity-50 animate-pulse delay-500" />
          </div>
       
          <div
            className="mx-auto grid max-w-6xl items-start gap-8 py-8 lg:grid-cols-2 lg:gap-12 relative z-10"
            style={{ perspective: "1200px" }}
          >
            {projectsToDisplay.map((project, index) => (
              <ProjectCard
                key={index} 
                src={project.src}
                alt={project.alt}
                href="#" 
              />
            ))}
          </div>
          <div className="flex justify-center mt-12 relative z-10">
            <Button
              className="group relative border cursor-pointer qr-code !border-teal-500 !bg-black !text-white !px-6 !py-6 !rounded-[30px] !font-bold !text-xl flex items-center !gap-3 mx-auto !lg:mx-0 overflow-hidden shadow-2xl "
              onClick={handleContactClick}
            >
              {" "}
              View All Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
