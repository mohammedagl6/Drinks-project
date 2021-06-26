'use strict';

import { addClass } from "../utils/manageClass.js";

const hideLoading = () => {
    const loading = document.querySelector('.loading');
    addClass(loading, 'hide-loading');
}

export default hideLoading;