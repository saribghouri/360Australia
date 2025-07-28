"use client"

import { useEffect, useRef, useState } from "react"
import {
    Search,
    Megaphone,
    Share2,
    Mail,
    Target,
    Code,
    Braces,
    Palette,
    CloudUpload,
    Server,
    ShoppingCart,
    Laptop,
    LayoutTemplate,
    Gauge,
    WorkflowIcon,
    BookOpen,
    BarChart2,
    Presentation,
    Film,
    Sparkles,
    Package,
    Edit,
} from "lucide-react"
import { Card } from "antd"
import { RequestProposalModal } from "../components/proposal-modal"


export default function ServicesPage() {
    const [visibleSections, setVisibleSections] = useState([])
    const sectionRefs = useRef([])
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number.parseInt(entry.target.getAttribute("data-section") || "0")
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => [...prev.filter((i) => i !== index), index])
                    }
                })
            },
            { threshold: 0.1, rootMargin: "100px" },
        )
        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref)
        })
        return () => observer.disconnect()
    }, [])

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-20 px-4 text-center overflow-hidden  mt-[100px]">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-teal-400/5"></div>
                <div className="relative z-10 max-w-4xl mx-auto ">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white bg-clip-text animate-fade-in">
                        Our  <span className="text-teal-400">Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
                        Comprehensive digital solutions to elevate your business
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto animate-expand"></div>
                </div>
            </section>

            {/* Section 1: Website Development - Hexagonal Grid Design */}
            <section
                ref={(el) => {
                    sectionRefs.current[0] = el
                }}
                data-section="0"
                className="py-20 px-4 relative"
            >
                <div className="max-w-8xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
                            Website <span className="text-teal-400">Development</span>{" "}
                        </h2>
                        <p className="text-xl text-gray-300">Building digital experiences that convert</p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-transparent rounded-3xl"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                            {[
                                {
                                    title: "Custom Website Design",
                                    icon: LayoutTemplate,
                                    desc: "Tailored designs that reflect your brand",
                                },
                                { title: "WordPress Development", icon: Code, desc: "Powerful CMS solutions" },
                                { title: "eCommerce Solutions", icon: ShoppingCart, desc: "Shopify & WooCommerce stores" },
                                { title: "Web App Development", icon: Laptop, desc: "Interactive web applications" },
                                { title: "Landing Pages", icon: WorkflowIcon, desc: "High-converting landing pages" },
                                { title: "Speed Optimization", icon: Gauge, desc: "Lightning-fast performance" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`group relative transform transition-all duration-700 ${visibleSections.includes(0)
                                            ? "translate-y-0 opacity-100 rotate-0"
                                            : "translate-y-20 opacity-0 rotate-12"
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <div className="hexagon-card bg-black backdrop-blur-sm border rounded-2xl p-6 h-full border-teal-500/50 shadow-2xl shadow-teal-500/10 hover:-translate-y-2">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 !text-white">
                                            {typeof item.icon === "string" ? item.icon : <item.icon size={40} className="!text-white" />}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-teal-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                ref={(el) => {
                    sectionRefs.current[1] = el
                }}
                data-section="1"
                className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black"
            >
                <div className="max-w-[80%] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
                            Mobile App <span className="text-teal-400">Development</span>
                        </h2>
                        <p className="text-xl text-gray-300">Native and cross-platform mobile solutions</p>
                    </div>
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 to-teal-600 rounded-full"></div>
                        <div className="space-y-16">
                            {[
                                {
                                    title: "iOS & Android Development",
                                    icon: Code,
                                    desc: "Native apps for both platforms",
                                    side: "left",
                                },
                                { title: "Flutter & React Native", icon: Braces, desc: "Cross-platform solutions", side: "right" },
                                { title: "UI/UX Design for Apps", icon: Palette, desc: "Intuitive user experiences", side: "left" },
                                { title: "App Store Deployment", icon: CloudUpload, desc: "Launch on all major stores", side: "right" },
                                { title: "API & Backend Integration", icon: Server, desc: "Seamless data connectivity", side: "left" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col items-center md:flex-row ${item.side === "left" ? "md:justify-start" : "md:justify-end"
                                        }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-400 rounded-full border-4 border-black z-10"></div>
                                    <div
                                        className={`w-full md:w-5/12 transform transition-all duration-700 ${visibleSections.includes(1)
                                                ? "translate-x-0 opacity-100"
                                                : item.side === "left"
                                                    ? "-translate-x-20 opacity-0"
                                                    : "translate-x-20 opacity-0"
                                            }`}
                                        style={{ transitionDelay: `${index * 200}ms` }}
                                    >
                                        <Card className="!bg-black border !border-teal-400 transition-all duration-500 shadow-xl shadow-teal-500/20">
                                            <div className="p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="text-3xl">
                                                        {typeof item.icon === "string" ? item.icon : <item.icon size={42} className="text-white" />}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                                        <p className="text-gray-400 text-lg">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Digital Marketing - Circular/Radial Design */}
            <section
                ref={(el) => {
                    sectionRefs.current[2] = el
                }}
                data-section="2"
                className="py-20 px-4 relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-transparent to-teal-400/5"></div>
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-16 md:mb-56">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
                            Digital <span className="text-teal-400">Marketing</span>
                        </h2>
                        <p className="text-xl text-gray-300">Amplify your reach and drive growth</p>
                    </div>
                    <div className="relative flex flex-col items-center justify-center py-10 md:min-h-screen md:py-0">
                        {/* Center circle */}
                        <div className="relative z-10 w-42 h-42 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mb-16 md:absolute md:mb-0">
                            <span className="text-5xl">📈</span>
                        </div>
                        {/* Orbiting cards container - Grid for mobile, absolute for desktop */}
                        <div className="grid grid-cols-1 gap-8 w-full max-w-md mx-auto md:relative md:w-full md:h-full md:min-h-[700px]">
                            {[
                                { title: "SEO Optimization", icon: Search, angle: 0 },
                                { title: "Google Ads (PPC)", icon: Megaphone, angle: 72 },
                                { title: "Social Media Marketing", icon: Share2, angle: 144 },
                                { title: "Email Marketing", icon: Mail, angle: 216 },
                                { title: "Lead Generation", icon: Target, angle: 288 },
                            ].map((item, index) => {
                                const radius = 350
                                const x = Math.cos((item.angle * Math.PI) / 180) * radius
                                const y = Math.sin((item.angle * Math.PI) / 180) * radius
                                return (
                                    <div
                                        key={index}
                                        className={`
                      w-full h-55 transform transition-all duration-1000
                      ${visibleSections.includes(2) ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                      md:absolute md:w-65 md:h-55
                    `}
                                        style={{
                                            left: `calc(50% + ${x}px - 110px)`,
                                            top: `calc(50% + ${y}px - 120px)`,
                                            transitionDelay: `${index * 150}ms`,
                                        }}
                                    >
                                        <Card className="w-full h-full !bg-black !border-teal-500 hover:border-teal-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20 hover:scale-110">
                                            <div className="p-4 flex flex-col items-center justify-center h-full text-center">
                                                <div className="text-5xl mb-2">
                                                    {typeof item.icon === "string" ? item.icon : <item.icon size={48} className="text-white" />}
                                                </div>
                                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                            </div>
                                        </Card>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: Graphic Design - Masonry/Pinterest Style */}
            <section
                ref={(el) => {
                    sectionRefs.current[3] = el
                }}
                data-section="3"
                className="py-20 px-4 bg-gradient-to-br from-gray-900/30 to-black"
            >
                <div className="max-w-[95%] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
                            Graphic<span className="text-teal-400"> Design</span>{" "}
                        </h2>
                        <p className="text-xl text-gray-300">Visual storytelling that captivates</p>
                    </div>
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {[
                            { title: "Logo & Branding", icon: Palette, desc: "Memorable brand identities", height: "h-64" },
                            { title: "Brochures & Stationery", icon: BookOpen, desc: "Professional print materials", height: "h-58" },
                            { title: "Social Media Creatives", icon: Share2, desc: "Engaging social content", height: "h-56" },
                            { title: "Infographics", icon: BarChart2, desc: "Data visualization", height: "h-72" },
                            { title: "Presentation Design", icon: Presentation, desc: "Compelling presentations", height: "h-60" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`break-inside-avoid mb-6 transform transition-all duration-700 ${visibleSections.includes(3)
                                        ? "translate-y-0 opacity-100 scale-100"
                                        : "translate-y-20 opacity-0 scale-95"
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <Card
                                    className={`${item.height} !bg-black !border-teal-500 hover:border-teal-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20 group overflow-hidden`}
                                >
                                    <div className="p-6 h-full flex flex-col justify-between relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative z-10">
                                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                {typeof item.icon === "string" ? item.icon : <item.icon size={40} className="text-white" />}
                                            </div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Video & Animation - Interactive Carousel */}
            <section
                ref={(el) => {
                    sectionRefs.current[4] = el
                }}
                data-section="4"
                className="py-20 px-4 relative"
            >
                <div className="max-w-8xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
                            Video &<span className="text-teal-400"> Animation</span>{" "}
                        </h2>
                        <p className="text-xl text-gray-300">Bringing your ideas to life through motion</p>
                    </div>
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-black to-black p-8">
                        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                            {[
                                {
                                    title: "Explainer Videos",
                                    icon: Film,
                                    desc: "Clear, engaging explanations",
                                    color: "from-teal-400 to-teal-600",
                                },
                                {
                                    title: "2D/3D Animation",
                                    icon: Sparkles,
                                    desc: "Dynamic visual storytelling",
                                    color: "from-cyan-400 to-cyan-600",
                                },
                                {
                                    title: "Logo Animation",
                                    icon: Code,
                                    desc: "Animated brand elements",
                                    color: "from-teal-500 to-cyan-500",
                                },
                                {
                                    title: "Product Videos",
                                    icon: Package,
                                    desc: "Showcase your products",
                                    color: "from-cyan-500 to-teal-500",
                                },
                                {
                                    title: "Video Editing",
                                    icon: Edit,
                                    desc: "Professional post-production",
                                    color: "from-teal-600 to-cyan-600",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-80 transform transition-all duration-700 ${visibleSections.includes(4)
                                            ? "translate-x-0 opacity-100 scale-100"
                                            : "translate-x-20 opacity-0 scale-95"
                                        }`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <Card className="h-64 !bg-black border !border-teal-500 transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/20 group overflow-hidden">
                                        <div className="p-6 h-full flex flex-col justify-between relative">
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                            ></div>
                                            <div className="relative z-10">
                                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                                    {typeof item.icon === "string" ? item.icon : <item.icon size={48} className="text-white" />}
                                                </div>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors mb-3">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors text-lg">{item.desc}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 text-center bg-gradient-to-br from-teal-500/10 to-transparent">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        {"Let's discuss how our services can help you achieve your goals"}
                    </p>
                    <button onClick={() => setIsModalOpen(true)} className="group relative px-12 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:scale-105">
                        <span className="relative z-10 text-lg">Get Started Today</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                </div>
            </section>
            <RequestProposalModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}
