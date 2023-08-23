import React from "react";
import { Card, CarouselItem, Container, Image } from "react-bootstrap";

class NewsEntry extends React.Component {
    render() {
      const { title, image, description } = this.props;
      return (
        <div style={{ display: "flex", alignItems: "center", alignSelf: "center"}}>
          <img
            style={{
              width: "30%",
              backgroundColor: "rgb(255, 255, 255)",
              float: "left",
              marginTop: "100px",
              marginBottom: "100px"
            }}
            src={image}
            alt="First slide"
          />
          <div className="news-text" style={{ marginLeft: "7%",textAlign: "left" }}>
            <h3
              style={{
                color: "rgb(207, 4, 4)",
                marginBottom: "5%",
                fontWeight: "bolder",
                fontSize: "2.7vw"
              }}
            >
              {title}
            </h3>
            <p className="font-regular" style={{ width: "100%" }}>
              {description}
            </p>
          </div>
        </div>
      );
    }
  }
  
  
  

export default NewsEntry;
