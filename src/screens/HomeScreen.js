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
  Fade,
} from "react-bootstrap";
import Bear from "../LUCA_Images/Headshots/Bear.png";
import DrFlo from "../LUCA_Images/Headshots/DrFlo.png";
import CCC from "../LUCA_Images/Headshots/CCC.png";
import chekered1 from "../LUCA_Images/Graphics/chekered1.png";
import Liz from "../LUCA_Images/Headshots/Liz.jpg";
import Sai from "../LUCA_Images/Headshots/Sai.jpg";
import Elijah from "../LUCA_Images/Headshots/Elijah.jpg";
import Connor from "../LUCA_Images/Headshots/Connor.jpg";
import Alfredo from "../LUCA_Images/Headshots/Alfredo.jpeg";
import { Shop } from "../components/shop";
import { ContactUs } from "../components/Contact";

export const HomeScreen = () => {
 
  return (
    <Container className="fonts-style black ">
      <Row className=" cool">
        <div className="">
          <h1 className="home-heading">LEARN, PLAY, EXCEL</h1>
        </div>
      </Row>
      <Row className="black">
        <div className=" read-text parallax">
          
          <p className="font-regular text-center motto-design fade-in">
            Founded in 2021 for all Lamar University Students, Staff, and Alumni
            with a passion for the game of chess.
          </p>
        </div>
      </Row>

      <Row className="black spacer "></Row>
      <Row className="white">
        <Carousel className="bottom-margin">
          <Carousel.Item>
            <div className="team-div font-style ">
              <h3 className="team-title">Sponsors</h3>
              <div className=" zoom team-div1 to-left ">
                <Image className="team-person" src={DrFlo} />
                <h2 className=" team-name">Dr.Flores</h2>
                <p className="team-description">
                  Dean of Students, LUCA Advisor, and valued LUCA Sponsor{" "}
                </p>
              </div>
              <div className="team-div1 to-left zoom">
                <Image className="team-person" src={Bear} />
                <h2 className=" team-name">Mr.Hebert(Bear)</h2>
                <p className="team-description">
                  Valued LUCA Sponser
                </p>
              </div>
              <div className="team-div1 to-right zoom">
                <Image className="team-person" src={CCC} />
                <h2 className=" team-name ">The Childrens Chess Club</h2>
                <p className="team-description">
                  Valued LUCA Sponsor
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="team-div">
              <h3 className="team-title">Officers...</h3>
              <div className="team-div1 to-left zoom">
                <Image className="team-person " src={Elijah} />
                <h2 className=" team-name">Elijah K.</h2>
                <p className="team-description">
                  President <br />
                  2022-2023
                </p>
              </div>
              <div className="team-div1 to-left zoom">
                <Image className="team-person" src={Alfredo} />
                <h2 className=" team-name">Alfredo M.</h2>
                <p className="team-description">
                  VP <br />
                  2022-2023
                </p>
              </div>
              <div className="team-div1 to-right zoom">
                <Image className="team-person" src={Connor} />
                <h2 className=" team-name">Conner M.</h2>
                <p className="team-description">
                  Secretary <br />
                  2022-2023
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="team-div">
              <h3 className="team-title">Officers</h3>
              <div className="team-div1 to-left zoom">
                <Image className="team-person " src={Sai} />
                <h2 className=" team-name">Sai H.T. </h2>
                <p className="team-description">
                  Treasurer <br />
                  2022-2023
                </p>
              </div>

              <div className="team-div1 to-left zoom">
                <Image className="team-person" src={Liz} />
                <h2 className=" team-name">Lizbeth T.</h2>
                <p className="team-description">
                  Tech <br />
                  Front/Back End Web Dev.
                </p>
              </div>
              <div className="team-div1 to-right zoom">
                <Image className="team-person" src={chekered1} />
                <h2 className=" team-name">Open</h2>
                <p className="team-description">
                  Historian <br />
                  Currently Open
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Row>

      <Row className="black">
        <ContactUs />
      </Row>
    </Container>
  );
};
