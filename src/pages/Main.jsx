import React from "react";
import {Col, Container, Row } from "react-bootstrap";
import mentor from "../assets/mentor.png";
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import FunfactComponent from '../components/FunfactComponent';
import ServiceComponent from "../components/ServiceComponent";
import OurMentorComponent from "../components/OurMentorComponent";
import ContactComponent from "../components/ContactComponent";
import '../index.css';
const Main = () => {
  return (
    <>
      <NavbarComponent />
      <Container className="main-container">
        <Row id="main" className="main py-2" xs={1} md={2} g={4} style={{ minHeight: "100vh", color: "white"}}>
          <Col className="mainText text-left align-center">
            <h3> Layanan Pencarian Mentor dan Coach Permograman Website di Indonesia.</h3>
            <h1 className="text-logo">Mengenal GuruCoding</h1>
            <p>
              <strong>GuruCoding </strong> hadir untuk mengatasi masalah ini
              dengan menyediakan platform online yang menghubungkan programmer
              pemula dengan mentor dan coach berpengalaman. Platform ini
              menyediakan berbagai layanan untuk membantu programmer pemula
              meningkatkan keterampilan mereka, membangun jaringan profesional,
              dan mendapatkan pekerjaan yang sesuai dengan keinginan mereka.
            </p>
            <div className="d-flex mt-3">
              <a href="/maps" className="me-2 w-30 btn btn-outline-purple"> Cari Sekarang </a>
            </div>
          </Col>
          <Col id="mainImg">
            <img src={mentor} />
          </Col>
        </Row>
        <FunfactComponent />
        <ServiceComponent />
        <OurMentorComponent />
        <ContactComponent />
      </Container>
      <FooterComponent />
    </>
  );
};

export default Main;
