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
                Marketing Software Developer at RehabPath
              </a>
              : I love my current role working on a growing, Series A funded,
              mission-driven team on their{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://luxuryrehabs.com/"
              >
                LuxuryRehabs
              </a>{" "}
              website. I carry out front end development tasks that directly impact our digital marketing efforts. Daily, I work with Gatsby, React, a headless Wordpress instance, and GraphQL. 
            </p>
          </li>
          <li>
            <p>
              : Before RehabPath, I completed a one-year contract as a full
              stack developer on a small, highly-agile early-stage startup
              software development team. I implemented small to medium-sized
              experiences that are featured on Paperstreet's production-level
              web application, servicing thousands of users and hundreds of
              companies.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
