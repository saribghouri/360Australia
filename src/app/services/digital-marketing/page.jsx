import { Button, Card, Tag, Row, Col, Typography, Space } from "antd"
import {
  SearchOutlined,
  AimOutlined,
  BarChartOutlined,
  MailOutlined,
  ShareAltOutlined,
  TrendingUpOutlined,
} from "@ant-design/icons"

const { Title, Paragraph } = Typography

export default function DigitalMarketingPage() {
  const services = [
    {
      icon: <SearchOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your website.",
    },
    {
      icon: <AimOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "PPC Advertising",
      description: "Targeted pay-per-click campaigns that maximize ROI and conversions.",
    },
    {
      icon: <ShareAltOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience across social platforms.",
    },
    {
      icon: <MailOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns.",
    },
    {
      icon: <BarChartOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing performance.",
    },
    {
      icon: <TrendingUpOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Conversion Optimization",
      description: "Improve your website's ability to convert visitors into customers.",
    },
  ]

  const results = [
    { metric: "Average Traffic Increase", value: "150%" },
    { metric: "Conversion Rate Improvement", value: "85%" },
    { metric: "ROI on Ad Spend", value: "300%" },
    { metric: "Client Retention Rate", value: "95%" },
  ]

  const platforms = [
    "Google Ads",
    "Facebook Ads",
    "Instagram",
    "LinkedIn",
    "Twitter",
    "YouTube",
    "TikTok",
    "Pinterest",
    "Snapchat",
    "Google Analytics",
  ]

  const processSteps = [
    {
      title: "Audit & Analysis",
      description: "Comprehensive analysis of your current digital presence",
    },
    {
      title: "Strategy Development",
      description: "Custom marketing strategy aligned with your goals",
    },
    {
      title: "Implementation",
      description: "Execute campaigns across multiple channels",
    },
    {
      title: "Optimize & Scale",
      description: "Continuous optimization and scaling of successful campaigns",
    },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Tag color="#14b8a6" style={{ marginBottom: "16px", fontSize: "14px", padding: "4px 12px" }}>
            Digital Marketing
          </Tag>
          <Title level={1} style={{ color: "white", fontSize: "48px", marginBottom: "24px", fontWeight: "bold" }}>
            Grow Your Business Online
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
            Drive more traffic, generate quality leads, and increase sales with our comprehensive digital marketing
            strategies. We help businesses thrive in the digital landscape.
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
              Start Marketing Campaign
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
              Get Free Audit
            </Button>
          </Space>
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Complete Digital Marketing Solutions
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px", maxWidth: "800px", margin: "0 auto" }}>
              From SEO to social media, we provide integrated marketing services that work together to grow your
              business.
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

      {/* Results Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Proven Results
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px" }}>
              Our data-driven approach delivers measurable results for our clients.
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {results.map((result, index) => (
              <Col xs={12} md={6} key={index}>
                <Card
                  style={{
                    backgroundColor: "#1f2937",
                    borderColor: "rgba(20, 184, 166, 0.2)",
                    textAlign: "center",
                  }}
                  bodyStyle={{ padding: "32px 24px" }}
                >
                  <div style={{ fontSize: "36px", fontWeight: "bold", color: "#14b8a6", marginBottom: "8px" }}>
                    {result.value}
                  </div>
                  <div style={{ color: "#d1d5db" }}>{result.metric}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Platforms Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
            Platforms We Master
          </Title>
          <Paragraph style={{ color: "#d1d5db", fontSize: "20px", marginBottom: "48px" }}>
            We're experts across all major digital marketing platforms and tools.
          </Paragraph>
          <Space wrap size="middle">
            {platforms.map((platform, index) => (
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
                {platform}
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
              Our Marketing Process
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px" }}>
              A systematic approach to digital marketing that delivers consistent results.
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {processSteps.map((step, index) => (
              <Col xs={24} md={12} lg={6} key={index}>
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

      {/* CTA Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
            Ready to Accelerate Your Growth?
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
            Let's create a digital marketing strategy that drives real results for your business.
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
              Get Marketing Audit
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
              Schedule Strategy Call
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
