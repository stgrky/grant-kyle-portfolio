import React from "react";
import "./style.scss";

const Projects = () => {
  return (
    <div className="gkp-projects__projects-container">
      <h1 className="gkp-projects__title">Employment History</h1>
      <div className="gkp-projects__content-container">
        <ul>
          <li>
            <p>
              <a
                className="gkp-projects__content-container-link"
                href="https://rehabpath.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Marketing Software Developer at RehabPath
              </a>
              : I currently work for what I subjectively deem the coolest
              company I have ever had the fortune of working for, RehabPath, on
              their{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://luxuryrehabs.com/"
              >
                Luxury
              </a>{" "}
              website. My primary interest is working on projects that
              facilitate realizing our revenue target. But! The company is not
              just about money; we truly care about getting treatment seekers
              the help they need. Daily I work with React, a headless Gatsby.js
              instance interfaced through Wordpress, and GraphQL.
            </p>
          </li>
          <li>
            <p>
              <a
                className="gkp-projects__content-container-link"
                href="https://paperstreet.vc/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Junior Software Developer at Paperstreet.vc
              </a>
              : I started as an intern with Paperstreet and was then taken on as
              a junior for a one-year contract. I implemented small to
              medium-sized experiences that are featured on their
              production-level web application, servicing thousands of users and
              hundreds of companies.
            </p>
          </li>
        </ul>
      </div>
      <h1 className="gkp-projects__title">Projects</h1>
      <p className="gkp-projects__sub-title">
        If you want to see something cool, visit{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://luxuryrehabs.com/blog/"
        >
          RehabPath Luxury's blog
        </a>{" "}
        and click on any post; I have done all of the work to give it a face
        lift from what it previously was. Coming soon in my personal-code
        pipeline is a blog to detail what my life is like living in Guadalajara,
        and whatever other ramblings I want to detail.
      </p>
      {/* <div className="gkp-projects__content-container">
        <ul>
          <li>
            <p>
              <a
                className="gkp-projects__content-container-link"
                href="https://limitless-anchorage-13670.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Cryptocurrency Loan Calculator
              </a>
              : Application that lets user put in a loan amount, the loan-term,
              the loan-to-value (LTV) ratio, and to choose between interest only
              payments or principal + interest payments. It then displays the
              info in another panel and uses a crypto API from Coin Gecko to get
              live data on the value of the loan in different cryptocurrencies.
              I built this with React and SCSS, and it connects with a
              cryptocurrency-tracking API through CoinGecko. Candidly, this is
              my favorite , it's this one; check it out!
              <br />
              <b style={{ fontWeight: 800 }}>
                *** Please note that this project is deployed for free with
                Heroku, and may load very slowly. Please refresh and try again
                if it times out ***
              </b>
            </p>
          </li>
          <li>
            <p>
              <a
                className="gkp-projects__content-container-link"
                href="https://githubfinder192837465.netlify.app/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github User Finder
              </a>
              : Application that allows users to search for Github profiles
              name, username or keyword and view basic Github profile info, see
              their featured repos or follow a link to visit their Github page.
              Built with React, React's Context API, and Github's API, deployed
              to Netlify.
            </p>
          </li>
          <li>
            <p>
              <a
                className="gkp-projects__content-container-link"
                href="https://fast-chamber-93165.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Train Fare Calculator
              </a>
              : Parses through JSON data to take the user to the appropriate
              ticket and multiplies it by the amount of tickets they want to get
              their fare total. Its simple user-interface and sound logic makes
              it a presentable application. Built with React, deployed to
              Heroku. <br />
              <b style={{ fontWeight: 800 }}>
                *** Please note that this project is deployed for free with
                Heroku, and may load very slowly. Please refresh and try again
                if it times out ***
              </b>
            </p>
          </li>
          <li>
            <p>
              <a
                className="gkp-projects__content-container-link"
                href="https://cryptic-wave-55237.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Mock Landing Page
              </a>
              : A mock landing page for a fake business. I chose to display it
              here because of its mobile-friendliness: it looks great on
              desktop, and is responsive on screens the size of iPhone 5 all the
              way to iPad Pro. Built with React and SCSS, deployed to Heroku.{" "}
              <br />
              <b style={{ fontWeight: 800 }}>
                *** Please note that this project is deployed for free with
                Heroku, and may load very slowly. Please refresh and try again
                if it times out ***
              </b>
            </p>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Projects;
