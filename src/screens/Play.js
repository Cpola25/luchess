import { Container, Row, Table } from "react-bootstrap";
import React from "react";
import { Chessboard } from "react-chessboard";
import fetchClub from "../Scripts/fetchClub.js"; 
export const Play = () => {

 
  return (   
<html className="black" lang="en">
  <head>
    <meta charset="UTF-8" />
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <div id="playBanner"></div>
    <div id="overlay">Page is not finished yet! Current piece displays live club data from Chess.com. More coming soon!</div>
    <script  src="../Scripts/fetchClub.js"></script>
    <script src="../Scripts/fetchTournaments.js"></script>
  </body>
</html>

  );
};
