import React, { useState, useEffect } from "react";
import axios from "axios";

const ZoneByVille = () => {
  const [zones, setZones] = useState([]);
  const [villes, setVilles] = useState([]);
  const [selectedVilleId, setSelectedVilleId] = useState("");

  useEffect(() => {
    axios.get("/api/villes/all").then((response) => {
      setVilles(response.data);
    });
  }, []);

  const handleCityChange = (event) => {
    const villeId = event.target.value;
    setSelectedVilleId(villeId);
    axios.get(`/api/zones/ville/${villeId}`).then((response) => {
      setZones(response.data);
    });
  };

  return (
    <div>
      <h2 className="text-center">Zone par ville</h2>
      <div className="form-group">
        <label htmlFor="villeId">Selectionner une ville:</label>
        <select
          className="form-control"
          id="villeId"
          value={selectedVilleId}
          onChange={handleCityChange}
        >
          <option value="">All cities</option>
          {villes.map((ville) => (
            <option key={ville.id} value={ville.id}>
              {ville.nom}
            </option>
          ))}
        </select>
      </div>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {zones.map((zone) => (
            <tr key={zone.id}>
              <td>{zone.nom}</td>
              <td>{zone.ville.nom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ZoneByVille;
