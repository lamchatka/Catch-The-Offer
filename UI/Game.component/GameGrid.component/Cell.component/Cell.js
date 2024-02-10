import {data} from "../../../../data/data.js";

export function Cell(x, y) {
    const cell = document.createElement('td');
    if (y === data.coordinate_y && x === data.coordinate_x) {
        cell.append(Offer());
    }
    return cell;
}

export function Offer() {
    const offerElement = document.createElement('img');
    offerElement.src = './assets/images/Offer.png';
    return offerElement;
}