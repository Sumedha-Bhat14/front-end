
import React, { useState } from "react";

function AddJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ title, company }); // later send to backend
  };

  return (
    <div>
      <h2>Add Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Job Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => setCompany(e.target.value)}
        />

        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default AddJob;