import { Button, Card, Tag, Row, Col, Typography, Space, Steps } from "antd"
import { CodeOutlined, GlobalOutlined, ThunderboltOutlined, ShieldCheckOutlined } from "@ant-design/icons"

const { Title, Paragraph, Text } = Typography

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: <CodeOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Custom Development",
      description: "Tailored solutions built from scratch to meet your specific business requirements.",
    },
    {
      icon: <GlobalOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Responsive Design",
      description: "Websites that look and work perfectly on all devices and screen sizes.",
    },
    {
      icon: <ThunderboltOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Performance Optimized",
      description: "Fast-loading websites optimized for speed and search engine rankings.",
    },
    {
      icon: <ShieldCheckOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable hosting solutions.",
    },
  ]

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PHP",
    "WordPress",
    "Shopify",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Vercel",
  ]

  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your business goals and requirements",
    },
    {
      title: "Planning",
      description: "Creating wireframes and technical specifications",
    },
    {
      title: "Development",
      description: "Building your website with modern technologies",
    },
    {
      title: "Testing",
      description: "Thorough testing across devices and browsers",
    },
    {
      title: "Launch",
      description: "Deploying your website and ongoing support",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Tag color="#14b8a6" style={{ marginBottom: "16px", fontSize: "14px", padding: "4px 12px" }}>
            Web Development
          </Tag>
          <Title level={1} style={{ color: "white", fontSize: "48px", marginBottom: "24px", fontWeight: "bold" }}>
            Custom Web Development Solutions
          </Title>
          <Paragraph
            style={{
              color: "#d1d5db",
              fontSize: "20px",
              marginBottom: "32px",
              maxWidth: "800px",
              margin: "0 auto 32px",
            }}
          >
            Transform your ideas into powerful web applications with our expert development team. We create scalable,
            secure, and user-friendly websites that drive business growth.
          </Paragraph>
          <Space size="large">
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#14b8a6",
                borderColor: "#14b8a6",
                height: "48px",
                fontSize: "16px",
                padding: "0 32px",
              }}
            >
              Start Your Project
            </Button>
            <Button
              size="large"
              style={{
                backgroundColor: "transparent",
                borderColor: "#14b8a6",
                color: "#14b8a6",
                height: "48px",
                fontSize: "16px",
                padding: "0 32px",
              }}
            >
              View Portfolio
            </Button>
          </Space>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Why Choose Our Web Development?
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px", maxWidth: "800px", margin: "0 auto" }}>
              We combine cutting-edge technology with proven methodologies to deliver exceptional results.
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} md={12} lg={6} key={index}>
                <Card
                  style={{
                    backgroundColor: "#1f2937",
                    borderColor: "#374151",
                    textAlign: "center",
                    height: "100%",
                  }}
                  bodyStyle={{ padding: "32px 24px" }}
                >
                  <div style={{ marginBottom: "16px" }}>{feature.icon}</div>
                  <Title level={4} style={{ color: "white", marginBottom: "12px" }}>
                    {feature.title}
                  </Title>
                  <Paragraph style={{ color: "#d1d5db", margin: 0 }}>{feature.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Technologies Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
            Technologies We Use
          </Title>
          <Paragraph style={{ color: "#d1d5db", fontSize: "20px", marginBottom: "48px" }}>
            We work with the latest and most reliable technologies in the industry.
          </Paragraph>
          <Space wrap size="middle">
            {technologies.map((tech, index) => (
              <Tag
                key={index}
                style={{
                  backgroundColor: "rgba(20, 184, 166, 0.2)",
                  color: "#5eead4",
                  border: "none",
                  padding: "8px 16px",
                  fontSize: "14px",
                }}
              >
                {tech}
              </Tag>
            ))}
          </Space>
        </div>
      </div>

      {/* Process Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Our Development Process
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px" }}>
              A proven methodology that ensures project success from start to finish.
            </Paragraph>
          </div>
          <Steps
            direction="horizontal"
            current={-1}
            items={processSteps}
            style={{
              "& .ant-steps-item-title": { color: "white !important" },
              "& .ant-steps-item-description": { color: "#d1d5db !important" },
              "& .ant-steps-item-icon": { backgroundColor: "#14b8a6 !important", borderColor: "#14b8a6 !important" },
            }}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
            Ready to Start Your Web Project?
          </Title>
          <Paragraph
            style={{
              color: "#d1d5db",
              fontSize: "20px",
              marginBottom: "32px",
              maxWidth: "800px",
              margin: "0 auto 32px",
            }}
          >
            Let's discuss your requirements and create a website that exceeds your expectations.
          </Paragraph>
          <Space size="large">
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#14b8a6",
                borderColor: "#14b8a6",
                height: "48px",
                fontSize: "16px",
                padding: "0 32px",
              }}
            >
              Get Free Quote
            </Button>
            <Button
              size="large"
              style={{
                backgroundColor: "transparent",
                borderColor: "#14b8a6",
                color: "#14b8a6",
                height: "48px",
                fontSize: "16px",
                padding: "0 32px",
              }}
            >
              Schedule Consultation
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
