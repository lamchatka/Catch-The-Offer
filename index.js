import {Game} from "./UI/Game.component/Game.js";
import {data, subscribe, GAME_STATUSES} from "./data/data.js";
import {Win} from "./UI/Game.component/EndGame.component/Win.component/Win.js";
import {Lose} from "./UI/Game.component/EndGame.component/Lose.component/Lose.js";

const appElement = document.querySelector('#app');

function renderApp() {

    appElement.innerHTML = '';

    switch (data.gameStatus) {

        case GAME_STATUSES.WIN:
            console.log('WIN');
            appElement.append(Win());
            break;

        case GAME_STATUSES.LOSE:
            console.log('LOSE');
            appElement.append(Lose());
            break;

        default:
            console.log('GAME');
            appElement.append(Game());
            break;
    }
}

renderApp();
subscribe(renderApp); // всего один подписчик (renderApp)
