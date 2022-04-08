const button = document.querySelectorAll('button');
const erase = document.getElementById('clearGrid');
const canvas = document.getElementById('canvas');
const rows = document.getElementsByClassName('gridRow');
const cells = document.getElementsByClassName('cell');

button.forEach(button => {
    button.addEventListener('click', function() {
        const selection = button.dataset.selection;
        addGrid(selection)
    })
})

//work on this tomorrow
canvas.addEventListener("onmouseover", e => {
    canvas.style.backgroundColor = 'black';l
})

function addGrid(x) {
    makeRows(x);
    makeColumns(x);
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        canvas.appendChild(row).className = "gridRow";
    }
}

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        }
    }
}