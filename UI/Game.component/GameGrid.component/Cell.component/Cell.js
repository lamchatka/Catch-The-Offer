import {data} from "../../../../data/data.js";

export function Cell(x, y) {
    const cell = document.createElement('td');
    if (y === data.coordinate_y && x === data.coordinate_x) {
        cell.append('OFFER');
    }
    return cell;
}