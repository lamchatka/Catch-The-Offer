import {data} from "../../../data/data.js";
import {Row} from "./Row.component/Row.js";
import {Cell} from "./Cell.component/Cell.js";

export function GameGridComponent() {
    const gridElement = document.createElement('table');
    gridElement.className = 'gridElement';

    for (let y = 0; y < data.gridRowsCount; y++) {
        const rowElement = Row()
        for (let x = 0; x < data.gridColumnsCount; x++) {
            const cellElement = Cell(x, y);
            rowElement.append(cellElement);
        }
        gridElement.append(rowElement);
    }

    return gridElement;
}



