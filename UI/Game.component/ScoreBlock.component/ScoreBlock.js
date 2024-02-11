import {data} from "../../../data/data.js";
import {createElementWithClass} from "../../../helper.js";

export function ScoreBlock() {
    const mainElement = document.createElement('div');
    mainElement.className = 'scoreBlock';

    // div для количества пойманных офферов
    const catchBlockElement = createCatchBlockElement();

    // div для количества пропущенных офферов
    const missBlockElement = createMissBlockElement();

    mainElement.append(
        catchBlockElement,
        missBlockElement,
    );

    return mainElement;
}

function createCatchBlockElement() {
    // создает блок с кол-вом пойманных офферов

    const catchBlockElement = createElementWithClass('div', 'catchBlockElement');

    const catchElement = createElementWithClass('div', 'catchElement');
    catchElement.append('Catch:');

    const catchCountElement = createElementWithClass('div', 'catchCountElement');
    catchCountElement.append(`${data.catchPoints}`);

    catchBlockElement.append(
        catchElement,
        catchCountElement
    );

    return catchBlockElement;
}

function createMissBlockElement() {
    // создает блок с кол-вом пропущенных офферов

    const missBlockElement = createElementWithClass('div', 'missBlockElement');

    const missElement = createElementWithClass('div', 'missElement');
    missElement.append('Miss:');

    const missCountElement = createElementWithClass('div', 'missCountElement');
    missCountElement.append(`${data.missPoints}`);

    missBlockElement.append(
        missElement,
        missCountElement
    );

    return missBlockElement;
}