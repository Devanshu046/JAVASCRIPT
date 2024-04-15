let btnSubmit = document.getElementById("btn-submit");
let dataDiv = document.querySelector("div");
let first = document.getElementById("first");
let last = document.getElementById("last");
let email = document.getElementById("email");
let number = document.getElementById("number");

btnSubmit.addEventListener("click", form);

let a = document.createElement("div");
dataDiv.appendChild(a);
let table = document.createElement("table");
let tbody = document.createElement("tbody");
let thead = document.createElement("thead");
let row = document.createElement("tr");

let column1 = document.createElement("th");
column1.innerHTML = "First Name ";

let column2 = document.createElement("th");
column2.innerHTML = "last Name";

let column3 = document.createElement("th");
column3.innerHTML = "email";

let column4 = document.createElement("th");
column4.innerHTML = "number";

dataDiv.appendChild(table);
table.appendChild(tbody);
table.appendChild(thead);
thead.appendChild(row);

function form() {
  let rows = document.createElement("tr");
  let columns1 = document.createElement("td");
  columns1.innerHTML = first.value;
  let columns2 = document.createElement("td");
  columns2.innerHTML = last.value;
  let columns3 = document.createElement("td");
  columns3.innerHTML = email.value;
  let columns4 = document.createElement("td");
  columns4.innerHTML = number.value;

  row.appendChild(column1);
  row.appendChild(column2);
  row.appendChild(column3);
  row.appendChild(column4);
  tbody.appendChild(rows);
  rows.appendChild(columns1);
  rows.appendChild(columns2);
  rows.appendChild(columns3);
  rows.appendChild(columns4);
}
