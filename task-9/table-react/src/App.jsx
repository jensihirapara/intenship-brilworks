import React, { useState } from 'react';
import './App.css';

function App() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddRecord = (e) => {
    e.preventDefault();
    if (formData.name && formData.age) {
      setRecords([...records, formData]);
      setFormData({ name: '', age: '' });
    }
  };

  return (
    <div className="center-wrapper">
      <h2>Record Entry</h2>
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
        <button type="submit">Add Record</button>
      </form>

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
