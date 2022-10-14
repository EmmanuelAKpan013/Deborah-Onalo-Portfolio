import "./SaudipixPage.css";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import saudipixLandingImage from "../images/saudipix/Hero Section.png";
import saudipixLogo from "../images/saudipix/Saudipix.png";
import miniIpad from "../images/saudipix/iPad Mini Body.png";
import iphonedesign from "../images/saudipix/saudipixIphone.png";
import projectTimeLine from "../images/saudipix/saudipixProjectTimeline.png";
import personaProfilePic from "../images/saudipix/saudipixEllipse.png";
import homeImg from "../images/saudipix/Home.png";
import accountSettingImg from "../images/saudipix/Account Settings.png";
import contentImg from "../images/saudipix/Content Download.png";
import invoicesImg from "../images/saudipix/Invoices.png";
import leaderBoardImg from "../images/saudipix/Leader Board.png";
import missionDetailsImg from "../images/saudipix/Mission Details Page.png";
import missionPageImg from "../images/saudipix/Missions Page.png";
import profileEditImg from "../images/saudipix/Profile Edit.png";
import userLoginImg from "../images/saudipix/User Login.png";
import userSignupImg from "../images/saudipix/User Sign Up.png";
import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function SaudipixPage() {
  // const [lightTextColor, setLightTextColor] = useState(false);
  // const navigate = useNavigate();
  // navigate("/saudipix");
  // const paginationColor = "black";

  // useEffect(() => {
  //   setLightTextColor(true);
  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0, transitionDuration: "3s" }}
      animate={{ opacity: 1 }}
    >
      <Navbar />
      <div className="saudipixLandingImageAndLogo">
        <div className="saudipixLandingImg">
          <img
            src={saudipixLandingImage}
            alt=""
            className="saudipixFirstImage"
          />
        </div>
        <div className="saudipix-logo">
          <motion.div
            initial={{
              x: "-200%",
              y: "500%",
              // z: "50%",
              // translate: "50%, -50%",
              transitionDuration: "2s",
            }}
            animate={{ x: "0%", y: "0%" }}
          >
            <img src={saudipixLogo} alt="" />
          </motion.div>
        </div>
      </div>
      <div className="saudipix-roleContainer">
        <div className="saudipix-roleContent">
          <h3>ROLE</h3>
          <br />
          <p>UI Design, UX Design</p>
        </div>
        <div className="saudipix-roleContent">
          <h3>TASK</h3>
          <br />
          <p>
            Improve the userinterface and <br /> experience of the onboarding
            process
          </p>
        </div>
        <div className="saudipix-roleContent year">
          <h3>YEAR</h3>
          <br />
          <p>3 days</p>
        </div>
      </div>
      <div className="saudipix-miniIpad-section">
        <div>
          <img src={miniIpad} alt="" />
          <img src={iphonedesign} alt="" />
        </div>
      </div>
      <div className="saudipix-background-section">
        <div>
          <div className="saudipix-background-large-text">
            <h2>Background</h2>
          </div>
          <div className="saudipix-background-paragraph">
            <div className="saudipix-para">
              <h4>01</h4>
              <p className="saudipix-problemAndSolution">Problem</p>
              <p>
                Arabians are a minority group that often feels misrepresented in
                the media. This makes it difficult to find quality images that
                accurately represent them and their culture for use in their
                digital solutions. Saudipix's images solve this problem by
                creating a library of Arabian-made photos curated specifically
                for Arabs, making it easier for them to tell the stories they
                want to tell.
              </p>
              <br />
            </div>
            <div className="saudipix-para">
              <h4>02</h4>
              <p className="saudipix-problemAndSolution">Solution</p>
              <p>
                Provide a product that provides these pictures that are
                culturally aligned and acceptable exclusively for Arabians and
                by Arabians. Encourage them to post arabian pictures by engaging
                in weekly competitions that have good prizes and awarding top
                contributors per month.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="saudipix-myroleandsolution">
        <div>
          <div className="saudipix-myrole">
            <h4>03</h4>
            <p>My Role & Approach to Solution</p>
          </div>
          <div className="saudipix-myrolepara">
            <p>
              I worked with another designer on this project, and we started our
              design process with research, then we deep dived into the platform
              to experience ourselves. We wanted to get a sense of what the
              users had been dealing with so far, positive and negative feedback
              alike. We also conducted competitor analysis and learnt and
              ddocumented about how these problems had been solved by other
              competitors.
              <br /> <br />
              Now the major goal in this project was to improve the user
              interface as it was a bit quite old and to improve the user
              experience. because it was an existing product, we leveraged on
              the brand guidelines already provided.
            </p>
          </div>
        </div>
      </div>
      <div className="saudipix-projectTimeline">
        <img src={projectTimeLine} alt="" />
      </div>
      <div className="saudipix-persona">
        <div>
          <div className="saudipix-persona-image-description">
            <div className="saudipix-persona-image">
              <img src={personaProfilePic} alt="" />
            </div>
            <div className="saudipix-persona-description">
              <h2>Aairah Aakifah</h2>
              <br />
              <p className="saudipix-persona-first-paragraph">
                A single 27 year old male who currently lives in Saudi Arabia.
                He finished his master in design and arts and <br /> has just
                gotten a job as a g. She is currentraphics designer. He is
                single and like to go out with friends <br /> on long holidays.
              </p>
              <br />
            </div>
          </div>
          <div className="saudipix-card-container">
            <div className="saudipix-card">
              <h3>Core needs</h3>
              <ul>
                <li>
                  <p>
                    Need to design fliers and posters that promote the company’s
                    services.
                  </p>
                </li>
                <li>
                  <p>
                    Needs to design these fliers that are relatable and aligns
                    with the country’s culture.
                  </p>
                </li>
              </ul>
            </div>
            <div className="saudipix-card">
              <h3>Frustrations</h3>
              <ul>
                <li>
                  <p>
                    People not responding to information due to lack of
                    relatability
                  </p>
                </li>
                <li>
                  <p>
                    Not much choice and comparison of images available that are
                    culturally inclined{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="saudipix-high-fidelity-wireframe">
        <div>
          <h2>High Fidelity Wireframes</h2>
          <p>
            After gathering insights from our research sessions, we used the
            feebacks to make high fidelity designs. And since this was an
            existing product, the design leveraged on the existing design
            direction and style guide. Here are some selected screens
          </p>
          <div className="saudipix-layoutDesign">
            <div className="saudipix-left-right-layout">
              <div>
                <img src={homeImg} alt="" />
              </div>
              <div>
                <p className="saudipix-layout-shorttext">
                  Searching for an image
                </p>
                <img src={contentImg} alt="" />
              </div>
              <div>
                <img src={missionPageImg} alt="" />
              </div>
              <div>
                <img src={leaderBoardImg} alt="" />
              </div>
            </div>

            <div className="saudipix-left-right-layout">
              <div>
                <img src={userSignupImg} alt="" />
              </div>
              <div>
                <p className="saudipix-layout-shorttext">Login Screen</p>
                <img src={userLoginImg} alt="" />
              </div>
              <div>
                <p className="saudipix-layout-shorttext">Mission Details</p>
                <img src={missionDetailsImg} alt="" />
              </div>
              <div>
                <img src={accountSettingImg} alt="" />
              </div>
              <div>
                <img src={profileEditImg} alt="" />
              </div>
            </div>
            <div className="saudipix-bottom-layout">
              <img src={invoicesImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*

      <div className="saudipix-pagination-container">
        <Pagination />
      </div>{" "}
      */}
    </motion.div>
  );
}

export default SaudipixPage;
