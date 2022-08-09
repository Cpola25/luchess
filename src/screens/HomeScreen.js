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
import Bear from "../LUCA_Images/Bear.png";
import DrFlo from "../LUCA_Images/DrFlo.png";
import Logo from "../LUCA_Images/Logo.png";
import CCC from "../LUCA_Images/CCC.png";
import chekered1 from "../LUCA_Images/chekered1.png";
import Liz from "../LUCA_Images/Liz.jpg";
import jaimik from "../LUCA_Images/jaimik.png";
import ltx from "../LUCA_Images/ltx.jpg";
import Event1 from "../LUCA_Images/Event_Photos/Event1.jpg"; 
import Event2 from "../LUCA_Images/Event_Photos/Event2.jpg"; 
import Event3 from "../LUCA_Images/Event_Photos/Event3.jpg"; 
import Event4 from "../LUCA_Images/Event_Photos/Event4.jpg"; 
import Event5 from "../LUCA_Images/Event_Photos/Event5.jpg"; 
import Event6 from "../LUCA_Images/Event_Photos/Event6.jpg"; 
import YouTube from "react-youtube";
import halloween from "../LUCA_Images/halloween.jpg";
import generalM from "../LUCA_Images/generalM.jpg";
import MardiG from "../LUCA_Images/MardiG.jpg";
import christmas from "../LUCA_Images/christmas.jpg";

export const HomeScreen = () => {
  return (
    <Container className="fonts-style black ">
      <Row className=" cool" >
        <div>
          
        </div>
      </Row>
      <Row className="black">
        <div className=" read-text parallax">
        <p className="font-regular text-center motto-design">
          Founded in 2021 for all Lamar University Students, Staff, and Alumni
          with a passion for the game of chess.
        </p>
        </div>
      </Row>

      <Row className="black spacer "></Row>
      <Row className="white">
        <Carousel className="bottom-margin">
          <Carousel.Item>
       
            <div className="team-div font-style">
            <h3 className="team-title">Sponsors</h3>
              <div className="team-div1 to-left">
                <Image className="team-person" src={DrFlo} />
                <h2 className=" team-name">Dr.Flores</h2>
                <p className="team-description">
                  Dean of Students, LUCA Advisor, and valued
                  LUCA Sponsor{" "}
                </p>
              </div>
              <div className="team-div1 to-left">
                <Image className="team-person" src={Bear} />
                <h2 className=" team-name">Mr.Hebert(Bear)</h2>
                <p className="team-description">
                  Entrepreneur and valued LUCA Sponser
                </p>
              </div>
              <div className="team-div1 to-right">
                <Image className="team-person" src={CCC} />
                <h2 className=" team-name ">The Childrens Chess Club</h2>
                <p className="team-description">
                  TX chess Organization and a
                  valued LUCA Sponsor
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="team-div">
              <h3 className="team-title">Officers...</h3>
              <div className="team-div1 to-left">
                <Image className="team-person " src={chekered1} />
                <h2 className=" team-name">Elijah K.</h2>
                <p className="team-description">
                  President <br />
                  2022-2023
                </p>
              </div>
              <div className="team-div1 to-left">
                <Image className="team-person" src={chekered1} />
                <h2 className=" team-name">Alfredo M.</h2>
                <p className="team-description">
                  VP <br />
                  2022-2023
                </p>
              </div>
              <div className="team-div1 to-right">
                <Image className="team-person" src={chekered1} />
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
              <div className="team-div1 to-left">
                <Image className="team-person " src={chekered1} />
                <h2 className=" team-name">Sai H.T. </h2>
                <p className="team-description">
                  Treasurer <br />
                  2022-2023
                </p>
              </div>

              <div className="team-div1 to-left">
                <Image className="team-person" src={Liz} />
                <h2 className=" team-name">Lizbeth T.</h2>
                <p className="team-description">
                  Tech <br />
                  Front/Back End Web Dev.
                </p>
              </div>
              <div className="team-div1 to-right">
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
     
      <Row className="black top-margin bottom-margin extra-padding">
      <Row className="black top-margin bottom-margin extra-padding">
      
        <div className="event-container event1">
          <img src={MardiG} alt="Event" className="event-pic" />
          <a
            className="event-button"
            href="https://luhub.lamar.edu/LUChess/rsvp_boot?id=1593430"
          >
            <div className="event-text">Register</div>
          </a>
        </div>
        <div className="event-container">
          <img src={generalM} alt="Event" className="event-pic" />
          <a
            className="event-button"
            href="https://luhub.lamar.edu/LUChess/rsvp_boot?id=1474212"
          >
            <div className="event-text">Register</div>
          </a>
        </div>
        <div className="event-container">
          <img src={halloween} alt="Event" className="event-pic" />
          <a
            className="event-button"
            href="https://luhub.lamar.edu/LUChess/rsvp_boot?id=1367725"
          >
            <div className="event-text">Register</div>
          </a>
        </div>
        <div className="event-container">
          <img src={christmas} alt="Event" className="event-pic" />
          <a
            className="event-button"
            href="https://luhub.lamar.edu/LUChess/rsvp_boot?id=1397010"
          >
            <div className="event-text">Register</div>
          </a>
        </div>
      </Row>
     
      </Row>



     

    </Container>
  );
};
