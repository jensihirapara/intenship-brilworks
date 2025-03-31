// Sample data with more locations added
const locations = [
    { locationName: "Los Angeles", locationDescription: "City of Angels", status: "active" },
    { locationName: "Mumbai", locationDescription: "Financial Capital", status: "inactive" },
    { locationName: "Delhi", locationDescription: "Political Capital", status: "active" },
    { locationName: "Kolkata", locationDescription: "Cultural Capital", status: "inactive" },
    { locationName: "Surat", locationDescription: "Diamond City", status: "active" },
    { locationName: "Pune", locationDescription: "Deccan Queen", status: "inactive" },
    { locationName: "Chandigarh", locationDescription: "City Beautiful", status: "active" },
    { locationName: "Darjeeling", locationDescription: "Queen of the Hills", status: "inactive" },
    { locationName: "Coorg", locationDescription: "Scotland of India", status: "active" },
    { locationName: "Jamshedpur", locationDescription: "Steel City", status: "inactive" },
    { locationName: "Goa", locationDescription: "Beaches", status: "active" },
    { locationName: "Bangalore", locationDescription: "Silicon Valley of India", status: "inactive" },
    { locationName: "Hyderabad", locationDescription: "City of Pearls", status: "active" },
    { locationName: "Chennai", locationDescription: "Gateway of South India", status: "inactive" },
    { locationName: "Ahmedabad", locationDescription: "City of Pols", status: "active" },
    { locationName: "Jaipur", locationDescription: "Pink City", status: "inactive" },
    { locationName: "Lucknow", locationDescription: "City of Nawabs", status: "active" },
    { locationName: "Patna", locationDescription: "Capital of Bihar", status: "inactive" },
    { locationName: "Indore", locationDescription: "Cleanest City", status: "active" },
    { locationName: "Bhubaneswar", locationDescription: "Temple City", status: "inactive" },
];

let currentPage = 1;
const recordsPerPage = 5; // Adjust number of records per page for testing
let filteredData = [...locations];

function renderTable(data) {
    const tableBody = document.querySelector("#locationTable tbody");
    tableBody.innerHTML = "";
    data.forEach((location) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${location.locationName}</td>
            <td>${location.locationDescription}</td>
            <td>${location.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

function paginateData(data) {
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    return data.slice(indexOfFirstRecord, indexOfLastRecord);
}

function updatePagination() {
    const totalPages = Math.ceil(filteredData.length / recordsPerPage);
    document.querySelector("#pageNumber").textContent = `Page ${currentPage}`;
    document.querySelector("#prevBtn").disabled = currentPage === 1;
    document.querySelector("#nextBtn").disabled = currentPage === totalPages;
}

function changePage(direction) {
    const totalPages = Math.ceil(filteredData.length / recordsPerPage);
    currentPage += direction;
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
    renderTable(paginateData(filteredData));
    updatePagination();
}

function filterTable() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const statusFilter = document.getElementById("statusFilter").value;

    filteredData = locations.filter((location) => {
        const nameMatches = location.locationName
            .toLowerCase()
            .includes(searchQuery);
        const descriptionMatches = location.locationDescription
            .toLowerCase()
            .includes(searchQuery);
        const statusMatches = statusFilter
            ? location.status === statusFilter
            : true;
        return (nameMatches || descriptionMatches) && statusMatches;
    });

    currentPage = 1;
    renderTable(paginateData(filteredData));
    updatePagination();
}

renderTable(paginateData(filteredData));
updatePagination();
