'use string';

import showLoading from "../handlers/showLoading.js";
import showMainPage from "../handlers/showMainPage.js";


const backToMain = () => {
    showLoading();
    showMainPage();
}

export default backToMain;