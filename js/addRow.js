const totalColumnToAdd = () => {
  const tableRow = document.getElementsByTagName("tr")[0]
  if(tableRow){
    const childrenCount = tableRow.children.length
    return childrenCount === 0 ? initial.gridDims.cols : childrenCount
  }
  return initial.gridDims.cols
}

const getTableBody = () => {
  const tbodyEntries = document.getElementsByTagName('tbody')
  if(tbodyEntries.length === 0) return
  return tbodyEntries[0]
}

const buildRow = (cellCount) => {
  const tableRow = document.createElement("tr")
  for(let cell = 0 ; cell < cellCount ; cell++){
    // This could could be reusable but oh well
    const tableCell = document.createElement("td")
    tableCell.classList = "cell"
    tableCell.style.backgroundColor = initial.colorStyle
    tableRow.appendChild(tableCell)
  }
  return tableRow
}

const handleAddRow = () => {
  const colCount = totalColumnToAdd()
  console.log(colCount)
  const rowNode = buildRow(colCount)
  const tablebody = getTableBody()
  tablebody.appendChild(rowNode)
}