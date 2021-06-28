'use strict';



const saveVisited = ({idDrink, strDrinkThumb, strDrink, strAlcoholic}) =>{
   const savedDrinks = JSON.parse(localStorage.getItem('visitedDrinks'));
   const drink = {idDrink, strDrink, strAlcoholic, strDrinkThumb};
   console.log('drink:', drink);
   console.log('local:', savedDrinks);
   if(savedDrinks){
       const available = savedDrinks.find(element => element.idDrink == drink.idDrink);
       if(!available){
           if(savedDrinks.length < 6){
                localStorage.setItem('visitedDrinks', JSON.stringify([drink, ...savedDrinks]));
           }else{
            savedDrinks.splice(-1);
            localStorage.setItem('visitedDrinks', JSON.stringify([drink, ...savedDrinks]));
           }
       }
   }else{
    localStorage.setItem('visitedDrinks', JSON.stringify([drink]));
   }
}

export default saveVisited;