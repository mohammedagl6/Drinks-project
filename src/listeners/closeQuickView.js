'use strict';

import clearDOMElement from "../utils/clearDOMElement.js";


const closeQuickView = (event) => {
    if(event.currentTarget.classList.contains('quick-view-drink')){
        event.stopPropagation();
    }else{
        const quickViewContainer = document.querySelector('.quick-view-container');
        clearDOMElement(quickViewContainer);
    }
    
}

export default closeQuickView;