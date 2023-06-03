import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VilleTable = () => {
  const [villes, setCities] = useState([]);

  useEffect(() => {
    axios.get("/api/villes/all").then((response) => {
      setCities(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      axios.delete(`/api/villes/${id}`).then(() => {
        setCities(villes.filter((ville) => ville.id !== id));
      });
    }
  };

  const handleEdit = (id) => {
    const newName = window.prompt("Enter the new name for this city:");
    if (newName) {
      axios.put(`/api/villes/${id}`, {nom:newName }).then(() => {
        setCities(villes.map((ville) => {
          if (ville.id === id) {
            return { ...ville, nom: newName };
          }
          return ville;
        }));
      });
    }
  };

  return (
    <div>
      <h2 className="table mt-5 text-center">Liste des villes</h2>
      <Link to={"/ajouter-ville"} className="btn btn-primary ">
        Create City
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
          {villes.map((ville) => (
            <tr key={ville.id}>
              <td>{ville.id}</td>
              <td>{ville.nom}</td>
              <td>
                <button className="btn btn-outline-danger "   onClick={() => handleDelete(ville.id)}>
                 Supprimer
                  
                </button>
                {'   '} 
                <button className="btn btn-outline-primary ml-2" onClick={() => handleEdit(ville.id)}>
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

export default VilleTable;
