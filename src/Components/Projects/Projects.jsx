import React from "react";
import "./style.scss";

const Projects = () => {
  return (
    <div className="gkp-projects__container">
      <div className="gkp-projects__projects-container">
        <header className="row text-left gkp-projects__title">
          <h1 className="gkp-projects__title">Projects and Features</h1>
        </header>
        <div className="row gkp-projects__body">
          <div className="col-md-12 text-justify gkp-projects__content-container">
            <ul>
              {/* <li>
                <p>
                  <a
                    className="gkp-projects__content-container-link"
                    href="http://jobless2020.herokuapp.com/"
                  >
                    Jobless.com
                  </a>
                  : Jobless is a job listing marketplace where candidates can
                  search for job listings and submit blog posts relating to
                  employment or jobs in general. Currently, we are in the
                  process of making the UI more user-friendly and
                  mobile-friendly, and improving our search results UX. The site
                  is made with Node and Express with a MongoDB database hosted
                  on Atlas. We use React on the frontend and it is deployed on
                  Heroku.
                </p>
              </li> */}
              {/* <li>
                <p>
                  <a
                    className="gkp-projects__content-container-link"
                    href="https://fast-wildwood-12677.herokuapp.com/"
                  >
                    COVID-19 Patient Database (Mock)
                  </a>
                  : This is a a mock website where doctors can create a login
                  and add patients to a COVID-19 database. The website is made
                  with Node, Express and Express handlebars, using Vue on the
                  frontend. It is deployed on Heroku.
                </p>
              </li> */}
              <li>
                <p>
                  <a
                    className="gkp-projects__content-container-link"
                    href="https://githubfinder192837465.netlify.app/"
                  >
                    Github User Finder
                  </a>
                  : Application that allows users to search for Github profiles
                  name, username or keyword and view basic Github profile info,
                  see their featured repos or follow a link to visit their
                  Github page. Uses React hooks, React Context API and Github
                  API.
                </p>
              </li>
              <li>
                <p>
                  <a
                    className="gkp-projects__content-container-link"
                    href="https://paperstreet.vc/"
                  >
                    Junior Developer at Paperstreet.vc
                  </a>
                  : I am a full stack developer on a small, highly-agile
                  early-stage startup software development team. I implement
                  small to medium-sized experiences that are featured on
                  Paperstreet's production-level web application, servicing
                  thousands of users and hundreds of companies. I primarily work
                  with the front end but am able to work in the back end as
                  needed to implement or utilize APIs for rich, front end
                  functionality. Below are a few features I have completed.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row gkp-projects__gifs">
          <h2 className="gkp-projects__project-title">
            User Profile Social Links
          </h2>
          <div className="gkp-projects__project-container">
            <div className="gkp-projects__project-text">
              <p>
                In the user's profile settings, the user can enter their
                different social media channels. Each social media channel
                entered is then conditionally displayed in a styled div on their
                profile page. Those viewing the user's profile page can then
                link out to the given social media channel to connect elsewhere.
                If no social media channels are entered, the div hides from the
                user's profile. Uses React, SCSS and Handlebars. The first gif
                is what the viewer sees on a user's profile page; the second gif
                is what the user inputs in their settings.
              </p>
            </div>
            <div className="gkp-projects__gif-container">
              <img
                className="gkp-projects__social-links-card-gif"
                src="../assets/gifs/social-link-card-gif.gif"
                alt="firstImage"
              ></img>
              <img
                className="gkp-projects__social-links-tab-gif"
                src="../assets/gifs/social-link-gif.gif"
                alt="firstImage"
              ></img>
            </div>
          </div>

          <h2 className="gkp-projects__project-title">
            Visibility Options Modal
          </h2>
          <div className="gkp-projects__project-container">
            <img
              className="gkp-projects__gif-container"
              src="../assets/gifs/post-visibility-options-modal-gif.gif"
              alt="secondImage"
            ></img>

            <div className="gkp-projects__project-text">
              <p>
                A modal similar to Facebook's post visibility options that
                allows the user to control who is able to view their published
                posts. Uses React, SCSS and REST API via Node and Express.
              </p>
            </div>
          </div>

          <h2 className="gkp-projects__project-title">Shimmer on Page Load</h2>
          <div className="gkp-projects__project-container">
            <div className="gkp-projects__project-text">
              <p>
                Improved user's experience by implementing a shimmer effect that
                renders while page is loading. Uses React, SCSS and NPM
                react-shimmer.
              </p>
            </div>

            <img
              className="gkp-projects__gif-container"
              src="../assets/gifs/company-card-shimmer-gif.gif"
              alt="firstImage"
            ></img>
          </div>

          <h2 className="gkp-projects__project-title">
            Export Contact Group to CSV
          </h2>
          <div className="gkp-projects__project-container">
            <img
              className="gkp-projects__gif-container"
              src="../assets/gifs/export-contacts-to-csv.gif"
              alt="secondImage"
            ></img>

            <div className="gkp-projects__project-text">
              <p>
                A CSV export component with corresponding API endpoint that
                allows a given user to export a list of contacts to a CSV,
                handled on the back end to send to their account's email
                address. Uses React and SCSS on the front end, and uses the
                Sendgrid API via Node/ Express on the back end to handle email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
