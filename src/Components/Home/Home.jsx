import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type"
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Title from '../Title';
import "./Home.css";

export default function Home() {
  return (
    <section>
      <Container className='home-section' id="home" fluid>
        <Container className='home-content'>
          <Row>
            <Col md={12} className='title'>
              <Title 
                frontText="SUMARRY"
                backText="HOME"
              />
            </Col>
            <Col md={12} className="home-header">
              <h1 className='heading'>
                HI {" "} 
                <span className='wave' role="img" aria-labelledby='wave'>
                  🐼
                </span>
              </h1>
              <h1 className='heading-name'>
                I`M
                <strong className='main-name'> AJEI IBNU RAHMAT</strong>
              </h1>
              <div className='tywritter-content'>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Home About Section */}
      <Container className='home-about-section' id="about">
        <Container>
          <Row>
            <Col md={12} className='home-about-description'>
              <h1>
                LET ME <strong>INTRODUCE</strong> MYSELF
              </h1>
              <p className='home-about-body'
                
              >
                  I'm a programmer focused on building websites and 
                  applications with 
                <i>
                  <b> HTML & CSS, Javascript.</b>
                </i>
                <br />
                  An <b>independent </b>and <b>self-motivated</b> as a programmer
                  focused on <b>developing quality websites</b> and <b>applications.</b>
                <br />
                  I have Interest in building 
                <i>
                  <b> Web Technologies,</b>
                  <b> Mini Games</b> and
                  <b> Web and Mobile Design.</b>
                </i>
                <br />
                I also apply my interest with <b>Node.js, </b>
                <i>
                  <b> Modern Javascript Library and Frameworks </b>
                </i>like
                <i>
                  <b> React.js And Next.js.</b>
                </i> <br />
                I can also use some
                <i>
                  <b> Adobe Products </b>
                </i>and
                <i>
                  <b> Unity Engine </b>
                </i>to develop games.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="12" className='home-about-social'>
              <h1><strong>Connect</strong> With Me</h1>
              <p>
                Fell Free To <strong>Connect </strong> with me
              </p>
              <ul className='home-about-social-links'>
                <li className='social-icons'>
                  <a
                    href='/#'
                    target='_blank'
                    rel='norefer'
                    className='icon-color home-social-icons'
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='/#'
                    target='_blank'
                    rel='norefer'
                    className='icon-color home-social-icons'
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='/#'
                    target='_blank'
                    rel='norefer'
                    className='icon-color home-social-icons'
                  >
                    <AiFillGithub />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}
