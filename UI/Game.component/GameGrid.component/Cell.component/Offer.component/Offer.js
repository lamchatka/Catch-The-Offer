import {catchOffer} from "../../../../../data/data.js";

export function Offer() {
    const offerElement = document.createElement('img');
    offerElement.src = './assets/images/Offer.png';
    offerElement.className = 'offer'
    offerElement.addEventListener('click', () => {
        catchOffer();
    })
    return offerElement;
}

export function CaughtOffer() {
    const offerElement = document.createElement('img');
    offerElement.className = 'caughtOffer';
    offerElement.src = './assets/images/Caught.png';
    return offerElement;
}

export function MissedOffer() {
    const offerElement = document.createElement('img');
    offerElement.className = 'missedOffer';
    offerElement.src = './assets/images/Missed.png';
    return offerElement;
}