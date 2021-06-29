'use strict';

import { API_MAIN_URL, USER_INTERFACE_ID } from "../constants.js";
import clearDOMElement from "../utils/clearDOMElement.js";
import getDOMElement from "../utils/getDOMElement.js"
import fetchURL from "../utils/fetchURL.js";
import hideLoading from "./hideLoading.js";
import createDetailsPageDOM from "../views/createDetailsPageDOM.js";
import showNoData from "./showNoData.js";
import saveVisited from "./saveVisited.js";


const openDetailsPageHandler = async (drinkId) => {

    const data = await fetchURL(`${API_MAIN_URL}lookup.php?i=${drinkId}`);
    if(data.drinks){
        const userInterface = getDOMElement(USER_INTERFACE_ID);
        clearDOMElement(userInterface);

        const visitedDrinks = JSON.parse(localStorage.getItem('visitedDrinks'));
        userInterface.appendChild(createDetailsPageDOM(data.drinks[0], visitedDrinks));
        saveVisited(data.drinks[0]);
        document.body.scrollTop = 100; // For Safari
        document.documentElement.scrollTop = 100; // For Chrome, Firefox, IE and Opera
    }else{
        showNoData(".container");
    }
    hideLoading();
}

export default openDetailsPageHandler;