import {
  Button,
  CardGroup,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";

import { Shop } from "../components/shop";
import React from "react";
import NewsEntry from "../components/NewsEntry";
import EventCard from "../components/EventCard";
import {newsEntries, eventEntries, videoEntries} from "../constants/ClubInfo.js"
import VideoCard from "../components/VideoCard";
const Featured = () => {

  const newsItems = [];
  const eventItems = [];
  const videoItems = [];

  for (let i = 0; i < newsEntries.length; i++) {
    const carouselItem = (
      <div className="team-div" key={i}>
        <NewsEntry {...newsEntries[i]} />
      </div>
    );
    newsItems.push(carouselItem);
  }

  for (let i = 0; i < eventEntries.length; i++) {
    const event = (
        <EventCard {...eventEntries[i]} />
    );
    eventItems.push(event);
  }

  for (let i = 0; i < videoEntries.length; i++) {
    const video = (
        <VideoCard {...videoEntries[i]} />
    );
    videoItems.push(video);
  }

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
        <Carousel className="card-background">
          {newsItems.map((carouselItem, index) => (
            <Carousel.Item>{carouselItem}</Carousel.Item>
          ))}
        </Carousel>
      </Row>

      <Row className="spacer black extra-padding" />

      <Row className="event-back white extra-padding ">
        <h1 className="text-center bottom-margin">Events</h1>
        {eventItems.map((event, index) => (
          <> {event}</>
          ))}
      </Row>

      <Row className="grey extra-padding spacer" />
      <Row className="black fonts-style font-regular fonts-style-dark extra-padding ">
        <h1 className=" tab-text  ">Reasources</h1>
        <hr />
        <Container className="yo top-margin">
        {videoItems.map((video, index) => (
          <>{video}</>
          ))}
        </Container>
      </Row>

      <Row className="spacer grey"></Row>
    </Container>
  );
};
export default Featured;
