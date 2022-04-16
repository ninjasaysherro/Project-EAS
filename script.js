const button = document.querySelectorAll('button');
const erase = document.getElementById('clearGrid');
const canvas = document.getElementById('canvas');
const rows = document.getElementsByClassName('row');
const cell = document.getElementsByClassName('cell');

function addGrid(x) {
    makeRows(x);
    makeColumns(x);
}

button.forEach(button => {
    button.addEventListener('click', function() {
        const selection = button.dataset.selection;
        addGrid(selection)
    })
})

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        canvas.appendChild(row).className = "row";
        row.setAttribute('id', 'row')
    }
}

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
            newCell.setAttribute('id', 'cells')
        }
    }
}

addGrid(16);

function changeStyle() {
    for (let i = 0; i < cell.length; i++) {
        let cells = document.getElementById('canvas');
            cells.addEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = '#000000';
            }
        )}
    }

changeStyle()