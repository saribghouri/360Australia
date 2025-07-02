"use client"

import { Card, Avatar, Button, Tag, Timeline, Row, Col, Typography, Space, Badge, Progress } from "antd"
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  ExportOutlined,
  CalendarOutlined,
  CodeOutlined,
  GlobalOutlined,
  MobileOutlined,
  DatabaseOutlined,
  BgColorsOutlined,
  DesktopOutlined,
  StarFilled,
  ThunderboltFilled,
  UserOutlined,
  ProjectOutlined,
  TrophyOutlined,
  RocketOutlined,
} from "@ant-design/icons"
import { useEffect, useState } from "react"
import Footer from "../components/footer"
import Header from "../components/header"

const { Title, Paragraph, Text } = Typography

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [typedText, setTypedText] = useState("")
  const fullText = "Full Stack Developer & UI/UX Enthusiast"


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
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
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
      image: "/Screenshot 2025-06-30 084459.png",
      technologies: ["Next.js", "JavaScript", "Stripe", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      status: "Completed",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/Screenshot 2025-06-30 085456.png",
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
      color: "#",
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
    { label: "Years Experience", value: "5+", icon: <CalendarOutlined />, color: "#06b6d4" },
    { label: "Projects Completed", value: "50+", icon: <ProjectOutlined />, color: "#0891b2" },
    { label: "Happy Clients", value: "30+", icon: <UserOutlined />, color: "#0e7490" },
    { label: "Code Commits", value: "2000+", icon: <CodeOutlined />, color: "#155e75" },
  ]

  return (
    <div className=" ">
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
          border-color: rgba(6, 182, 212, 0.6) !important;
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
background: rgba(10, 170, 143) !important;          border: none !important;
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
      `}</style>

      <div className="mt-[140px]">
        <Header />
      </div>


      <section className="relative  flex items-center  justify-between overflow-hidden py-20">
        <div className="floating-shapes">
          <StarFilled className="floating-shape" />
          <ThunderboltFilled className="floating-shape" />
          <CodeOutlined className="floating-shape" />
          <GlobalOutlined className="floating-shape" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Row gutter={[64, 64]} align="middle" justify="center">

            <Col xs={24} lg={14} xl={13}>
              <div className="hero-main-card">
                <Title level={1} className="!text-5xl lg:!text-6xl xl:!text-7xl !font-bold !mb-6 !leading-tight">
                  Hi, I'm <span className="text-teal-400 ">Alex <span className="text-white">Johnson</span></span>
                </Title>
                <Title level={2} className="!text-2xl lg:!text-3xl !text-teal-300 typing-cursor !mb-8">
                  {typedText}
                </Title>
                <Paragraph className="!text-lg !text-gray-300 !leading-relaxed !mb-10 !max-w-2xl">
                  I create beautiful, functional, and user-centered digital experiences. With 5+ years of experience in
                  web development, I specialize in React, Next.js, and modern web technologies.
                </Paragraph>
                <Space size="large" wrap>
                  <Button className="!bg-teal-400 !text-black" size="large" icon={<MailOutlined />}>
                    Get In Touch
                  </Button>
                  <Button className="!border-teal-400 !text-black" size="large" icon={<GithubOutlined />}>
                    View Projects
                  </Button>
                </Space>
              </div>
            </Col>


            <Col xs={24} lg={10} xl={11}>
              <div className="avatar-container">
                <Avatar
                  size={320}
                  src="/placeholder.svg?height=320&width=320"
                  className="!border-4 !border-teal-400/50 hover:scale-105 transition-transform duration-500"
                  style={{
                    boxShadow: "0 0 50px rgba(6, 182, 212, 0.4)",
                  }}
                >
                  <span className="text-6xl font-bold">AJ</span>
                </Avatar>

                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div key={index} className="stats-card">
                      <div className="text-3xl mb-2" style={{ color: stat.color }}>
                        {stat.icon}
                      </div>
                      <Title level={3} className="!text-2xl !mb-1" style={{ color: stat.color }}>
                        {stat.value}
                      </Title>
                      <Text className="!text-gray-400 !text-sm !font-medium">{stat.label}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* About Section */}
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

      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
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
      </section>


      <section className="py-20 bg-black">
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


      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <Title level={2} className="!text-4xl lg:!text-5xl !font-bold !mb-8">
            Let's Work <span className="text-teal-400">Together</span>
          </Title>
          <Paragraph className="!text-xl !mb-12 !max-w-2xl !mx-auto !text-gray-300">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </Paragraph>

          <Row gutter={[32, 32]} justify="center" className="mb-12">
            <Col xs={24} sm={12} lg={8}>
              <Card className="text-center">
                <div className="text-4xl text-teal-400 mb-4">
                  <MailOutlined />
                </div>
                <Title level={4}>Email</Title>
                <Text className="!text-gray-300">alex.johnson@email.com</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className="text-center">
                <div className="text-4xl text-teal-400 mb-4">
                  <PhoneOutlined />
                </div>
                <Title level={4}>Phone</Title>
                <Text className="!text-gray-300">+1 (555) 123-4567</Text>
              </Card>
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <Card className="text-center">
                <div className="text-4xl text-teal-400 mb-4">
                  <EnvironmentOutlined />
                </div>
                <Title level={4}>Location</Title>
                <Text className="!text-gray-300">San Francisco, CA</Text>
              </Card>
            </Col>
          </Row>

          <Space size="large" wrap>
            <Button size="large" icon={<GithubOutlined />}>
              GitHub
            </Button>
            <Button size="large" icon={<LinkedinOutlined />}>
              LinkedIn
            </Button>
            <Button type="primary" size="large" icon={<MailOutlined />}>
              Send Message
            </Button>
          </Space>
        </div>
      </section>

      <Footer />
    </div>
  )
}
