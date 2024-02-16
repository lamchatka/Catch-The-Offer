export const GAME_STATUSES = {
    IN_PROCESS: 'in-process',
    PAUSE: 'pause',
    WIN: 'win',
    LOSE: 'lose',
    SETTINGS: 'settings'
};

export const OFFER_STATUSES = {
    CAUGHT: 'caught',
    MISSED: 'missed',
    DEFAULT: 'default',
}

export const data = {
    catchPoints: 0,  // or score
    missPoints: 0,
    caughtPointsForWin: 10,
    missedPointsForLose: 10,
    coordinates: {
        current: {
            offerCoordinateX: getRandomNumber(3),
            offerCoordinateY: getRandomNumber(3),
        },
        previous: {
            offerCoordinateX: null,
            offerCoordinateY: null,
        },
    },
    offerStatus: OFFER_STATUSES.DEFAULT,
    gridColumnsCount: 3,
    gridRowsCount: 3,
    gameStatus: null
};

function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
}

let subscribers = []; // подписчик, слушатель, хендлер, обсервер

function notify() {
    subscribers.forEach( subscriber => subscriber() );
}

export function subscribe(newSubscriber) {
    subscribers.push(newSubscriber); // добавляем нового подписчика
    console.log(subscribers);

}

function changeOfferCoordinates() {

    let new_coordinate_x;
    let new_coordinate_y;
    let isEqual;

    do {
        new_coordinate_x = getRandomNumber(data.gridColumnsCount);
        new_coordinate_y = getRandomNumber(data.gridRowsCount);
        isEqual = data.coordinates.current.offerCoordinateX === new_coordinate_x && data.coordinates.current.offerCoordinateY === new_coordinate_y;
    } while (isEqual);

    data.coordinates.current.offerCoordinateX = new_coordinate_x;
    data.coordinates.current.offerCoordinateY = new_coordinate_y;

}

let offerJumpIntervalId;

function startOfferRunInterval() {
    clearInterval(offerJumpIntervalId);
    offerJumpIntervalId = setInterval(missOffer, 2000);
}

startOfferRunInterval();

export function catchOffer() {
    data.catchPoints++;
    data.offerStatus = OFFER_STATUSES.CAUGHT
    data.coordinates.previous = {...data.coordinates.current}
    setInterval(() =>{
        data.offerStatus = OFFER_STATUSES.DEFAULT;
        notify();
    }, 200)

    // changeOfferCoordinates();
    // notify();
    // startOfferRunInterval();


    // if (data.catchPoints === data.caughtPointsForWin) {
    //     data.gameStatus = GAME_STATUSES.WIN;
    //     clearInterval(offerJumpIntervalId);
    // } else {
    //     changeOfferCoordinates();
    //     startOfferRunInterval();
    // }
}

function missOffer() {
    data.missPoints++;
    data.offerStatus = OFFER_STATUSES.MISSED
    data.coordinates.previous = {...data.coordinates.current}
        setInterval(() =>{
            data.offerStatus = OFFER_STATUSES.DEFAULT;
            notify();
        }, 200);

    // changeOfferCoordinates();
    // notify();
    // startOfferRunInterval();

    // if (data.missPoints === data.missedPointsForLose) {
    //     data.gameStatus = GAME_STATUSES.LOSE;
    //     clearInterval(offerJumpIntervalId);
    // } else {
    //     changeOfferCoordinates();
    //     console.log(data.coordinates.current);
    //     setInterval(() =>{
    //         data.offerStatus = OFFER_STATUSES.DEFAULT;
    //         notify();
    //     }, 200)
    // }

}

export function restartGame() {
    resetCatchAndMissPoints();
    data.offerCoordinateX = getRandomNumber(3);
    data.offerCoordinateY = getRandomNumber(3);
    data.gameStatus = null;
    startOfferRunInterval() // не пойму, почему если поменять строки местами, то все также будет работать
    notify();
}

function resetCatchAndMissPoints() {
    data.catchPoints = 0;
    data.missPoints = 0;
}

export function getOfferPositionCoordinates() {
    return {
        offerCoordinateX: data.offerCoordinateX,
        offerCoordinateY: data.offerCoordinateY,
    }
}



