var ChessWebAPI = require("chess-web-api");
var chessAPI = new ChessWebAPI();

/** https://api.chess.com/pub/club/lamar-university-chess-association
 *
 * Avergage Daily Rating
 * ICON
 * join request Link
 * MemberCount
 * Name
 *
 */

fetch("https://api.chess.com/pub/club/lamar-university-chess-association")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    //console.log(data);
    console.log(); 
    displayClub(data);
  })

  .catch((error) => console.error("FETCH ERROR:", error));

function displayClub(data) {
  
  let clubName = data.name.toUpperCase(); //club Name
  let dailyRating = data.average_daily_rating;
  let numMembers = data.members_count;

  const clubInfoDiv = document.getElementById("playBanner");
  ///////////////////////////////////////////////////////////////////////////////////
  const clubIco = document.createElement("img");
  clubIco.src = data.icon;
  clubIco.setAttribute(
    "style",
    "background-color: black !important;  !important; float:left !important; margin: 3% !important; "
  );

  clubInfoDiv.appendChild(clubIco);

  ///////////////////////////////////////////////////////////////////////////////////
  const lucaClubHeading = document.createElement("h1");
  lucaClubHeading.innerHTML = clubName;
  lucaClubHeading.setAttribute(
    "style",
    "color:  rgb(161, 20, 27, 0.975) !important; font-weight: 900 !important; margin-bottom:1% !important;  "
  );

  clubInfoDiv.appendChild(lucaClubHeading); //adds heading to Div element

  /////////////////////////////////////////////////////////////////////////////////
  const ratingDiv = document.createElement("div");
  const rating = document.createElement("h3");
  const ratingTitle = document.createElement("h2");
  ratingTitle.innerHTML = "Rating";
  rating.innerHTML = dailyRating;
  statsStyle(rating, ratingTitle, ratingDiv);


  ratingDiv.appendChild(rating);
  ratingDiv.appendChild(ratingTitle);
  clubInfoDiv.appendChild(ratingDiv);
  ////////////////////////////////////////////////////////////////////////////////
  const memberDiv = document.createElement("div");
  const memNums = document.createElement("h3");
  const memTitle = document.createElement("h2");
  memTitle.innerHTML = "Members";
  memNums.innerHTML = numMembers;
  statsStyle(memNums, memTitle, memberDiv);

  memberDiv.appendChild(memNums);
  memberDiv.appendChild(memTitle);
  clubInfoDiv.appendChild(memberDiv);
  ///////////////////////////////////////////////////////////////////////////////////
  const buttonDiv = document.createElement("div");
  const join = document.createElement("a");
  join.innerHTML = "Join LUCA on Chess.com";
  join.setAttribute("href", data.join_request);
  join.setAttribute(
    "style",
    "  text-decoration: none !important; border-width: 4px !important; border-color: red !important; border-style: double !important; padding: 1% !important; border-radius:5% !important; color: white; background-color: rgba(116, 7, 7, 0.675) !important; "
  );
  buttonDiv.setAttribute("style", "margin-top: 3% !important");
  buttonDiv.appendChild(join);
  clubInfoDiv.appendChild(buttonDiv);

  document.body.style.backgroundImage =
    "url('" + "../LUCA_Images/Graphics/clubBack.png" + "')";
}

/***************************************************************************/
/** Reusable CSS function*/
/***************************************************************************/

function statsStyle(element1, element2, element3) {
  
  element1.setAttribute(
    "style",
    "float: left !important; margin: 4% !important; font-weight: 700 !important;  font-size:4vh !important; "
  );
  element2.setAttribute(
    "style",
    "float: left !important; margin-right: 5% !important; width:100% !important; font-size:1.5vh !important; "
  );
  element3.setAttribute(
    "style",
    "float: left !important; margin-right: 10% !important; width:5% !important; text-align:center !important; "
  );
}
