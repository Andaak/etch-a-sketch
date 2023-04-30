const container = document.getElementById('container');

function makeGrid(rows, columns) {
    container.style.setProperty('--grid-columns', columns)
    container.style.setProperty('--grid-rows', rows)
    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement('div');
        cell.style.backgroundColor = 'azure'
        container.appendChild(cell).className = 'cell';
    }
}

makeGrid(16, 16);

let cells = document.querySelectorAll('.cell');
const hoverEffect = (e) => {
    e.target.style.transition = '150ms';
    e.target.style.borderColor = 'red';
    e.target.style.backgroundColor = 'darkred';
}
cells.forEach(cell => {
    cell.addEventListener('mouseover', hoverEffect, { once: true });
})