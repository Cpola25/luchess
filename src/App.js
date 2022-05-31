import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Button } from "react-bootstrap";
import { Navigation } from "./components/Navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { Bottom } from "./components/Bottom";
import React from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Container fluid>
      <Row>
        <Navigation/>
      </Row>
      <Row>
        <HomeScreen/>
      </Row>
    </Container>
  );
}

export default App;
