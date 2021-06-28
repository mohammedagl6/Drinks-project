'use strict';

import createDOMElement from "../utils/createDOMElement.js";
import filterDataRange from "../listeners/filterDataRange.js";
import appendChildren from "../utils/appendChildren.js";

const CreateRangeFilter = (rangeMin, rangeMax) => {
    const alcRange = createDOMElement('input', {id:"alc-range", attributes:{type:"range", min:rangeMin, max:rangeMax, value:rangeMax}});
    alcRange.addEventListener('change', filterDataRange);
    const alcLabel = createDOMElement('label', {id:'range-label'});
    alcLabel.for = "alc-range";
    alcLabel.textContent = rangeMax + "%";
    const rangeContainer = createDOMElement('div');
    appendChildren(rangeContainer, [alcRange, alcLabel]);
    return rangeContainer;
}


export default CreateRangeFilter;