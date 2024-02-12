import {Game} from "./UI/Game.component/Game.js";
import {data, setSubscriber, STATUS} from "./data/data.js";
import {Win} from "./UI/Game.component/EndGame.component/Win.component/Win.js";
import {Lose} from "./UI/Game.component/EndGame.component/Lose.component/Lose.js";

const appElement = document.querySelector('#app');

function renderApp() {
    appElement.innerHTML = '';
    if (data.status === STATUS.WIN) {
        const winElement = Win();
        appElement.append(winElement);
    } else if (data.status === STATUS.LOSE) {
        const loseElement = Lose();
        appElement.append(loseElement)
    } else {
        const game = Game();
        appElement.append(game);
    }
}

renderApp();
setSubscriber(renderApp);
