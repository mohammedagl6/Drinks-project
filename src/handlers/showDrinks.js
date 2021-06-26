'use strict';


import createDrinksContainerDOM from "../views/createDrinksContainerDOM.js";
import getRandomDrinks from "./getRandomDrinks.js";

const showDrinks = async(userInterface) => {

  userInterface.appendChild(createDrinksContainerDOM());
  getRandomDrinks();
  
}

export default showDrinks;