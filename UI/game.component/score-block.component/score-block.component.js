import {data} from "../../../data/data.js";

export function ScoreBlockComponent() {
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

    const catchBlockElement = document.createElement('div');
    catchBlockElement.className = 'catchBlockElement';

    const catchElement = document.createElement('div');
    catchElement.className = 'catchElement';
    catchElement.append('Catch:');

    const catchCountElement = document.createElement('div');
    catchCountElement.className = 'catchCountElement';
    catchCountElement.append(`${data.catchPoints}`);

    catchBlockElement.append(
        catchElement,
        catchCountElement
    );

    return catchBlockElement;
}

function createMissBlockElement() {
    // создает блок с кол-вом пропущенных офферов

    const missBlockElement = document.createElement('div');
    missBlockElement.className = 'missBlockElement';

    const missElement = document.createElement('div');
    missElement.className = 'missElement';
    missElement.append('Miss:');

    const missCountElement = document.createElement('div');
    missCountElement.className = 'missCountElement';
    missCountElement.append(`${data.missPoints}`);

    missBlockElement.append(
        missElement,
        missCountElement
    );

    return missBlockElement;
}