'use strict';

import openQuickViewHandler from "../handlers/openQuickViewHandler.js";

const openQuickView = (event) => {
    event.stopPropagation();
    openQuickViewHandler(event.currentTarget.parentNode.dataset.id);
}

export default openQuickView;