'use strict';

import showMainPage from "../handlers/showMainPage.js";

const initializeQuiz = () => {
    showMainPage();
}

window.addEventListener('load', initializeQuiz);