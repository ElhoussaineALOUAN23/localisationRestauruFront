import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


  const Ville = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post("/api/villes/save", { name }).then(() => {
        navigate("/");
      });
    };
  return (
    <div>
      <h2>Liste des villes</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default Ville;
