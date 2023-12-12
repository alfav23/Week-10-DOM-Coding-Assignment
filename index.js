// create a variable to hold the table created in html with an id of the same name
let tableBody = document.getElementById("tableBody")
document.getElementById("submitButton").addEventListener("click", (event) => {
    // added a prevent default to stop the page from refreshing
    event.preventDefault()
    buttonClicked()})

// function to add input info to table when submit button is clicked
function buttonClicked() {
    let newRow = document.createElement("tr");

    let nameInput = document.createElement("td");
    let nameValue = document.getElementById("name").value;
    nameInput.textContent = nameValue;
    
    let colorInput = document.createElement("td");
    let colorValue = document.getElementById("color").value;
    colorInput.textContent = colorValue;
    
                    // Adding a third cell to understand how to add a third cell
                        // let thirdCell = document.createElement("td");
                        // let thirdValue = "Third Cell";
                        // thirdCell.textContent = thirdValue;

    // appending inputs to row
    newRow.append(nameInput);
    newRow.append(colorInput);
    // newRow.append(thirdCell);
    
    tableBody.append(newRow);
};