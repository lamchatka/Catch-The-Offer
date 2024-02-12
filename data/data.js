export const data = {
    catchPoints: 0,  // or score
    missPoints: 0,
    caughtPointsForWin: 10,
    missedPointsForLose: 2,
    coordinate_x: getRandomNumber(3),
    coordinate_y: getRandomNumber(3),
    gridColumnsCount: 3,
    gridRowsCount: 3,
    status: null
};

export const STATUS = {
    IN_PROGRESS: 'in-progress',
    PAUSE: 'pause',
    WIN: 'win',
    LOSE: 'lose',
    SETTINGS: 'settings'
}

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
    if (data.catchPoints === data.caughtPointsForWin) {
        data.status = STATUS.WIN;
        clearInterval(offerJumpIntervalId);
    } else {
        changeOfferCoordinates();
        startOfferRunInterval();
    }
    subscriber();
}

function missOffer() {
    data.missPoints++;
    if (data.missPoints === data.missedPointsForLose) {
        data.status = STATUS.LOSE;
        clearInterval(offerJumpIntervalId);
    } else {
        changeOfferCoordinates();
    }
    subscriber();
}

export function restartGame() {
    data.catchPoints = 0;
    data.missPoints = 0;
    data.coordinate_x = getRandomNumber(3);
    data.coordinate_y = getRandomNumber(3);
    data.status = null;
    startOfferRunInterval() // не пойму, почему если поменять строки местами, то все также будет работать
    subscriber();

}
