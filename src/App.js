import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Button } from "react-bootstrap";
import { Navigation } from "./components/Navigation";
import { HomeScreen } from "./screens/HomeScreen";
import React from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Container className="no-padding">
      <Row>
        <Navigation></Navigation>
      </Row>
      <Row>
   <HomeScreen></HomeScreen>
    
      </Row>
    </Container>
  );
}

export default App;
