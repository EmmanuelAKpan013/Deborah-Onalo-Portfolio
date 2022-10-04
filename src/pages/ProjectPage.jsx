import { useNavigate } from "react-router-dom";
import "./ProjectPage.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function ProjectPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: "-100%" }}
      // animate={{ x: "calc(100vw - 90%)" }}
      animate={{ y: "0%" }}
      // exit={
      //   {
      //     top: 0,
      //   }
      // }
    >
      <Navbar />
      <div className="project-header">selected projects</div>
      <div className="project-lists">
        <div
          className="project-list item1"
          onClick={() => {
            navigate(`/project/nomadbank`);
          }}
        >
          <p>Fastr - NomadBank</p>
        </div>
        <div
          className="project-list item2"
          onClick={() => {
            navigate(`/project/blomblom`);
          }}
        >
          <p>Website Redesign - Bloobloom</p>
        </div>
        <div
          className="project-list item3"
          onClick={() => {
            navigate(`/project/saudipix`);
          }}
        >
          <p>Saudipix</p>
        </div>
        <div
          className="project-list item4"
          onClick={() => {
            navigate(`/project/investnow`);
          }}
        >
          <p>InvestNow.ng Redesign</p>
        </div>
        <div
          className="project-list item5"
          onClick={() => {
            navigate(`/project/watertalk`);
          }}
        >
          <p className="listName">WaterTalk</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectPage;
