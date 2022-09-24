import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import "./InvestNowPage.css";
import investNowLandingImage from "../images/investnow/Component 12.png";
import investNowLogo from "../images/investnow/investNowLogo.png";
import investNowFirstIphoneDesign from "../images/investnow/Group 9376.png";
import investNowSecondIphoneDesign from "../images/investnow/Group 9375.png";
import investNowThirdIphoneDesign from "../images/investnow/Group 9381.png";
import investNowFourthIphoneDesign from "../images/investnow/Group 9380.png";
import investNowFifthIphoneDesign from "../images/investnow/Group 9377.png";
import investNowSixthIphoneDesign from "../images/investnow/Group 9374.png";
import researchLadyOne from "../images/investnow/sigmund-YUuSAJkS3U4-unsplash.png";
import researchLadyTwo from "../images/investnow/green-chameleon-s9CC2SKySJM-unsplash.png";
import researchManOne from "../images/investnow/leon-m2TU2gfqSeE-unsplash 1.png";
import investOldDesign from "../images/investnow/oldInvestDesign.png";
import investnewDesign from "../images/investnow/investRedesign.png";
import investnewDesign2 from "../images/investnow/investRedesign2.png";
import investOnboarding1 from "../images/investnow/investOnboarding1.png";
import investOnboarding2 from "../images/investnow/investOnboarding2.png";
import investOnboarding3 from "../images/investnow/investOnboarding3.png";
import investOnboarding4 from "../images/investnow/investOnboarding4.png";
import investOnboarding5 from "../images/investnow/investOnboarding5.png";
import investOnboarding6 from "../images/investnow/investOnboarding6.png";
import investOnboarding7 from "../images/investnow/investOnboarding7.png";
import investOnboarding8 from "../images/investnow/investOnboarding8.png";
import investOnboarding9 from "../images/investnow/investOnboarding9.png";
import investOnboarding10 from "../images/investnow/investOnboarding10.png";
import investOnboarding11 from "../images/investnow/investOnboarding11.png";
import investOnboarding12 from "../images/investnow/investOnboarding12.png";
import investOnboarding13 from "../images/investnow/investOnboarding13.png";
import investOnboarding14 from "../images/investnow/investOnboarding14.png";
import investOnboarding15 from "../images/investnow/investOnboarding15.png";
import investOnboarding16 from "../images/investnow/investOnboarding16.png";
import investOnboarding17 from "../images/investnow/investOnboarding17.png";
import investOnboarding18 from "../images/investnow/investOnboarding18.png";
import investOnboarding19 from "../images/investnow/investOnboarding19.png";

