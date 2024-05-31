import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import gurucoding from "../assets/gurucodingicon2.png";

function NavbarComponent() {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar collapseOnSelect fixed="top" key={expand} variant="dark" expand={expand} className="mb-3 navbarComponent" >
          <Container>
            <Navbar.Brand className="d-flex align-items-center ms-md-2" href="#main">
              <img src={gurucoding} alt="Logo Website" className="logo-navbar me-2" />
              <h2 className="mb-0"> Guru<span className="text-logo">Coding</span></h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas className="bg-dark text-light" id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#main">
                    <strong> Home</strong>
                  </Nav.Link>
                  <Nav.Link href="#funfact">
                    <strong>Fun fact</strong>
                  </Nav.Link>
                  <Nav.Link href="#services">
                    <strong>Service</strong>
                  </Nav.Link>
                  <Nav.Link href="#our_mentor">
                    <strong>Mentor</strong>
                  </Nav.Link>
                  <Nav.Link href="#contact">
                    <strong>About</strong>
                  </Nav.Link>
                  <Nav.Link className="contact-button" href="https://dashboard.gurucoding.cartera.my.id">
                    <strong>Login</strong>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;
