var ChessWebAPI = require("chess-web-api");
var chessAPI = new ChessWebAPI();

fetch("https://api.chess.com/pub/club/lamar-university-chess-association")
  .then((response) => {
    //checks whether data was recieved
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log(data); //to check data
    displayClub(data); //function that displays data.
  });

function displayUser(data) {

  const cocktail = data.drinks[0]; //gets drinkID
  const cocktailDiv = document.getElementById("cocktail"); //this is smame as className
  const cocktailName = cocktail.strDrink; //gets drinkName
  const heading = document.createElement("h1"); //creates html <h1/>
  heading.innerHTML = cocktailName; //puts strDrink into ^ <h1/>
  cocktailDiv.appendChild(heading); //adds heading to Div element
  /**
   * <body className="cocktail">
   *
   * <h1 className=""">
   * Mango Orange Smoothie
   * <h1/>
   *
   * <body/>
   */
  const cocktailImg = document.createElement("img"); //creates <img/> element
  cocktailImg.src = cocktail.strDrinkThumb; // src="image Link"
  /**
   * <img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vdp2do1487603520.jpg"/>
   */
  cocktailDiv.appendChild(cocktailImg);
 /**
   * <body className="cocktail">
   *
   * <h1 className=""">
   * Mango Orange Smoothie
   * <h1/>
   * <img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vdp2do1487603520.jpg">
   * <img/>
   * 
   * <body/>
   */

  document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";
  //<body> adds background image to body element <body/>

  const cocktailIngredients = document.createElement("ul"); //creates <ul/> element 
  cocktailDiv.appendChild(cocktailIngredients);
/**
   * <body className="cocktail">
   *
   * <h1 className=""">
   * Mango Orange Smoothie
   * <h1/>
   * <img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vdp2do1487603520.jpg"/>
   * <ul> <ul/>
   * 
   * <body/>
   */

  const getIngredients = Object.keys(cocktail) 
  /** References drink ID var and puts all property names in an array callled getIngredients*/

    .filter(
        /**This makes a number array with indexes of
         *  all elements with the "strIngredient" tag
         */
        function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    }
    )

    .reduce(
        /**accumulator is called ingredients *is at the end {}
         * i think this calls the ingredient array made by filter
         */
        function (ingredients, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredients[ingredient] = cocktail[ingredient];
      }
      return ingredients;
      //returns new array that contains elements not equal to null
    }, {});

  for (let key in getIngredients) {
    let value = getIngredients[key];
    let listItem = document.createElement("li"); //creates <li> <li/> element 
    listItem.innerHTML = value;

    cocktailIngredients.appendChild(listItem); 
    /**
   * <body className="cocktail">
   *
   * <h1 className=""">
   * Mango Orange Smoothie
   * <h1/>
   * <img src="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vdp2do1487603520.jpg"/>
   * <ul>
   * 
   *  <ul/>
   *     <li> <li/> //creates and LI for each element
   *         v
   *         v
   *         v
   *         v
   * <body/>
   */
  }
}
