"use client"

import {
  Layout,
  Button,
  Card,
  Badge,
  Input,
  Form,
  Typography,
  Row,
  Col,
  Tag,
  Divider,
  Avatar,
  Statistic,
  Menu,
  Affix,
} from "antd"
import {
  CodeOutlined,
  BgColorsOutlined,
  MobileOutlined,
  ThunderboltOutlined,
  GlobalOutlined,
  SafetyOutlined,
  ArrowRightOutlined,
  RocketOutlined,
  CheckCircleOutlined,
  StarFilled,
} from "@ant-design/icons"
import Image from "next/image"
import Header from "../components/header"


const {  Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

export default function HomePage() {
  const [form] = Form.useForm()

  const services = [
    {
      icon: <CodeOutlined className="text-2xl text-blue-400" />,
      title: "Frontend Development",
      description: "Modern, responsive websites built with React, Next.js, and cutting-edge technologies",
      tags: ["React", "Next.js", "Tailwind"],
      gradient: "from-blue-500 to-teal-500",
    },
    {
      icon: <BgColorsOutlined className="text-2xl text-purple-400" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that provide exceptional user experiences",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      gradient: "from-purple-5000 to-pink-500",
    },
    {
      icon: <MobileOutlined className="text-2xl text-green-400" />,
      title: "Mobile Responsive",
      description: "Fully responsive designs that work perfectly on all devices and screen sizes",
      tags: ["Mobile First", "PWA", "Cross-platform"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <ThunderboltOutlined className="text-2xl text-yellow-400" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, SEO, and user experience",
      tags: ["Core Web Vitals", "SEO", "Analytics"],
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-red-400" />,
      title: "Full-Stack Development",
      description: "Complete web applications with robust backend systems and databases",
      tags: ["Node.js", "Database", "API"],
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: <SafetyOutlined className="text-2xl text-teal-400" />,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and maintenance to keep your website running smoothly",
      tags: ["24/7 Support", "Updates", "Security"],
      gradient: "from-teal-500 to-teal-500",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "WebCraft delivered an exceptional website that exceeded our expectations. The team was professional and responsive throughout the entire process.",
      avatar: "SJ",
    },
    {
      name: "Mike Chen",
      role: "Founder, GrowthCo",
      content:
        "Our new website has significantly improved our online presence. The design is beautiful and the performance is outstanding.",
      avatar: "MC",
    },
    {
      name: "Emily Davis",
      role: "Marketing Director, InnovateLab",
      content:
        "Working with WebCraft was a pleasure. They understood our vision and brought it to life with incredible attention to detail.",
      avatar: "ED",
    },
  ]

  const menuItems = [
    { key: "services", label: <span className="text-gray-300 hover:text-white">Services</span> },
    { key: "portfolio", label: <span className="text-gray-300 hover:text-white">Portfolio</span> },
    { key: "about", label: <span className="text-gray-300 hover:text-white">About</span> },
    { key: "contact", label: <span className="text-gray-300 hover:text-white">Contact</span> },
  ]

  const onFinish = (values) => {
    console.log("Form values:", values)
  }

  return (
    <div className="min-h-screen bg-black">
      <Layout className="bg-black">
        {/* Header */}


        <Content className="bg-black">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-32 px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-6xl mx-auto text-center">
              <Badge
                count="🚀 Professional Web Development"
                className="mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full border border-blue-500/30 backdrop-blur-sm"
              />
              <Title
                level={1}
                className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent leading-tight"
              >
                Build Amazing
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Web Experiences
                </span>
              </Title>
              <Paragraph className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                We create stunning, fast, and user-friendly websites that help your business grow. From concept to
                launch, we've got you covered with cutting-edge technology and beautiful design.
              </Paragraph>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  type="primary"
                  size="large"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 border-none h-14 px-8 rounded-xl font-semibold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
                  icon={<ArrowRightOutlined />}
                >
                  Start Your Project
                </Button>
                <Button
                  size="large"
                  className="h-14 px-8 rounded-xl font-semibold text-lg bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div id="services" className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge
                  count="Our Services"
                  className="mb-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-4 py-2 rounded-full border border-green-500/30"
                />
                <Title level={2} className="text-5xl font-bold mb-6 text-white">
                  What We Do Best
                </Title>
                <Paragraph className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We offer comprehensive web development services to bring your digital vision to life with modern
                  technology and exceptional design
                </Paragraph>
              </div>

              <Row gutter={[32, 32]}>
                {services.map((service, index) => (
                  <Col xs={24} md={12} lg={8} key={index}>
                    <Card
                      hoverable
                      className="h-full bg-gray-900/50 border-gray-700 rounded-2xl backdrop-blur-sm hover:bg-gray-800/50 hover:border-gray-600 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 group"
                      bodyStyle={{ padding: 32 }}
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {service.icon}
                      </div>
                      <Title level={4} className="text-white mb-4 text-xl font-semibold">
                        {service.title}
                      </Title>
                      <Paragraph className="text-gray-400 mb-6 leading-relaxed">{service.description}</Paragraph>
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <Tag
                            key={tag}
                            className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1 rounded-lg"
                          >
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-24 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative max-w-6xl mx-auto">
              <Row gutter={[48, 48]} justify="center">
                <Col xs={12} md={6} className="text-center">
                  <Statistic
                    title={<span className="text-blue-100 text-lg font-medium">Projects Completed</span>}
                    value={150}
                    suffix="+"
                    valueStyle={{ color: "white", fontSize: "3.5rem", fontWeight: "bold" }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <Statistic
                    title={<span className="text-blue-100 text-lg font-medium">Client Satisfaction</span>}
                    value={98}
                    suffix="%"
                    valueStyle={{ color: "white", fontSize: "3.5rem", fontWeight: "bold" }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <Statistic
                    title={<span className="text-blue-100 text-lg font-medium">Years Experience</span>}
                    value={5}
                    suffix="+"
                    valueStyle={{ color: "white", fontSize: "3.5rem", fontWeight: "bold" }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </Col>
                <Col xs={12} md={6} className="text-center">
                  <Statistic
                    title={<span className="text-blue-100 text-lg font-medium">Support Available</span>}
                    value="24/7"
                    valueStyle={{ color: "white", fontSize: "3.5rem", fontWeight: "bold" }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </Col>
              </Row>
            </div>
          </div>

          {/* Portfolio Section */}
          <div id="portfolio" className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge
                  count="Our Work"
                  className="mb-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 px-4 py-2 rounded-full border border-orange-500/30"
                />
                <Title level={2} className="text-5xl font-bold mb-6 text-white">
                  Recent Projects
                </Title>
                <Paragraph className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Take a look at some of our recent work and see how we've helped businesses succeed online with
                  innovative solutions
                </Paragraph>
              </div>

              <Row gutter={[32, 32]}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Col xs={24} md={12} lg={8} key={item}>
                    <Card
                      hoverable
                      cover={
                        <div className="relative overflow-hidden rounded-t-2xl">
                          <Image
                            src={`/placeholder.svg?height=250&width=400`}
                            alt={`Project ${item}`}
                            width={400}
                            height={250}
                            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-bold text-lg mb-2">E-commerce Platform</h3>
                            <p className="text-sm text-gray-200">Modern online store with payment integration</p>
                          </div>
                        </div>
                      }
                      className="bg-gray-900/50 border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-800/50 hover:border-gray-600 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-500"
                    >
                      <div className="p-6">
                        <Card.Meta
                          title={<span className="text-white text-lg font-semibold">E-commerce Platform</span>}
                          description={
                            <span className="text-gray-400">Modern online store with payment integration</span>
                          }
                        />
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Tag className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1 rounded-lg">
                            React
                          </Tag>
                          <Tag className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1 rounded-lg">
                            Next.js
                          </Tag>
                          <Tag className="bg-green-500/20 text-green-300 border-green-500/30 px-3 py-1 rounded-lg">
                            Stripe
                          </Tag>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>

          {/* Testimonials */}
          <div className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge
                  count="Testimonials"
                  className="mb-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 px-4 py-2 rounded-full border border-yellow-500/30"
                />
                <Title level={2} className="text-5xl font-bold text-white">
                  What Our Clients Say
                </Title>
              </div>

              <Row gutter={[32, 32]}>
                {testimonials.map((testimonial, index) => (
                  <Col xs={24} md={8} key={index}>
                    <Card className="h-full bg-gray-900/50 border-gray-700 rounded-2xl backdrop-blur-sm hover:bg-gray-800/50 hover:border-gray-600 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2 transition-all duration-500">
                      <div className="p-8">
                        <div className="flex mb-6">
                          {[...Array(5)].map((_, i) => (
                            <StarFilled key={i} className="text-yellow-400 text-lg mr-1" />
                          ))}
                        </div>
                        <Paragraph className="text-gray-300 mb-8 text-lg leading-relaxed italic">
                          "{testimonial.content}"
                        </Paragraph>
                        <div className="flex items-center">
                          <Avatar
                            size={48}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 mr-4 font-bold text-lg"
                          >
                            {testimonial.avatar}
                          </Avatar>
                          <div>
                            <Text className="text-white font-semibold text-lg block">{testimonial.name}</Text>
                            <Text className="text-gray-400">{testimonial.role}</Text>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>

          {/* Contact Section */}
          <div id="contact" className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <Badge
                  count="Get In Touch"
                  className="mb-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 px-4 py-2 rounded-full border border-pink-500/30"
                />
                <Title level={2} className="text-5xl font-bold mb-6 text-white">
                  Ready to Start Your Project?
                </Title>
                <Paragraph className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Let's discuss your ideas and create something amazing together. We're here to help bring your vision
                  to life with cutting-edge technology.
                </Paragraph>
              </div>

              <Row gutter={[64, 64]} align="middle">
                <Col xs={24} md={10}>
                  <Title level={3} className="text-3xl font-bold mb-8 text-white">
                    Let's Talk
                  </Title>
                  <div className="space-y-6">
                    {[
                      "Free consultation call",
                      "Custom project proposal",
                      "Transparent pricing",
                      "Quick turnaround time",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center group">
                        <CheckCircleOutlined className="text-green-400 text-xl mr-4 group-hover:scale-110 transition-transform duration-300" />
                        <Text className="text-gray-300 text-lg">{item}</Text>
                      </div>
                    ))}
                  </div>
                </Col>

                <Col xs={24} md={14}>
                  <Card className="bg-gray-900/50 border-gray-700 rounded-2xl backdrop-blur-sm shadow-2xl">
                    <div className="p-8">
                      <Form form={form} layout="vertical" onFinish={onFinish} size="large">
                        <Row gutter={16}>
                          <Col xs={24} md={12}>
                            <Form.Item
                              name="name"
                              label={<span className="text-gray-300 font-medium">Your Name</span>}
                              rules={[{ required: true, message: "Please enter your name" }]}
                            >
                              <Input
                                placeholder="Your Name"
                                className="bg-gray-800/50 border-gray-600 text-white rounded-lg h-12 hover:border-blue-500 focus:border-blue-500"
                              />
                            </Form.Item>
                          </Col>
                          <Col xs={24} md={12}>
                            <Form.Item
                              name="email"
                              label={<span className="text-gray-300 font-medium">Your Email</span>}
                              rules={[
                                { required: true, message: "Please enter your email" },
                                { type: "email", message: "Please enter a valid email" },
                              ]}
                            >
                              <Input
                                placeholder="Your Email"
                                className="bg-gray-800/50 border-gray-600 text-white rounded-lg h-12 hover:border-blue-500 focus:border-blue-500"
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Form.Item
                          name="budget"
                          label={<span className="text-gray-300 font-medium">Project Budget</span>}
                        >
                          <Input
                            placeholder="Project Budget"
                            className="bg-gray-800/50 border-gray-600 text-white rounded-lg h-12 hover:border-blue-500 focus:border-blue-500"
                          />
                        </Form.Item>
                        <Form.Item
                          name="message"
                          label={<span className="text-gray-300 font-medium">Project Details</span>}
                          rules={[{ required: true, message: "Please tell us about your project" }]}
                        >
                          <TextArea
                            rows={4}
                            placeholder="Tell us about your project..."
                            className="bg-gray-800/50 border-gray-600 text-white rounded-lg hover:border-blue-500 focus:border-blue-500"
                          />
                        </Form.Item>
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            block
                            className="bg-gradient-to-r from-blue-500 to-purple-600 border-none h-14 rounded-xl font-semibold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
                            icon={<RocketOutlined />}
                          >
                            Send Message
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Content>

        {/* Footer */}
        <Footer className="bg-black border-t border-gray-800 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <Row gutter={[48, 48]}>
              <Col xs={24} md={6}>
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                    <CodeOutlined className="text-white text-xl" />
                  </div>
                  <Title level={4} className="text-white m-0 font-bold">
                    WebCraft
                  </Title>
                </div>
                <Paragraph className="text-gray-400 leading-relaxed">
                  Creating beautiful, functional websites that help businesses grow and succeed online with cutting-edge
                  technology.
                </Paragraph>
              </Col>

              <Col xs={24} md={6}>
                <Title level={5} className="text-white mb-6 font-semibold">
                  Services
                </Title>
                <div className="space-y-3">
                  {["Web Development", "UI/UX Design", "E-commerce", "Maintenance"].map((item) => (
                    <div key={item}>
                      <Text className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                        {item}
                      </Text>
                    </div>
                  ))}
                </div>
              </Col>

              <Col xs={24} md={6}>
                <Title level={5} className="text-white mb-6 font-semibold">
                  Company
                </Title>
                <div className="space-y-3">
                  {["About Us", "Portfolio", "Blog", "Careers"].map((item) => (
                    <div key={item}>
                      <Text className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                        {item}
                      </Text>
                    </div>
                  ))}
                </div>
              </Col>

              <Col xs={24} md={6}>
                <Title level={5} className="text-white mb-6 font-semibold">
                  Contact
                </Title>
                <div className="space-y-3">
                  {["hello@webcraft.com", "+1 (555) 123-4567", "San Francisco, CA"].map((item) => (
                    <div key={item}>
                      <Text className="text-gray-400 hover:text-blue-400 transition-colors duration-300">{item}</Text>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>

            <Divider className="border-gray-800 my-12" />

            <div className="text-center">
              <Text className="text-gray-500">© 2024 WebCraft. All rights reserved.</Text>
            </div>
          </div>
        </Footer>
      </Layout>
    </div>
  )
}
