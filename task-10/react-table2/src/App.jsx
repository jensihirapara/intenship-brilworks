import React, { useMemo, useState, useEffect } from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";
import "./App.css";
import AddOrUpdateModal from "./components/AddOrUpdateModal";

const initialData = [
  { id: 1, name: "isha", age: 25 },
  { id: 2, name: "kesha", age: 30 },
  { id: 3, name: "Rakesh", age: 22 },
  { id: 4, name: "Rishbh", age: 23 },
  { id: 5, name: "lata", age: 29 },
  { id: 6, name: "Rakhi", age: 30 },
  { id: 7, name: "ishita", age: 25 },
  { id: 8, name: "megha", age: 30 },
  { id: 9, name: "rutva", age: 22 },
  { id: 10, name: "jensi", age: 23 },
  { id: 11, name: "krishna", age: 29 },
  { id: 12, name: "rashmi", age: 30 },
  { id: 13, name: "riya", age: 25 },
  { id: 14, name: "daya", age: 30 },
  { id: 15, name: "akta", age: 22 },
  { id: 16, name: "kritika", age: 23 },
  { id: 17, name: "stuti", age: 29 },
  { id: 18, name: "rudra", age: 30 },
  { id: 19, name: "krish", age: 25 },
  { id: 20, name: "brinjal", age: 22 },
  { id: 21, name: "brij", age: 23 },
  { id: 22, name: "bulbul", age: 29 },
  { id: 23, name: "yesha", age: 30 },
];

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <input
      value={globalFilter || ""}
      onChange={(e) => setGlobalFilter(e.target.value)}
      placeholder=" Search..."
      className="search-input"
    />
  );
}

export default function App() {
  const [data, setData] = useState(initialData);
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    age: "",
  });
  const [itemPerPage, setItemPerPage] = useState(6);
  const [viewRecord, setViewRecord] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const columns = useMemo(
    () => [
      { Header: "sr no", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Age", accessor: "age" },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <>
            <button
              className="btn btn-view"
              onClick={() => {
                setViewRecord(true);
                handleViewRecord(row.original);
              }}
            >
              View
            </button>{" "}
            <button
              className="btn btn-edit"
              onClick={() => handleEdit(row.original)}
            >
              Edit
            </button>{" "}
            <button
              className="btn btn-delete"
              onClick={() => handleDelete(row.original.id)}
            >
              Delete
            </button>
          </>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    state: { globalFilter, pageIndex },
    gotoPage,
    pageCount,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
  } = useTable(
    { columns, data, initialState: { pageSize: itemPerPage } },
    useGlobalFilter,
    usePagination
  );

  useEffect(() => {
    setPageSize(itemPerPage);
  }, [itemPerPage, setPageSize]);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (row) => {
    setEditFormData({ id: row.id, name: row.name, age: row.age });
    setShowModal(true);
  };

  const handleViewRecord = (row) => {
    setEditFormData({ id: row.id, name: row.name, age: row.age });
    setShowModal(true);
  };

  const handleUpdateData = () => {
    const updated = data.map((item) =>
      item.id === editFormData.id ? { ...item, ...editFormData } : item
    );
    setData(updated);
    setShowModal(false);
  };

  const handleAddRecord = () => {
    if (!editFormData.name || !editFormData.age) {
      alert("Please enter both name and age!");
      return;
    }

    const newRecord = {
      id: data.length ? Math.max(...data.map((d) => d.id)) + 1 : 1,
      name: editFormData.name,
      age: Number(editFormData.age),
    };

    setData([...data, newRecord]);
    setEditFormData({ id: "", name: "", age: "" });
    setShowModal(false);
  };

  return (
    <div className="App">
      <h2>React Table</h2>

      <button className="btn btn-add" onClick={() => setShowModal(true)}>
        Add Record
      </button>
      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.length > 0 ? (
            page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>no data find</tr>
          )}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          First
        </button>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          Prev
        </button>
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            onClick={() => gotoPage(i)}
            className={pageIndex === i ? "active-page" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          Last
        </button>
      </div>
      {/* Pagination size dropdown */}
      <div className="controls">
        <label htmlFor="rowsPerPage">Rows per page: </label>
        <select
          id="rowsPerPage"
          value={itemPerPage}
          onChange={(e) => setItemPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      <AddOrUpdateModal
        open={showModal}
        viewRecord={viewRecord}
        close={() => {
          setShowModal(false);
          setViewRecord(false);
          setEditFormData({ id: "", name: "", age: "" });
        }}
        formData={editFormData}
        setFormData={setEditFormData}
        handleSubmitRecord={
          editFormData.id ? handleUpdateData : handleAddRecord
        }
      />
    </div>
  );
}
