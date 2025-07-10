import { Button, Card, Tag, Row, Col, Typography, Space } from "antd"
import {
  ShoppingCartOutlined,
  CreditCardOutlined,
  TruckOutlined,
  ShieldCheckOutlined,
  BarChartOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons"

const { Title, Paragraph } = Typography

export default function EcommercePage() {
  const features = [
    {
      icon: <ShoppingCartOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Custom Online Stores",
      description: "Tailored e-commerce solutions built for your specific business needs.",
    },
    {
      icon: <CreditCardOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Payment Integration",
      description: "Secure payment gateways supporting multiple payment methods.",
    },
    {
      icon: <TruckOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Inventory Management",
      description: "Advanced inventory tracking and management systems.",
    },
    {
      icon: <ShieldCheckOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Security & Compliance",
      description: "PCI DSS compliant solutions with enterprise-grade security.",
    },
    {
      icon: <BarChartOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "Analytics & Reporting",
      description: "Comprehensive insights into sales, customers, and performance.",
    },
    {
      icon: <CustomerServiceOutlined style={{ fontSize: "24px", color: "#14b8a6" }} />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance.",
    },
  ]

  const platforms = ["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom Solutions", "Headless Commerce"]

  const integrations = [
    "Stripe",
    "PayPal",
    "Square",
    "Klarna",
    "Afterpay",
    "Mailchimp",
    "HubSpot",
    "Google Analytics",
    "Facebook Pixel",
  ]

  const successStories = [
    { value: "250%", label: "Sales Increase", category: "Fashion Retailer" },
    { value: "180%", label: "Conversion Rate", category: "Electronics Store" },
    { value: "300%", label: "Traffic Growth", category: "Home & Garden" },
  ]

  const benefits = [
    { title: "Mobile-First Design", description: "Optimized for mobile shopping with responsive design." },
    { title: "SEO Optimized", description: "Built-in SEO features to help customers find your products." },
    { title: "Scalable Architecture", description: "Grows with your business from startup to enterprise." },
    { title: "Advanced Analytics", description: "Detailed insights to optimize your sales performance." },
  ]

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000000" }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Tag color="#14b8a6" style={{ marginBottom: "16px", fontSize: "14px", padding: "4px 12px" }}>
            E-commerce Solutions
          </Tag>
          <Title level={1} style={{ color: "white", fontSize: "48px", marginBottom: "24px", fontWeight: "bold" }}>
            Build Your Online Empire
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
            Create powerful e-commerce experiences that convert visitors into customers. From small boutiques to
            enterprise marketplaces, we build stores that sell.
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
              Start Your Store
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
              View Store Examples
            </Button>
          </Space>
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Complete E-commerce Solutions
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px", maxWidth: "800px", margin: "0 auto" }}>
              Everything you need to launch, manage, and grow your online business successfully.
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} md={12} lg={8} key={index}>
                <Card
                  style={{
                    backgroundColor: "#1f2937",
                    borderColor: "#374151",
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

      {/* Platforms Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              E-commerce Platforms We Work With
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px" }}>
              We're experts in all major e-commerce platforms and can build custom solutions.
            </Paragraph>
          </div>
          <Row gutter={[24, 24]}>
            {platforms.map((platform, index) => (
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
                    {platform}
                  </Title>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Success Stories */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
              Success Stories
            </Title>
            <Paragraph style={{ color: "#d1d5db", fontSize: "20px" }}>
              Real results from real businesses we've helped grow online.
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {successStories.map((story, index) => (
              <Col xs={24} md={8} key={index}>
                <Card
                  style={{
                    backgroundColor: "#1f2937",
                    borderColor: "rgba(20, 184, 166, 0.2)",
                    textAlign: "center",
                  }}
                  bodyStyle={{ padding: "32px 24px" }}
                >
                  <div style={{ fontSize: "36px", fontWeight: "bold", color: "#14b8a6", marginBottom: "8px" }}>
                    {story.value}
                  </div>
                  <div style={{ color: "#d1d5db", marginBottom: "8px" }}>{story.label}</div>
                  <div style={{ color: "#9ca3af", fontSize: "14px" }}>{story.category}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Integrations */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
            Seamless Integrations
          </Title>
          <Paragraph style={{ color: "#d1d5db", fontSize: "20px", marginBottom: "48px" }}>
            Connect your store with the tools and services you already use.
          </Paragraph>
          <Space wrap size="middle">
            {integrations.map((integration, index) => (
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
                {integration}
              </Tag>
            ))}
          </Space>
        </div>
      </div>

      {/* Benefits Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "24px" }}>
                Why Choose Our E-commerce Solutions?
              </Title>
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
                      <Title level={5} style={{ color: "white", marginBottom: "4px" }}>
                        {benefit.title}
                      </Title>
                      <Paragraph style={{ color: "#d1d5db", margin: 0 }}>{benefit.description}</Paragraph>
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
                  <div style={{ fontSize: "48px", fontWeight: "bold", color: "#14b8a6", marginBottom: "8px" }}>
                    $2.3T
                  </div>
                  <Paragraph style={{ color: "#d1d5db", margin: 0 }}>Global e-commerce sales in 2023</Paragraph>
                </div>
                <div>
                  <div style={{ fontSize: "48px", fontWeight: "bold", color: "#14b8a6", marginBottom: "8px" }}>15%</div>
                  <Paragraph style={{ color: "#d1d5db", margin: 0 }}>Annual growth rate</Paragraph>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ backgroundColor: "#000000", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Title level={2} style={{ color: "white", fontSize: "36px", marginBottom: "16px" }}>
            Ready to Launch Your Online Store?
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
            Join thousands of successful businesses selling online. Let's build your e-commerce success story.
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
              Get Store Quote
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
              Schedule Demo
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
