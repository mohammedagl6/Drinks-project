'use strict';


const fetchURL = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default fetchURL;