'use strict';

import searchDrink from "../listeners/searchDrink.js";
import createDOMElement from "../utils/createDOMElement.js";
import { addClass } from "../utils/manageClass.js";


const createSearchFormDOM = () => {
    const searchForm = createDOMElement('section');
    addClass(searchForm, 'search-form');
    const formControl = createDOMElement('div');
    addClass(formControl, 'form-control');
    const searchLabel = createDOMElement('label', {attributes:{for: "drink-name"}});
    searchLabel.textContent = "Search Your Favorite Drink:";
    const searchInput = createDOMElement('input', {id:"drink-name", attributes:{type:"text", autocomplete:"off"}});
    searchInput.addEventListener('input', searchDrink);
    formControl.appendChild(searchLabel);
    formControl.appendChild(searchInput);
    searchForm.appendChild(formControl);
    return searchForm;
}

export default createSearchFormDOM;