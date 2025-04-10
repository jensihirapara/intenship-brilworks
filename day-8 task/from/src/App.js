import React, { useState } from "react";
import "./App.css";

function App() {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [localStorageData, setLocalStorageData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the page from reloading
    console.log("Form submitted");
    localStorage.setItem("name", formData?.name);
    localStorage.setItem("email", formData?.email);
    setLocalStorageData({
      name: localStorage.getItem("name"),
      email:localStorage.getItem("email")
    })
    setFormData({
      name: "",
      email: "",
    })
  };

  // const getName = () => localStorage.getItem("name");
  // const getEmail = () => localStorage.getItem("email");
  // console.log(getName(),getEmail())

  return (
    <div className="App">
      <h1>Basic Form in React</h1>

      {/* Display the form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} // Update name state on input change
          />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            } // Update email state on input change
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* {submitted && ( */}
        <div>
          <h2>Form Submitted</h2>
          <p>Name: {localStorageData.name}</p>
          <p>Email: {localStorageData.email}</p>
        </div>
      {/* )} */}
    </div>
  );
}

export default App;
