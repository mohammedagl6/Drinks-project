'use strict';
import getDOMElement from "../utils/getDOMElement.js";
import { USER_INTERFACE_ID } from "../constants.js";
import clearDOMElement from "../utils/clearDOMElement.js";
import showDrinks from "./showDrinks.js";
import showSearchForm from "./showSearchForm.js";
import createFiltersContainer from "../views/createFiltersContainer.js";

const showMainPage = () => {
    const userInterface = getDOMElement(USER_INTERFACE_ID);
    clearDOMElement(userInterface);
    userInterface.appendChild(showSearchForm());
    userInterface.appendChild(createFiltersContainer());
    showDrinks(userInterface);
}

export default showMainPage;