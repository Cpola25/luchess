import {
  Button,
  CardGroup,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import bcc from "../LUCA_Images/Event_Photos/bcc.png";
import jaimik from "../LUCA_Images/Event_Photos/jaimik.png";
import ltx from "../LUCA_Images/Event_Photos/ltx.jpg";
import Shirt from "../LUCA_Images/Merch/Shirt.png";
import Logo from "../LUCA_Images/Graphics/Logo.png";
import halloween from "../LUCA_Images/Event_Posters/halloween.jpg";
import generalM from "../LUCA_Images/Event_Posters/generalM.jpg";
import MardiG from "../LUCA_Images/Event_Posters/MardiG.jpg";
import christmas from "../LUCA_Images/Event_Posters/christmas.jpg";
import { Shop } from "../components/shop";

 const Featured = () => {
  return (
    <Container className="black fonts-style">
      <Row className="black spacer  extra-padding "></Row>
      <Row className="featured-Heading"></Row>

      <Row className="black spacer" />
      <Row className="white extra-padding">
        <div className="shop-div">
          <Shop />
        </div>
        <hr />
      </Row>

      <Row className="news-background">
        {" "}
        <Carousel className=" card-background">
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
      <Row className="spacer black extra-padding" />
      
     
      <Row className="event-back white extra-padding ">
        <h1 className="text-center bottom-margin">Events</h1>
        <div className="event-container  event1 ">
          <img src={MardiG} alt="Event" className="event-pic" />
          <a
            className="event-button"
            href="https://luhub.lamar.edu/LUChess/rsvp_boot?id=1593430"
          >
            <div className="event-text">Register</div>
          </a>
          <p className="event-caption">
            Type: Tournament <br/>
            Date: Event Over <br />
            Time: N/A <br />
            Location: N/A
          </p>
        </div>
        <div className="event-container">
          <img src={generalM} alt="Event" className="event-pic" />
          <a
            className="event-button"
            href="https://luhub.lamar.edu/LUChess/rsvp_boot?id=1474212"
          >
            <div className="event-text">Register</div>
          </a>
          <p className="event-caption">
            Type: Meeting <br/>
            Date: Event Over <br />
            Time: N/A <br />
            Location: N/A
          </p>
        </div>
        <div className="event-container">
          <img src={halloween} alt="Event" className="event-pic" />
          <a
            className="event-button"
            href="https://luhub.lamar.edu/LUChess/rsvp_boot?id=1367725"
          >
            <div className="event-text">Register</div>
          </a>
          <p className="event-caption ">
            Type: Tournament<br/>
            Date: Event Over <br />
            Time: N/A <br />
            Location: N/A
          </p>
        </div>
        <div className="event-container">
          <img src={christmas} alt="Event" className="event-pic" />
          <a
            className="event-button"
            href="https://luhub.lamar.edu/LUChess/rsvp_boot?id=1397010"
          >
            <div className="event-text">Register</div>
          </a>
          <p className="event-caption">
          Type: Tournament<br/>
            Date: Event Over <br />
            Time: N/A <br />
            Location: N/A
          </p>
        </div>
      </Row>

      <Row className="grey extra-padding spacer" />
      <Row className="black fonts-style font-regular fonts-style-dark extra-padding ">
        <h1 className=" tab-text  ">Reasources</h1>
        <hr />
    
        
        <Container className="yo top-margin">
         
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

      <Row className="spacer grey"></Row>
    </Container>
  );
};
export default Featured; 