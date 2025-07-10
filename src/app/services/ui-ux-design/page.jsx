import { Button, Card, Tag, Row, Col, Typography, Space } from "antd"
import {
  EyeOutlined,
  BulbOutlined,
  BgColorsOutlined,
  MobileOutlined,
  UsergroupAddOutlined,
  SketchOutlined,
} from "@ant-design/icons"

const { Title, p } = Typography

export default function UIUXDesignPage() {
  const services = [
    {
      icon: <EyeOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "User Research",
      description: "Deep dive into user behavior and preferences to inform design decisions.",
    },
    {
      icon: <BulbOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "UX Strategy",
      description: "Comprehensive user experience strategy aligned with business goals.",
    },
    {
      icon: <BgColorsOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Visual Design",
      description: "Beautiful, modern interfaces that reflect your brand identity.",
    },
    {
      icon: <MobileOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Prototyping",
      description: "Interactive prototypes to test and validate design concepts.",
    },
    {
      icon: <UsergroupAddOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Usability Testing",
      description: "Rigorous testing to ensure optimal user experience.",
    },
    {
      icon: <SketchOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Design Systems",
      description: "Scalable design systems for consistent user experiences.",
    },
  ]

  const designProcess = [
    { title: "Research", description: "User interviews, competitor analysis, and market research" },
    { title: "Define", description: "Problem definition, user personas, and journey mapping" },
    { title: "Ideate", description: "Brainstorming, sketching, and concept development" },
    { title: "Prototype", description: "Wireframes, mockups, and interactive prototypes" },
    { title: "Test", description: "User testing, feedback collection, and iteration" },
    { title: "Deliver", description: "Final designs, style guides, and developer handoff" },
  ]

  const benefits = [
    {
      title: "Increased Conversions",
      description: "Well-designed interfaces can increase conversion rates by up to 200%.",
    },
    { title: "Better User Retention", description: "Intuitive design keeps users engaged and coming back." },
    { title: "Reduced Development Costs", description: "Proper planning and design reduces costly revisions later." },
    { title: "Brand Differentiation", description: "Stand out from competitors with unique, memorable design." },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Tag color="#14b8a6" style={{ marginBottom: "16px", fontSize: "14px", padding: "4px 12px" }}>
            UI/UX Design
          </Tag>
          <h1 level={1} style={{ color: "white", fontSize: "48px", marginBottom: "24px", fontWeight: "bold" }}>
            Design Experiences That Convert
          </h1>
          <p
            style={{
              color: "#d1d5db",
              fontSize: "20px",
              marginBottom: "32px",
              maxWidth: "800px",
              margin: "0 auto 32px",
            }}
          >
            Create intuitive, beautiful, and user-centered designs that drive engagement and business results. Our
            design team combines creativity with data-driven insights.
          </p>
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
              Start Design Project
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
              View Design Portfolio
            </Button>
          </Space>
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h1 level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Complete Design Services
            </h1>
            <p style={{ color: "#d1d5db", fontSize: "20px", maxWidth: "800px", margin: "0 auto" }}>
              From initial research to final implementation, we cover every aspect of the design process.
            </p>
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
                  <h1 level={4} style={{ color: "white", marginBottom: "12px" }}>
                    {service.title}
                  </h1>
                  <p style={{ color: "#d1d5db", margin: 0 }}>{service.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Design Process */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h1 level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Our Design Process
            </h1>
            <p style={{ color: "#d1d5db", fontSize: "20px" }}>
              A systematic approach that ensures every design decision is purposeful and user-centered.
            </p>
          </div>
          <Row gutter={[32, 32]}>
            {designProcess.map((step, index) => (
              <Col xs={24} md={12} lg={8} key={index}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "#14b8a6",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: "bold",
                      margin: "0 auto 16px",
                    }}
                  >
                    {index + 1}
                  </div>
                  <h1 level={4} style={{ color: "white", marginBottom: "8px" }}>
                    {step.title}
                  </h1>
                  <p style={{ color: "#d1d5db", margin: 0 }}>{step.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Benefits Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <h1 level={2} style={{ color: "white", fontSize: "36px", marginBottom: "24px" }}>
                Why Great Design Matters
              </h1>
              <Space direction="vertical" size="large" style={{ width: "100%" }}>
                {benefits.map((benefit, index) => (
                  <div key={index} style={{ display: "flex", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#14b8a6",
                        borderRadius: "50%",
                        marginTop: "8px",
                        marginRight: "12px",
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <h1 level={5} style={{ color: "white", marginBottom: "4px" }}>
                        {benefit.title}
                      </h1>
                      <p style={{ color: "#d1d5db", margin: 0 }}>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </Space>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                style={{
                  backgroundColor: "#1f2937",
                  borderColor: "rgba(20, 184, 166, 0.2)",
                  textAlign: "center",
                }}
                bodyStyle={{ padding: "48px 32px" }}
              >
                <div style={{ marginBottom: "32px" }}>
                  <div style={{ fontSize: "48px", fontWeight: "bold", color: "#14b8a6", marginBottom: "8px" }}>75%</div>
                  <p style={{ color: "#d1d5db", margin: 0 }}>
                    of users judge credibility based on design
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: "48px", fontWeight: "bold", color: "#14b8a6", marginBottom: "8px" }}>38%</div>
                  <p style={{ color: "#d1d5db", margin: 0 }}>
                    will stop engaging if content/layout is unattractive
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
            Ready to Transform Your User Experience?
          </h1>
          <p
            style={{
              color: "#d1d5db",
              fontSize: "20px",
              marginBottom: "32px",
              maxWidth: "800px",
              margin: "0 auto 32px",
            }}
          >
            Let's create designs that not only look amazing but also drive real business results.
          </p>
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
              Get Design Quote
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
              Schedule Design Review
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
