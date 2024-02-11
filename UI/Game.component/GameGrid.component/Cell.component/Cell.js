import { data} from "../../../../data/data.js";
import {Offer} from "./Offer.component/Offer.js";

export function Cell(x, y) {
    const cell = document.createElement('td');
    if (y === data.coordinate_y && x === data.coordinate_x) {
        cell.append(Offer());
    }
    return cell;
}
