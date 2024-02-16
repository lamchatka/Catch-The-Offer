import {data, OFFER_STATUSES} from "../../../../data/data.js";
import {CaughtOffer, MissedOffer, Offer} from "./Offer.component/Offer.js";

export function Cell(x, y) {
    const cell = document.createElement('td');
    updateCell(x, y);

    function updateCell(x, y) {
        if (y === data.coordinates.current.offerCoordinateY && x === data.coordinates.current.offerCoordinateX
            && data.offerStatus === OFFER_STATUSES.DEFAULT) {
            cell.append(Offer());
        } else if (y === data.coordinates.previous.offerCoordinateY && x === data.coordinates.previous.offerCoordinateX
            && data.offerStatus === OFFER_STATUSES.CAUGHT) {
            cell.append(CaughtOffer());
        }
        if (y === data.coordinates.previous.offerCoordinateY && x === data.coordinates.previous.offerCoordinateX
            && data.offerStatus === OFFER_STATUSES.MISSED) {
            cell.append(MissedOffer());
        }
    }

    return cell;
}


