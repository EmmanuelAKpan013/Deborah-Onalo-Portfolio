import "./HomePage.css";
import Navbar from "../components/Navbar";
import designerImage from "../images/designerImage.png";
import productDesignerText from "../images/product designer.png";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, transitionDuration: "3s" }}
      animate={{ opacity: 1, transitionDuration: "2s" }}
      exit={{ opacity: 0, transitionDuration: "0.5s" }}
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
