import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import project1 from "../../Assets/Projects/image-project.png";
import './Projects.css';

export default function Projects() {
  return (
    <Container className="project-section" fluid>
      <Container>
        <h1 className="project-heading">
          MyRecent <strong>Works</strong>
        </h1>
        <p>
          Here are a few projects i worked
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard 
              imgPath={project1}
              isBlog={false}
              description="###############"
              link="/#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
