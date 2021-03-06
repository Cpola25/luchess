import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Button } from "react-bootstrap";
import { Navigation } from "./components/Navigation";
import { HomeScreen } from "./screens/HomeScreen";
import { Play } from "./screens/Play";
import { Featured } from "./screens/Featured";
import { Login } from "./screens/login";
import { Bottom } from "./components/Bottom";
import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <Container fluid>
      <Row>
        <Navigation />
      </Row>
      <Row>
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/featured" element={<Featured/>} />
            <Route path="/play" element={<Play/>} />
            <Route path="/store" element={<HomeScreen />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </Router>
      </Row>
      <Row>
        <Bottom/>
      </Row>
    </Container>
  );
}

export default App;
