import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page not found - W3 Eco Friendly"
        description="The page you requested could not be found. Return to the W3 Eco Friendly homepage or contact us for assistance."
        url="/404"
        robots="noindex, follow"
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-primary">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Page not found</h1>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            The page you’re looking for doesn’t exist or has moved. Please check the address or return to the homepage.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a3d26]">
              Go to homepage
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50">
              Contact us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
