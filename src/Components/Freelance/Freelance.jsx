import React from "react";
import "./style.scss";

const Projects = () => {
  return (
    <div className="gkp-projects__projects-container">
      <h1 className="gkp-projects__title">Freelance!</h1>
      <h2 className="gkp-projects__sub-heading">What do I do and what do I like to do?</h2>
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
    </div>
  );
};

export default Projects;