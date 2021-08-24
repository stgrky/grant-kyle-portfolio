import React from "react";
import "./style.scss";

const Projects = () => {
  return (
    <div className="gkp-projects__projects-container">
      <h1 className="gkp-projects__title">Grant Kyle's Employment History</h1>
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
                React Web Developer at RehabPath
              </a>
              : I currently love my role working on a smaller but growing,
              mission-driven team on their{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://luxuryrehabs.com/"
              >
                LuxuryRehabs
              </a>{" "}
              website. My primary function is to act as an intermediary between
              our marketing and development team; essentially I carry out
              development tasks that facilitate our marketing success. Daily, I
              work with React, a headless Gatsby.js CMS, graphQL and a blog
              hosted through Wordpress.
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
                Software Developer at Paperstreet.vc
              </a>
              : Before RehabPath, I completed a one-year contract as a full
              stack developer on a small, highly-agile early-stage startup
              software development team. I implemented small to medium-sized
              experiences that are featured on Paperstreet's production-level
              web application, servicing thousands of users and hundreds of
              companies. I primarily worked on the front end but worked on the
              back end as needed to implement or utilize APIs for rich, front
              end functionality.
            </p>
          </li>
        </ul>
      </div>
      <h1 className="gkp-projects__title">Projects</h1>
      <h2 className="gkp-projects__sub-title">
        In order of my best to my okay-est
      </h2>
      <div className="gkp-projects__content-container">
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
              : Application that lets its user put in a loan amount, the
              loan-term, the loan-to-value (LTV) ratio, and to choose between
              interest only payments or principal + interest payments. It then
              displays the info in another panel and uses a crypto API from Coin
              Gecko to get live data on the value of the loan in different
              cryptocurrencies. Built strictly with React, SCSS and a CoinGecko
              API. Candidly, if I had one proud project on this portfolio, it's
              this one; check it out!
              <br />
              <b>
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
              <b>
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
              <b>
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
                href="http://rate-a-customer.club/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Mock University Landing Page (Wordpress)
              </a>
              : Though I am trained in the Javascript ecosystem, I have to say:
              Wordpress has turned out to be a blast to learn! It is highly
              customizable and relatively easy to learn and use. Coming from
              digital marketing, it is great to finally learn how to create
              custom themes in Wordpress instead of just implementing new
              content and conversion strategies. I started this project as a
              fictional university, but am slowly changing the site to be a site
              for service industry profesionals to rate customers they serve
              (like a reverse Yelp). Built with PHP, CSS and HTML, hosted on
              Wordpress through Gatorhost.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
