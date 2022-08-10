import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import bcc from "../LUCA_Images/bcc.png";
import LTXLogo from "../LUCA_Images/icons/LTXLogo.jpeg";
import jaimik from "../LUCA_Images/jaimik.png";
import ltx from "../LUCA_Images/ltx.jpg";
import Logo from "../LUCA_Images/Logo.png";
import halloween from "../LUCA_Images/halloween.jpg";
import generalM from "../LUCA_Images/generalM.jpg";
import MardiG from "../LUCA_Images/MardiG.jpg";
import christmas from "../LUCA_Images/christmas.jpg";
export const Featured = () => {
  return (
    <Container className="black fonts-style">
      <Row className="black spacer extra-padding "></Row>
      <Row className="fonts-style grey parallax extra-padding ">
        <Carousel className=" card-background bottom-margin ">
          <Carousel.Item>
            <div className="news-div ">
              <img className="news-pic" src={ltx} alt="First slide" />
              <div className="news-text">
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
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="news-div">
              <img className="news-pic" src={jaimik} alt="Second slide" />
              <div className="news-text">
                <h3 className="red-text font-large">Top player of 2022!</h3>
                <p className="font-small">
                  A shoutout for recent graduate Jaimik Trivedi for being our
                  top player this year! Jaimik showed incredible skill winning
                  1st place in every tournament! He was also one of our most
                  dedicated members!
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="news-div">
              <img className="news-pic" src={Logo} alt="Third slide" />
              <div className="news-text">
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
            </div>
          </Carousel.Item>
        </Carousel>
      </Row>
     

      <Row className="white top-margin">
        <h3 className="text-center top-margin bottom-margin team-title">Events</h3>
        <div className="event-container event1 ">
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
   
<Row className="white spacer extra-padding">
  <div className="white spacer extra-padding"></div>
</Row>
      
      <Row className="grey extra-padding">
        <h3 className="team-title text-center">Other Groups</h3>
        <div className="group-div">
          <Image className="groups-pic" src={bcc}></Image>
          <h3 className="team-name text-center">The Beaumont Chess Club</h3>
          <p className="team-description text-center">
            Thursdays 3-5 pm <br /> 5657 Eastex Fwy, Beaumont, TX 77706
          </p>
          <Button className="facebook social-icons"></Button>
        </div>

        <div className="group-div">
          <Image className="groups-pic" src={ltx}></Image>
          <h3 className="team-name text-center">Lumberton Chess Club</h3>
          <p className="team-description text-center">
            Mondays <br /> 133 #C, N Lhs Dr, Lumberton, TX 77657
          </p>
          <Button className="insta social-icons"></Button>
        </div>
      </Row>
      <Row className="grey extra-padding spacer" />
      <Row className="black fonts-style font-regular fonts-style-dark extra-padding bottom-margin">
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
      <Row className="spacer  extra-padding grey"></Row>
    </Container>
  );
};
