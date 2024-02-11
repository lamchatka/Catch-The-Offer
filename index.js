import {Game} from "./UI/Game.component/Game.js";
import {data, setSubscriber} from "./data/data.js";
import {Win} from "./UI/Game.component/Win.component/Win.js";

const appElement = document.querySelector('#app');

function renderApp() {
    appElement.innerHTML = '';
    if (data.isWin) {
        const winElement = Win();
        appElement.append(winElement);
    } else {
        const game = Game();
        appElement.append(game);
    }

}

renderApp();
setSubscriber(renderApp);
