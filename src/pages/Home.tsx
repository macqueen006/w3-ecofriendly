import Header from "../components/layout/Header.tsx";
import HeroSection from "../components/HeroSection.tsx";
import PartnersSection from "../components/PartnersSection.tsx";
import ServicesSection from "../components/ServicesSection.tsx";
import WorkflowSection from "../components/WorkflowSection.tsx";
import ProductSection from "../components/ProductSection.tsx";
import TrustSection from "../components/TrustSection.tsx";
import Testimonial from "../components/Testimonia.tsx";
import FAQSection from "../components/FAQSection.tsx";
import CTASection from "../components/CtaSection.tsx";
import Newsletter from "../components/Newsletter.tsx";
import Footer from "../components/layout/Footer.tsx";
import SEO from "../components/SEO.tsx";
import {OrganizationSchema} from "../components/StructuredData.tsx";

const Home = () => {
    return (
        <>
            <SEO
                title="Home - Nigeria's leading e-waste management company"
                description="W3 Eco-friendly Ltd - Nigeria's leading e-waste management company. Secure electronic waste collection, certified recycling, data destruction, and refurbished technology solutions."
                keywords="e-waste management Nigeria, electronic waste recycling Lagos, data destruction services, certified e-waste disposal, refurbished electronics Nigeria, LASEPA approved recycling"
                url="/"
                image="https://w3eco-friendly.com/hero.png"
            />
            <OrganizationSchema/>

            <Header/>
            {/* Hero section */}
            <HeroSection/>
            {/* Partners */}
            <PartnersSection/>
            {/* Our Services */}
            <ServicesSection/>
            {/* Documentation */}
            <WorkflowSection/>
            {/* Products */}
            <ProductSection/>
            {/* Organization */}
            <TrustSection/>
            {/* Testimonials */}
            <Testimonial/>
            {/* FAQ */}
            <FAQSection/>
            {/* CTA */}
            <CTASection/>
            {/* Newsletter */}
            <Newsletter/>
            {/* Footer */}
            <Footer/>
        </>
    )
};

export default Home;