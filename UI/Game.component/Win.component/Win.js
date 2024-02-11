import {createElementWithClass} from "../../../helper.js";
import {data, restartGame} from "../../../data/data.js";

export function Win() {
    const element = createElementWithClass('div', 'winElement');
    element.append(`You Win! Catch: ${data.catchPoints}; Miss: ${data.missPoints}`);

    const button = restartGameButton();
    element.append(button);

    return element;
}

function restartGameButton() {
    const element = document.createElement('button');
    element.append('Restart game');
    element.addEventListener('click', () => {
        restartGame()
    });

    return element;
}