import React from "react";
import Card from "react-bootstrap/Card";
import "./style.scss";

const ProjectCardWithGif = ({ cardHeading, cardBody, cardGif }) => {
  return (
    <Card className="gk-project-card-with-gif" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{cardHeading}</Card.Title>
        <Card.Text>
          {cardBody}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={cardGif} />
    </Card>
  );
};

export default ProjectCardWithGif;
