import { Button, Card, Tag, Row, Col, Typography, Space } from "antd"
import {
  CloudOutlined,
  ServerOutlined,
  ShieldCheckOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  SettingOutlined,
} from "@ant-design/icons"

const { Title, Paragraph } = Typography

export default function CloudServicesPage() {
  const services = [
    {
      icon: <CloudOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with minimal downtime.",
    },
    {
      icon: <ServerOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Infrastructure Management",
      description: "Fully managed cloud infrastructure with 24/7 monitoring and support.",
    },
    {
      icon: <DatabaseOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Database Solutions",
      description: "Scalable database solutions with automated backups and optimization.",
    },
    {
      icon: <ShieldCheckOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with compliance for various industry standards.",
    },
    {
      icon: <ThunderboltOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Performance Optimization",
      description: "Optimize your cloud resources for maximum performance and cost efficiency.",
    },
    {
      icon: <SettingOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "DevOps & Automation",
      description: "Streamline deployments with CI/CD pipelines and infrastructure automation.",
    },
  ]

  const cloudProviders = [
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform",
    "DigitalOcean",
    "Vercel",
    "Netlify",
  ]

  const benefits = [
    { title: "99.9% Uptime", description: "Reliable infrastructure with minimal downtime" },
    { title: "Auto Scaling", description: "Automatically scale resources based on demand" },
    { title: "Cost Optimization", description: "Reduce infrastructure costs by up to 40%" },
    { title: "Global Reach", description: "Deploy applications worldwide with CDN integration" },
  ]

  const migrationSteps = [
    { title: "Assessment", description: "Evaluate current infrastructure and requirements" },
    { title: "Strategy", description: "Develop comprehensive migration strategy" },
    { title: "Migration", description: "Execute phased migration with minimal downtime" },
    { title: "Optimization", description: "Optimize performance and costs" },
    { title: "Support", description: "Ongoing monitoring and support" },
  ]

  const caseStudyMetrics = [
    { value: "40%", label: "Cost Reduction" },
    { value: "99.9%", label: "Uptime Achieved" },
    { value: "3x", label: "Performance Boost" },
    { value: "50%", label: "Faster Deployments" },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Tag color="#14b8a6" style={{ marginBottom: "16px", fontSize: "14px", padding: "4px 12px" }}>
            Cloud Services
          </Tag>
          <Title level={1} style={{ color: "white", fontSize: "48px", marginBottom: "24px", fontWeight: "bold" }}>
            Scale Your Business in the Cloud
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
            Leverage the power of cloud computing to build scalable, secure, and cost-effective solutions. From
            migration to management, we handle your entire cloud journey.
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
              Start Cloud Migration
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
              Get Cloud Assessment
            </Button>
          </Space>
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Comprehensive Cloud Solutions
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px", maxWidth: "800px", margin: "0 auto" }}>
              From strategy to implementation, we provide end-to-end cloud services tailored to your business needs.
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} md={12} lg={8} key={index}>
                <Card
                  style={{
                    backgroundColor: "#1f2937",
                    borderColor: "#374151",
                    height: "100%",
                  }}
                  bodyStyle={{ padding: "32px 24px" }}
                >
                  <div style={{ marginBottom: "16px" }}>{service.icon}</div>
                  <Title level={4} style={{ color: "white", marginBottom: "12px" }}>
                    {service.title}
                  </Title>
                  <Paragraph style={{ color: "#d1d5db", margin: 0 }}>{service.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Cloud Providers */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Multi-Cloud Expertise
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px" }}>
              We work with all major cloud providers to find the best solution for your needs.
            </Paragraph>
          </div>
          <Row gutter={[24, 24]}>
            {cloudProviders.map((provider, index) => (
              <Col xs={12} md={8} lg={4} key={index}>
                <Card
                  style={{
                    backgroundColor: "#1f2937",
                    borderColor: "rgba(20, 184, 166, 0.2)",
                    textAlign: "center",
                  }}
                  bodyStyle={{ padding: "24px 16px" }}
                >
                  <Title level={5} style={{ color: "white", margin: 0 }}>
                    {provider}
                  </Title>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Benefits Grid */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Cloud Benefits
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px" }}>
              Experience the advantages of modern cloud infrastructure.
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {benefits.map((benefit, index) => (
              <Col xs={12} md={6} key={index}>
                <Card
                  style={{
                    backgroundColor: "#1f2937",
                    borderColor: "rgba(20, 184, 166, 0.2)",
                    textAlign: "center",
                  }}
                  bodyStyle={{ padding: "32px 24px" }}
                >
                  <Title level={4} style={{ color: "#14b8a6", marginBottom: "8px" }}>
                    {benefit.title}
                  </Title>
                  <Paragraph style={{ color: "#d1d5db", margin: 0 }}>{benefit.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Migration Process */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Our Cloud Migration Process
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px" }}>
              A proven methodology for successful cloud adoption with minimal risk.
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {migrationSteps.map((step, index) => (
              <Col xs={24} md={12} lg={4} key={index}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#14b8a6",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      fontWeight: "bold",
                      margin: "0 auto 16px",
                    }}
                  >
                    {index + 1}
                  </div>
                  <Title level={5} style={{ color: "white", marginBottom: "8px" }}>
                    {step.title}
                  </Title>
                  <Paragraph style={{ color: "#d1d5db", margin: 0, fontSize: "14px" }}>{step.description}</Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Case Study */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "24px" }}>
                Success Story
              </Title>
              <Paragraph style={{ color: "#d1d5db", marginBottom: "24px" }}>
                We helped a growing SaaS company migrate from on-premises infrastructure to AWS, resulting in
                significant improvements across all key metrics.
              </Paragraph>
              <Row gutter={[16, 16]}>
                {caseStudyMetrics.map((metric, index) => (
                  <Col xs={12} key={index}>
                    <div>
                      <div style={{ fontSize: "24px", fontWeight: "bold", color: "#14b8a6" }}>{metric.value}</div>
                      <div style={{ fontSize: "14px", color: "#d1d5db" }}>{metric.label}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                style={{
                  backgroundColor: "#1f2937",
                  borderColor: "rgba(20, 184, 166, 0.2)",
                }}
                bodyStyle={{ padding: "32px" }}
              >
                <Paragraph style={{ fontSize: "18px", fontStyle: "italic", marginBottom: "16px", color: "#d1d5db" }}>
                  "The cloud migration transformed our business. We're now more agile, cost-effective, and can scale
                  instantly to meet demand."
                </Paragraph>
                <div style={{ fontWeight: "600", color: "white" }}>Sarah Johnson</div>
                <div style={{ fontSize: "14px", color: "#d1d5db" }}>CTO, TechStart Inc.</div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
            Ready to Move to the Cloud?
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
            Transform your business with scalable, secure, and cost-effective cloud solutions.
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
              Get Cloud Assessment
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
