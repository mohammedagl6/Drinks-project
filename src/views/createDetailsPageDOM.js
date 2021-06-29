'use strict';

import backToMain from "../listeners/backToMain.js";
import appendChildren from "../utils/appendChildren.js";
import createDOMElement from "../utils/createDOMElement.js";
import { addClass } from "../utils/manageClass.js";
import CreateDrinkElement from "./CreateDrinkElement.js";

const createDetailsPageDOM =(data, visitedDrinks) => {
    const detailsContainer = createDOMElement('section');
    addClass(detailsContainer, 'details-page');
    const detailsTitle = createDOMElement('h2');
    detailsTitle.textContent = data.strDrink;
    const details = createDOMElement('article');
    addClass(details, 'details');
    const detailsImage = createDOMElement('img');
    detailsImage.src = data.strDrinkThumb;
    const detailsInfo = createDOMElement('div');
    addClass(detailsInfo, 'details-info');
    const infoName = createDOMElement('p');
    infoName.innerHTML = `<span class="details-title">Name: </span> ${data.strDrink}`;
    const infoCategory = createDOMElement('p');
    infoCategory.innerHTML = `<span class="details-title">Category: </span> ${data.strCategory}`;
    const infoType = createDOMElement('p');
    infoType.innerHTML = `<span class="details-title">Type: </span> ${data.strAlcoholic}`;
    const infoGlass = createDOMElement('p');
    infoGlass.innerHTML = `<span class="details-title">Glass Type: </span> ${data.strGlass}`;
    const infoIngredients = createDOMElement('p');
    infoIngredients.innerHTML = `<span class="details-title">Ingredients: </span> 
    ${data.strIngredient1 ? data.strIngredient1 : ""}
    ${data.strIngredient2 ? ", " + data.strIngredient2 : ""}
    ${data.strIngredient3 ? ", " + data.strIngredient3 : ""}
    ${data.strIngredient4 ? ", " + data.strIngredient4 : ""}
    ${data.strIngredient5 ? ", " + data.strIngredient5 : ""}
    ${data.strIngredient6 ? ", " + data.strIngredient6 : ""} 
    `;
    const infoInstructions = createDOMElement('p');
    infoInstructions.innerHTML = `<span class="details-title">Instructions: </span> ${data.strInstructions}`;

    appendChildren(detailsInfo, [infoName, infoCategory, infoType, infoGlass, infoIngredients, infoInstructions]);
    appendChildren(details, [detailsImage, detailsInfo]);
    appendChildren(detailsContainer, [detailsTitle, details]);

    const backBtn = createDOMElement('button');
    addClass(backBtn, 'btn-back');
    backBtn.textContent = "Back Home";
    detailsContainer.appendChild(backBtn);

    backBtn.addEventListener('click', backToMain);

    if(visitedDrinks){
        const visitedContainer = createDOMElement('div');
        addClass(visitedContainer, 'visited-drinks');
        const visitedHeading = createDOMElement('h3');
        visitedHeading.textContent = "Drinks You have visited: ";
        const drinksContainer = createDOMElement('section');
        addClass(drinksContainer, 'drinks-container');
        visitedDrinks.forEach(drink => {
            if(drink.idDrink !== data.idDrink){
                drinksContainer.appendChild(CreateDrinkElement(drink));
            }
        });
        appendChildren(visitedContainer, [visitedHeading, drinksContainer]);
        detailsContainer.appendChild(visitedContainer);
    }


    return detailsContainer;

}

export default createDetailsPageDOM;