import React from "react";
import { Col, Container, Nav, Navbar, Row, Button } from "react-bootstrap";
import "../css/style.css";
import { Image } from "react-bootstrap";
import Logo from "../LUCA_Images/Logo.png";

export const Navigation = () => {
  return (
    <Container fluid>
      <Col>
        <Row fluid>
          <Navbar fluid expand="lg" variant="dark" className="fixed-top navbar">
            <Image className="logo" src={Logo}></Image>
            <Navbar.Brand
              aria-controls="responsive-navbar-nav"
              href="/"
              src={Logo}
              className="fonts-style"
            >
              LUCA
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Container>
                <Nav fill className="m-auto fonts-style">
                  <Button href="/" className="fonts-style nav-button">
                    Home
                  </Button>
                  <Button href="/featured" className="fonts-style nav-button">
                    Featured
                  </Button>
                  <Button href="/play" className="fonts-style nav-button">
                    Play
                  </Button>
                  <Button href="/store" className="fonts-style nav-button">
                    Store
                  </Button>
                  <Button href="/login" className="fonts-style login-button">
                    Login
                  </Button>
                </Nav>
              </Container>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Col>
    </Container>
  );
};
