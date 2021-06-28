'use strict';

import showMainPage from "../handlers/showMainPage.js";


const initialize = () => {
    showMainPage();
}

window.addEventListener('load', initialize);
