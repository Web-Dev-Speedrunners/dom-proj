const colorAllCells = function () {
    const colorWell = document.getElementById('colorWell');
    let cells = document.getElementsByClassName('cell');
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = colorWell.value;
    }
}