// TagPopup.js
import React, { useState } from "react";
import './TagPopup.css';

export default function TagPopup({ onClose, onSave }) {
  const [tag, setTag] = useState("");

  const handleSave = () => {
    if (tag.trim() === "") {
      alert("Please enter a tag");
      return;
    }
    onSave(tag);
  };

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup-modal">
        <h3>Assign Tag</h3>
        <input
          type="text"
          placeholder="Enter tag..."
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          autoFocus
        />
        <div className="popup-buttons">
          <button onClick={handleSave} className="save-btn">Save</button>
          <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </>
  );
}
