import React from "react";
import { Card, CarouselItem, Container, Image } from "react-bootstrap";

class EventCard extends React.Component {
  render() {
    const { type, date, time, location, image, eventLink } = this.props;
    return (
      <div className="event-container  event1 ">
        <img src={image} alt="Event" className="event-pic" />
        <a className="event-button" href={eventLink}>
          <div className="event-text">Register</div>
        </a>
        <p className="event-caption">
          Type: {type} <br />
          Date: {date} <br />
          Time: {time} <br />
          Location: {location}
        </p>
      </div>
    );
  }
}

export default EventCard;
