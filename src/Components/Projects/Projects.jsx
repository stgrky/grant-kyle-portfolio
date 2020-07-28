import React from "react";
import Header from "../Header";
import "./style.scss";

const Projects = () => {
  return (
    <div className="gkp-projects--container">
      <Header />
      <div className="gkp-projects--projects-container">
        <header className="row text-left gkp-projects--title">
          <h1 className="gkp-projects--title">Projects</h1>
        </header>
        <section className="row gkp-projects--body">
          <div className="col-md-12 text-justify gkp-projects--content-container">
            <ul>
              <li>
                <p>
                  <a
                    className="gkp-projects--content-container-link"
                    href="http://jobless2020.herokuapp.com/"
                  >
                    Jobless.com
                  </a>
                  : Jobless is a job listing marketplace where candidates can search for job listings and submit blog posts relating to employment or jobs in general. Currently, we are in the process of making the UI more user-friendly and mobile-friendly, and improving our search results UX. The site is made with Node and Express with a MongoDB database hosted on Atlas. We use React on the frontend and it is deployed on Heroku.
                </p>
              </li>
              <li>
                <p>
                  <a
                    className="gkp-projects--content-container-link"
                    href="https://fast-wildwood-12677.herokuapp.com/"
                  >
                    COVID-19 Patient Database (Mock)
                  </a>
                  : This is a a mock website where doctors can create a login and add patients to a COVID-19 database. The website is made with Node, Express and Express handlebars, using Vue on the frontend. It is deployed on Heroku. 
                </p>
              </li>
              <li>
                <p>
                  <a
                    className="gkp-projects--content-container-link"
                    href="https://githubfinder192837465.netlify.app/"
                  >
                    Github User Finder
                  </a>
                  : This app lets users search for any github user by either username, name or by any query relating to a user's profile. This is a frontend app built with React. It uses Context API, Hooks and is written with functional components. It is deployed on Netlify.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
