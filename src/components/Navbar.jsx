import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  const navigate = useNavigate();
  // const handleClick = () => {
  //   if (window.location.pathname === "/project" && navigate("/homepage")) {
  //     window.alert("You navigated to the home page");
  //   }
  // };

  return (
    <div className="navbar">
      <Link to="/homepage">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </Link>

      <Link to="/project" className="link">
        <div className="project-bar">Projects</div>
      </Link>

      <a
        href="https://drive.google.com/file/d/1oaZOcy_b37e8VFCUu7ljMuF5Gm4PjmRV/view"
        rel="noreferrer"
        target="_blank"
      >
        <div className="resume-bar">Resume</div>
      </a>
    </div>
  );
}

export default Navbar;
