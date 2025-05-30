import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationForm from "./locationform";
import LocationTable from "./locationtable";
import TagPopup from "./tag-popup";
import './styles.css';

function App() {
  const [locations, setLocations] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTagLocationId, setCurrentTagLocationId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]); // NEW

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/locations");
      setLocations(res.data);
    } catch (error) {
      console.error("Failed to fetch locations:", error);
    }
  };

  const handleAddLocation = async (newLocation) => {
    try {
      const res = await axios.post("http://localhost:5000/api/locations", newLocation);
      setLocations([...locations, res.data]);
    } catch (error) {
      console.error("Failed to add location:", error);
      alert("Failed to add location");
    }
  };

  const handleCheckboxChange = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleTagAssign = (id) => {
    setCurrentTagLocationId(id);
    setIsPopupOpen(true);
  };

  const handleMultiTagAssign = () => {
    if (selectedIds.length === 0) {
      alert("Select at least one location.");
      return;
    }
    setCurrentTagLocationId("multi");
    setIsPopupOpen(true);
  };

  const handleSaveTag = async (newTag) => {
    try {
      if (currentTagLocationId === "multi") {
        // Assign tag to multiple selected
        const updatedLocations = await Promise.all(
          selectedIds.map((id) =>
            axios.put(`http://localhost:5000/api/locations/${id}`, { tag: newTag })
          )
        );
        const updatedData = updatedLocations.map((res) => res.data);
        const updatedAll = locations.map((loc) =>
          selectedIds.includes(loc._id)
            ? updatedData.find((u) => u._id === loc._id) || loc
            : loc
        );
        setLocations(updatedAll);
        setSelectedIds([]);
      } else {
        // Single tag assign
        const res = await axios.put(
          `http://localhost:5000/api/locations/${currentTagLocationId}`,
          { tag: newTag }
        );
        setLocations(
          locations.map((loc) =>
            loc._id === currentTagLocationId ? res.data : loc
          )
        );
      }

      setIsPopupOpen(false);
      setCurrentTagLocationId(null);
    } catch (error) {
      console.error("Failed to update tag:", error);
      alert("Failed to update tag");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        Location Tagging App
      </h1>

      <LocationForm onSubmit={handleAddLocation} />

      <hr style={{ margin: "40px 0" }} />

      {/* <button onClick={handleMultiTagAssign} className="assign-multi-btn">
        Assign Tag to Selected
      </button> */}
   

      <LocationTable
        locations={locations}
        onTagAssign={handleTagAssign}
        selectedIds={selectedIds}
        onCheckboxChange={handleCheckboxChange}
        onBulkAssign={handleMultiTagAssign}
      />

      {isPopupOpen && (
        <TagPopup
          onClose={() => setIsPopupOpen(false)}
          onSave={handleSaveTag}
        />
      )}
    </div>
  );
}

export default App;