function InvestNowPage() {
  return (
    <>
      <Navbar />
      <div className="InvestNowLandingImageAndLogo">
        <div className="InvestNowLandingImg">
          <img
            src={investNowLandingImage}
            alt=""
            className="InvestNowFirstImage"
          />
        </div>
        <div className="investNow-logo">
          <img src={investNowLogo} alt="" />
        </div>
      </div>
      <div className="investNow-roleContainer">
        <div className="investNow-roleContent">
          <h3>ROLE</h3>
          <br />
          <p>UI Design, UX Design</p>
        </div>
        <div className="investNow-roleContent">
          <h3>TASK</h3>
          <br />
          <p>
            Improve the userinterface and <br /> experience of the onboarding
            process
          </p>
        </div>
        <div className="investNow-roleContent year">
          <h3>YEAR</h3>
          <br />
          <p>3 days</p>
        </div>
      </div>{" "}
      {/* <div className="investNow-layoutDesign">
        <div>
          <img src={investNowFirstIphoneDesign} alt="" />
        </div>
        <div>
          <img src={investNowSecondIphoneDesign} alt="" />
        </div>
        <div>
          <img src={investNowThirdIphoneDesign} alt="" />
        </div>
        <div>
          <img src={investNowFourthIphoneDesign} alt="" />
        </div>
        <div>
          <img src={investNowSecondIphoneDesign} alt="" />
        </div>
        <div>
          <img src={investNowSecondIphoneDesign} alt="" />
        </div>
        <div className="investNow-layoutDesign-lastContainer">
          <h3>InvestNow</h3>
          <br />
          <p>
            Investnow is an Integrated online web and mobile apps platform
            powered by United Capital Plc, that enables you to have complete
            management over your investment and financial portfolio to maximize
            profits and cut down losses.
          </p>
        </div>
      </div> */}
      {/* <div className="invest-work-overview">
        <div className="invest-work-over-text">
          <h2>
            Work <br />
            OVerview
          </h2>
        </div>
        <div className="invest-work-over-text-para">
          <div className="invest-solution">
            <h4>Problem</h4>
            <p>
              A typical workflow in the healthcare industry is still paper based
              and it requires a lot of time and manual tracking for enrolling
              patients and medications.
            </p>
          </div>
          <br />
          <br />
          <div className="invest-solution">
            <h4>Solution</h4>
            <p>
              The goal is for Nomad Bank to offer a digital solution that is SME
              focused Digital Banking and Unlocks Working Capital for these
              MSMEs.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="invest-research">
        <div className="invest-research-header-and-image">
          <div className="invest-research-header">
            <h4>03</h4>
            <br />
            <h2>Research</h2>
          </div>
          <div className="invest-research-image">
            <div className="image-box image-box-1">
              <img src={researchLadyOne} alt="" />
            </div>
            <div className=" image-box image-box-2">
              <img src={researchManOne} alt="" className="manImage" />
            </div>
            <div className="image-box image-box-3">
              <img src={researchLadyTwo} alt="" />
            </div>
          </div>
        </div>
        <div className="invest-research-para">
          <div className="invest-para-wrapper">
            <div className="invest-competitorAnalysis">
              <div className="invest-competitor-line-container">
                <hr className="invest-competitor-line" />
              </div>

              <div className="invest-analysis-container">
                <h4>Interviews</h4>
              </div>
            </div>
            <div>
              <p>
                Our team identified the challenges that users were facing by
                observing users use the product, conducting an in-depth analysis
                of online reviews, and diving into the platform ourselves
              </p>
            </div>
          </div>
          <br />
          <div className="invest-para-wrapper">
            <div className="invest-competitorAnalysis">
              <div className="invest-competitor-line-container">
                <hr className="invest-competitor-line" />
              </div>

              <div className="invest-analysis-container">
                <h4>Competitor Analysis</h4>
              </div>
            </div>
            <div>
              <p>
                Additionally, we conducted competitor analysis and discovered
                how cumbersome our product, especially in comparison with other
                similar products, was to use, thus the lack of interest on the
                part of users to continue using it.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="invest-myroleandsolution">
        <div className="invest-myrole">
          <p>My Role & Approach to Solution</p>
        </div>
        <div className="invest-myrolepara">
          <p>
            I worked with another designer on this project, and we started our
            design process with research, then we deep dived into the platform
            to experience ourselves. We wanted to get a sense of what the users
            had been dealing with so far, positive and negative feedback alike.
            We also conducted competitor analysis and learnt and ddocumented
            about how these problems had been solved by other competitors.
            <br /> <br />
            Now the major goal in this project was to improve the user interface
            as it was a bit quite old and to improve the user experience.
            because it was an existing product, we leveraged on the brand
            guidelines already provided.
          </p>
        </div>
      </div> */}
      {/* <div className="invest-redesign">
        <p className="invest-redesign-header">Redesign</p>
        <p className="invest-redesign-splash">Splash Screens</p>
        <div className="invest-redesign-oldandnew">
          <div className="invest-redesign-oldDesign">
            <p>Old Design</p>
            <img src={investOldDesign} alt="" />
          </div>

          <div className="invest-redesign-newDesign">
            <p>New Design</p>
            <img src={investnewDesign} alt="" />
            <img src={investnewDesign2} alt="" />
          </div>
        </div>
        <div className="invest-onboarding-design">
          <p className="invest-onboarding-text">Onboarding Design</p>
          <div className="invest-onboarding-old">
            <p>Old Design</p>
            <br />
            <div className="invest-onboarding-completeOldDesigns">
              <div>
                <img src={investOnboarding1} alt="" />
              </div>
              <div>
                <img src={investOnboarding2} alt="" />
              </div>
              <div>
                <img src={investOnboarding3} alt="" />
              </div>
              <div>
                <img src={investOnboarding4} alt="" />
              </div>
              <div>
                <img src={investOnboarding5} alt="" />
              </div>
              <div>
                <img src={investOnboarding6} alt="" />
              </div>
              <div>
                <img src={investOnboarding7} alt="" />
              </div>
              <div>
                <img src={investOnboarding8} alt="" />
              </div>
              <div>
                <img src={investOnboarding9} alt="" />
              </div>
              <div>
                <img src={investOnboarding10} alt="" />
              </div>
              <div>
                <img src={investOnboarding11} alt="" />
              </div>
              <div>
                <img src={investOnboarding12} alt="" />
              </div>
              <div>
                <img src={investOnboarding13} alt="" />
              </div>
              <div>
                <img src={investOnboarding14} alt="" />
              </div>
              <div>
                <img src={investOnboarding15} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="invest-onboarding-design-new">
          <p className="invest-onboarding-text">
            New Simplified Onboarding Process/Screens
          </p>
          <div className="invest-onboarding-new">
            <p>
              The onborading process was reduced to just 3 steps where all you
              needed was your fullname, email address and phone number and you
              have access to the portal, unlike the previous process that takes
              you through about 15 steps before you get access to the portal.
            </p>
            <div className="invest-onboarding-completeNewDesigns">
              <div>
                <img src={investOnboarding16} alt="" />
              </div>
              <div>
                <img src={investOnboarding17} alt="" />
              </div>
              <div>
                <img src={investOnboarding18} alt="" />
              </div>
              <div>
                <img src={investOnboarding19} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="invest-prototype">
        <p className="invest-prototype-header">Prototype</p>
        <p className="invest-prototype-shortnote">
          A lot more of the design is in the prototype which you can view here :{" "}
          <a
            className="invest-prototype-link"
            href="https://www.figma.com/proto/bWKLc5McNt3x5NU2CCG61m/REDESIGN-OF-INVESTNOW-APP?page-id=10%3A220&node-id=36%3A1907&viewport=241%2C48%2C0.1&scaling=scale-down&starting-point-node-id=36%3A1883"
            target="_blank"
            rel="noreferrer"
          >
            Prototype Link
          </a>
        </p>
      </div> */}
      {/* <div className="invest-key-takeaway-section">
        <h2>Key Takeaways</h2>
        <p>
          - The importance of userfeedback cannot be overemphasized. It helped
          me understand user behaviours better
        </p>
        <div className="invest-pagination-container">
          <Pagination />
        </div>
      </div> */}
    </>
  );
}

export default InvestNowPage;
