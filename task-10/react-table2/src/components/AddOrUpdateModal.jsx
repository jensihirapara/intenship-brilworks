import React from "react";

const AddOrUpdateModal = ({
  open,
  close,
  viewRecord,
  formData,
  setFormData,
  handleSubmitRecord,
}) => {
  return open ? (
    <div className="modal-overlay">
      <div className="modal">
        <h3 style={{ color: "Black" }}>
          {" "}
          {formData.id && !viewRecord
            ? "Update Record"
            : viewRecord
            ? "View Record"
            : "Add New Record"}
        </h3>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={viewRecord}
        />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          disabled={viewRecord}
        />
        <div className="modal-buttons">
          <button className="btn btn-cancel" onClick={() => close(false)}>
            Cancel
          </button>

          {!viewRecord && (
            <button className="btn btn-save" onClick={handleSubmitRecord}>
              {formData.id ? "Update" : "Save"}
            </button>
          )}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default AddOrUpdateModal;
