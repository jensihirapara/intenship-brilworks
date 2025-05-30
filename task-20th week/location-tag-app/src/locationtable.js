import React from "react";
import "./LocationTable.css";

export default function LocationTable({ locations, onTagAssign, selectedIds, onCheckboxChange, onBulkAssign }) {
  return (
    <div className="location-table-container">
      <h2>Location List</h2>
      {locations.length === 0 ? (
        <p className="no-locations-text">No locations added yet.</p>
      ) : (
        <>
          <button
            className="assign-tag-button"
            onClick={onBulkAssign}
            disabled={selectedIds.length === 0}
            style={{ marginBottom: "10px" }}
          >
            Assign Tag to Selected
          </button>

          <table className="location-table">
            <thead>
              <tr>
                <th></th>
                <th>Location</th>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Description</th>
                <th>Tag</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((loc) => (
                <tr key={loc._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(loc._id)}
                      onChange={() => onCheckboxChange(loc._id)}
                    />
                  </td>
                  <td>{loc.locationName}</td>
                  <td>{loc.country}</td>
                  <td>{loc.state}</td>
                  <td>{loc.city}</td>
                  <td>{loc.description}</td>
                  <td>{loc.tag || "No tag"}</td>
                  <td>
                    <button
                      className="assign-tag-button"
                      onClick={() => onTagAssign(loc._id)}
                    >
                      Assign Tag
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
