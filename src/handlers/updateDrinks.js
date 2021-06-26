'use strict';

import clearDOMElement from "../utils/clearDOMElement.js";
import CreateDrinkElement from "../views/CreateDrinkElement.js";

const updateDrinks = (data) => {
    const drinksContainer = document.querySelector('.drinks-container');
    clearDOMElement(drinksContainer);
    data.forEach(item => {
        drinksContainer.appendChild(CreateDrinkElement(item));
    });
}

export default updateDrinks;