// defining input fields
let nameInput = document.getElementById("NI");
let timeInput = document.getElementById("TI");
let dateInput = document.getElementById("DI");
let taskInputButton = document.getElementById("taskIB");
let section = document.getElementById("section");

taskInputButton.addEventListener("click", function() {
    // Create a new table
    let table = document.createElement("table");
    table.id = "mainTableBody";
    section.appendChild(table);
    
    // Create a new table row
    let tableRow = document.createElement("tr");
    tableRow.id = "tableRow";
    table.appendChild(tableRow);

    // Create table columns and add them to the row
    for (let i = 0; i < 3; i++) {
        let tableColumn = document.createElement("td"); // Use "td" for table cells
        tableColumn.id = `tableColumn${i + 1}`;
        switch (i) {
            case 0:
                tableColumn.textContent = `${nameInput.value}`;
                break;
            case 1:
                tableColumn.textContent = `${timeInput.value}`;
                break;
            case 2:
                tableColumn.textContent = `${dateInput.value}`;
                break;
        }
        tableRow.appendChild(tableColumn);
    }
});
