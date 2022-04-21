import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container className='footer' fluid>
      <Row>
        <Col md='4' className='footer-copyright'>
          <h3><strong>Develop by ajeiibnu</strong></h3>
        </Col>
        <Col md='4' className='footer-copyright'>
          <h3>Copyright © {year} | ajeiibnu</h3>
        </Col>
        <Col md={4} className='footer-body'>
          <ul className='footer-icons'>
            <li className='social-icons'>
              <a
                href='/#'
                taget='_blank'
                rel='norefer'
                className='icon-color'
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='/#'
                taget='_blank'
                rel='norefer'
                className='icon-color'
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className='social-icons'>
              <a
                href='/#'
                taget='_blank'
                rel='norefer'
                className='icon-color'
              >
                <AiFillGithub />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
