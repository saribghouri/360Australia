import { Button, Card, Tag, Row, Col, Typography, Space, Statistic } from "antd"
import { MobileOutlined, TabletOutlined, DesktopOutlined, StarFilled } from "@ant-design/icons"

const { Title, p } = Typography

export default function MobileDevelopmentPage() {
  const platforms = [
    {
      icon: <MobileOutlined style={{ fontSize: "32px", color: "#14b8a6" }} />,
      title: "iOS Development",
      description: "Native iOS apps built with Swift and SwiftUI for optimal performance.",
    },
    {
      icon: <DesktopOutlined style={{ fontSize: "32px", color: "#14b8a6" }} />,
      title: "Android Development",
      description: "Native Android apps using Kotlin and modern Android development practices.",
    },
    {
      icon: <TabletOutlined style={{ fontSize: "32px", color: "#14b8a6" }} />,
      title: "Cross-Platform",
      description: "React Native and Flutter apps that work seamlessly across platforms.",
    },
  ]

  const features = [
    "Native Performance",
    "Offline Functionality",
    "Push Notifications",
    "In-App Purchases",
    "Social Integration",
    "Analytics Integration",
    "Cloud Synchronization",
    "Biometric Authentication",
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Tag color="#14b8a6" style={{ marginBottom: "16px", fontSize: "14px", padding: "4px 12px" }}>
            Mobile Development
          </Tag>
          <h1 level={1} style={{ color: "white", fontSize: "48px", marginBottom: "24px", fontWeight: "bold" }}>
            Mobile Apps That Users Love
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
            Create engaging mobile experiences with our expert mobile development team. We build native and
            cross-platform apps that deliver exceptional user experiences.
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
              Start Your App
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
              View Case Studies
            </Button>
          </Space>
        </div>
      </div>

      {/* Platforms Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h1 level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Multi-Platform Expertise
            </h1>
            <p style={{ color: "#d1d5db", fontSize: "20px", maxWidth: "800px", margin: "0 auto" }}>
              Whether you need native performance or cross-platform efficiency, we've got you covered.
            </p>
          </div>
          <Row gutter={[32, 32]}>
            {platforms.map((platform, index) => (
              <Col xs={24} md={8} key={index}>
                <Card
                  style={{
                    backgroundColor: "#1f2937",
                    borderColor: "#374151",
                    textAlign: "center",
                    height: "100%",
                  }}
                  bodyStyle={{ padding: "32px 24px" }}
                >
                  <div style={{ marginBottom: "24px" }}>{platform.icon}</div>
                  <h1 level={4} style={{ color: "white", marginBottom: "12px" }}>
                    {platform.title}
                  </h1>
                  <p style={{ color: "#d1d5db", margin: 0 }}>{platform.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h1 level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Advanced Mobile Features
            </h1>
            <p style={{ color: "#d1d5db", fontSize: "20px" }}>
              We integrate cutting-edge features to make your app stand out in the marketplace.
            </p>
          </div>
          <Row gutter={[24, 24]}>
            {features.map((feature, index) => (
              <Col xs={12} md={6} key={index}>
                <Card
                  size="small"
                  style={{
                    backgroundColor: "#1f2937",
                    borderColor: "rgba(20, 184, 166, 0.2)",
                  }}
                  bodyStyle={{ padding: "16px", display: "flex", alignItems: "center" }}
                >
                  <StarFilled style={{ color: "#14b8a6", marginRight: "8px" }} />
                  <span style={{ color: "white", fontWeight: "500" }}>{feature}</span>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Row gutter={[32, 32]} justify="center">
            <Col xs={12} md={6}>
              <div style={{ textAlign: "center" }}>
                <Statistic
                  title="Apps Launched"
                  value="50+"
                  valueStyle={{ color: "#14b8a6", fontSize: "36px", fontWeight: "bold" }}
                  titleStyle={{ color: "#d1d5db" }}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div style={{ textAlign: "center" }}>
                <Statistic
                  title="Downloads"
                  value="1M+"
                  valueStyle={{ color: "#14b8a6", fontSize: "36px", fontWeight: "bold" }}
                  titleStyle={{ color: "#d1d5db" }}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div style={{ textAlign: "center" }}>
                <Statistic
                  title="Average Rating"
                  value="4.8★"
                  valueStyle={{ color: "#14b8a6", fontSize: "36px", fontWeight: "bold" }}
                  titleStyle={{ color: "#d1d5db" }}
                />
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div style={{ textAlign: "center" }}>
                <Statistic
                  title="Client Satisfaction"
                  value="99%"
                  valueStyle={{ color: "#14b8a6", fontSize: "36px", fontWeight: "bold" }}
                  titleStyle={{ color: "#d1d5db" }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
            Ready to Build Your Mobile App?
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
            Transform your idea into a successful mobile application with our expert development team.
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
              Get App Quote
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
              Book Discovery Call
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
