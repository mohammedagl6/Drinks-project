'use strict';
import { API_MAIN_URL } from "../constants.js";
import clearDOMElement from "../utils/clearDOMElement.js";
import fetchURL from "../utils/fetchURL.js";
import createQuickView from "../views/createQuickView.js";
import hideLoading from "./hideLoading.js";
import showLoading from "./showLoading.js";

const openQuickViewHandler = async (drinkId) => {
    showLoading();
    const data = await fetchURL(`${API_MAIN_URL}lookup.php?i=${drinkId}`);
    if(data.drinks){
        const quickViewContainer = document.querySelector('.quick-view-container');
        
        quickViewContainer.appendChild(createQuickView(data.drinks[0]));
    }
    hideLoading();
}

export default openQuickViewHandler;