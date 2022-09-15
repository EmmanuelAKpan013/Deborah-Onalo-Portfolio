import "./NomadPage.css";
import Navbar from "../components/Navbar";
import nomadLogo from "../images/nomad/nomad.png";
import image1 from "../images/nomad/Rectangle 469.png";
import image2 from "../images/nomad/Rectangle 498.png";
import image3 from "../images/nomad/Rectangle 499.png";
import image4 from "../images/nomad/Rectangle 500.png";
import macbookContent from "../images/nomad/15_ Macbook Pro Mockup Front view.png";
import researchLadyOne from "../images/nomad/sigmund-YUuSAJkS3U4-unsplash.png";
import researchLadyTwo from "../images/nomad/green-chameleon-s9CC2SKySJM-unsplash.png";
import researchManOne from "../images/nomad/leon-m2TU2gfqSeE-unsplash 1.png";
import meritThomas from "../images/nomad/meritt-thomas-52fj00DaOPA-unsplash.png";
import girlImageFullWidth from "../images/nomad/green-chameleon-s9CC2SKySJM-unsplash (1).png";
import wireframeImage1 from "../images/nomad/Group.png";
import wireframeImage2 from "../images/nomad/Group2.png";
import wireframeImage3 from "../images/nomad/Group3.png";
import wireframeImage4 from "../images/nomad/Group4.png";
import customerJourneyMap from "../images/nomad/Group 9413.png";
import landingPageImageOne from "../images/nomad/Desktop - 32 (1).png";
import landingPageImageTwo from "../images/nomad/036 (1).png";
import landingPageImageThree from "../images/nomad/Welcome 8.png";
import landingPageImageFour from "../images/nomad/046.png";
import landingPageImageFive from "../images/nomad/047.png";
import landingPageImageSix from "../images/nomad/48.png";
import landingPageImageSeven from "../images/nomad/PO 4.png";
import Pagination from "../components/Pagination";
function NomadPage() {
  return (
    <>
      <Navbar />

      <div className="nomad-landing-container">
        <div className="nomad-logo">
          <img src={nomadLogo} alt="" />
        </div>

        <div className="nomad-imgContainer">
          <div className="nomadLandingImg img-1">
            <img src={image1} alt="" />
          </div>
          <div className="nomadLandingImg img-2">
            <img src={image2} alt="" />
          </div>
          <div className="nomadLandingImg img-3">
            <img src={image3} alt="" />
          </div>
          <div className="nomadLandingImg img-4">
            <img src={image4} alt="" />
          </div>
        </div>
      </div>

      <div className="roleContainer">
        <div className="roleContent">
          <h3>ROLE</h3>
          <br />
          <p>Product Strategy, Systems Design</p>
          <p>Product Design, Interaction Design</p>
        </div>
        <div className="roleContent">
          <h3>SCOPE</h3>
          <br />
          <p>
            Financial solution for <br /> MSMEs
          </p>
        </div>
        <div className="roleContent year">
          <h3>YEAR</h3>
          <br />
          <p>2021 - Present</p>
        </div>
      </div>

      <div className="macbook-pro">
        <div>
          <img src={macbookContent} alt="" className="macbook-content" />
        </div>
      </div>

      <div className="background-section">
        <div>
          <div className="background-large-text">
            <h4>01</h4>
            <br />
            <p>Background</p>
          </div>
          <div className="background-paragraph">
            <div className="para-1">
              <p>
                Currently, In Nigeria, MSMEs are the engines powering the
                Nation’s Economy. These MSMEs are about 42 million in number,
                however only about 4% have access to capital, ie very few number
                of these MSMEs have access to affordable sources of working
                capital. This is also due to the fact that these processes from
                traditional and neo banks are quite tedious and the requirements
                needed for these might not also be easily accessible.
              </p>
              <br />
              <p>
                Nomad Bank provided a feature - <strong>Fastr</strong> which
                provides an enhanced digital financial service which included:
              </p>
            </div>
            <div className="para-2">
              <ul>
                <li>
                  <p>
                    A complete Order to Cash solution to streamline and
                    standardise the invoicing process.
                  </p>
                </li>
                <li>
                  <p>
                    Analytics tools record business performance, quantifying the
                    value of early payments in money and time.
                  </p>
                </li>
                <li>
                  <p>
                    Early payment on invoices means SMEs can access money owed
                    within 48 hours rather than waiting 30, 60 or even 180 days!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="work-overview">
        <div>
          <div className="work-over-text">
            <h4>02</h4>
            <br />
            <h2>Work OVerview</h2>
          </div>
          <div className="work-over-text-para">
            <div className="fastr">
              <p>
                <strong>Fastr</strong> is an enhanced digital financial service
                that streamline and standardise the invoicing process and aids
                in accurate record keeping making it easy to track income and
                possibly expenses, saving time, work, error and omissions,
                alleviating frustrations in record keeping; Analytics tools
                record business performance, quantifying the value of early
                payments in money and time. Early payment on invoices means SMEs
                can access money owed within 48 hours rather than waiting 30, 60
                or even 180 days!{" "}
              </p>
            </div>
            <br />
            <div className="solution">
              <h4>Solution</h4>
              <p>
                The goal is for Nomad Bank to offer a digital solution that is
                SME focused Digital Banking and Unlocks Working Capital for
                these MSMEs. This involved me working on an invoicing tool,
                purchase order tool, a pay early feature and a credit building
                system as these aid businesses in tracking transactions, solves
                late payment issues and build enough credit to apply for loans -
                unlocking working capital.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="research">
        <div>
          <div className="research-header-and-image">
            <div className="research-header">
              <h4>03</h4>
              <br />
              <h2>Research</h2>
            </div>
            <div className="research-image">
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
          <div className="research-para">
            <div className="interview">
              <hr className="interview-line" />
              <br />
              <h4>Interviews</h4>
              <br />
              <p>
                We were able to determine the main challenges that these
                business owners were encountering in their activities through
                zoom calls and random interactions with MSME entrepreneurs.
              </p>
            </div>
            <br />
            <div className="interview">
              <hr className="interview-line" />
              <br />
              <h4>Interviews</h4>
              <br />
              <p>
                We were able to determine the main challenges that these
                business owners were encountering in their activities through
                zoom calls and random interactions with MSME entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="persona">
        <div>
          <h2>Persona</h2>
          <div className="persona-image-description">
            <div className="persona-image">
              <img src={meritThomas} alt="" />
            </div>
            <div className="description">
              <h2>Olareweju Tolani.</h2>
              <br />
              <p className="first-paragraph">
                A small business owner who has run his business for close to 6
                months in Kaduna Nigeria. Olarewaju spends her day filling forms
                and making calls to the banks to confirm if payments have been
                made on his goods and services supplied . Most of the time, he
                ends up making mistakes, money lost with no way to track them or
                his services rendered in the last threee months and no way to
                build good credit scroe as a result of lack of enough evidence
                to show his credibility which also is due to suppliers failing
                him at different points
              </p>
              <br />
              <p className="second-paragraph">
                “Spending hours searching and filling paperwork is exhausting
                and overwhelming. I feel ineffecient on most days”
              </p>
              <div className="card-container">
                <div className="card">
                  <h3>Pain Points</h3>
                  <ul>
                    <li>
                      <p>
                        Unable to build credit score due to late payment on the
                        part of suppliers
                      </p>
                    </li>
                    <li>
                      <p>
                        Frustration keeping up with paperwork as business grows
                        daily
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="card">
                  <h3>Needs</h3>
                  <ul>
                    <li>
                      <p>
                        A credible way to build credit score to unlock capital
                        for his growing business
                      </p>
                    </li>
                    <li>
                      <p>A digital tool which can aid in tracking expenses.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="girl-image">
        <img src={girlImageFullWidth} alt="" />
      </div>

      <div className="website-section">
        <div>
          <div className="section-header-container">
            <div className="website-section-header">
              <h4>05</h4>
              <br />
              <h2>Website</h2>
            </div>
            <div className="website-section-paragraph">
              <div className="para">
                <h3>WEB APPLICATION</h3>
                <br />
                <p>
                  This webapp was proffered as a solution as in one dashboard, a
                  user is able to track his invoices and purchase orders, create
                  a purchase order and keep record of his or her credit and even
                  have access to payments before the supplier releases them-
                  unlocking capital.
                </p>
              </div>
              <br />
              <br />
              <div className="para">
                <h3>CUSTOMER JOURNEY MAP</h3>
                <br />
                <p>
                  Theis customer journey map helps us understand the possible
                  behaviours of our users better and aid in building the site
                  map for the project.
                </p>
              </div>
            </div>
          </div>

          <div className="nomad-website-section-table">
            <img src={customerJourneyMap} alt="" />
          </div>
        </div>
      </div>
      <div className="wireframe-section">
        <div>
          <h2>Wireframe</h2>
          <div className="wireframe-images">
            <div>
              <img src={wireframeImage1} alt="" />
            </div>
            <div>
              <img src={wireframeImage2} alt="" />
            </div>
            <div>
              <img src={wireframeImage3} alt="" />
            </div>
            <div>
              <img src={wireframeImage4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="high-fidelity-wireframe">
        <div>
          <h2 className="high-fidelity-header">High Fidelity Wireframes</h2>
          <p className="high-fidelity-small-header">
            Here are some selected screens
          </p>

          <p className="nomad-hf-landing-page">Landing page</p>
          <div className="landing-page-container">
            <div className="landingPage-image">
              <div>
                <img src={landingPageImageOne} alt="" />
              </div>
              <div>
                <p>Creating a Purchase Order</p>
                <img src={landingPageImageSix} alt="" />
              </div>
              <div>
                <p>Purchase Order Design</p>
                <img src={landingPageImageSeven} alt="" />
              </div>
            </div>
            <div className="landingPage-image">
              <div>
                <img src={landingPageImageTwo} alt="" />
              </div>
              <div>
                <p>Analytics Dashboard</p>
                <img src={landingPageImageThree} alt="" />
              </div>
              <div>
                <p>Invoice Management Empty State</p>
                <br />
                <img src={landingPageImageFour} alt="" />
              </div>
              <div>
                <p>Invoice Management System</p>
                <br />
                <img src={landingPageImageFive} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="key-takeaway-section">
        <div className="nomad-key-takeaway">
          <h2>Key Takeaways</h2>
          <p>
            - I learnt a lot about how businesses work. I learnt about purchase
            orders and how they work. I also learnt how tech improves this whole
            process. This was an exciting project for me as it allowed me test
            the waters with a niche I’m not really familiar with and understand
            the value of these services. I hope to learn more as I progress.
            <br />
            <br />I hope to learn more as I progress.
          </p>
        </div>
        <div className="nomad-pagination-container">
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default NomadPage;
