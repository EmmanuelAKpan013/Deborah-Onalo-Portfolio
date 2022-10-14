import "./HomePage.css";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import designerImage from "../images/designerImage.png";
import productDesignerText from "../images/product designer.png";
import { motion } from "framer-motion";

function HomePage() {
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  // console.log(navigate);

  return (
    <motion.div
      // Transition from Loader page
      initial={{ opacity: 0, transitionDuration: "3s" }}
      animate={{ opacity: 1, transitionDuration: "2s" }}
      exit={{ opacity: 0, transitionDuration: "3s" }}

      // Transition from Project List Page
      // initial={{ y: "-100%" }}
      // animate={{ y: "0%", transitionDuration: "2s" }}
    >
      <Navbar />
      <div className="designer-container">
        <div className="designer-image">
          <img src={designerImage} alt="" />
        </div>
        <div className="designer-text">
          <img src={productDesignerText} alt="" />
        </div>
        <div className="designer-name">ONALO DEBORAH</div>
      </div>
    </motion.div>
  );
}

export default HomePage;
