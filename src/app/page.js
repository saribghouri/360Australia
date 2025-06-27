import Image from "next/image";

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

export default function Home() {
  return (
    <div >
    

<Header/>
  
< MarketingSection/>
<ServicesSection/>
<PortfolioSection/>
<Designer/>
<TestimonialSection/>
<BlogSection/>
<ClientLogosSection/>
<ProjectCTASection/>
<Footer/>
    </div>
  );
}
