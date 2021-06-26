'use strict';

import getRandomDrinks from "../handlers/getRandomDrinks.js";
import searchDrinkHandler from "../handlers/searchDrinkHandler.js";

let searchTimeout;

const searchDrink = (event) =>{
    const value = event.target.value;
    if(value){
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => searchDrinkHandler(value), 500);
    }else{
        getRandomDrinks();
    }
}


export default searchDrink;