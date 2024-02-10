import {GameGrid} from "./GameGrid.component/GameGrid.js";
import {SettingsPanel} from "./SettingsPanel.component/SettingsPanel.js";
import {ScoreBlock} from "./ScoreBlock.component/ScoreBlock.js";


export function Game() {
    const element = document.createElement('div')

    const settingsPanel = SettingsPanel();
    const scoreBlock = ScoreBlock();
    const gameGrid = GameGrid();

    element.append(settingsPanel);
    element.append(scoreBlock);
    element.append(gameGrid);

    return element;
}