import { Col, Container, Image, Row, Button, Card } from "react-bootstrap";
import Gallery3 from "../LUCA_Images/Gallery3.jpg";
import halloween from "../LUCA_Images/halloween.jpg"; 
import singular from "../LUCA_Images/singular.png";


export const HomeScreen = () => {
  return (
    <Container className="no-padding">
      <Row >
        <Image src={Gallery3} />
      </Row>
      <Row className="white spacer" />
      <Row className="black co">
        <Image className="ima" src={singular} />
        <Col className="fo fonts-style">
          <p className="indent-fo">Founded for all Lamar University</p>
          <p>
            {" "}
            <strong className="strong">STUDENTS</strong>,{" "}
            <strong className="strong">FACULTY</strong>,{" "}
            <strong className="strong">STAFF</strong>, and{" "}
            <strong className="strong">ALUMNI</strong>
          </p>
          <p className="indent-fo">interested in the game of chess.</p>

          <Button className="buto fonts-style">Join Us</Button>
        </Col>
      </Row>
      <Row className="white spacer" />
    
    </Container>
  );
};
