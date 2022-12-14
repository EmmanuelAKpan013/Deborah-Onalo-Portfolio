import "./DropperPage.css";
import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
import DropperLogo from "../images/dropper/Dropper Assets Main 2.png";

function DropperPage() {
  return (
    <motion.div
      initial={{ opacity: 0, transitionDuration: "2s" }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transitionDuration: "0.5s" }}
    >
      {/* <Navbar /> */}
      <div className="dropper_nav">
        <div className="dropper_navList">
          <div>
            <img src={DropperLogo} alt="" />
          </div>
          <ul>
            <li>Services</li>
            <li>Tracking</li>
            <li>Location</li>
          </ul>
        </div>
        <div className="dropper_navCreateAccount">
          <p>Login</p>
          <button className="create_account">Create a free account</button>
        </div>
      </div>
      <div className="dropper_hero_section">
        <p className="dropper_hero_big-text">
          Simplified Order <br />
          Fulfilment Infrastracture
          <br />
          For African Businesses
        </p>
        <p>
          We are powering a network of micro fulfilment centres, and making them{" "}
          <br />
          accessible as a simple internet infrastructure to power your business.
        </p>
        <form action="">
          <input
            type="text"
            className="dropper_email"
            placeholder="Enter email"
          />
        </form>
        <button className="create-account">Create a free account</button>
        <div className="dropper_expediture-package-dilivered">
          <p>
            24<span className="dropper_expiditure_span">/</span>7
            <br />
            <span className="dropper_ex_text">Expenditure</span>
          </p>
          <p>
            5M<span className="dropper_expiditure_span">+</span>
            <br />
            <span className="dropper_ex_text">Packages Delivered</span>
          </p>
        </div>
      </div>
      <div className="dropper_green_slant-container">
        <div className="dropper_green_slant">
          <p>
            SIMPLIFIED SHIPPING INFRASTRUCTURE * SIMPLIFIED SHIPPING
            INFRASTRUCTURE
          </p>
        </div>
        <div>
          <p>
            SIMPLIFIED SHIPPING INFRASTRUCTURE * SIMPLIFIED SHIPPING
            INFRASTRUCTURE
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default DropperPage;
