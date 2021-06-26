'use strict';

import appendChildren from "../utils/appendChildren.js";
import createDOMElement from "../utils/createDOMElement.js";
import { addClass } from "../utils/manageClass.js";


const CreateDrinkElement = (item) => {
    const drinkElement = createDOMElement('article');
    drinkElement.dataset.id = item.idDrink;
    addClass(drinkElement, 'drink');
    const drinkImage = createDOMElement('img');
    drinkImage.src = item.strDrinkThumb;
    drinkImage.alt = item.strDrink;
    const drinkTitle = createDOMElement('div');
    addClass(drinkTitle, "drink-title");
    const drinkName = createDOMElement('h3');
    const drinkType = createDOMElement('span');
    drinkName.textContent = item.strDrink;
    drinkType.textContent = `(${item.strAlcoholic})`;
    appendChildren(drinkTitle, [drinkName, drinkType]);
    appendChildren(drinkElement, [drinkImage, drinkTitle]);
    return drinkElement;
}

export default CreateDrinkElement;