'use strict';

import createDOMElement from "../utils/createDOMElement.js";
import { addClass } from "../utils/manageClass.js";


const createNoDataDOM = () => {
    const noItem = createDOMElement('h4');
    addClass(noItem, 'no-data');
    noItem.textContent = "There is no item matching your criteria!";
    return noItem;
}

export default createNoDataDOM;