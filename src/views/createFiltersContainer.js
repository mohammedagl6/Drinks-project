'use strict';

import appendChildren from "../utils/appendChildren.js";
import createDOMElement from "../utils/createDOMElement.js";
import { addClass } from "../utils/manageClass.js";


const createFiltersContainer = () => {
    const filtersContainer = createDOMElement('section');
    addClass(filtersContainer, 'filters');
    const categoryFilter = createDOMElement('div');
    addClass(categoryFilter, "filters-category");
    const alcoholFilter = createDOMElement('div');
    addClass(alcoholFilter, 'filters-alcohol');
    appendChildren(filtersContainer, [categoryFilter, alcoholFilter]);
    return filtersContainer;
}

export default createFiltersContainer;