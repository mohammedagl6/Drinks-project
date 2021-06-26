'use strict';

import { API_MAIN_URL } from "../constants.js";
import getRandomDrinks from "../handlers/getRandomDrinks.js";
import updateDrinks from "../handlers/updateDrinks.js";
import fetchURL from "../utils/fetchURL.js";


const searchDrink = async (event) =>{
    const value = event.target.value;
    if(value){
        console.log(value);
        const data = await fetchURL(`${API_MAIN_URL}search.php?s=${value}`);
        if(data.drinks){
            updateDrinks(data.drinks);
        }
    }else{
        getRandomDrinks();
    }
}


export default searchDrink;