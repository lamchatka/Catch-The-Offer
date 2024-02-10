import {data} from "../../../../data/data.js";
import {Cell} from "../Cell.component/Cell.js";

export function Row(y) {
    const row = document.createElement('tr');
    for (let x = 0; x < data.gridColumnsCount; x++) {
        const cellElement = Cell(x, y);
        row.append(cellElement);
    }
    return row;
}