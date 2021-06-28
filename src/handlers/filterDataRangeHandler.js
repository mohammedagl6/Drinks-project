'use strict';

import { DRINKS_CONTAINER_CLASS } from "../constants.js";
import getDOMElement from "../utils/getDOMElement.js";
import addFilters from "./addFilters.js";
import exportData, {drinksData} from "./exportData.js";
import showNoData from "./showNoData.js";
import updateDrinks from "./updateDrinks.js";


const filterDataRangeHandler = (rangeFilter) => {
    const rangeValue = rangeFilter.value;
    const rangeLabel = getDOMElement('range-label');
    rangeLabel.textContent = rangeValue + "%";
    const filteredData = drinksData.filter(drink => Number(drink.alcPercentage) <= Number(rangeValue));
    if(filteredData.length){
        updateDrinks(filteredData);
        addFilters(filteredData);
        exportData(filteredData, false);
    }else{
        showNoData(DRINKS_CONTAINER_CLASS);
    }

}

export default filterDataRangeHandler;