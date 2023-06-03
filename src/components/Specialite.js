import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Specialite = () => {
  const [name, setName] = useState("");
  const [specialiteId, setSpecialiteId] = useState("");
  const [specialites, setSpecialites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/specialites/all").then((response) => {
      setSpecialites(response.data);
    });
  }, []);

  const handleSubmite = (event) => {
    event.preventDefault();
    axios
      .post("/api/specialites/save", {
        name,
        specialites: {
          id: specialiteId
        }
      })
      .then((response) => {
        setName("");
        setSpecialiteId("");
        navigate("/specialite");
      });
  };

  return (
    <div>
      <h2>Liste des specialites</h2>
      <form onSubmit={handleSubmite}>
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

export default Specialite;
