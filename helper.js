export function createElement(tagName) {
    return document.createElement(tagName);

}

export function createElementWithClass(tagName, className) {
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}
