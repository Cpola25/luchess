import React from "react";
import { Card, CarouselItem, Container, Image } from "react-bootstrap";

class PersonCard extends React.Component {
  render() {
    const { name, term, picture, description } = this.props;

    return (
        <div className="team-div1 to-left zoom">
          <Image className="team-person" src={picture} />
          <h2 className=" team-name">{name}</h2>
          <p className="team-description">
            {" "}
            {description}<br />
            {term}
          </p>
        </div>
    );
  }
}

export default PersonCard;
