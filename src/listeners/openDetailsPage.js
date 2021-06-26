'use strict';

import showLoading from "../handlers/showLoading.js";
import openDetailsPageHandler from "../handlers/openDetailsPageHandler.js";

const openDetailsPage = (event) => {
    showLoading();
    openDetailsPageHandler(event.currentTarget.dataset.id);
}

export default openDetailsPage;