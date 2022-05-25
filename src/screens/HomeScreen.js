
import { Col, Container, Image, Row, Button, Card,Carousel } from "react-bootstrap";
import Gallery5 from "../LUCA_Images/Gallery5.jpg";
import Gallery3 from "../LUCA_Images/Gallery3.jpg";
import Gallery2 from "../LUCA_Images/Gallery2.jpg";
import Gallery1 from "../LUCA_Images/Gallery1.jpg";
import halloween from "../LUCA_Images/halloween.jpg"; 
import singular from "../LUCA_Images/singular.png";

export const HomeScreen = () => {

  return (
    <Container className="no-padding" >
      <Row >
        <Carousel>
          <Carousel.Item >
          <Image className="pic" src={Gallery3} />
          </Carousel.Item>
          <Carousel.Item>
          <Image className="pic" src={Gallery2} />
          </Carousel.Item>
          <Carousel.Item>
          <Image className="pic" src={Gallery1} />
          </Carousel.Item>
          <Carousel.Item>
          <Image className="pic" src={Gallery5} />
          </Carousel.Item>
        </Carousel>
        
      </Row>
      <Row className="white spacer" />
      <Row className="black co">
        <Image className="ima" src={singular} />
        <Col className="fo fonts-style indent-fo">
          <Container>
          <p className="in" >Founded for all Lamar University</p>
          <p>
            {" "}
            <strong className="strong">STUDENTS</strong>,{" "}
            <strong className="strong">FACULTY</strong>,{" "}
            <strong className="strong">STAFF</strong>, and{" "}
            <strong className="strong">ALUMNI</strong>
          </p>
          <p className="in">interested in the game of chess.</p>
          </Container>
          <Button className="buto fonts-style">Join Us</Button>
        </Col>
      </Row>
      <Row className="grey spacer" />
    
    </Container>
  );
};
