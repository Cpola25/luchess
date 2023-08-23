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

import { ContactUs } from "../components/Contact";
import React from "react";
import PersonCard from "../components/PersonCard";
import {developers, officers, sponsors, term} from "../constants/ClubInfo.js"

const generateCarouselItems = (entries, type) => {
  const items = [];
  const itemsPerSlide = 3;

  for (let i = 0; i < entries.length; i += itemsPerSlide) {
    const carouselItemEntries = entries.slice(i, i + itemsPerSlide);

    const carouselItem = (
      <div className="team-div" key={i}>
        <h3 className="bottom-margin team-title">{type}</h3>
        {carouselItemEntries.map(([position, data]) => (
            <PersonCard
            description={position}
            term={type === "Officers" ? term : undefined}
            {...data} 
          />
        ))}
      </div>
    );

    items.push(carouselItem);
  }
  return items;
};

export const HomeScreen = () => {


  const officerEntries = Object.entries(officers);
  const sponsorEntries = Object.entries(sponsors);
  const developerEntries = Object.entries(developers); 
  const carouselItems = [
    ...generateCarouselItems(officerEntries, "Officers"),
    ...generateCarouselItems(sponsorEntries, "Sponsors"),
    ...generateCarouselItems(developerEntries, "Developers")
  ];

  return (
    <Container className="fonts-style black ">
      <Row className="cool">
        <div className="HS-Button-div"></div>
      </Row>
      <Row className="grey">
        <hr />
        <div className=" read-text">
          <p className="font-regular text-center motto-design fade-in">
            Founded in 2021 for all Lamar University Students, Staff, and Alumni
            with a passion for the game of chess.
          </p>
        </div>
      </Row>

      <Row className="white">
        <Carousel className="bottom-margin">
          {carouselItems.map((carouselItem, index) => (
            <Carousel.Item>{carouselItem}</Carousel.Item>
          ))}
        </Carousel>
      </Row>
      <Row className="black spacer" />

      <Row className="black top-margin">
        <ContactUs />
      </Row>
    </Container>
  );
};
