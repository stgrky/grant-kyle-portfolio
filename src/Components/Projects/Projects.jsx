import React from "react";
import Header from "../Header";
import "./style.scss";
import ProjectCardWithGif from "../ProjectCardWithGif";

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
                We wanted a way for new connections to be able to easily link to
                users' social media channels. This is a social media input on
                user profile settings. I was in charge of the frontend, using
                React, Bootstrap, SVG logos and RegEx to validate whether or not
                the social link was a valid URL. Handlebars is used to
                conditionally render the social media SVGs on a card on the
                user's profile page; only social media channels listed in their
                user settings will display here. If no social media has been
                input, the card will disappear.
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
            <div className="gkp-projects__gif-container">
              <img
                src="../assets/gifs/post-visibility-options-modal-gif.gif"
                alt="secondImage"
              ></img>
            </div>
            <div className="gkp-projects__project-text">
              <p>
                This modal controls who is able to see a given post when a user
                wants to post an update to their profile page. It uses props to
                open the modal, multiple instances of embedded useState Hooks to
                conditionally render the difference in options, and the
                useEffect Hook to send only to certain email contacts.
              </p>
            </div>
          </div>

          <h2 className="gkp-projects__project-title">Shimmer on Page Load</h2>
          <div className="gkp-projects__project-container">
            <div className="gkp-projects__project-text">
              <p>
                This uses a shimmer NPM to display a beautiful placeholder that
                displays a shiny shell of the card shape until the page loads,
                which involved creating a shimmer component for this card and a
                lot of CSS. Before this feature was completed, the page stayed
                blank on refresh until a grid of cards loaded.
              </p>
            </div>
            <div className="gkp-projects__gif-container">
              <img
                src="../assets/gifs/company-card-shimmer-gif.gif"
                alt="firstImage"
              ></img>
            </div>
          </div>

          <h2 className="gkp-projects__project-title">
            Composer Editor Dropdown Menu
          </h2>
          <div className="gkp-projects__project-container">
            <div className="gkp-projects__gif-container">
              <img
                src="../assets/gifs/composer-editor-dropdown-gif.gif"
                alt="secondImage"
              ></img>
            </div>
            <div className="gkp-projects__project-text">
              <p>
                This is a dropdown menu on Paperstreet's status update editor
                that gives the user options for the next update they are going
                to write. For this feature, I took a dropdown that was
                previously built using Handlebars and transcribed it into a
                functional React component from scratch.
              </p>
            </div>
          </div>

          <h2 className="gkp-projects__project-title">
            Display All Classes a Company Belongs To
          </h2>
          <div className="gkp-projects__project-container">
            <div className="col gkp-projects__project-text">
              <p>
                This card displays all of the different classes that a given
                company belongs to on the sidebar of their profile page.
                Initially, it only displayed the first class listed in the
                company's array. I used Handlebars to ensure that each class is
                displayed on the card.
              </p>
            </div>
            <div className="gkp-projects__gif-container">
              <img
                src="../assets/gifs/display-classes-on-card-gif.gif"
                alt="firstImage"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
