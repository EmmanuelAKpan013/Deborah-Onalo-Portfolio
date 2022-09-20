import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import "./BlomBlomPage.css";
import blomblomLogo from "../images/blomblom/Group 1421.png";
import blomblomFirstImage from "../images/blomblom/Rectangle 469 (2).png";
import dashboardImage from "../images/blomblom/Dashboard 1.png";
import blomResearchImageOne from "../images/blomblom/sigmund-YUuSAJkS3U4-unsplash (1).png";
import blomResearchImageTwo from "../images/blomblom/green-chameleon-s9CC2SKySJM-unsplash (2).png";
import blomResearchImageThree from "../images/blomblom/leon-m2TU2gfqSeE-unsplash 1 (1).png";
import artboardOne from "../images/blomblom/Artboard 1.png";
import artboardTwo from "../images/blomblom/Artboard 2.png";
import artboardThree from "../images/blomblom/Artboard 3.png";
import artboardFour from "../images/blomblom/Artboard 4.png";
import artboardFive from "../images/blomblom/Artboard 5.png";
import artboardSix from "../images/blomblom/Artboard 6.png";
import artboardSeven from "../images/blomblom/Artboard 7.png";
import artboardEight from "../images/blomblom/Artboard 8.png";
import artboardNine from "../images/blomblom/Artboard 9.png";
import artboardTen from "../images/blomblom/Artboard 10.png";
import artboardEleven from "../images/blomblom/Artboard 11.png";
import artboardTwelve from "../images/blomblom/Artboard 12.png";
import artboardThirteen from "../images/blomblom/Artboard 13.png";
import vectorToLeft from "../images/blomblom/VectorToLeft.png";
import vectorToBottom from "../images/blomblom/VectorToBottom.png";
import vectorToBottomRight from "../images/blomblom/VectorToBottomRight.png";

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
                <img src={blomResearchImageOne} alt="" />
              </div>
              <div className="blom-image-box-2">
                <img src={blomResearchImageThree} alt="" />
              </div>
              <div>
                <img src={blomResearchImageTwo} alt="" />
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

      <div className="blom-insight-section">
        <div>
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
                    The e-commerce website lacked the option to search for
                    desired products making it so hectic for cutomers to search
                    or filter the products at a go..
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
                    Design of an appointment system that makes it easy to book
                    an appointment at the offline store with ease.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blom-high-fidelity-wireframe">
        <div>
          <h2>High Fidelity Wireframes</h2>
          <p>
            After gathering insights from our research sessions, we used the
            feebacks to make high fidelity designs. And since this was an
            existing product, the design leveraged on the existing design
            direction and style guide. Here are some selected screens
          </p>
          <div className="blom-artboard-container">
            <div className="blom-artboard-left">
              <img src={artboardOne} alt="" />
            </div>
            <div className="blom-artboard-right">
              <div className="blom-leftArrowVector">
                <div>
                  <img src={vectorToLeft} alt="" />
                </div>
                <div className="blom-leftArrowVector-Para">
                  <div>
                    Addition of the search field and a book appointment button
                    on the navigation bar to aid customers eaily access these
                    features
                  </div>
                  <br />
                  <br />
                  <div>
                    <span>
                      Addition of the search field and a book appointment button
                      on the navigation bar to aid customers eaily access these
                      feature
                    </span>
                    <img
                      src={vectorToBottom}
                      alt=""
                      className="blom-bottomArrowVector"
                    />
                  </div>

                  <div className="blom-artboardTwoImg">
                    <img src={artboardTwo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blom-otherScreen">Other Screens</div>
          <div className="blom-artboard-container">
            <div className="blom-artboard-left">
              <img src={artboardThree} alt="" />
            </div>
            <div className="blom-artboard-right">
              <div className="blom-leftArrowVector">
                <div>
                  <img src={vectorToLeft} alt="" />
                </div>
                <div className="blom-leftArrowVector-Para">
                  <div>
                    A landing page that explains what they eye tests , who they
                    are for, how they can get it done and the value it offers
                  </div>
                  <br />
                  <br />
                  <div>
                    <span>
                      On clicking on a book appointment page, a landing page for
                      the particular store comes up, giving a brief view/tour of
                      the store, directions and the stores opeening hours
                    </span>
                    <img
                      src={vectorToBottomRight}
                      alt=""
                      className="blom-bottomRightArrowVector"
                    />
                  </div>
                  <div className="blom-artboardFourImg">
                    <img src={artboardFour} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blom-appointment">Appointment Booking Screens</div>
          <div className="appointment-section">
            <div>
              <img src={artboardFive} alt="" />
            </div>
            <div>
              <img src={artboardSix} alt="" />
            </div>
            <div>
              <img src={artboardSeven} alt="" />
            </div>
            <div>
              <img src={artboardEight} alt="" />
            </div>
            <div>
              <img src={artboardNine} alt="" />
            </div>
            <div>
              <img src={artboardTen} alt="" />
            </div>
            <div>
              <img src={artboardEleven} alt="" />
            </div>
          </div>

          <div className="cancelAndResechedule-section">
            <div>
              <h3>Cancel Appointment</h3>
              <div>
                <img
                  src={artboardTwelve}
                  alt=""
                  className="cancelAndResecheduleImg"
                />
              </div>
            </div>
            <div>
              <h3>Reschedule</h3>
              <div>
                <img
                  src={artboardThirteen}
                  alt=""
                  className="cancelAndResecheduleImg"
                />
              </div>
            </div>
          </div>

          <div className="blom-key-takeaway-section">
            <h2>Key Takeaways</h2>
            <p>
              - The importance of research cannot be overemphasized. I learnt
              about the user behaviours of people in a different continent from
              a different continent through research. I also learnt about how
              artificial intelligence aids in the process of selection of
              glasses which was really marvelling to me and i leanr how to
              design a bit for AR. This is what many companies do and I was
              excited to take part in it.
              <br />
              <br />- Although little iterations have been made on this design,
              you can check it out here{" "}
              <a href="https://bloobloom.com/" rel="noreferrer" target="_blank">
                www.bloobloom.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="blom-pagination-container">
        <Pagination />
      </div>
    </>
  );
}

export default BlomBlomPage;
