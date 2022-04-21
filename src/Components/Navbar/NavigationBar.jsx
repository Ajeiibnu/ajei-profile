import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import navbarLogo from "../../Assets/img-logo.svg";
import './NavigationBar.css';

function NavigationBar() {

  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColor ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={navbarLogo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Item>
              <Nav.Link 
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                as={Link}
                to="/projects"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser /> Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                as={Link}
                to="/Resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;