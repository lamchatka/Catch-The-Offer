import {data} from "../../../data/data.js";
import {Row} from "./Row.component/Row.js";


export function GameGrid() {
    const gridElement = document.createElement('table');
    gridElement.className = 'gridElement';

    for (let y = 0; y < data.gridRowsCount; y++) {
        const rowElement = Row(y);
        gridElement.append(rowElement);
    }

    return gridElement;
}



