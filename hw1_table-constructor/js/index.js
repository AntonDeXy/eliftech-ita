class TableConstructor {
  constructor(rowsCount = 1, columnsCount = 1) {
    this.rowsCount = rowsCount
    this.columnsCount = columnsCount
  }
  createTable() {
    const table = document.createElement('table')

    const rowsCount = this.rowsCount
    const columnsCount = this.columnsCount

    const tableRows = []

    const onClickHandler = (num) => {
      console.log(num)
    }

    for (let i = 0; i < rowsCount; i++) {
      let tempRow = ''

      for (let j = 0; j < columnsCount; j++) {
        const num = i * columnsCount + (j + 1)
        tempRow += `<td onClick="onClickHandler(${num})" >${num}</td>`
      }
      tableRows.push(`<tr>${tempRow}</tr>`)
    }

    const tableData = document.createElement('tbody')
    tableData.innerHTML = tableRows.join('')
    table.appendChild(tableData)
    this.table = table
  }
  innerTable(wrapper) {
    this.createTable()
    wrapper.appendChild(this.table)
  }
}

const newTable = new TableConstructor(5, 5)
const tableWrapper = document.querySelector('.table-wrapper')

newTable.innerTable(tableWrapper)
