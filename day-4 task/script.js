let editIndex = -1;

// Open the modal to add a location
function openAddModal() {
  document.getElementById('locationName').value = '';
  document.getElementById('locationAddress').value = '';
  document.getElementById('modalTitle').innerText = 'Add Location';
  document.getElementById('locationModal').style.display = 'block';
  document.getElementById('locationForm').onsubmit = addLocation;
}

// Close the modal
function closeModal() {
  document.getElementById('locationModal').style.display = 'none';
}

// Open the modal to view a location
function viewLocation(index) {
  const row = document.querySelectorAll('#locationTable tbody tr')[index];
  const name = row.cells[0].innerText;
  const address = row.cells[1].innerText;

  document.getElementById('locationName').value = name;
  document.getElementById('locationAddress').value = address;

  document.getElementById('modalTitle').innerText = 'View Location';
  document.getElementById('locationModal').style.display = 'block';
  document.getElementById('locationForm').onsubmit = function(e) { e.preventDefault(); };
}

// Add a new location to the table
function addLocation(e) {
  e.preventDefault();

  const name = document.getElementById('locationName').value;
  const address = document.getElementById('locationAddress').value;

  const table = document.getElementById('locationTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  const nameCell = newRow.insertCell(0);
  const addressCell = newRow.insertCell(1);
  const actionCell = newRow.insertCell(2);

  nameCell.textContent = name;
  addressCell.textContent = address;

  actionCell.innerHTML = `
    <button onclick="viewLocation(${table.rows.length - 1})">View</button>
    <button onclick="openDeleteConfirmModal(${table.rows.length - 1})">Delete</button>
  `;

  closeModal();
}

// Open the delete confirmation modal
function openDeleteConfirmModal(index) {
  editIndex = index;
  document.getElementById('deleteConfirmModal').style.display = 'block';
}

// Close the delete confirmation modal
function closeDeleteConfirmModal() {
  document.getElementById('deleteConfirmModal').style.display = 'none';
}

// Confirm deletion and remove the record
function confirmDelete() {
  const table = document.getElementById('locationTable').getElementsByTagName('tbody')[0];
  table.deleteRow(editIndex);
  closeDeleteConfirmModal();
}