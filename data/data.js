export const data = {
    catchPoints: 10,  // or score
    missPoints: 2,
    coordinate_x: getRandomNumber(3),
    coordinate_y: getRandomNumber(3),
    gridColumnsCount: 3,
    gridRowsCount: 3,
}

function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
}

let subscriber = null; // подписчик, слушатель, хендлер, обсервер

function changeOfferCoordinates() {
    data.coordinate_x = getRandomNumber(data.gridColumnsCount);
    data.coordinate_y = getRandomNumber(data.gridRowsCount);
    subscriber();
}

export function setSubscriber(newSubscriber) {
    subscriber = newSubscriber; // устанавливаем нового подписчика
}
setInterval(changeOfferCoordinates, 1000);