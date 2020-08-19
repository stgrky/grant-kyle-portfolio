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
                  : Jobless is a job listing marketplace where candidates can
                  search for job listings and submit blog posts relating to
                  employment or jobs in general. Currently, we are in the
                  process of making the UI more user-friendly and
                  mobile-friendly, and improving our search results UX. The site
                  is made with Node and Express with a MongoDB database hosted
                  on Atlas. We use React on the frontend and it is deployed on
                  Heroku.
                </p>
              </li>
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
                  : This app lets users search for any github user by either
                  username, name or by any query relating to a user's profile.
                  This is a frontend app built with React. It uses Context API,
                  Hooks and is written with functional components. It is
                  deployed on Netlify.
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
                  : What exactly have I been doing with my time as a Junior Developer at Paperstreet? I have been immersed in the world of React, creating pixel-perfect frontend features from mockups and functional backend features. Our stack is React, Handlebars, Webpack, Express, Node and PostgresQL. Below are some of the features I have been charged with completing.
                </p>
              </li>
            </ul>
          </div>
        </section>
    
        <section className="row gkp-projects--gifs">


        <Row>
          <Col sm={{ size: 8, order: 2, offset: 2 }}>
            <h2 className="sk-home__general-info-title">User Profile Social Links</h2> 
            <div className="sk-home__general-info-container">
              <div className="sk-home__general-info-container__text">
                <p>
                  This social link tab lets the user input links to their social media channels. I was in charge of the frontend, using React, Bootstrap, SVG logos and RegEx to validate whether or not the social link was a valid URL. Handlebars is used to conditionally render the social media SVGs on a card on the user's profile page; only social media channels listed in their user settings will display here. If no social media has been input, the card will disappear.
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
            <h2 className="sk-home__who-do-i-help-title">Composer Editor Dropdown Menu</h2>
            <div className="sk-home__who-do-i-help-container">
              <img
                className="sk-home__who-do-i-help-container-image"
                src="../assets/gifs/composer-editor-dropdown-gif.gif"
                alt="secondImage"
              ></img>
              <div className="sk-home__who-do-i-help-container__text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus dolorum possimus ad quisquam est iusto aperiam sint
                  error aliquam officia veritatis quidem, ipsam nostrum rerum
                  itaque eum vero voluptatibus. Ut! Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Voluptas voluptatum atque odit
                  fuga, consequuntur fugit eum quibusdam quo facilis
                  voluptatibus delectus quidem tempora a similique adipisci
                  dolore, sapiente doloremque vitae? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Sapiente delectus dolorem
                  aperiam, corporis doloremque, autem tenetur illum, quos
                  dolorum hic tempora sed cupiditate beatae qui esse expedita
                  odit quia sunt! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Dolores dignissimos, ducimus laboriosam
                  natus eos mollitia sint cumque excepturi sunt eveniet, tempore
                  ex quis facere illum ad alias minus quaerat beatae?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia molestiae, beatae qui doloremque quis itaque error
                  quisquam cumque animi nihil vitae, fugiat neque quos ut, nobis
                  a ratione harum. Neque! Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Adipisci repellat libero, odio
                  cupiditate iste quisquam ut ipsa aliquam non velit quasi
                  dolores rem in maxime corrupti, totam illo minima? Porro?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, quidem similique inventore error dolorem sint sit
                  illum molestias dicta voluptatum aut rerum fugiat hic? Quas
                  ipsa aliquid fugiat optio vero?
                </p>
              </div>
            </div>
          </Col>
        </Row>















          
        </section>
      </div>
    </div>
  );
};

export default Projects;


{/* <Container >
            <Row className="poopee">
              <Col className="poop" xs={6} lg={4}>
                <Card style={{ width: "25rem" }}>
                  <div className="gkp-projects--image-container">
                    <Card.Img
                      className="gkp-projects--social-links-gif"
                      variant="top"
                      src="../assets/gifs/social-link-gif.gif"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="poop" xs={6} lg={4}>
                <Card style={{ width: "25rem" }}>
                  <div className="gkp-projects--image-container">
                    <Card.Img
                      className="gkp-projects--social-links-gif"
                      variant="top"
                      src="../assets/gifs/social-link-gif.gif"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="poop" xs={6} lg={4}>
                <Card style={{ width: "25rem" }}>
                  <div className="gkp-projects--image-container">
                    <Card.Img
                      className="gkp-projects--social-links-gif"
                      variant="top"
                      src="../assets/gifs/social-link-gif.gif"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container> */}