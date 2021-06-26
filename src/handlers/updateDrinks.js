'use strict';

import clearDOMElement from "../utils/clearDOMElement.js";
import CreateDrinkElement from "../views/CreateDrinkElement.js";
import {DRINKS_CONTAINER_CLASS} from "../constants.js";
import hideLoading from "./hideLoading.js";

const updateDrinks = (data) => {
    const drinksContainer = document.querySelector(DRINKS_CONTAINER_CLASS);
    clearDOMElement(drinksContainer);
    data.forEach(item => {
        drinksContainer.appendChild(CreateDrinkElement(item));
    });
    hideLoading();
}

export default updateDrinks;