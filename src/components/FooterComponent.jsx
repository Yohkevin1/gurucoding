import React from "react";
import { Container, Row, Col, Nav, Form, InputGroup } from "react-bootstrap";
import {
  FaFacebookF,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarker,
} from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="p-4">
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4 text-light">
          <Col>
            <h6>Seputar Pemrograman</h6>
            <Nav className="d-flex flex-column">
              <a href="https://en.wikipedia.org/wiki/HTML#History" className="nav-link text-light">HTML</a>
              <a href="https://en.wikipedia.org/wiki/CSS" className="nav-link text-light">CSS</a>
              <a href="https://en.wikipedia.org/wiki/Java_(programming_language)#Documentation" className="nav-link text-light">JAVA</a>
              <a href="https://en.wikipedia.org/wiki/React" className="nav-link text-light" >REACT</a>
            </Nav>
          </Col>
          <Col>
            <h6>Teknologi</h6>
            <Nav className="d-flex flex-column" >
              <a href="Laravel" className="nav-link text-light"> LARAVEL </a>
              <a href="https://en.wikipedia.org/wiki/C_(programming_language)" className="nav-link text-light"> C </a>
              <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" className="nav-link  text-light" > C# </a>
              <a href="https://en.wikipedia.org/wiki/C%2B%2B" className="nav-link text-light">C++</a>
            </Nav>
          </Col>
          <Col>
            <h6>Analys</h6>
            <Nav className="d-flex flex-column">
              <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" className="nav-link text-light">Phyton</a>
              <a href="https://en.wikipedia.org/wiki/CodeIgniter" className="nav-link text-light">CodeIgniter</a>
              <a href="https://en.wikipedia.org/wiki/R_(programming_language)" className="nav-link text-light">R</a>
              <a href="https://en.wikipedia.org/wiki/TypeScript" className="nav-link text-light"> TypeScript </a>
            </Nav>
          </Col>
          <Col>
            <h6>Contact</h6>
            <p className="my-4">
              <FaPhone size="1rem" className="me-1 text-purple" />
              +6285156443046
            </p>
            <p className="my-4">
              <FaEnvelope size="1rem" className="me-1 text-purple" />
              GuruCoding@example.com
            </p>
            <p className="my-4">
              <FaMapMarker size="1rem" className="me-1 text-purple" /> Sleman,
              DI Yogyakarta 2024 , Indonesia
            </p>
          </Col>
        </Row>
        <h6 className="text-center mt-5 text-light">
          Guru<span className="text-purple">Coding</span>
        </h6>
        <p className="text-center mt-2 text-light">
          Made With <FaHeart className="text-purple" /> by
          <a className="nav-link text-purple" href="http://github.com/thenabiev" > Tim Guru Dicoding </a>
        </p>
      </Container>
    </footer>
  );
};

export default FooterComponent;
