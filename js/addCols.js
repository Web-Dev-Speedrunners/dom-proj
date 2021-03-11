const createCell = () => {
  let cell = document.createElement("td");
  cell.style.background = initial.colorStyle;
  cell.classList += "cell";
  cell.addEventListener("click", cellClicked);
  return cell;
};

const addCols = function () {
  let rows = document.getElementsByTagName("tr");
  if (rows.length) {
    for (let i = 0; i < rows.length; ++i) {
      rows[i].appendChild(createCell());
    }
  } else {
    const {
      gridDims: { rows },
    } = initial;
    populateGrid("grid", { cols: 1, rows });
  }
};
