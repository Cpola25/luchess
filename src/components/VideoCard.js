import React from "react";
import { Card, CarouselItem, Container, Image } from "react-bootstrap";

class VideoCard extends React.Component {
    render() {
      const {link} = this.props;
      return (
        <iframe
        style={{marginRight: "3%", height: "150px", width: "170px", borderColor: "white", borderStyle: "groove", borderWidth: "2px"}}
        frameborder="0"
        allowfullscreen="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Learn to Play!"
        src={link}
        id="widget28"
      ></iframe>
      );
    }
  }
  
export default VideoCard;