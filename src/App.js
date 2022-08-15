import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/nomadbank" element={<NomadPage />} />
          <Route path="/project/blomblom" element={<BlomBlomPage />} />
          <Route path="/project/saudipix" element={<SaudipixPage />} />
          <Route path="/project/investnow" element={<InvestNowPage />} />
          <Route path="/project/watertalk" element={<WaterTalkPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
