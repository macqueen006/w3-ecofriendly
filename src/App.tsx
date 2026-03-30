import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect, Suspense, lazy } from "react";
import transition from "@/utils/transition";
import { MaintenancePage } from "@/ui/maintenance";
import { PageLoader } from "@/ui/pageloader";

const Home       = lazy(() => import("./pages/Home.tsx"));
const About      = lazy(() => import("./pages/About.tsx"));
const W3b2       = lazy(() => import("./pages/W3b2.tsx"));
const W3ecotech  = lazy(() => import("./pages/W3ecotech.tsx"));
const Impact     = lazy(() => import("./pages/Impact.tsx"));
const ContactUs  = lazy(() => import("./pages/ContactUs.tsx"));

const TransitionHome      = transition(Home);
const TransitionAbout     = transition(About);
const TransitionW3b2      = transition(W3b2);
const TransitionW3ecotech = transition(W3ecotech);
const TransitionImpact    = transition(Impact);
const TransitionContactUs = transition(ContactUs);

function App() {
    const location = useLocation();
    const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/config.json')
            .then(res => res.json())
            .then(data => {
                setIsMaintenanceMode(data.maintenanceMode);
                setIsLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch config:', err);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <PageLoader />;
    if (isMaintenanceMode) return <MaintenancePage />;

    return (
        <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/"           element={<TransitionHome />} />
                    <Route path="/about"      element={<TransitionAbout />} />
                    <Route path="/w3-b2"      element={<TransitionW3b2 />} />
                    <Route path="/w3-ecotech" element={<TransitionW3ecotech />} />
                    <Route path="/impact"     element={<TransitionImpact />} />
                    <Route path="/contact-us" element={<TransitionContactUs />} />
                </Routes>
            </AnimatePresence>
        </Suspense>
    );
}

export default App;