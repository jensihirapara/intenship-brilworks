let editingIndex = null; 
function openModal(index = null) {
  const modal = document.getElementById("popupModal");
  const submitButton = document.getElementById("submitButton");

  if (index !== null) {
    
    editingIndex = index;
    document.getElementById("modalTitle").innerText = "Edit Record";
    submitButton.innerText = "Save";

    
    const row = document.getElementById("data-table").rows[index + 1];
    document.getElementById("nameInput").value = row.cells[0].innerText;
    document.getElementById("emailInput").value = row.cells[1].innerText;
  } else {
    
    editingIndex = null;
    document.getElementById("modalTitle").innerText = "Add Record";
    submitButton.innerText = "Add";
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("popupModal").style.display = "none";
}

function saveRecord() {

  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value;
  
  const data = localStorage.getItem("formData");

  const jsonDataList = data ? JSON.parse(data):[];
  const newObj = {name,email};
  jsonDataList.push(newObj)


 
  const table = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];

  if (editingIndex !== null) {
   
    const row = table.rows[editingIndex];
    row.cells[0].innerText = name;
    row.cells[1].innerText = email;
  } else {
   
    const newRow = table.insertRow();
    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = email;

    const actionsCell = newRow.insertCell(2);
    actionsCell.innerHTML = `
              <button onclick="openModal(${
                table.rows.length - 1
              })">Edit</button>
              <button onclick="deleteRecord(this)">Delete</button>
          `;
  }
  localStorage.setItem("formData",JSON.stringify(jsonDataList));
  closeModal();
}

function deleteRecord(key) {
  console.log(key);
  // const row = button.parentNode.parentNode;
  ///row.parentNode.removeChild(row);

  
}

function loadSetUpData(button) {
  const data = localStorage.getItem("formData");
  console.log("Data00",data);
  const jsonData= data?JSON.parse(data):[];
  console.log("jsonData",jsonData);

for(var i = 0;i <=jsonData.length; i++){
  console.log(jsonData[i], "Value of i", i)

  const name = jsonData[i].name;
  const email = jsonData[i].email;
  const table = document
  .getElementById("data-table")
  .getElementsByTagName("tbody")[0];

if (editingIndex !== null) {
 
  const row = table.rows[editingIndex];
  row.cells[0].innerText = name;
  row.cells[1].innerText = email;
} else {
 
  const newRow = table.insertRow();
  newRow.insertCell(0).innerText = name;
  newRow.insertCell(1).innerText = email;

  const actionsCell = newRow.insertCell(2);
  actionsCell.innerHTML = `
            <button onclick="openModal(${
              table.rows.length - 1
            })">Edit</button>
            <button onclick="deleteRecord(${i})">Delete</button>
        `;
}
}


 
}
this.loadSetUpData();

function deleteRow(key){
  console.log(key)
  // localStorage.removeItem(key)
}