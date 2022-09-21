import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NomadPage from "./pages/NomadPage";
import BlomBlomPage from "./pages/BlomBlomPage";
import SaudipixPage from "./pages/SaudipixPage";
// import InvestNowPage from "./pages/InvestNowPage";
// import WaterTalkPage from "./pages/WaterTalkPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/nomadbank" element={<NomadPage />} />
          <Route path="/project/blomblom" element={<BlomBlomPage />} />
          <Route path="/project/saudipix" element={<SaudipixPage />} />
          {/* <Route path="/project/investnow" element={<InvestNowPage />} />
          <Route path="/project/watertalk" element={<WaterTalkPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
