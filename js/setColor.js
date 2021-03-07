// add the `clicked` class to changed the color
const cellClicked = function (e) {

  // update the cell with a new <td>
  const td = document.createElement("td");
  td.className = "cell";

  // read from global state to start as prof suggested
  // TODO: [rfc] Alternative suggestions?
  td.style.background = selectedColor;
  e.target.outerHTML = td.outerHTML;
};
