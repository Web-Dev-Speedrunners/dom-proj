const colorAllCells = function () {
    const colorWell = document.getElementById('colorWell');
    let cells = document.getElementsByClassName('cell');
    
    if(cells.length == 0){
        console.log('Unable to find cells');
        return;
    }
    
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = colorWell.value;
    }
}