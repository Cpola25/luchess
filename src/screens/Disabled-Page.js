import { Container, Row, Table } from "react-bootstrap";
import React from "react";

export const DisabledP = () => {
  return (
    <Container className="black" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Row
        style={{
          height: "1000px",
        }}
        className="black fonts-style extra-padding not-available top-margin"
      >
        <h1
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.496)",
            padding: "1%",
            letterSpacing: "0.3ch",
            paddingTop: "3%",
            marginTop: "65%"
          }}
          className="extra-padding text-center"
        >
          {" "}
          Page not Currently Available
        </h1>
      </Row>
    </Container>
  );
};

