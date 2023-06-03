import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Serie = () => {
  const [name, setName] = useState("");
  const [serieId, setserieId] = useState("");
  const [series, setSeries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/Series/all").then((response) => {
      setSeries(response.data);
    });
  }, []);

  const handleSubmite = (event) => {
    event.preventDefault();
    axios
      .post("/api/Series/save", {
        name,
        Series: {
          id: serieId
        }
      })
      .then((response) => {
        setName("");
        setserieId("");
        navigate("/Serie");
      });
  };

  return (
    <div>
      <h2>Liste des Series</h2>
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

export default Serie;
