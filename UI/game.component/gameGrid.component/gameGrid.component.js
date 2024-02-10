import {data} from "../../../data/data.js";

export function GameGridComponent() {
    const gridElement = document.createElement('table');
    gridElement.className = 'gridElement';

    for (let y = 0; y < data.gridRowsCount; y++) {
        const rowElement = document.createElement('tr');
        for (let x = 0; x < data.gridColumnsCount; x++) {
            const columnElement = document.createElement('td');
            if (y === data.coordinate_y && x === data.coordinate_x) {
                columnElement.append('OFFER');
            }
            rowElement.append(columnElement);
        }
        gridElement.append(rowElement);
    }

    return gridElement;
}
