'use strict';

import clearDOMElement from "../utils/clearDOMElement.js";
import createNoDataDOM from "../views/createNoDataDOM.js";


const showNoData = (containerClass) => {
    const container = document.querySelector(containerClass);
    clearDOMElement(container);
    container.appendChild(createNoDataDOM());
}

export default showNoData;