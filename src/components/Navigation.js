import React from 'react'; 
import { Col, Container, Nav, Navbar, Row, Button } from "react-bootstrap";
import "../css/style.css"; 
import { Image } from 'react-bootstrap';
import Logo from "../LUCA_Images/Logo.png"; 


export const Navigation = () => {
  return (
      
  <Container >
      <Col>
        <Row>
            
          <Navbar expand="lg" variant="dark" className="fixed-top navbar"
           >
              <Image className="logo"src={Logo}></Image>
            <Navbar.Brand
              aria-controls="responsive-navbar-nav"
              href="/"
              src={Logo}
              className="fonts-style"
            >LUCA</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Container >
                <Nav fill className="m-auto ">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                </Nav>
                </Container>
            </Navbar.Collapse>
          </Navbar>
        </Row>
      </Col>
      </Container>
  );
};

