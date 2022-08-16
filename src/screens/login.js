import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import cardinal from "../LUCA_Images/Graphics/cardinal.png";
import fall from "../LUCA_Images/Graphics/fall.png";
import React from "react";
export const Login = () => {
  return (
    <Container className="white">
      <Row className="extra-padding yo fonts-style fonts-style-dark ">
          
        <Col className="white login yo">
          <Row className="yo">
            <Image className="login-image" src={fall} />
          </Row>

          <>
            <Form.Label htmlFor="inputPassword5">Username</Form.Label>
            <Form.Control
              type="username"
              aria-describedby="passwordHelpBlock"
            />
          </>
          <>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </>
        
        </Col>
        <Button  href="/login" className="text-button font-small">Don't Have an Account?</Button>
      </Row>
    </Container>
  );
};
