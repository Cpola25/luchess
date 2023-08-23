/*******************************  HeadShot Imports    ********************************/
import Bear from "../LUCA_Images/Headshots/Bear.png";
import DrFlo from "../LUCA_Images/Headshots/DrFlo.png";
import CCC from "../LUCA_Images/Headshots/CCC.png";
import empty from "../LUCA_Images/Headshots/default.png";
import vp from "../LUCA_Images/Headshots/vp.jpg";
import me from "../LUCA_Images/Headshots/Liz.jpg";
/*******************************  Event Poster Imports    ********************************/
import halloween from "../LUCA_Images/Event_Posters/halloween.jpg";
import generalM from "../LUCA_Images/Event_Posters/generalM.jpg";
import christmas from "../LUCA_Images/Event_Posters/christmas.jpg";
import Chess_Tournament from "../LUCA_Images/Event_Posters/Chess_Tournament.jpeg";

/*******************************  News Entry Imports    ********************************/
import Logo from "../LUCA_Images/Graphics/Logo.png";
import b from "../LUCA_Images/NewsImages/bcc.png";
import ltx from "../LUCA_Images/Event_Photos/ltx.jpg";

export const term = "2023-2024";

/***************************************************************************/
/**Personel*/
/***************************************************************************/

export const officers = {
  "Club Advisor": {
    name: "Dr. Flores",
    picture: DrFlo,
  },
  President: {
    name: "Gabe Culver",
    picture: empty,
  },
  "Vice President": {
    name: "Evelyn Hardy",
    picture: vp,
  },
  Historian: {
    name: "Efosa",
    picture: empty,
  },
  Treasurer: {
    name: "Open Position",
    picture: empty,
  },
  Tech: {
    name: "Ben Unruh",
    picture: empty,
  },
};

export const sponsors = [
  {
    name: "Mr.Hebert(Bear)",
    picture: Bear,
    description: "Valued LUCA Sponser",
  },
  {
    name: "The Childrens Chess Club",
    picture: CCC,
    description: "Valued LUCA Sponsor",
  },
];

export const developers = [
  { name: "Lizbeth Trujillo", picture: me, description: "Full-Stack" },
];

/***************************************************************************/
/**News*/
/***************************************************************************/

export const newsEntries = [
  {
    title: "2023-2024 Officers",
    image: Logo,
    description: (
      <>
        Congrats to all winners of the LUCA 2022-2023 election!
        <br />
        <br />
        <li>President: Gabe Culver </li>
        <li>Vice President: Evelyn Hardy </li>
        <li>Historian: Efosa</li>
        <li>Tech: Ben Unruh</li>
      </>
    ),
  },
  {
    title: "Chess In Lumberton",
    image: ltx,
    description: (
      <>
        {" "}
        A new chess club opens thanks to Dr. Flores! Interested in joining? See
        meeting times below:
        <li> Monday: 02/14 @ 6PM </li>
        <li> Monday: 02/21 @ 6PM</li>
        <li> Monday: 02/28 @ 6PM</li>
        133 #C, N Lhs Dr, Lumberton, TX 77657
      </>
    ),
  },
  {
    title: "BCC Leaves Sertinos",
    image: b,
    description: (
      <>
        The Beaumont Chess Club has changed its official meeting location to
        parkdale mall.
        <li>Thursdays 4-8 PM </li>
        <li>Saturdays 2-8 PM (Tournaments held 1st Saturday of each month)</li>
      </>
    ),
  },
];

/***************************************************************************/
/**Events*/
/***************************************************************************/
export const eventEntries = [
  {
    image: Chess_Tournament,
    type: "Tournament",
    date: "Sep 24, 2022",
    time: "N/A",
    location: "Chess.com",
    eventLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScsPvjD6acbu0FsIrgKC-Mj8YveNVImPodusgenVtTW_0mFaA/viewform",
  },
  {
    image: generalM,
    type: "Meeting",
    date: "N/A",
    time: "N/A",
    location: "N/A",
    eventLink: "https://luhub.lamar.edu/LUChess/rsvp_boot?id=1474212",
  },
  {
    image: halloween,
    type: "Tournament",
    date: "N/A",
    time: "N/A",
    location: "N/A",
    eventLink: "https://luhub.lamar.edu/LUChess/rsvp_boot?id=1367725",
  },
  {
    image: christmas,
    type: "Tournament",
    date: "N/A",
    time: "N/A",
    location: "N/A",
    eventLink: "https://luhub.lamar.edu/LUChess/rsvp_boot?id=1397010",
  },
];

/***************************************************************************/
/**Videos*/
/***************************************************************************/

export const videoEntries = [
  {
    link: "https://www.youtube.com/embed/OCSbzArwB10?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=27",
  },
  {
    link: "https://www.youtube.com/embed/Txvz97tzDfM?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=25",
  },
  {
    link: "https://www.youtube.com/embed/SXrKRA_KZ5k",
  },
];
