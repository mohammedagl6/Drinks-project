'use strict';

import appendChildren from "../utils/appendChildren.js";
import createDOMElement from "../utils/createDOMElement.js";
import { addClass } from "../utils/manageClass.js";
import filterData from "../listeners/filterData.js";



const createFilterElement = (item) => {
    const filterElement = createDOMElement('input', {id:item});
    filterElement.type = "checkbox";
    filterElement.value = item;
    filterElement.checked = true;
    const filterContainer = createDOMElement('div');
    addClass(filterContainer, 'filter-item');
    const filterText = createDOMElement('label', {attributes:{for:item}});
    filterText.textContent = item;
    appendChildren(filterContainer, [filterElement, filterText]);
    filterElement.addEventListener('change', filterData);
    return filterContainer;
}

export default createFilterElement;