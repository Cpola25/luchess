import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import cardinal from "../LUCA_Images/Graphics/cardinal.png";
import fall from "../LUCA_Images/Graphics/fall.png";
import React from "react";
export const Login = () => {
  return (
    <Container className="white">
      <Row className="extra-padding fonts-style fonts-style-dark ">
        <div className="login-BigDiv">
          <div className=" loginInputDiv">
            <div>
              <Image className="login-ico" src={fall} />
            </div>

            <Form>
            <>
              <Form.Label htmlFor="inputPassword5">Username</Form.Label>
              <Form.Control
                type="username"
                aria-describedby="passwordHelpBlock"
                className="input login-inputs"
              />
            </>
            <>
              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                className="input login-inputs"
              />
            </>
            <input className="login-userButton" type="submit" value="Login" />
            </Form>
    
            <div className="text-center nAC-div">
              <a href="/login" className=" NoACC-button ">
                Don't Have an Account?
              </a>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
