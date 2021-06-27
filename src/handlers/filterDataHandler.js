'use strict';

import { DRINKS_CONTAINER_CLASS } from "../constants.js";
import {drinksData} from "./exportData.js";
import showNoData from "./showNoData.js";
import updateDrinks from "./updateDrinks.js";

const filterDataHandler = () => {
    const filters = document.querySelectorAll(".filter-item input");
    let filteredData = drinksData;
    filters.forEach(filter => {
        if(!filter.checked){
            filteredData = filteredData.filter(drink => drink.strCategory !== filter.value);
        }
    });
    if(filteredData.length){
        updateDrinks(filteredData);
    }else{
        showNoData(DRINKS_CONTAINER_CLASS);
    }
}

export default filterDataHandler;