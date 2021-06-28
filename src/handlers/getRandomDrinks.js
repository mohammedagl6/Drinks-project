'use strict';

import { API_MAIN_URL } from "../constants.js";
import fetchURL from "../utils/fetchURL.js";
import updateDrinks from "./updateDrinks.js";
import addFilters from "./addFilters.js";
import exportData from "./exportData.js";
import addRangeFilter from "./addRangeFilter.js";


const getRandomDrinks = async () => {
    const  data = await fetchURL(`${API_MAIN_URL}search.php?s=r`);
    // const  data = await fetchURL(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`);
    if(data.drinks){

        updateDrinks(data.drinks);
        exportData(data.drinks);
        addFilters(data.drinks);
        addRangeFilter(data.drinks);
    }
}

export default getRandomDrinks;