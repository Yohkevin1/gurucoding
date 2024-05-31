import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import { serviceItems } from "../data/Data";
import "../index.css";

const ServiceComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Container>
      <h2 id="services" className="my-4 text-center sectionHeader text-light">Layanan</h2>
      <Slider {...settings}>
        {serviceItems.map((item) => (
          <div className="px-3" key={item.id}>
            <Col>
              <Card className="bg-dark text-light service-card">
                <Card.Img variant="top" className="logoservice mx-auto" src={item.image} alt={item.title} />
                <Card.Body>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          </div>
        ))}
      </Slider>
    </Container>
  )
}

export default ServiceComponent;
