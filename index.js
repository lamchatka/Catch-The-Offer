import {Game} from "./UI/Game.component/Game.js";
import {data, setSubscriber, GAME_STATUSES} from "./data/data.js";
import {Win} from "./UI/Game.component/EndGame.component/Win.component/Win.js";
import {Lose} from "./UI/Game.component/EndGame.component/Lose.component/Lose.js";

const appElement = document.querySelector('#app');

function renderApp() {
    appElement.innerHTML = '';
    if (data.gameStatus === GAME_STATUSES.WIN) {
        const winElement = Win();
        console.log('WIN');
        appElement.append(winElement);
    } else if (data.gameStatus === GAME_STATUSES.LOSE) {
        const loseElement = Lose();
        console.log('LOSE');
        appElement.append(loseElement);
    } else {
        const game = Game();
        console.log('GAME');
        appElement.append(game);
    }
}

renderApp();
setSubscriber(renderApp); // всего один подписчик (renderApp)
