import React from "react";
import Header from "../Header";
import "./style.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Projects = () => {
  return (
    <div className="gkp-projects--container">
      <Header />
      <div className="gkp-projects--projects-container">
        <header className="row text-left gkp-projects--title">
          <h1 className="gkp-projects--title">Projects and Features</h1>
        </header>
        <section className="row gkp-projects--body">
          <div className="col-md-12 text-justify gkp-projects--content-container">
            <ul>
              {/* <li>
                <p>
                  <a
                    className="gkp-projects--content-container-link"
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
                    className="gkp-projects--content-container-link"
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
                    className="gkp-projects--content-container-link"
                    href="https://githubfinder192837465.netlify.app/"
                  >
                    Github User Finder
                  </a>
                  : Application that allows users to search for Github profiles
                  name, username or keyword and view basic Github profile info,
                  see their featured repos or follow a link to visit their
                  Github page. It uses React Hooks to manage state, the Context
                  API and the Github API to display JSON data in an a simple,
                  user-friendly manner
                </p>
              </li>
              <li>
                <p>
                  <a
                    className="gkp-projects--content-container-link"
                    href="https://paperstreet.vc/"
                  >
                    Junior Developer at Paperstreet.vc
                  </a>
                  : I work as a full stack developer on
                  a small, highly-agile, early-stage startup software
                  development team. To date, I have implemented around a dozen
                  minor to medium-sized experiences for Paperstreet's
                  production-level web application, servicing thousands of users
                  and hundreds of companies. I primarily work with the front end
                  but am able to work in the back end as needed to implement or
                  utilize APIs for rich, front end functionality. Below are some
                  of the features I have been charged with completing.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="row gkp-projects--gifs">
          <Row>
            <Col sm={{ size: 8, order: 2, offset: 2 }}>
              <h2 className="sk-home__general-info-title">
                User Profile Social Links
              </h2>
              <div className="sk-home__general-info-container">
                <div className="sk-home__general-info-container__text">
                  <p>
                    This social link tab lets the user input links to their
                    social media channels. I was in charge of the frontend,
                    using React, Bootstrap, SVG logos and RegEx to validate
                    whether or not the social link was a valid URL. Handlebars
                    is used to conditionally render the social media SVGs on a
                    card on the user's profile page; only social media channels
                    listed in their user settings will display here. If no
                    social media has been input, the card will disappear.
                    <img
                      className="gkp-projects--social-links-card-gif"
                      src="../assets/gifs/social-link-card-gif.gif"
                      alt="firstImage"
                    ></img>
                  </p>
                </div>
                <img
                  className="gkp-projects--social-links-tab-gif"
                  src="../assets/gifs/social-link-gif.gif"
                  alt="firstImage"
                ></img>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 8, offset: -2 }}>
              <h2 className="sk-home__who-do-i-help-title">
                Visibility Options Modal
              </h2>
              <div className="sk-home__who-do-i-help-container">
                <img
                  className="sk-home__who-do-i-help-container-image"
                  src="../assets/gifs/post-visibility-options-modal-gif.gif"
                  alt="secondImage"
                ></img>
                <div className="sk-home__who-do-i-help-container__text">
                  <p>
                    This modal controls who is able to see a given post when a
                    user wants to post an update to their profile page. It uses
                    props to open the modal, multiple instances of embedded
                    useState Hooks to conditionally render the difference in
                    options, and the useEffect Hook to send only to certain
                    email contacts.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 8, order: 2, offset: 2 }}>
              <h2 className="sk-home__general-info-title">
                Shimmer on Page Load
              </h2>
              <div className="sk-home__general-info-container">
                <div className="sk-home__general-info-container__text">
                  <p>
                    This uses a shimmer NPM to display a beautiful placeholder
                    that displays a shiny shell of the card shape until the page
                    loads, which involved creating a shimmer component for this
                    card and a lot of CSS. Before this feature was completed,
                    the page stayed blank on refresh until a grid of cards
                    loaded.
                  </p>
                </div>
                <img
                  className="gkp-projects--social-links-tab-gif"
                  src="../assets/gifs/company-card-shimmer-gif.gif"
                  alt="firstImage"
                ></img>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 8, offset: -2 }}>
              <h2 className="sk-home__who-do-i-help-title">
                Composer Editor Dropdown Menu
              </h2>
              <div className="sk-home__who-do-i-help-container">
                <img
                  className="sk-home__who-do-i-help-container-image"
                  src="../assets/gifs/composer-editor-dropdown-gif.gif"
                  alt="secondImage"
                ></img>
                <div className="sk-home__who-do-i-help-container__text">
                  <p>
                    This is a dropdown menu on Paperstreet's status update
                    editor that gives the user options for the next update they
                    are going to write. For this feature, I took a dropdown that
                    was previously built using Handlebars and transcribed it
                    into a functional React component from scratch.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 8, order: 2, offset: 2 }}>
              <h2 className="sk-home__general-info-title">
                Display All Classes a Company Belongs To
              </h2>
              <div className="sk-home__general-info-container">
                <div className="sk-home__general-info-container__text">
                  <p>
                    This card displays all of the different classes that a given
                    company belongs to on the sidebar of their profile page.
                    Initially, it only displayed the first class listed in the
                    company's array. I used Handlebars to ensure that each class
                    is displayed on the card.
                  </p>
                </div>
                <img
                  className="gkp-projects--social-links-tab-gif"
                  src="../assets/gifs/display-classes-on-card-gif.gif"
                  alt="firstImage"
                ></img>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
};

export default Projects;
