'use strict';
 
import filterDataRangeHandler from "../handlers/filterDataRangeHandler.js";


const filterDataRange = (event) => {
    filterDataRangeHandler(event.currentTarget);
}

export default filterDataRange;