'use strict';

import clearDOMElement from "../utils/clearDOMElement.js";
import createNoDataDOM from "../views/createNoDataDOM.js";
import hideLoading from "./hideLoading.js";


const showNoData = (containerClass) => {
    const container = document.querySelector(containerClass);
    clearDOMElement(container);
    container.appendChild(createNoDataDOM());
    hideLoading();
}

export default showNoData;