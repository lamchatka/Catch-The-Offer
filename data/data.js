export const data = {
    catchPoints: 0,  // or score
    missPoints: 0,
    coordinate_x: getRandomNumber(3),
    coordinate_y: getRandomNumber(3),
    gridColumnsCount: 3,
    gridRowsCount: 3,
};

function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
}

let subscriber = null; // подписчик, слушатель, хендлер, обсервер

function changeOfferCoordinates() {

    let current_coordinate_x;
    let current_coordinate_y;
    let isEqual;

    do {
        current_coordinate_x = getRandomNumber(data.gridColumnsCount);
        current_coordinate_y = getRandomNumber(data.gridRowsCount);
        isEqual = data.coordinate_x === current_coordinate_x && data.coordinate_y === current_coordinate_y;
    } while (isEqual);

    data.coordinate_x = current_coordinate_x;
    data.coordinate_y = current_coordinate_y;

}

export function setSubscriber(newSubscriber) {
    subscriber = newSubscriber; // устанавливаем нового подписчика
}

let offerJumpIntervalId;

function startOfferRunInterval() {
    clearInterval(offerJumpIntervalId);
    offerJumpIntervalId = setInterval(missOffer, 2000);
}

startOfferRunInterval()

export function catchOffer() {
    data.catchPoints++;
    changeOfferCoordinates();
    startOfferRunInterval();
    subscriber();
}

function missOffer() {
    data.missPoints++;
    changeOfferCoordinates();
    subscriber();
}
