const handleRemoveColumn = () => {
  const rowList = Array.from(document.getElementsByTagName("tr"))
  for (const row of rowList) {
    if(row.children.length === 1){
      // Last column, remove tr elements as well
      row.remove()
      continue
    }
    if (row.children.length > 0) {
      row.children[row.children.length - 1].remove();
    }
  }
};
