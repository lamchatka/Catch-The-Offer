import {data} from "../../../data/data.js";
import {createElementWithClass} from "../../../helper.js";

export function ScoreBlock() {
    const mainElement = document.createElement('div');
    mainElement.className = 'scoreBlock';

    mainElement.append(
        CatchBlockElement(),
        MissBlockElement(),
    );

    return mainElement;
}

function CatchBlockElement() {
    // создает блок с кол-вом пойманных офферов

    return ItemBlockElement('div', 'catch', data.catchPoints, 'Catch:');
}

function MissBlockElement() {
    // создает блок с кол-вом пропущенных офферов

    return ItemBlockElement('div', 'miss', data.missPoints, 'Miss:');
}

function ItemBlockElement(tagName, elementName, points, message) {
    // шаблон для блоков

    const itemBlockElement = createElementWithClass(tagName, elementName + 'BlockElement');

    const itemElement = createElementWithClass(tagName, elementName + 'Element');
    itemElement.append(message);

    const itemCountElement = createElementWithClass(tagName, elementName + 'CountElement');
    itemCountElement.append(`${points}`);

    itemBlockElement.append(
        itemElement,
        itemCountElement
    );
    return itemBlockElement;
}
