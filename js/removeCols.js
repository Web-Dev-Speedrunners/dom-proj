const removeCols = function() {
   let removeCol = document.getElementsByClassName('cell');
   for(let i = 0; i < removeCol.length - 1; i++){
        removeCol[i].remove();  
    }
}


