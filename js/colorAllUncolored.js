const colorAllUncolored = function () {
    const colorWell = document.getElementById('colorWell');
    let cells = document.getElementsByClassName('cell');
    for(let i = 0; i < cells.length; i++){
        origColor = cells[i].style.backgroundColor;
        cells[i].style.backgroundColor = origColor == initial.colorStyle? colorWell.value : origColor;
    }
}