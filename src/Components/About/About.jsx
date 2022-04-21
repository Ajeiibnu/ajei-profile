import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./Aboutcard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Title from "../Title";
import './About.css';


export default function About() {
  return (
    <section>
      <Container className="about-section" fluid>
        <Container className="about-header">
          <Row >
            <Col md={12} className='title'>
              <Title 
                frontText="ABOUT ME"
                backText="PROFILE"
              />
            </Col>
            <Col md={12} className='about-section-card'>
              <h1>
                Who <strong> I`m </strong>?
              </h1>
              <Aboutcard />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Container>
          <h1 className="project-heading">
            Professional <strong>Skills</strong>
          </h1>

            <Techstack />

          <h1 className="project-heading">
            <strong>Tools</strong> I use
          </h1>

            <Toolstack />

          {/* <Github /> */}
        </Container>
      </Container>
    </section>
  )
}
