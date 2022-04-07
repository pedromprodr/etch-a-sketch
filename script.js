let gridContainer = document.querySelector('#gridContainer');
let size = gridContainer.clientHeight;
let gridSize = 16;
createGrid(gridSize);
let clearButton = document.querySelector('#clearButton');
let slider = document.querySelector('#myRange');
let rangeValue = document.querySelector('#rangeValue');
rangeValue.innerHTML = gridSize;


slider.addEventListener('click', () => {
    gridSize = document.querySelector('#myRange').value;
    rangeValue.innerHTML = gridSize;
    clear();
})

clearButton.addEventListener('click', () => clear());



function createGrid(gSize) {
    for (let i = 0; i < gSize; i++) {
        const row = document.createElement('div');
        row.classList.add('gridRow')
        for (let f = 0; f < gridSize; f++) {
            const element = document.createElement('div');

            element.classList.add('gridSquare');
            row.appendChild(element);
        }
        gridContainer.appendChild(row);
    }
    var elms = document.getElementsByClassName('gridSquare')
    for (var i = 0; i < elms.length; i++) {
        elms[i].style.height = `${size / gSize}px`;
        elms[i].style.width = `${size / gSize}px`;
    }
    let gridElements = document.querySelectorAll('.gridSquare');
    gridElements.forEach(square => square.addEventListener('mouseover', () => fill(square)));
}

function fill(square) {
    square.classList.add('filled');
}

function resize(square, gSize) {
    square.style.height = size / gSize;
    square.style.width = size / gSize;
}

function clear() {
    let gridRows = document.querySelectorAll('.gridRow');
    gridRows.forEach(row => {
        row.parentNode.removeChild(row);
    });
    createGrid(gridSize);
}