'use strict';

export let drinksData;
export let drinksDataFiltered;
const exportData = (data, setBoth=true) => {

    if(setBoth){
        drinksData = data;
    }
    drinksDataFiltered = data;
}

export default exportData;