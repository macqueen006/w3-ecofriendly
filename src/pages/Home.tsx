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

const Home = () => {
    return (
        <>
            <Header/>
            {/* Hero section */}
            <HeroSection />
            {/* Partners */}
            <PartnersSection />
            {/* Our Services */}
            <ServicesSection />
            {/* Documentation */}
            <WorkflowSection />
            {/* Products */}
            <ProductSection />
            {/* Organization */}
            <TrustSection />
            {/* Testimonials */}
            <Testimonial />
            {/* FAQ */}
            <FAQSection />
            {/* CTA */}
            <CTASection />
            {/* Newsletter */}
            <Newsletter/>
            {/* Footer */}
            <Footer/>
        </>
    )
};

export default Home;