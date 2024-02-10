import {Game} from "./UI/Game.component/Game.js";
import {setSubscriber} from "./data/data.js";

const appElement = document.querySelector('#app');

function renderApp() {
    appElement.innerHTML = '';
    const game = Game();
    appElement.append(game);
}
renderApp();
// setSubscriber(renderApp);
