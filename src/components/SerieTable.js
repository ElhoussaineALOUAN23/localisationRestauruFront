import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SerieTable = () => {
  const [series, setCities] = useState([]);

  useEffect(() => {
    axios.get("/api/series/all").then((response) => {
      setCities(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      axios.delete(`/api/series/${id}`).then(() => {
        setCities(series.filter((serie) => serie.id !== id));
      });
    }
  };

  const handleEdit = (id) => {
    const newName = window.prompt("Enter the new name for this city:");
    if (newName) {
      axios.put(`/api/series/update`, {nom:newName }).then(() => {
        setCities(series.map((serie) => {
          if (serie.id === id) {
            return { ...serie, nom: newName };
          }
          return serie;
        }));
      });
    }
  };

  return (
    <div>
      <h2 className="table mt-5 text-center">Liste des series</h2>
      <Link to="/ajouter-serie" className="btn btn-primary ">
        Create serie
      </Link>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {series.map((serie) => (
            <tr key={serie.id}>
              <td>{serie.id}</td>
              <td>{serie.nom}</td>
              <td>
                <button className="btn btn-outline-danger "   onClick={() => handleDelete(serie.id)}>
                 Supprimer
                  
                </button>
                {'   '} 
                <button className="btn btn-outline-primary ml-2" onClick={() => handleEdit(serie.id)}>
                 Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default SerieTable;
