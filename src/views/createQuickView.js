'use strict';

import closeQuickView from "../listeners/closeQuickView.js";
import appendChildren from "../utils/appendChildren.js";
import createDOMElement from "../utils/createDOMElement.js";
import { addClass } from "../utils/manageClass.js";


const createQuickView = (drink) => {
    const quickViewContainer = createDOMElement('article');
    addClass(quickViewContainer, 'quick-view');

    const closeBtn = createDOMElement('span');
    addClass(closeBtn, 'view-close');
    closeBtn.textContent = "X";

    const quickViewDrink = createDOMElement('div');
    addClass(quickViewDrink, 'quick-view-drink');

    const drinkTitle = createDOMElement('h2');
    drinkTitle.textContent = drink.strDrink;

    const drinkImg = createDOMElement('img');
    drinkImg.src = drink.strDrinkThumb;

    const infoContainer = createDOMElement('div');
    addClass(infoContainer, 'quick-info');

    const infoCategory = createDOMElement('p');
    infoCategory.textContent = drink.strCategory;
    const infoType = createDOMElement('p');
    infoType.textContent = drink.strAlcoholic;
    const infoGlass = createDOMElement('p');
    infoGlass.textContent = drink.strGlass;

    appendChildren(infoContainer, [infoCategory, infoType, infoGlass]);
    appendChildren(quickViewDrink, [drinkTitle, drinkImg, infoContainer])
    appendChildren(quickViewContainer, [closeBtn, quickViewDrink]);

    quickViewContainer.addEventListener('click', closeQuickView);
    quickViewDrink.addEventListener('click', closeQuickView);

    return quickViewContainer;


}

export default createQuickView;