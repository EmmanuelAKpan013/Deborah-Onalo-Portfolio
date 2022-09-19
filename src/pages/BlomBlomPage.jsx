import Navbar from "../components/Navbar";
import "./BlomBlomPage.css";
import blomblomLogo from "../images/blomblom/Group 1421.png";
import blomblomFirstImage from "../images/blomblom/Rectangle 469 (2).png";
import dashboardImage from "../images/blomblom/Dashboard 1.png";
import blomResearchImageOne from "../images/blomblom/sigmund-YUuSAJkS3U4-unsplash (1).png";
import blomResearchImageTwo from "../images/blomblom/green-chameleon-s9CC2SKySJM-unsplash (2).png";
import blomResearchImageThree from "../images/blomblom/leon-m2TU2gfqSeE-unsplash 1 (1).png";

function BlomBlomPage() {
  return (
    <>
      <Navbar />
      <div className="blomLandingImageAndLogo">
        <div className="blomblomLandingImg">
          <img src={blomblomFirstImage} alt="" className="blomFirstImage" />
        </div>
        <div className="blomblom-logo">
          <img src={blomblomLogo} alt="" />
        </div>
      </div>
      <div className="blom-roleContainer">
        <div className="blom-roleContent">
          <h3>ROLE</h3>
          <br />
          <p>Research, UX Design</p>
          <p> UI Design.</p>
        </div>
        <div className="blom-roleContent">
          <h3>TASK</h3>
          <br />
          <p>
            E- commerce Website Redesign, <br /> Digital solution for walk-in
            store and seamsless <br /> end to end appointment scheduling.
          </p>
        </div>
        <div className="blom-roleContent-year">
          <h3>YEAR</h3>
          <br />
          <p>2021 - Present</p>
        </div>
      </div>
      <div className="blom-freeEyeTest">
        <img src={dashboardImage} alt="" />
      </div>
      <div className="blom-work-overview">
        <div>
          <div className="work-overview-text">
            <h4>01</h4>
            <br />
            <h2>
              Work <br />
              OVerview
            </h2>
          </div>
          <div className="work-overview-text-para">
            <div className="blom-work-overview-para-1">
              <p>
                The brand was created because the owners wanted to see eyewear
                afresh – to do it better – and create a brand they would buy.
                They also value honesty, relish buying from similar souls, from
                people who want to stand for something. <br />
                <br /> Therefore, working on this project, I had to ensure that
                the customers experienced eyewear afresh and understood that the
                brand valued honesty while preserving the brand identity.
              </p>
            </div>

            <div className="blom-work-overview-para-2">
              <div className="improveWebsite-section">
                <hr className="blom-horizontal-line" />
                <br />
                <h4>Improve Website User Experience</h4>
                <br />
                <p>
                  With majority of traffic coming from mobile devices, it was
                  essential to improve the user experience across all devices -
                  making the website responsive. Improving website experience is
                  essential in retaining users and even improving revenue.
                </p>
              </div>

              <div className="improveWebsite-section">
                <hr className="blom-horizontal-line" />
                <br />
                <h4>Book an Appointment</h4>
                <br />
                <p>
                  Creating an offline store after being solely an online
                  business since inception, the aim of this solution was to make
                  the offline process as seamless as possible.
                </p>
              </div>

              <div className="improveWebsite-section">
                <hr className="blom-horizontal-line" />
                <br />
                <h4>Eye Test Quiz</h4>
                <br />
                <p>
                  This helps users/customers to make the right glasses choice
                  for them tailored towards their preferences for their try free
                  frames at home experiment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blom-research-section">
        <div>
          {" "}
          <div className="blom-research-header-and-image">
            <div className="blom-research-header">
              <h4>02</h4>
              <br />
              <h2>Research</h2>
            </div>
            <div className="blom-research-image">
              <div>
                <img
                  src={blomResearchImageOne}
                  alt=""
                  className="blom-image-1"
                />
              </div>
              <div className="blom-image-box-2">
                <img
                  src={blomResearchImageThree}
                  alt=""
                  className="blom-image-2"
                />
              </div>
              <div>
                <img
                  src={blomResearchImageTwo}
                  alt=""
                  className="blom-image-3"
                />
              </div>
            </div>
          </div>
          <div className="blom-research-para">
            <div className="blom-research-first-para">
              <p>
                To better understand the main problems our customers and options
                competitors were offering, we started our design process with
                research.
              </p>
            </div>
            <div className="blom-competitorAnalysis">
              <div className="blom-competitor-line-container">
                <hr className="blom-competitor-line" />
              </div>

              <div className="analysis-container">
                <h4>Competitor Analysis</h4>

                <p>
                  We carried out competitor analysis by breaking down their
                  design process for the features we wanted, experiencing their
                  process from end to end across a various range of competitors.
                </p>
              </div>
            </div>
            <br />
            <div className="blom-competitorAnalysis">
              <div className="blom-competitor-line-container">
                <hr className="blom-competitor-line" />
              </div>

              <div className="analysis-container">
                <h4>User Behaviours</h4>
                <p>
                  We studied user behaviours across the existing ecommerce
                  platform and website. We also carried out research on social
                  media where potential customers shared their views unashamedly
                  on what features they would love to see on such website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*

      <div className="blom-insight-section">
        <div className="blom-insight-header">
          <h4>03</h4>
          <br />
          <h2>Insights</h2>
        </div>
        <div className="blom-insight-paragraph">
          <div className="blom-insight-problem-and-solution">
            <div className="blom-insight-line-container">
              <hr className="blom-insight-line" />
            </div>

            <div className="problem-and-solution-container">
              <h4>Main Problems</h4>
              <ol>
                <li>
                  The e-commerce website lacked the option to search for desired
                  products making it so hectic for cutomers to search or filter
                  the products at a go..
                </li>
                <br />
                <li>
                  There was little done of the website to engage potential
                  customers and keep them coming back.
                </li>
                <br />
                <li>
                  The website had a bugs that made it diffcult to use,
                  especially when switching devices.
                </li>
                <br />
                <li>
                  Competitors offered more value on their website such as
                  booking of appointments, eye quizes etc.
                </li>
              </ol>
            </div>
          </div>
          <br />

          <div className="blom-insight-problem-and-solution">
            <div className="blom-insight-line-container">
              <hr className="blom-insight-line" />
            </div>

            <div className="problem-and-solution-container">
              <h4>Solution</h4>
              <ol>
                <li>
                  Addition of a search field and filter to search for desired
                  products and filter the products at a go..
                </li>
                <br />
                <li>
                  Inclusion of features such as quizes to engage customers and
                  aid in their glasses selection process so they don’t get
                  overwhelmed by the amount of glasses on the site.
                </li>
                <br />
                <li>
                  Design of an appointment system that makes it easy to book an
                  appointment at the offline store with ease.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>{" "}
      */}
    </>
  );
}

export default BlomBlomPage;
