import { lazy, Suspense } from "react";
import Header from "../components/layout/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import PartnersSection from "../components/PartnersSection.tsx";
import SEO from "../components/SEO.tsx";
import { OrganizationSchema } from "../components/StructuredData.tsx";

const ServicesSection = lazy(() => import("../components/ServicesSection.tsx"));
const WorkflowSection = lazy(() => import("../components/WorkflowSection.tsx"));
const ProductSection  = lazy(() => import("../components/ProductSection.tsx"));
const TrustSection    = lazy(() => import("../components/TrustSection.tsx"));
const Testimonial     = lazy(() => import("../components/Testimonia.tsx"));
const FAQSection      = lazy(() => import("../components/FAQSection.tsx"));
const CTASection      = lazy(() => import("../components/CtaSection.tsx"));
const Newsletter      = lazy(() => import("../components/Newsletter.tsx"));
const Footer          = lazy(() => import("../components/layout/Footer.tsx"));

const Home = () => {
        return (
            <>
                    <SEO
                        title="Home - Nigeria's leading e-waste management company"
                        description="W3 Eco-friendly Ltd Nigeria's leading e-waste management company. Secure electronic waste collection, certified recycling, data destruction, and refurbished technology solutions."
                        keywords="e-waste management Nigeria, electronic waste recycling Lagos, data destruction services, certified e-waste disposal, refurbished electronics Nigeria, LASEPA approved recycling"
                        url="/"
                        image="https://w3eco-friendly.com/hero.avif"
                    />
                    <OrganizationSchema/>
                    <Header/>
                    <HeroSection/>
                    <PartnersSection/>
                    <Suspense fallback={null}>
                            <ServicesSection/>
                            <WorkflowSection/>
                            <ProductSection/>
                            <TrustSection/>
                            <Testimonial/>
                            <FAQSection/>
                            <CTASection/>
                            <Newsletter/>
                            <Footer/>
                    </Suspense>
            </>
        );
};

export default Home;