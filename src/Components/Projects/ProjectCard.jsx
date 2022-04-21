import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BiLinkExternal } from 'react-icons/bi';

export default function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal />
          {props.isBlog ? "view Blog" : "view Project"}
        </Button>
      </Card.Body>
    </Card>
  )
}
