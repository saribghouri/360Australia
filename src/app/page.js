"use client";

import MarketingSection from "./components/hero-section";
import Header from "./components/header";
import ServicesSection from "./components/service-section";
import PortfolioSection from "./components/portfolio-section";
import Designer from "./components/designer";
import TestimonialSection from "./components/testomonials";
import BlogSection from "./components/blog";
import ProjectCTASection from "./components/ProjectCTASection";
import Footer from "./components/footer";
import ClientLogosSection from "./components/client-log0-section";
import { useRef } from "react";

export default function Home() {
  const projectCtaRef = useRef(null);

  return (
    <div>
      
      {/* <Header /> */}
      <MarketingSection />
      <ServicesSection scrollToRef={projectCtaRef} />{" "}
      {/* Pass the ref to ServicesSection */}
      <PortfolioSection />
      {/* <Designer/> */}
      <TestimonialSection />
      {/* <BlogSection/> */}
      <ClientLogosSection />
      <ProjectCTASection ref={projectCtaRef} />{" "}
      {/* Pass the ref to ProjectCTASection */}
    </div>
  );
}
