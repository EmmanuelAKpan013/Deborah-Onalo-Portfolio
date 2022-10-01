import { BrowserRouter as Router } from "react-router-dom";
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
