'use strict';

import { API_MAIN_URL } from "../constants.js";
import updateDrinks from "../handlers/updateDrinks.js";
import fetchURL from "../utils/fetchURL.js";
import showNoData from "../handlers/showNoData.js";
import {DRINKS_CONTAINER_CLASS} from "../constants.js";
import addFilters from "./addFilters.js";
import exportData from "./exportData.js";


const searchDrinkHandler = async (value) =>{
    const data = await fetchURL(`${API_MAIN_URL}search.php?s=${value}`);
    if(data.drinks){
        updateDrinks(data.drinks);
        exportData(data.drinks);
        addFilters(data.drinks);
    }else{
        showNoData(DRINKS_CONTAINER_CLASS);
    }
}

export default searchDrinkHandler;