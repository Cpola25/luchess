var ChessWebAPI = require("chess-web-api");
var chessAPI = new ChessWebAPI();

fetch("https://api.chess.com/pub/club/lamar-university-chess-association/members")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log();
   displayMembers(data);
  })

  .catch((error) => console.error("FETCH ERROR:", error));

  ///////////////////////////////////////////////////////////////////////////////////
  function displayMembers(data) {

  const mostActiveMembersDiv = document.getElementById("activeMembers"); 
  const membersDiv = document.createElement("div");

   let mostActive_1 = data.all_time[0].username; 
  
   const userTitle = document.createElement("h3"); 
   userTitle.innerHTML= mostActive_1; 

   membersDiv.setAttribute(
    "style",
    "color:  rgb(161, 20, 27, 0.975); "
  );

   membersDiv.appendChild(userTitle); 
   mostActiveMembersDiv.appendChild(membersDiv);

   

  }