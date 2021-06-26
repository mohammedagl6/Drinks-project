'use strict';

/**
 * This function creates a DOM element with the given tag.
 * In the options parameter it is possible to add some extra data to it:
 * 
 *  id - the id of the element
 */
const createDOMElement = (tag, options = null) => {
    // const { id } = options || {};

    const element = document.createElement(tag);
    if(options){

       const { id, attributes } = options;
        if (id) {
            element.id = id;
        }

        if(attributes){
            for ( const [key, value] of Object.entries(attributes) ){
                element.setAttribute(key, value);
            }
        }

    }

    return element;
}

export default createDOMElement;