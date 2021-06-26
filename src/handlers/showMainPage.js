'use strict';
import getDOMElement from "../utils/getDOMElement.js";
import { USER_INTERFACE_ID } from "../constants.js";
import clearDOMElement from "../utils/clearDOMElement.js";
import showDrinks from "./showDrinks.js";
import showSearchForm from "./showSearchForm.js";

const showMainPage = () => {
    const userInterface = getDOMElement(USER_INTERFACE_ID);
    clearDOMElement(userInterface);
    userInterface.appendChild(showSearchForm());
    showDrinks(userInterface);
}

export default showMainPage;