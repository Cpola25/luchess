import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import bcc from "../LUCA_Images/bcc.png";
import LTXLogo from "../LUCA_Images/icons/LTXLogo.jpeg";
import jaimik from "../LUCA_Images/jaimik.png";
import Bear from "../LUCA_Images/Bear.png";
import DrFlo from "../LUCA_Images/DrFlo.png";
import ltx from "../LUCA_Images/ltx.jpg";
import CCC from "../LUCA_Images/CCC.png";
import Logo from "../LUCA_Images/Logo.png";
import cardinal from "../LUCA_Images/cardinal.png";
import halloween from "../LUCA_Images/halloween.jpg";
import generalM from "../LUCA_Images/generalM.jpg";
import MardiG from "../LUCA_Images/MardiG.jpg";
import christmas from "../LUCA_Images/christmas.jpg";
export const Featured = () => {
  return (
    <Container className="white">
        <Row className="black spacer" />
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
     
      <Row className="fonts-style grey news-background extra-padding ">
        <h3 className="yo bottom-margin">News</h3>
        <Carousel className="yo card-background bottom-margin ">
          <Carousel.Item>
            <div className="news-div ">
              <img className="news-pic" src={ltx} alt="First slide" />
              <h3 className="red-text font-large">LTX Chess Club!</h3>
              <p className="font-small ">
                A new chess club opens in Lumberton TX thanks to Dr. Flores!
                Interested in joining? See meeting times below: <br />
                <br />
                <li>Monday: 02/14 @ 6PM </li>
                <li>Monday: 02/21 @ 6PM </li>
                <li>Monday: 02/28 @ 6PM</li>
                <br />
                133 #C, N Lhs Dr, Lumberton, TX 77657{" "}
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="news-div">
              <img className="news-pic" src={jaimik} alt="Second slide" />

              <h3 className="red-text font-large">Top player of 2022!</h3>
              <p className="font-small">
                A shoutout for recent graduate Jaimik Trivedi for being our top
                player this year! Jaimik showed incredible skill winning 1st
                place in every tournament! He was also one of our most dedicated
                members!
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="news-div">
              <img className="news-pic" src={Logo} alt="Third slide" />

              <h3 className="red-text font-large">New LUCA Leaders!</h3>
              <p className="font-small">
                Congrats to all winners of the LUCA 2022-2023 election!
                <br />
                <br />
                <li>President: Elijah Kelly </li>
                <li>Vice President: Alfredo Meza </li>
                <li>Secretary: Conner Montgomery</li>
                <li> Treasurer: Sai Harshith Tanneru </li>
                <li>Tech: Lizbeth Trujillo</li>
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="red_2 fonts-style font-regular fonts-style-dark extra-padding bottom-margin">
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
