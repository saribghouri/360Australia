"use client"
import { Card, Button, Tag, Timeline, Row, Col, Typography, Space, Badge, Progress, message } from "antd"

import {
  GithubOutlined,
  EnvironmentOutlined,
  ExportOutlined,
  CalendarOutlined,
  CodeOutlined,
  GlobalOutlined,
  MobileOutlined,
  DatabaseOutlined,
  BgColorsOutlined,
  DesktopOutlined,
  UserOutlined,
  ProjectOutlined,
  TrophyOutlined,
  RocketOutlined,
  AppstoreOutlined,
  TabletOutlined,
  BulbOutlined,
  PictureOutlined,
  ShoppingCartOutlined,
  DashboardOutlined,
  CloudOutlined,
  SafetyOutlined,
} from "@ant-design/icons"
import { useEffect, useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Image from "next/image"

const { Title, Paragraph, Text } = Typography

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer & UI/UX Enthusiast"
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState({})

  const images = [
    "/original-97d1f67fe7381f327d8cccbdf86ad0da.webp",
    "/logo 6.webp",
    "/Minimalist Website Launch Computer Mockup Instagram Post.png",
    "/shopify 8.webp",
    "/app4.jpg",
    "/logo 4.webp",
  ]

  // Web Applications data
  const webApplications = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration, inventory management, and admin dashboard.",
      icon: <ShoppingCartOutlined />,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      features: ["Payment Gateway", "Admin Panel", "Real-time Analytics", "Mobile Responsive"],
      image: "/ecommerce.PNG",
     
    },
    {
      title: "DENIM JACKETS",
      description: "Collaborative workspace for teams with task tracking, file sharing, and real-time communication.",
      icon: <DashboardOutlined />,
      technologies: ["Next.js", "Socket.io", "MongoDB", "Redis"],
      features: ["Real-time Updates", "Team Collaboration", "File Management", "Progress Tracking"],
      image: "/ecommerce (2).PNG",
    },
    {
      title: "FASHON STORE",
      description: "Secure file storage and sharing platform with advanced encryption and access controls.",
      icon: <CloudOutlined />,
      technologies: ["React", "AWS S3", "Node.js", "JWT"],
      features: ["File Encryption", "Access Control", "Version History", "API Integration"],
      image: "/shopify 10.jpg",
    },
  ]

  // Mobile Applications data
  const mobileApplications = [
    {
      title: "SERENE ",
      description: "Comprehensive fitness tracking with workout plans, nutrition tracking, and progress analytics.",
      icon: <RocketOutlined />,
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      features: ["Workout Plans", "Nutrition Tracking", "Progress Analytics", "Social Features"],
      platforms: ["iOS", "Android"],
      image: "/original-97d1f67fe7381f327d8cccbdf86ad0da.webp",
    },
    {
      title: "Food Delivery App",
      description: "On-demand food delivery platform with real-time tracking and multiple payment options.",
      icon: <ShoppingCartOutlined />,
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      features: ["Real-time Tracking", "Multiple Payments", "Restaurant Management", "Order History"],
      platforms: ["iOS", "Android"],
      image: "/app4.jpg",
    },
    {
      title: "Task Management App",
      description: "Productivity app with smart scheduling, team collaboration, and cross-platform sync.",
      icon: <AppstoreOutlined />,
      technologies: ["Flutter", "Firebase", "SQLite", "Push Notifications"],
      features: ["Smart Scheduling", "Team Sync", "Offline Mode", "Push Notifications"],
      platforms: ["iOS", "Android", "Web"],
      image: "/1.webp",
    },
  ]

  // Logo Design data
  const logoDesigns = [
    {
      title: "Tech Startup Branding",
      description: "Modern, minimalist logo design for innovative technology companies with scalable vector graphics.",
      icon: <BulbOutlined />,
      category: "Technology",
      services: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
      deliverables: ["Vector Files", "Brand Book", "Social Media Kit", "Business Card Design"],
      image: "/logo 4.webp",
    },
    {
      title: "Restaurant & Food Branding",
      description: "Appetizing and memorable logo designs for restaurants, cafes, and food delivery services.",
      icon: <PictureOutlined />,
      category: "Food & Beverage",
      services: ["Logo Creation", "Menu Design", "Packaging Design", "Signage Design"],
      deliverables: ["Logo Variations", "Menu Templates", "Packaging Mockups", "Brand Guidelines"],
      image: "/logo 6.webp",
      image: "/2.jpg",
    },
    {
      title: "Healthcare & Medical Branding",
      description: "Professional and trustworthy logo designs for healthcare providers and medical institutions.",
      icon: <SafetyOutlined />,
      category: "Healthcare",
      services: ["Medical Logo", "Clinic Branding", "Health App Icons", "Professional Stationery"],
      deliverables: ["Logo Suite", "Stationery Design", "Digital Assets", "Brand Manual"],
           image: "/logo 6.webp",
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )
    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const skills = [
    { name: "React", icon: <CodeOutlined />, category: "Frontend", level: 95, delay: "0s" },
    { name: "Next.js", icon: <GlobalOutlined />, category: "Frontend", level: 90, delay: "0.1s" },
    { name: "JavaScript", icon: <CodeOutlined />, category: "Language", level: 92, delay: "0.2s" },
    { name: "Node.js", icon: <DesktopOutlined />, category: "Backend", level: 88, delay: "0.3s" },
    { name: "PostgreSQL", icon: <DatabaseOutlined />, category: "Database", level: 85, delay: "0.4s" },
    { name: "Tailwind CSS", icon: <BgColorsOutlined />, category: "Styling", level: 93, delay: "0.5s" },
    { name: "React Native", icon: <MobileOutlined />, category: "Mobile", level: 80, delay: "0.6s" },
    { name: "Python", icon: <CodeOutlined />, category: "Language", level: 82, delay: "0.7s" },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/ecommerce.PNG",
      technologies: ["Next.js", "JavaScript", "Stripe", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      status: "Completed",
    },
    {
      title: "SHOPIFY",
      description:
        "A collaborative shopify application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/shopify 8.webp",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      status: "In Progress",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations.",
      image: "/Screenshot 2025-06-30 085624.png",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      status: "Completed",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      image: "/Screenshot 2025-06-30 085820.png",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      status: "Completed",
    },
  ]

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description:
        "Led development of customer-facing applications serving 100K+ users. Implemented modern React patterns and improved performance by 40%.",
      color: "#06b6d4",
      icon: <TrophyOutlined />,
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Built and maintained multiple web applications using React, Node.js, and PostgreSQL. Collaborated with design team to implement pixel-perfect UIs.",
      color: "#06b6d4",
      icon: <RocketOutlined />,
    },
    {
      title: "Junior Developer",
      company: "WebDev Agency",
      period: "2019 - 2020",
      description:
        "Developed responsive websites and web applications for various clients. Gained experience in modern web technologies and best practices.",
      color: "#06b6d4",
      icon: <CodeOutlined />,
    },
  ]

  const stats = [
    { label: "Years Experience", value: "5+", icon: <CalendarOutlined />, color: "#17ebbd" },
    { label: "Projects Completed", value: "50+", icon: <ProjectOutlined />, color: "#17ebbd" },
    { label: "Happy Clients", value: "30+", icon: <UserOutlined />, color: "#17ebbd" },
    { label: "Code Commits", value: "2000+", icon: <CodeOutlined />, color: "#17ebbd" },
  ]

  const onFinish = (values) => {
    message.success("Proposal request submitted successfully!")
    console.log("Form values:", values)
  }

  return (
    <div className="">
      <style jsx global>{`
        .ant-card {
          background: black !important;
          border: 1px solid rgba(6, 182, 212, 0.3) !important;
          backdrop-filter: blur(20px);
          border-radius: 20px !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.1) !important;
        }
        
        .ant-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(6, 182, 212, 0.25) !important;
          border-color: rgba(6, 182, 212, 0.6) !important;
        }
        
        .ant-card-body {
          padding: 32px !important;
        }
        
        .ant-typography {
          color: white !important;
        }
        
        .ant-typography h1, .ant-typography h2, .ant-typography h3, .ant-typography h4 {
          color: white !important;
          margin-bottom: 16px !important;
        }
        
        .ant-btn-primary {
          background: linear-gradient(135deg, #06b6d4, #0891b2) !important;
          border: none !important;
          color: black !important;
          font-weight: 600 !important;
          height: 52px !important;
          padding: 0 32px !important;
          border-radius: 16px !important;
          box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4) !important;
          font-size: 16px !important;
        }
        
        .ant-btn-primary:hover {
          background: linear-gradient(135deg, #0891b2, #0e7490) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(6, 212, 195, 0.15) !important;
        }
        
        .ant-btn-default {
          border: 2px solid rgba(6, 212, 195, 0.15) !important;
          color: #06b6d4 !important;
          font-weight: 600 !important;
          height: 52px !important;
          padding: 0 32px !important;
          border-radius: 16px !important;
          font-size: 16px !important;
        }
        
        .ant-btn-default:hover {
          border-color: #06b6d4 !important;
          color: #06b6d4 !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(6, 212, 195, 0.15) !important;
        }
        
        .hero-main-card {
          backdrop-filter: blur(30px);
          border: 2px solid rgba(6, 212, 195, 0.15) !important;
          border-radius: 32px !important;
          box-shadow: 0 20px 60px rgba(6, 182, 212, 0.2) !important;
          padding: 48px !important;
        }
        
        .stats-card {
          border: 2px solid rgba(6, 182, 212, 0.25) !important;
          border-radius: 20px !important;
          text-align: center;
          padding: 24px !important;
          transition: all 0.4s ease;
          height: 140px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
        }
        
        .stats-card:hover {
          background: rgba(6, 212, 195, 0.15) !important;
          border-color: rgba(10, 209, 176) !important;
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.3) !important;
        }
        
        .avatar-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          margin-bottom: 90px;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          width: 100%;
          max-width: 400px;
        }
        
        .project-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-top: 24px;
        }
        
        .project-btn {
          flex: 1;
          height: 48px !important;
          border-radius: 12px !important;
          font-weight: 600 !important;
          font-size: 15px !important;
        }
        
        .project-btn-outline {
          border: 2px solid rgba(10, 170, 143) !important;
          color: #06b6d4 !important;
        }
        
        .project-btn-outline:hover {
          background: rgba(10, 170, 143) !important;
          border-color: #10d4c4 !important;
          color: #06b6d4 !important;
          transform: translateY(-2px);
        }
        
        .project-btn-primary {
          background: rgba(10, 170, 143) !important;
          border: none !important;
          color: black !important;
        }
        
        .project-btn-primary:hover {
          background: linear-gradient(#ffff, #ffff, #ffff) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4) !important;
        }
        
        .neon-glow {
          text-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4;
          animation: neon-pulse 2s ease-in-out infinite alternate;
        }
        
        @keyframes neon-pulse {
          from { text-shadow: 0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4; }
          to { text-shadow: 0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4; }
        }
        
        .typing-cursor::after {
          content: '|';
          animation: blink 1s infinite;
          color: #06b6d4;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .floating-shape {
          position: absolute;
          opacity: 0.1;
          animation: float 8s ease-in-out infinite;
          color: #06b6d4;
          font-size: 2rem;
        }
        
        .floating-shape:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .floating-shape:nth-child(2) { top: 60%; left: 80%; animation-delay: 2s; }
        .floating-shape:nth-child(3) { top: 80%; left: 20%; animation-delay: 4s; }
        .floating-shape:nth-child(4) { top: 30%; left: 70%; animation-delay: 6s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .service-card {
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.1), transparent);
          transition: left 0.5s;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-animation {
          animation-delay: var(--delay, 0s);
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
      `}</style>

      <div className="mt-[140px]">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        <div className="container mx-auto px-6 py-20 relative z-10 mt-[-70px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div
                className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                  <span className="inline-block delay-100 text-white">Welcome</span>
                  <span className="inline-block mx-4"></span>
                  <span className="inline-block delay-800 text-gradient bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                    to
                  </span>
                  <br />
                  <span className="inline-block delay-1000 text-gradient bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
                    our
                  </span>
                  <span className="inline-block mx-4"></span>
                  <span className="inline-block delay-1300 text-gradient bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h1>
              </div>
              <div
                className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-lg">
                  Discover amazing projects, creative designs, and innovative solutions crafted with passion and
                  expertise.
                </p>
              </div>
              <div
                className={`transform transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <button className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full text-black font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25">
                  <span className="relative z-10">Explore Our Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
            <div className="relative h-[600px] lg:h-[700px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {images.map((src, index) => {
                  const angle = index * 60 - currentImageIndex * 60
                  const radius = 200
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius
                  const scale = index === currentImageIndex ? 1.2 : 0.8
                  const opacity = Math.abs(index - currentImageIndex) <= 1 ? 1 : 0.3
                  return (
                    <div
                      key={index}
                      className="absolute transition-all duration-1000 ease-in-out"
                      style={{
                        transform: `translate(${x}px, ${y}px) scale(${scale})`,
                        opacity: opacity,
                        zIndex: index === currentImageIndex ? 10 : 1,
                      }}
                    >
                      <div className="relative group">
                        <Image
                          src={src || "/placeholder.svg"}
                          alt={`Portfolio ${index + 1}`}
                          width={200}
                          height={150}
                          className="rounded-2xl shadow-2xl border-4 border-white/20 group-hover:border-teal-400/50 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-teal-400 to-teal-300 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute top-1/2 right-0 w-12 h-12 bg-gradient-to-r from-teal-300 to-teal-400 rounded-full opacity-25 animate-bounce"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-teal-500/20 to-teal-400/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-gray-900/50">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !text-center !mb-16">
            About <span className="text-teal-400">Me</span>
          </Title>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Card>
                <Space direction="vertical" size="large">
                  <div>
                    <Title level={3} className="!text-2xl !mb-4">
                      <UserOutlined className="mr-3 text-teal-400" />
                      My Journey
                    </Title>
                    <Paragraph className="!text-gray-300 !leading-relaxed !mb-4">
                      I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless
                      user experiences. My journey in web development started 5 years ago, and I've been constantly
                      learning and evolving with the latest technologies.
                    </Paragraph>
                    <Paragraph className="!text-gray-300 !leading-relaxed">
                      When I'm not coding, you can find me exploring new design trends, contributing to open-source
                      projects, or sharing knowledge with the developer community through blog posts and mentoring.
                    </Paragraph>
                  </div>
                  <Space className="!text-teal-400">
                    <EnvironmentOutlined />
                    <Text className="!text-teal-400">San Francisco, CA</Text>
                  </Space>
                </Space>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card>
                <Title level={3} className="!text-2xl !mb-6">
                  <TrophyOutlined className="mr-3 text-teal-400" />
                  Key Achievements
                </Title>
                <Space direction="vertical" size="middle" className="w-full">
                  <div className="flex justify-between items-center p-4 bg-teal-500/10 rounded-lg border border-teal-500/20">
                    <div>
                      <Text className="!text-white !font-semibold">Performance Optimization</Text>
                      <br />
                      <Text className="!text-gray-400 !text-sm">Improved app performance by 40%</Text>
                    </div>
                    <div className="text-3xl text-teal-400">
                      <RocketOutlined />
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-teal-500/10 rounded-lg border border-teal-500/20">
                    <div>
                      <Text className="!text-white !font-semibold">Team Leadership</Text>
                      <br />
                      <Text className="!text-gray-400 !text-sm">Led development teams of 5+ developers</Text>
                    </div>
                    <div className="text-3xl text-teal-400">
                      <TrophyOutlined />
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-teal-500/10 rounded-lg border border-teal-500/20">
                    <div>
                      <Text className="!text-white !font-semibold">User Impact</Text>
                      <br />
                      <Text className="!text-gray-400 !text-sm">Applications serving 100K+ users</Text>
                    </div>
                    <div className="text-3xl text-teal-400">
                      <UserOutlined />
                    </div>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !text-center !mb-16">
            Skills & <span className="text-teal-400">Technologies</span>
          </Title>
          <Row gutter={[32, 32]}>
            {skills.map((skill, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card className="h-full text-center">
                  <div className="text-4xl text-teal-400 mb-4">{skill.icon}</div>
                  <Title level={4} className="!mb-3">
                    {skill.name}
                  </Title>
                  <Tag color="teal" className="!mb-4">
                    {skill.category}
                  </Tag>
                  <Progress
                    percent={skill.level}
                    size="small"
                    strokeColor={{
                      "0%": "#10d4c4",
                      "100%": "#10d4c4",
                    }}
                    trailColor="rgba(6, 212, 195, 0.15)"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Web Applications Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black" id="web-applications" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !mb-6">
              Web <span className="text-teal-400">Applications</span>
            </Title>
            <Paragraph className="!text-xl !text-gray-300 !max-w-3xl !mx-auto">
              Crafting powerful, scalable web applications that deliver exceptional user experiences and drive business
              growth.
            </Paragraph>
          </div>

          {webApplications.map((app, index) => (
            <div key={index} className="mb-20">
              <Row gutter={[48, 48]} align="middle" className={index % 2 === 0 ? "" : "flex-row-reverse"}>
                <Col xs={24} lg={12}>
                  <div
                    className={`fade-in-up ${visibleSections["web-applications"] ? "visible" : ""}`}
                    style={{ "--delay": `${index * 0.2}s` }}
                  >
                    <div className="text-6xl text-teal-400 mb-6 transform transition-transform duration-300 hover:scale-110">
                      {app.icon}
                    </div>
                    <Title level={2} className="!text-3xl lg:!text-4xl !mb-6">
                      {app.title}
                    </Title>
                    <Paragraph className="!text-gray-300 !leading-relaxed !text-lg !mb-8">{app.description}</Paragraph>

                    <div className="mb-6">
                      <Title level={4} className="!text-teal-400 !mb-4">
                        Technologies:
                      </Title>
                      <Space wrap size="middle">
                        {app.technologies.map((tech, techIndex) => (
                          <Tag key={techIndex} color="teal" className="!mb-2 !px-4 !py-2 !text-sm">
                            {tech}
                          </Tag>
                        ))}
                      </Space>
                    </div>

                    <div className="mb-8">
                      <Title level={4} className="!text-teal-400 !mb-4">
                        Key Features:
                      </Title>
                      <ul className="text-gray-300 space-y-3">
                        {app.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-lg">
                            <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                   
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div
                    className={`fade-in-up ${visibleSections["web-applications"] ? "visible" : ""}`}
                    style={{ "--delay": `${index * 0.2 + 0.1}s` }}
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <img
                        src={app.image || "/placeholder.svg?height=400&width=600"}
                        alt={app.title}
                        className="relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-2 border-teal-500/20 group-hover:border-teal-400/50 transition-all duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Applications Section */}
      <section className="py-20 bg-black" id="mobile-applications" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !mb-6">
              Mobile <span className="text-teal-400">Applications</span>
            </Title>
            <Paragraph className="!text-xl !text-gray-300 !max-w-3xl !mx-auto">
              Building native and cross-platform mobile apps that provide seamless experiences across all devices.
            </Paragraph>
          </div>

          {mobileApplications.map((app, index) => (
            <div key={index} className="mb-20">
              <Row gutter={[48, 48]} align="middle" className={index % 2 === 0 ? "" : "flex-row-reverse"}>
                <Col xs={24} lg={12}>
                  <div
                    className={`fade-in-up ${visibleSections["mobile-applications"] ? "visible" : ""}`}
                    style={{ "--delay": `${index * 0.2}s` }}
                  >
                    <div className="text-6xl text-teal-400 mb-6 transform transition-transform duration-300 hover:scale-110">
                      {app.icon}
                    </div>
                    <Title level={2} className="!text-3xl lg:!text-4xl !mb-6">
                      {app.title}
                    </Title>
                    <Paragraph className="!text-gray-300 !leading-relaxed !text-lg !mb-8">{app.description}</Paragraph>

                 

                    <div className="mb-6">
                      <Title level={4} className="!text-teal-400 !mb-4">
                        Technologies:
                      </Title>
                      <Space wrap size="middle">
                        {app.technologies.map((tech, techIndex) => (
                          <Tag key={techIndex} color="teal" className="!mb-2 !px-4 !py-2 !text-sm">
                            {tech}
                          </Tag>
                        ))}
                      </Space>
                    </div>

                    <div className="mb-8">
                      <Title level={4} className="!text-teal-400 !mb-4">
                        Features:
                      </Title>
                      <ul className="text-gray-300 space-y-3">
                        {app.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-lg">
                            <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <Button type="default" size="large" className="!h-14 !px-6" icon={<TabletOutlined />}>
                        iOS App
                      </Button>
                      <Button type="primary" size="large" className="!h-14 !px-6" icon={<MobileOutlined />}>
                        Android App
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div
                    className={`fade-in-up ${visibleSections["mobile-applications"] ? "visible" : ""}`}
                    style={{ "--delay": `${index * 0.2 + 0.1}s` }}
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <img
                        src={app.image || "/placeholder.svg?height=500&width=300"}
                        alt={app.title}
                        className="relative w-full mx-auto h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl border-2 border-teal-500/20 group-hover:border-teal-400/50 transition-all duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Design Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black" id="logo-design" data-animate>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !mb-6">
              Logo <span className="text-teal-400">Design</span>
            </Title>
            <Paragraph className="!text-xl !text-gray-300 !max-w-3xl !mx-auto">
              Creating memorable brand identities through thoughtful logo design that captures your brand's essence and
              values.
            </Paragraph>
          </div>

          {logoDesigns.map((design, index) => (
            <div key={index} className="mb-20">
              <Row gutter={[48, 48]} align="middle" className={index % 2 === 0 ? "" : "flex-row-reverse"}>
                <Col xs={24} lg={12}>
                  <div
                    className={`fade-in-up ${visibleSections["logo-design"] ? "visible" : ""}`}
                    style={{ "--delay": `${index * 0.2}s` }}
                  >
                    <div className="text-6xl text-teal-400 mb-6 transform transition-transform duration-300 hover:scale-110">
                      {design.icon}
                    </div>
                    <Title level={2} className="!text-3xl lg:!text-4xl !mb-6">
                      {design.title}
                    </Title>
                    <Tag color="teal" className="!mb-6 !text-lg !px-4 !py-2">
                      {design.category}
                    </Tag>
                    <Paragraph className="!text-gray-300 !leading-relaxed !text-lg !mb-8">
                      {design.description}
                    </Paragraph>

                    <div className="mb-6">
                      <Title level={4} className="!text-teal-400 !mb-4">
                        Services Included:
                      </Title>
                      <ul className="text-gray-300 space-y-3">
                        {design.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-lg">
                            <div className="w-3 h-3 bg-teal-400 rounded-full mr-4"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <Title level={4} className="!text-teal-400 !mb-4">
                        Deliverables:
                      </Title>
                      <Space wrap size="middle">
                        {design.deliverables.map((deliverable, deliverableIndex) => (
                          <Tag key={deliverableIndex} color="teal" className="!mb-2 !px-4 !py-2 !text-sm">
                            {deliverable}
                          </Tag>
                        ))}
                      </Space>
                    </div>

                    <Button type="primary" size="large" className="!h-14 !px-8 !text-lg" icon={<PictureOutlined />}>
                      View Portfolio
                    </Button>
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div
                    className={`fade-in-up ${visibleSections["logo-design"] ? "visible" : ""}`}
                    style={{ "--delay": `${index * 0.2 + 0.1}s` }}
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <img
                        src={design.image || "/placeholder.svg?height=400&width=600"}
                        alt={design.title}
                        className="relative w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl border-2 border-teal-500/20 group-hover:border-teal-400/50 transition-all duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      {/* <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !text-center !mb-16">
            Featured <span className="text-teal-400">Projects</span>
          </Title>
          <Row gutter={[32, 32]}>
            {projects.map((project, index) => (
              <Col xs={24} lg={12} key={index}>
                <Card
                  className="h-full"
                  cover={
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4">
                        {project.featured && (
                          <Badge count="Featured" style={{ backgroundColor: "#06b6d4", color: "black" }} />
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <Tag color={project.status === "Completed" ? "green" : "orange"}>{project.status}</Tag>
                      </div>
                    </div>
                  }
                >
                  <Card.Meta
                    title={<Title level={4}>{project.title}</Title>}
                    description={
                      <Space direction="vertical" size="middle" className="w-full">
                        <Paragraph className="!text-gray-300">{project.description}</Paragraph>
                        <div>
                          <Text className="!text-gray-400 !text-sm !mb-2 block">Technologies:</Text>
                          <Space wrap>
                            {project.technologies.map((tech, techIndex) => (
                              <Tag key={techIndex} color="teal">
                                {tech}
                              </Tag>
                            ))}
                          </Space>
                        </div>
                      </Space>
                    }
                  />
                  <div className="project-actions">
                    <Button
                      className="project-btn project-btn-outline"
                      icon={<GithubOutlined />}
                      href={project.github}
                      target="_blank"
                    >
                      Code
                    </Button>
                    <Button
                      className="project-btn project-btn-primary"
                      icon={<ExportOutlined />}
                      href={project.live}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section> */}

      {/* Work Experience Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !text-center !mb-16">
            Work <span className="text-teal-400">Experience</span>
          </Title>
          <div className="max-w-4xl mx-auto">
            <Timeline
              items={experience.map((job, index) => ({
                color: job.color,
                dot: <div className="bg-teal-500 rounded-full p-2 text-black">{job.icon}</div>,
                children: (
                  <Card className="ml-4">
                    <Row gutter={[24, 24]} align="middle">
                      <Col xs={24} lg={16}>
                        <Title level={4} className="!mb-2">
                          {job.title}
                        </Title>
                        <Title level={5} className="!text-teal-400 !mb-3">
                          {job.company}
                        </Title>
                        <Paragraph className="!text-gray-300 !leading-relaxed">{job.description}</Paragraph>
                      </Col>
                      <Col xs={24} lg={8}>
                        <div className="text-right">
                          <Space className="!text-gray-400">
                            <CalendarOutlined className="text-teal-400" />
                            <Text className="!text-gray-400">{job.period}</Text>
                          </Space>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
