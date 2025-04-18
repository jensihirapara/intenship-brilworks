import React, { useState } from 'react';
import './App.css';

function App() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddRecord = (e) => {
    e.preventDefault();
    if (formData.name && formData.age) {
      setRecords([...records, formData]);
      setFormData({ name: '', age: '' });
      setShowModal(false); // close the modal after adding
    }
  };

  return (
    <div className="center-wrapper">
      <h2>Record Entry</h2>
      <button onClick={() => setShowModal(true)}>+ Add Record</button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add Record</h3>
            <form onSubmit={handleAddRecord}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />
              <div className="modal-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <h3>Records Table</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr><td colSpan="3" style={{ textAlign: 'center' }}>No records</td></tr>
          ) : (
            records.map((record, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{record.name}</td>
                <td>{record.age}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
