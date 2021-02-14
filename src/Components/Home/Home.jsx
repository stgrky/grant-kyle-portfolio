import React from 'react';
import "./style.scss"


const Home = props => {
    return (
        <div className="gkp-homebody--container">
      <div className="gkp-homebody--profile-pic-container">
        <img
          className="gkp-homebody--profile-pic"
          src="../assets/images/elliptical_profile_pic.png"
        />
      </div>
      <section id="gkp-homebody--name-section">
        <h1 className="gkp-homebody--name">Grant Kyle</h1>
      </section>
      <section id="gkp-homebody--title-section">
        <h2 className="gkp-homebody--title">
          software developer; digital marketer; lifelong learner
        </h2>
      </section>
      <section
        id="gkp-homebody--social-section"
        className="row text-center social"
      >
        <a
          href="https://github.com/grantkyle"
          aria-label="Github"
          target="_blank"
        >
          <img
            src="../assets/icons/github-logo.svg"
            className="gkp-homebody--social-icons"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/grant-kyle-53298711a/"
          aria-label="Linkedin"
          target="_blank"
        >
          <img
            src="../assets/icons/linkedin-logo.svg"
            className="gkp-homebody--social-icons"
          />
        </a>
        <a
          href="mailto:sgrantkyle@gmail.com"
          aria-label="Email"
          target="_blank"
        >
          <img
            src="../assets/icons/gmail-logo.svg"
            className="gkp-homebody--social-icons"
          />
        </a>
      </section>
    </div>
    )
}

export default Home
