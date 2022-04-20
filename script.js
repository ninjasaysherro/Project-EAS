const black = document.querySelector("#Black");
const rgb = document.querySelector("#Rainbow");
const newSize = document.querySelector("#changeSize");
const reset = document.querySelector("#reset")
const maxWidth = 400;

window.addEventListener('load', makeBlocks);

let size = 20;

function makeBlocks() {
    for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.className = "row";
    for (let j = 0; j < size; j++) {
        let cell = document.createElement('div');
        cell.className = "cell";
        row.appendChild(cell);
    }
    document.getElementById('canvas').appendChild(row);
    canvas.addEventListener("mouseover", colorBlack);
    let boxes = document.getElementsByClassName("cell");
    for (k = 0; k < boxes.length; k++) {
        boxes[k].style.width = maxWidth / size;
        boxes[k].style.height = maxWidth / size;
        }
    }
}

function colorBlack() {
    let cells = document.getElementById('canvas');
        cells.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = '#000000';
    })
}

newSize.addEventListener('click', changeSize);

function changeSize() {
    let newSize = prompt('What size would you like? Choose between 1-64');
    let value = parseInt(newSize);
    if (value > 1 && value <= 64) {
        size = newSize;
        clearGrid();
        makeBlocks();
    }
}

function clearGrid() {
    const array = Array.from(canvas.childNodes);
    array.forEach((element) => {
        canvas.removeChild(element);
    });
}

function resetBoard() {
    reset.addEventListener('click', () => 
    location.reload());
}
resetBoard();