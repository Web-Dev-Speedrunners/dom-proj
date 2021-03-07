const clearAll = function () {
    let cells = document.getElementsByClassName('cell');
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = initial.colorStyle;
    }
}