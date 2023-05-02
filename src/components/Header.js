import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Project from "./Project";

function Header({currentPage, handleChange}) {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  href='./Home'>Home</Navbar.Brand>
          <Nav className="me-auto">
          <li>
            <a
              href="#projects"
              className="nav-item"
              onClick={() => handleChange("Project")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="nav-item"
              onClick={() => handleChange("Contact")}
            >
              Contact
            </a>
          </li>
          <li >
            <a
              href="#Resume"
              className="nav-item"
              onClick={() => handleChange("Resume")}
            >
              Resume
            </a>
          </li>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
};

export default Header;