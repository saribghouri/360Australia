"use client"

import { Button, Card, Typography, Row, Col, Space, Statistic, Steps } from "antd"
import {
  CodeOutlined,
  MobileOutlined,
  GlobalOutlined,
  DatabaseOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  StarOutlined,
} from "@ant-design/icons"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const { Title, Paragraph, Text } = Typography

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}


const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const numericEnd = Number.parseInt(end.replace(/\D/g, "")) || 0
      let startTime

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

        setCount(Math.floor(progress * numericEnd))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count}
      {end.replace(/\d/g, "")}
    </span>
  )
}


const FloatingElement = ({ children, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export default function ServicesPage() {
  const services = [
    {
      icon: <CodeOutlined className="text-4xl" />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React & Next.js", "Full-stack solutions", "Responsive design"],
    },
    {
      icon: <MobileOutlined className="text-4xl" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android devices.",
      features: ["React Native", "iOS & Android", "App Store deployment"],
    },
    {
      icon: <GlobalOutlined className="text-4xl" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      features: ["SEO optimization", "Social media", "Content strategy"],
    },
    {
      icon: <DatabaseOutlined className="text-4xl" />,
      title: "Database Solutions",
      description: "Scalable database architecture and optimization for your applications.",
      features: ["Database design", "Performance tuning", "Data migration"],
    },
    {
      icon: <SafetyOutlined className="text-4xl" />,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive security solutions and audits.",
      features: ["Security audits", "Penetration testing", "Compliance"],
    },
    {
      icon: <ThunderboltOutlined className="text-4xl" />,
      title: "Performance Optimization",
      description: "Optimize your applications for speed, efficiency, and user experience.",
      features: ["Speed optimization", "Code review", "Performance monitoring"],
    },
  ]

  const benefits = [
    "24/7 Technical Support",
    "Scalable Solutions",
    "Industry Best Practices",
    "Agile Development Process",
    "Quality Assurance Testing",
    "Post-Launch Maintenance",
  ]

  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your needs and goals",
    },
    {
      title: "Planning",
      description: "Creating detailed project roadmap",
    },
    {
      title: "Development",
      description: "Building your solution with precision",
    },
    {
      title: "Launch",
      description: "Deploying and supporting your project",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
  <div className="mt-[140px]">
        <Header />
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full opacity-60"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-1 h-1 bg-teal-300 rounded-full opacity-40"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-teal-500 rounded-full opacity-50"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

     
      <motion.section
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="absolute inset-0  to-black"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <Title level={1} className="!text-white !text-4xl sm:!text-5xl lg:!text-6xl !font-bold !mb-6">
              Our <span className="text-teal-400 animate-pulse">Services</span>
            </Title>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Paragraph className="!text-xl !text-gray-300 max-w-3xl mx-auto !mb-8">
              We provide comprehensive digital solutions to help your business thrive in the modern world. From web
              development to cybersecurity, we've got you covered.
            </Paragraph>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Space size="large" wrap className="justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="primary"
                  size="large"
                  className="!bg-teal-600 !border-teal-600 hover:!bg-teal-700 hover:!border-teal-700 animate-glow"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Get Started
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="large"
                  className="!border-teal-400 !text-teal-400 hover:!bg-teal-400 hover:!text-black !bg-transparent"
                >
                  View Portfolio
                </Button>
              </motion.div>
            </Space>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-[85%] mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <Title level={2} className="!text-white !text-3xl sm:!text-4xl !font-bold !mb-4">
              What We <span className="text-teal-400">Offer</span>
            </Title>
            <Paragraph className="!text-gray-400 max-w-2xl mx-auto">
              Our comprehensive suite of services is designed to meet all your digital needs
            </Paragraph>
          </motion.div>

          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} md={12} lg={8} key={index}>
                <motion.div
                  variants={scaleIn}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                  className="h-full"
                >
                  <Card
                    className="!bg-[#000] hover:!border-gray-700 !border !border-gray-600 transition-all duration-300 group h-full service-card"
                    hoverable
                  >
                    <FloatingElement delay={index * 0.2}>
                      <div className="text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </FloatingElement>

                    <Title level={4} className="!text-white !mb-3">
                      {service.title}
                    </Title>
                    <Paragraph className="!text-gray-400 !mb-4">{service.description}</Paragraph>

                    <motion.div
                      className="space-y-2 mb-6"
                      initial="hidden"
                      whileInView="visible"
                      variants={staggerContainer}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-300"
                          variants={fadeInLeft}
                        >
                          <CheckCircleOutlined className="text-teal-400 mr-2" />
                          {feature}
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="primary"
                        block
                        className="!bg-teal-600 !border-teal-600 hover:!bg-teal-700 hover:!border-teal-700"
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </motion.section>

   
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-[85%] mx-auto">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <motion.div variants={fadeInLeft}>
                <Title level={2} className="!text-white !text-3xl sm:!text-4xl !font-bold !mb-6">
                  Why Choose <span className="text-teal-400">Our Services</span>
                </Title>
                <Paragraph className="!text-gray-400 !mb-8 !text-lg">
                  We combine technical expertise with creative innovation to deliver solutions that exceed expectations
                  and drive real business results.
                </Paragraph>

                <motion.div variants={staggerContainer}>
                  <Row gutter={[16, 16]}>
                    {benefits.map((benefit, index) => (
                      <Col xs={24} sm={12} key={index}>
                        <motion.div className="flex items-center" variants={fadeInUp} whileHover={{ x: 10 }}>
                          <StarOutlined className="text-teal-400 mr-3" />
                          <Text className="!text-gray-300">{benefit}</Text>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              </motion.div>
            </Col>

            <Col xs={24} lg={12}>
              <motion.div className="relative" variants={fadeInRight}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg blur-xl opacity-20"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <Card className="!bg-black !border-gray-700 relative">
                  <Row gutter={[0, 24]} className="text-center">
                    <Col span={24}>
                      <Statistic
                        title={<span className="!text-gray-300">Projects Completed</span>}
                        value={<AnimatedCounter end="500+" />}
                        valueStyle={{ color: "#14b8a6", fontSize: "2.5rem", fontWeight: "bold" }}
                      />
                    </Col>
                    <Col span={24}>
                      <Statistic
                        title={<span className="!text-gray-300">Client Satisfaction</span>}
                        value={<AnimatedCounter end="98%" />}
                        valueStyle={{ color: "#14b8a6", fontSize: "2.5rem", fontWeight: "bold" }}
                      />
                    </Col>
                    <Col span={24}>
                      <Statistic
                        title={<span className="!text-gray-300">Support Available</span>}
                        value="24/7"
                        valueStyle={{ color: "#14b8a6", fontSize: "2.5rem", fontWeight: "bold" }}
                      />
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </motion.section>

   
      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <Title level={2} className="!text-white !text-3xl sm:!text-4xl !font-bold !mb-4">
              Our <span className="text-teal-400">Process</span>
            </Title>
            <Paragraph className="!text-gray-400 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </Paragraph>
          </motion.div>

          <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
            <Steps direction="horizontal" current={-1} items={processSteps} className="custom-steps animated-steps" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-900/30 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <Title level={2} className="!text-white !text-3xl sm:!text-4xl !font-bold !mb-6">
              Ready to Get <span className="text-teal-400">Started</span>?
            </Title>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Paragraph className="!text-xl !text-gray-300 !mb-8">
              Let's discuss your project and see how we can help bring your vision to life.
            </Paragraph>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Space size="large" wrap className="justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="primary"
                  size="large"
                  className="!bg-teal-600 !border-teal-600 hover:!bg-teal-700 hover:!border-teal-700 animate-glow"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Start Your Project
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="large" className="!border-gray-600 !text-gray-300 hover:!bg-gray-800 !bg-transparent">
                  Schedule Consultation
                </Button>
              </motion.div>
            </Space>
          </motion.div>
        </div>
      </motion.section>
       <Footer />
    </div>
  )
}
