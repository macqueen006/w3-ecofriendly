import { Route, Routes, Navigate, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, Suspense, lazy } from "react";
import transition from "@/utils/transition";
import { MaintenancePage } from "@/ui/maintenance";
import { PageLoader } from "@/ui/pageloader";

const Home = lazy(() => import("./pages/Home.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Impact = lazy(() => import("./pages/Impact.tsx"));
const W3Shop = lazy(() => import("./pages/W3Shop.tsx"));
const ContactUs = lazy(() => import("./pages/ContactUs.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const TransitionHome = transition(Home);
const TransitionAbout = transition(About);
const TransitionImpact = transition(Impact);
const TransitionW3Shop = transition(W3Shop);
const TransitionContactUs = transition(ContactUs);
const TransitionNotFound = transition(NotFound);

function App() {
  const location = useLocation();
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/config.json")
      .then((res) => res.json())
      .then((data) => {
        setIsMaintenanceMode(Boolean(data.maintenanceMode));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch config:", err);
        setIsLoading(false);
      });
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  if (isLoading) return <PageLoader />;
  if (isMaintenanceMode) return <MaintenancePage />;

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<TransitionHome />} />
          <Route path="/about" element={<TransitionAbout />} />
          <Route path="/impact" element={<TransitionImpact />} />
          <Route path="/w3-shop" element={<TransitionW3Shop />} />
          <Route path="/contact-us" element={<TransitionContactUs />} />

          {/* Deleted URLs - invisible redirects (primary redirect is server 301 via .htaccess) */}
          <Route path="/w3-b2" element={<Navigate to="/" replace />} />
          <Route path="/w3-b2/*" element={<Navigate to="/" replace />} />
          <Route path="/w3-ecotech" element={<Navigate to="/" replace />} />
          <Route path="/w3-ecotech/*" element={<Navigate to="/" replace />} />
          <Route path="/w3-b2b" element={<Navigate to="/" replace />} />

          <Route path="*" element={<TransitionNotFound />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
