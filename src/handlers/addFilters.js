'use strict';

import clearDOMElement from "../utils/clearDOMElement.js";
import createFilterElement from "../views/createFilterElement.js";

const addFilters = (data) => {
    const filtersContainer = document.querySelector('.filters-category');
    clearDOMElement(filtersContainer);
    const filterItems = [];
    data.forEach(drink => {
        if(!filterItems.includes(drink.strCategory)){
            filterItems.push(drink.strCategory);
            filtersContainer.appendChild(createFilterElement(drink.strCategory));
        }
    });
    // const filterItems =   data.reduce( (filters, drink) => {
    //         if(!filters.includes(drink.strCategory)){
    //             filters.push(drink.strCategory);
    //         }
    //         return filters;
    //     }, [] );
}

export default addFilters;