import "./DropperPage.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function DropperPage() {
  return (
    <motion.div
      initial={{ opacity: 0, transitionDuration: "2s" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transitionDuration: "0.5s" }}
    >
      <Navbar />
      <div className="dropper_nav">
        <div className="dropper_navList">
          <ul>
            <li>Dropper</li>
            <li>Services</li>
            <li>Tracking</li>
            <li>Location</li>
          </ul>
        </div>
        <div className="dropper_navCreateAccount">
          <p>Login</p>
          <button>Create a free account</button>
        </div>
      </div>
    </motion.div>
  );
}

export default DropperPage;
