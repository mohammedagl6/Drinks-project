'use strict';

import createDOMElement from "../utils/createDOMElement.js";
import { addClass } from "../utils/manageClass.js";


const createFiltersContainer = () => {
    const filtersContainer = createDOMElement('section');
    addClass(filtersContainer, 'filters');
    return filtersContainer;
}

export default createFiltersContainer;