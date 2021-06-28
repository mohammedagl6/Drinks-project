'use strict';

import appendChildren from "../utils/appendChildren.js";
import createDOMElement from "../utils/createDOMElement.js";
import { addClass } from "../utils/manageClass.js";
import openDetailsPage from "../listeners/openDetailsPage.js";
import openQuickView from "../listeners/openQuickView.js";

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

    const quickView = createDOMElement('button', {attributes:{title:"Quick View"}});
    addClass(quickView, 'quick-view-btn');

    appendChildren(drinkElement, [drinkImage, drinkTitle, quickView]);

    drinkElement.addEventListener('click', openDetailsPage);
    quickView.addEventListener('click', openQuickView);

    return drinkElement;
}

export default CreateDrinkElement;