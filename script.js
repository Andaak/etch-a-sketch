let gridSize = 16;
let blackAdjust = 1.0;

const buttons = document.getElementById('buttons');
const container = document.getElementById('container');

function makeGrid(rows, columns) {
    blackAdjust = 1.0;
    container.textContent = '';
    container.style.setProperty('--grid-columns', columns)
    container.style.setProperty('--grid-rows', rows)
    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement('div');
        cell.style.backgroundColor = 'whitesmoke'
        container.appendChild(cell).className = 'cell';
    }
}

function hoverCell() {
    let cells = document.querySelectorAll('.cell');

    const hoverEffect = (e) => {
        let randomColor = `rgb(${Math.ceil(Math.random() * 255 * blackAdjust)}, ${Math.ceil(Math.random() * 255 * blackAdjust)}, ${Math.ceil(Math.random() * 255 * blackAdjust)})`
        if (blackAdjust > 0) {
            blackAdjust -= 0.1;
        }
        e.target.style.transition = '150ms';
        e.target.style.borderColor = 'red';
        e.target.style.backgroundColor = randomColor;
    }
    cells.forEach(cell => {
        cell.addEventListener('mouseover', hoverEffect, { once: true });
    })
}

function setGridSize() {
    let tempGridSize = prompt('Enter grid-size(max: 100):');
    while (tempGridSize > 100 || tempGridSize < 1) {
        tempGridSize = prompt('Please enter a positive value below 100:');
    }
    gridSize = tempGridSize;
}


const button = document.createElement('button');
button.textContent = 'Grid-size';
button.style.fontSize = '24px';
buttons.appendChild(button);

button.addEventListener(
    'click',
    () => setGridSize()
);
button.addEventListener(
    'click',
    () => makeGrid(gridSize, gridSize)
);
button.addEventListener(
    'click',
    () => hoverCell()
);