'use strict';

import createDOMElement from "../utils/createDOMElement.js";
import { addClass } from "../utils/manageClass.js";


const createDrinksContainerDOM = () => {
    const drinksContainer = createDOMElement('section');
    addClass(drinksContainer, 'drinks-container');
    return drinksContainer;
}

export default createDrinksContainerDOM;