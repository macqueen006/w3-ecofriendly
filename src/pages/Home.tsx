import { lazy, Suspense } from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import SEO from "@/components/SEO";
import { OrganizationSchema, WebSiteSchema } from "@/components/StructuredData";
import { seoConfig } from "@/config/seo";

const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WorkflowSection = lazy(() => import("@/components/WorkflowSection"));
const TrustSection = lazy(() => import("@/components/TrustSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CtaSection"));
const Footer = lazy(() => import("@/components/layout/Footer"));

const Home = () => {
  const seo = seoConfig["/"];
  return (
    <>
      <SEO title={seo.title} description={seo.description} url={seo.url} image={seo.image} />
      <OrganizationSchema />
      <WebSiteSchema />
      <Header />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <PartnersSection />
        <Suspense fallback={null}>
          <ServicesSection />
          <WorkflowSection />
          <TrustSection />
          <FAQSection />
          <CTASection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Home;
