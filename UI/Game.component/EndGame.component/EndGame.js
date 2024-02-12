import {data, restartGame} from "../../../data/data.js";
import {createElementWithClass} from "../../../helper.js";

export function createWinOrLoseElements(status, className) {
    const element = createElementWithClass('div', className);
    element.append(`You ${status}! Catch: ${data.catchPoints}; Miss: ${data.missPoints}`);

    const button = restartGameButton();
    element.append(button);

    return element;
}

export function restartGameButton() {
    const element = document.createElement('button');
    element.append('Play again');
    element.addEventListener('click', () => {
        restartGame()
    });

    return element;
}


