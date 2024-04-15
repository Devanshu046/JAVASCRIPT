let title = document.getElementById("title");
let disc = document.getElementById("description");
let doDiv = document.getElementById("todoData");

let submitBtn = document.getElementById("sumbit-btn");

submitBtn.addEventListener("click", genForm);

let newDiv = document.createElement("div");
doDiv.appendChild(newDiv);
let table = document.createElement("table");
let tbody = document.createElement("tbody");
let thead = document.createElement("thead");
let row = document.createElement("tr");

let col1 = document.createElement("th");
col1.innerHTML = "title";
let col2 = document.createElement("th");
col2.innerHTML = "description";

doDiv.appendChild(table);
table.appendChild(tbody);
table.appendChild(thead);
thead.appendChild(row);

function genForm() {
  let newRow = document.createElement("tr");
  let newCol1 = document.createElement("td");
  newCol1.innerHTML = title.value;
  let newCol2 = document.createElement("td");
  newCol2.innerHTML = disc.value;

  row.appendChild(col1);
  row.appendChild(col2);
  tbody.appendChild(newRow);
  newRow.appendChild(newCol1);
  newRow.appendChild(newCol2);
}
