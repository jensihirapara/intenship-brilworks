import React, { useState } from "react";

const locationData = {
  India: {
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  },
  USA: {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
  },
};

export default function LocationForm({ onSubmit }) {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [locationName, setLocationName] = useState("");
  const [description, setDescription] = useState("");

  const states = country ? Object.keys(locationData[country]) : [];
  const cities = country && state ? locationData[country][state] : [];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLocation = {
      locationName,
      description,
      country,
      state,
      city,
    };

    if (onSubmit) {
      onSubmit(newLocation);
    }

    // Clear form after submit
    setLocationName("");
    setDescription("");
    setCountry("");
    setState("");
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="location-form">
      <h2>Add Location</h2>

      <label>Location Name:</label>
      <input
        type="text"
        value={locationName}
        onChange={(e) => setLocationName(e.target.value)}
        required
      />

      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={3}
      />

      <label>Country:</label>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setState("");
          setCity("");
        }}
        required
      >
        <option value="">-- Select Country --</option>
        {Object.keys(locationData).map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <label>State:</label>
      <select
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          setCity("");
        }}
        required
        disabled={!country}
      >
        <option value="">-- Select State --</option>
        {states.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <label>City:</label>
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
        disabled={!state}
      >
        <option value="">-- Select City --</option>
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
