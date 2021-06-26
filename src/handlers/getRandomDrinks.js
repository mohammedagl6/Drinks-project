'use strict';

import { API_MAIN_URL } from "../constants.js";
import fetchURL from "../utils/fetchURL.js";
import updateDrinks from "./updateDrinks.js";


const getRandomDrinks = async () => {
    const  data = await fetchURL(`${API_MAIN_URL}search.php?s=r`);
    if(data.drinks){
        updateDrinks(data.drinks);
    }
}

export default getRandomDrinks;