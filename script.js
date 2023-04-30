const container = document.getElementById('container');

function makeGrid(rows, columns) {
    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'cell';
    }
}

makeGrid(16, 16);