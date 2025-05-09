import { Navbar, Container, Nav } from "react-bootstrap";
import "../style/landingPage.css";
import myLogo from "../assets/brand/logo-rehab.png";

const NavigationBar = ({ scrollToSection, serviceRef, aboutRef, contactRef }) => {
  return (
    <div className="Nav-wrapped">
      <Navbar expand="lg" className="bg-white sticky-top">
        <Container>
          <Navbar.Brand>
            <a href="#">
              <img src={myLogo} alt="logo-rehab" width={30} />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                HOME
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(serviceRef)}>
                SERVICE
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(aboutRef)}>
                ABOUT US
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(contactRef)}>
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;