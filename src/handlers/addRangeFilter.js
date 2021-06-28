'use strict';

import { API_MAIN_URL } from "../constants.js";
import clearDOMElement from "../utils/clearDOMElement.js";
import fetchURL from "../utils/fetchURL.js";
import exportData from "./exportData.js";
import CreateRangeFilter from "../views/CreateRangeFilter.js";


const addRangeFilter = async (data) => {
    
    const filterContainer = document.querySelector('.filters-alcohol');
    clearDOMElement(filterContainer);
    
    let alcPercentage;
    const rangeMinMax = [];
    const updatedData = await Promise.all(data.map( async drink => {
        alcPercentage = "0";
        if(drink.strAlcoholic === "Alcoholic"){
            alcPercentage = await getAlcPercentage(drink.strIngredient1);
            
            if(!alcPercentage){
                alcPercentage = await getAlcPercentage(drink.strIngredient2);
                if(!alcPercentage){
                    alcPercentage = "13";
                }  
                
            }

        }
        rangeMinMax.push(alcPercentage);
        return {...drink, alcPercentage}
    }));
    const rangeMin = Math.min(...rangeMinMax);
    const rangeMax = Math.max(...rangeMinMax);
    exportData(updatedData);

    filterContainer.appendChild(CreateRangeFilter(rangeMin, rangeMax));
}

// const addRangeFilter = async (data) => {
//     const updatedData = [];
//     let alcPercentage;
//     for ( const drink of data){
//         alcPercentage = "0";
//         if(drink.strAlcoholic === "Alcoholic"){
//             alcPercentage = await getAlcPercentage(drink.strIngredient1);
            
//             if(!alcPercentage){
//                 alcPercentage = await getAlcPercentage(drink.strIngredient2);
//                 if(!alcPercentage){
//                     alcPercentage = "13";
//                 }  
                
//             }

//         }
//         updatedData.push({...drink, alcPercentage})
//     }
//     console.log(updatedData); 
// }


// const addRangeFilter = async (data) => {
//     const updatedData = [];
//     let alcPercentage;
//     await data.reduce( async (promise, drink) => {
//         alcPercentage = "0"
//         await promise;

//         if(drink.strAlcoholic === "Alcoholic"){
//             alcPercentage = await getAlcPercentage(drink.strIngredient1);
            
//             if(!alcPercentage){
//                 alcPercentage = await getAlcPercentage(drink.strIngredient2);
//                 if(!alcPercentage){
//                     alcPercentage = "13";
//                 }  
                
//             }

//         }
//         updatedData.push({...drink, alcPercentage})

//     }, Promise.resolve());

//     console.log(updatedData); 
// }

const getAlcPercentage = async (ingredient) => {
    const data = await fetchURL(`${API_MAIN_URL}search.php?i=${ingredient}`);
    return data.ingredients[0].strABV;
}


export default addRangeFilter;