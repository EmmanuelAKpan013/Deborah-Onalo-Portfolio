import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoaderPage from "./pages/LoaderPage";
// import HomePage from "./pages/HomePage";
// import ProjectPage from "./pages/ProjectPage";
// import NomadPage from "./pages/NomadPage";
// import BlomBlomPage from "./pages/BlomBlomPage";
// import SaudipixPage from "./pages/SaudipixPage";
// import InvestNowPage from "./pages/InvestNowPage";
// import WaterTalkPage from "./pages/WaterTalkPage";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        {/* <Routes>
          <Route path="/" element={<LoaderPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/nomadbank" element={<NomadPage />} />
          <Route path="/project/blomblom" element={<BlomBlomPage />} />
          <Route path="/project/saudipix" element={<SaudipixPage />} />
          <Route path="/project/investnow" element={<InvestNowPage />} />
          <Route path="/project/watertalk" element={<WaterTalkPage />} />
        </Routes> */}
        <AnimatedRoutes />
      </Router>
    </>
  );
}

export default App;
