import { Routes, Route, useLocation } from "react-router-dom";
import LoaderPage from "../pages/LoaderPage";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import NomadPage from "../pages/NomadPage";
import BlomBlomPage from "../pages/BlomBlomPage";
import SaudipixPage from "../pages/SaudipixPage";
import InvestNowPage from "../pages/InvestNowPage";
import WaterTalkPage from "../pages/WaterTalkPage";

// import { AnimatePresence } from "framer-motion/dist/framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    // <AnimatePresence>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LoaderPage />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/project/nomadbank" element={<NomadPage />} />
      <Route path="/project/blomblom" element={<BlomBlomPage />} />
      <Route path="/project/saudipix" element={<SaudipixPage />} />
      <Route path="/project/investnow" element={<InvestNowPage />} />
      <Route path="/project/watertalk" element={<WaterTalkPage />} />
    </Routes>
    // </AnimatePresence>
  );
}

export default AnimatedRoutes;
