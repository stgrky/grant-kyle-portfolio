import React from "react";
import "./style.scss";

const About = (props) => {
  return (
    <div className="gkp-home__container">
      <div className="gkp-home__profile-pic-container">
        <img
          alt=""
          className="gkp-home__profile-pic"
          src="../assets/images/elliptical_profile_pic.png"
        />
      </div>
      <div id="gkp-home__name-section">
        <h1 className="gkp-home__name">Grant Kyle</h1>
      </div>
      <div id="gkp-home__title-section">
        <h2 className="gkp-home__title">
          developer; human; lifelong learner
        </h2>
        <hr />
        <p>Questions about my professional merits or  what I like to do outside of my professional life? There's a lot. If you are reading this for a work-for-money barter or related parlay, or you are a pro bono therapist, kindly contact me through any link below.</p>
      </div>
      <div id="gkp-home__social-section" className="text-center social">
        <a
          href="https://github.com/grantkyle"
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt=""
            src="../assets/icons/github-logo.svg"
            className="gkp-home__social-icons"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/grant-kyle-53298711a/"
          aria-label="Linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt=""
            src="../assets/icons/linkedin-logo.svg"
            className="gkp-home__social-icons"
          />
        </a>
        <a
          href="mailto:sgrantkyle@gmail.com"
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt=""
            src="../assets/icons/gmail-logo.svg"
            className="gkp-home__social-icons"
          />
        </a>
      </div>
    </div>
  );
};

export default About;
