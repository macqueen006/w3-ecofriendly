import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About.tsx";
import Impact from "./pages/Impact.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Home from "./pages/Home.tsx";
import W3b2 from "./pages/W3b2.tsx";
import W3ecotech from "./pages/W3ecotech.tsx";
import transition from "./transition.tsx";

const TransitionHome = transition(Home);
const TransitionAbout = transition(About);
const TransitionW3b2 = transition(W3b2);
const TransitionW3ecotech = transition(W3ecotech);
const TransitionImpact = transition(Impact);
const TransitionContactUs = transition(ContactUs);

function App() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<TransitionHome />} />
                <Route path="/about" element={<TransitionAbout />} />
                <Route path="/w3-b2" element={<TransitionW3b2 />} />
                <Route path="/w3-ecotech" element={<TransitionW3ecotech />} />
                <Route path="/impact" element={<TransitionImpact />} />
                <Route path="/contact-us" element={<TransitionContactUs />} />
            </Routes>
        </AnimatePresence>
    );
}

export default App;