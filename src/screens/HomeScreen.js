import {
  Col,
  Container,
  Image,
  Row,
  Button,
  Card,
  Carousel,
  Figure,
  CardGroup,
  Accordion,
} from "react-bootstrap";
import Gallery5 from "../LUCA_Images/Gallery5.jpg";
import Gallery3 from "../LUCA_Images/Gallery3.jpg";
import Gallery2 from "../LUCA_Images/Gallery2.jpg";
import Gallery1 from "../LUCA_Images/Gallery1.jpg";
import halloween from "../LUCA_Images/halloween.jpg";
import generalM from "../LUCA_Images/generalM.jpg";
import MardiG from "../LUCA_Images/MardiG.jpg";
import singular from "../LUCA_Images/singular.png";
import branch from "../LUCA_Images/branch.png"; 
import Bear from "../LUCA_Images/Bear.png";
import DrFlo from "../LUCA_Images/DrFlo.png";
import ltx from "../LUCA_Images/ltx.jpg";
import CCC from "../LUCA_Images/CCC.png";

import YouTube from "react-youtube";

export const HomeScreen = () => {
  return (
    <Container fluid>
      <Row>
        <Carousel>
          <Carousel.Item>
            <Image className="carousel-pics" src={Gallery3} />
          </Carousel.Item>
          <Carousel.Item>
            <Image className="carousel-pics" src={Gallery2} />
          </Carousel.Item>
          <Carousel.Item>
            <Image className="carousel-pics" src={Gallery1} />
          </Carousel.Item>
          <Carousel.Item>
            <Image className="carousel-pics" src={Gallery5} />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="white spacer" />
      <Row className="white spacer" />
      <Row className="white spacer" />
      <Row className="red_1 spacer" />
    
      <Row className="black fonts-style font-regular">
        <Container className="top-margin yo">
          <Image className="HS-Image bottom-margin" src={singular} />
          <p className="top-margin">
            Founded 2021 for all Lamar University
          </p>
          <p>
            {" "}
            <strong className="strong">STUDENTS</strong>,{" "}
            <strong className="strong">FACULTY</strong>,{" "}
            <strong className="strong">STAFF</strong>, and{" "}
            <strong className="strong">ALUMNI</strong>
          </p>
          <p>with a passion for the game of chess.</p>
        </Container>
        <hr className="red_3 hr"></hr>
        <Col>
          <h3 className="fonts-style top-margin bottom-margin yo">
            Events
          </h3>

          <CardGroup className="fonts-style yo bottom-margin">
            <Card fluid className="zoom yo">
              <Card.Img variant="top" src={MardiG} />
              <Card.Body>
                <Card.Title className="font-regular">Tournament</Card.Title>
                <Card.Text className="font-small">This Event is Over</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button className="card-button">Sign-Up</Button>
              </Card.Footer>
            </Card>
            <Card fluid className="zoom yo">
              <Card.Img variant="top" src={halloween} />
              <Card.Body>
                <Card.Title className="font-regular">Tournament</Card.Title>
                <Card.Text className="font-small">This Event is Over</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button className="card-button">Sign-Up</Button>
              </Card.Footer>
            </Card>
            <Card fluid className="zoom yo">
              <Card.Img variant="top" src={generalM} />
              <Card.Body>
                <Card.Title className="font-regular">
                  General Meetings
                </Card.Title>
                <Card.Text className="font-small">This Event is Over</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button className="card-button">Sign-Up</Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </Row>

      <Row className="black spacer" />
      <Row className="black spacer" />
      <Row className="red_1 spacer" />
      <Row className="white fonts-style font-regular fonts-style-dark extra-padding bottom-margin">
        
          <h3 className="bottom-margin yo ">Reccomended Videos</h3>
          <Container className="yo">
          <iframe
            className="yT"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Learn to Play!"
            src="https://www.youtube.com/embed/OCSbzArwB10?enablejsapi=1&amp;
        origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=27"
            id="widget28"
          ></iframe>
          <iframe
            className="yT"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Openings"
            src="https://www.youtube.com/embed/Txvz97tzDfM?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=25"
            id="widget26"
          ></iframe>
           <iframe
            className="yT"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="Openings"
            src="https://www.youtube.com/embed/SXrKRA_KZ5k"
            id="widget26"
          ></iframe>
      </Container>
      </Row>
  
    </Container>
  );
};
