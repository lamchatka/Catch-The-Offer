import {GameGridComponent} from "./gameGrid.component/gameGrid.component.js";
import {SettingsPanel} from "./settings-panel.component/settings-panel.component.js";
import {ScoreBlockComponent} from "./score-block.component/score-block.component.js";


export function Game() {
    const element = document.createElement('div')

    const settingsPanel = SettingsPanel();
    const scoreBlock = ScoreBlockComponent();
    const gameGrid = GameGridComponent();

    element.append(settingsPanel);
    element.append(scoreBlock);
    element.append(gameGrid);

    return element;
}