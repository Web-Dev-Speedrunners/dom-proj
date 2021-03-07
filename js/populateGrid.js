const tableCell = `<td class="cell"> </td>`;
const tr = (cells) => `<tr > ${cells} </tr>`;

// use array semantics to define an arbitrarily large array
const createGrid = (rowCount, colCount) =>
  Array(rowCount)
    .fill()
    .map(() => tr(Array(colCount).fill(tableCell).join(" ")))
    .join("");

//  create a grid of square cells
function populateGrid(gridId, gridDims) {
  // create table for use as grid
  const { rows, cols } = gridDims;
  const grid = createGrid(rows, cols);
  const board = `<table> <tbody> ${grid} </tbody> </table>`;

  // mutate dom with grid
  document.getElementById(gridId).innerHTML = board;

  // add event listener from "setColor.js" which defines `cellClicked`
  var cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.style.background = initial.colorStyle;
    cell.addEventListener("click", cellClicked);
  }
}
