'use strict';

import { removeClass } from "../utils/manageClass.js";


const showLoading = () => {
    const loading = document.querySelector('.loading');
    removeClass(loading, 'hide-loading');
}

export default showLoading;