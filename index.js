// create a variable to hold the table created in html with an id of the same name
let dataTable = document.getElementById("dataTable")
// start styling table which was created using bootstrap table

let newRow = document.createElement('tr')
let nameInput = document.createElement('td')
nameInput.append(document.getElementsByName('name'))
console.log(nameInput)
let colorInput = document.createElement('td')
colorInput.append(document.getElementsByName('color'))
console.log(colorInput)
newRow.append(nameInput)
newRow.append(colorInput)
console.log(newRow)
const submitButton = document.getElementById("submitButton")
submitButton.addEventListener('click', () => {
    dataTable.append(newRow)
})