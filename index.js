// variables to hold info from html for use later and to style elements
let colorTable = document.getElementById("colorTable")
colorTable.style.border = '1px solid white'
let tableBody = document.getElementById("tableBody")
tableBody.style.border ='1px solid white'
let tableHeader1 = document.getElementById('tableHeader1')
tableHeader1.style.border = '1px solid white'
let tableHeader2 = document.getElementById('tableHeader2')
tableHeader2.style.border = '1px solid white'
// giving mainHeader from html a variable of same name styling to be white until event (mousemove)
let mainHeader = document.getElementById('mainHeader')
mainHeader.style.color = 'white'
// creating an event listener that generates a random color for the header every time the mouse goes over it
mainHeader.addEventListener("mousemove", () =>{
    mainHeader.style.color=
    `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
});

console.log(mainHeader)
// event listener to run buttonClicked function when submit button is clicked by user
document.getElementById("submitButton").addEventListener("click", (event) => {
    // added a prevent default to stop the page from refreshing
    event.preventDefault()
    buttonClicked()})

// function to add input info to table when submit button is clicked
function buttonClicked() {
    let newRow = document.createElement("tr");

    let nameInput = document.createElement("td");
    nameInput.style.border='1px solid white'
    let nameValue = document.getElementById("name").value;
    nameInput.textContent = nameValue;
    
    let colorInput = document.createElement("td");
    colorInput.style.border = '1px solid white'
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