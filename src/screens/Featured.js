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

export const Featured = () => {
  return (
    <Container className="white">
      <Row className="red_2 spacer" />

      <hr className="black hr"></hr>
      <Row className="white fonts-style yo bottom-margin extraText-padding">
        <h3 className="bottom-margin">Meet Our Sponsers</h3>
        <a
          className="sponser-link zoom"
          target="_blank"
          href="https://www.instagram.com/iambearrealla/"
        >
          <Image href="/home" className="picture" src={Bear} />
        </a>
        <a
          className="sponser-link zoom"
          target="_blank"
          href="https://www.lamar.edu/students/student-engagement/dean-of-students/index.html"
        >
          <Image className="picture" src={DrFlo} />
        </a>
        <a
          className="sponser-link zoom"
          target="_blank"
          href="http://www.childrenschessclub.com/"
        >
          <Image href="/home" className="picture" src={CCC} />
        </a>
      </Row>
      <Row className="red_1 spacer" />
      <Row className="black fonts-style extra-padding">
        <hr className="red_3 hr"></hr>
        <h3 className="yo bottom-margin">News</h3>

        <Carousel className="yo bottom-margin">
          <Carousel.Item>
            <img className="news-pic" src={ltx} alt="First slide" />
            <Container className="news-text">
              <h3 className="red-text font-large">Lumberton Chess Club!</h3>
              <p className="font-small">
                A new chess club opens in Lumberton TX thanks to Dr. Flores!
                Interested in joining? See meeting times below: <br />
                <br />
                <li className="tab-text">Monday: 02/14 @ 6PM </li>
                <li className="tab-text">Monday: 02/21 @ 6PM </li>
                <li className="tab-text">Monday: 02/28 @ 6PM</li>
                <br />
                133 #C, N Lhs Dr, Lumberton, TX 77657{" "}
              </p>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <img className="news-pic" src={jaimik} alt="Second slide" />

            <Container className="news-text">
              <h3 className="red-text font-large">Top player of 2022</h3>
              <p className="font-small">
                A shoutout for reccent graduate Jaimik Trivedi for being our top
                player this year! Jaimik showed incredible skill winning 1st
                place in every tournament! He was also one of our most dedicated
                members this year!
              </p>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <img className="news-pic" src={Logo} alt="Third slide" />

            <Container className="news-text">
              <h3 className="red-text font-large">New LUCA Leaders!</h3>
              <p className="font-small">
                Congrats to all winners of the LUCA 2022-2023 election! We
                welcome the following officials for the new year:
                <br />
                <br />
                <li>President: Elijah Kelly </li>
                <li>Vice President: Alfredo Meza </li>
                <li>Secretary: Conner Montgomery</li>
                <li> Treasurer: Sai Harshith Tanneru </li>
                <li>Tech: Lizbeth Trujillo</li>
              </p>
            </Container>
          </Carousel.Item>
        </Carousel>
        <hr className="red_3 hr"></hr>
      </Row>
      <Row className="red_1 spacer" />

    </Container>
  );
};
