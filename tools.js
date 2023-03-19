function getElement(identifier) {
    return document.querySelector(`#${identifier}`) ?? document.querySelector(`.${identifier}`); 
}

function createElement(type, identifier, classes) {
    let elem = document.createElement(type);
    elem.setAttribute("id", identifier);
    elem.setAttribute("class", classes);
    return elem;
}

function appendElement(parentIdentifier, element) {
    getElement(parentIdentifier).append(element);
}

// || Window
function windowSize() {
    return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    }
}